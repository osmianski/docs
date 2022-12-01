<?php

namespace App\Jobs;

use App\Enums\OnNotionRateLimit;
use App\Exceptions\NotImplemented;
use App\Models\NotionPage;
use App\Models\NotionWorkspace;
use App\NotionClient;
use Illuminate\Bus\Queueable;
use Illuminate\Console\OutputStyle;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Symfony\Component\Console\Cursor;

class SyncNotionWorkspace implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected const LIMIT = 100;
    /**
     * A workspace to sync
     * @var NotionWorkspace
     */
    public NotionWorkspace $workspace;

    /**
     * Force a full re-sync instead of incremental sync
     *
     * @var bool
     */
    public bool $fullSync;

    /**
     * Specifies what happens if Notion rate-limits us
     *
     * @var OnNotionRateLimit
     */
    public OnNotionRateLimit $onNotionRateLimit;

    /**
     * Console output. Only provided if it runs in console
     *
     * @var ?OutputStyle
     */
    public ?OutputStyle $output;

    public NotionClient $client;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(NotionWorkspace $workspace,
        OutputStyle $output = null,
        bool $fullSync = false,
        OnNotionRateLimit $onNotionRateLimit = OnNotionRateLimit::Queue)
    {
        $this->workspace = $workspace;
        $this->fullSync = $fullSync;
        $this->onNotionRateLimit = $onNotionRateLimit;
        $this->output = $output;

        $this->client = $this->workspace->client();
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle() {
        $this->download();
        $this->assignParentId();
    }

    protected function download()
    {
        $message = "Syncing '{$this->workspace->title}' workspace " .
            "on behalf of '{$this->workspace->user->name}' ...";

        $this->output?->writeln($message);

        $cursor = $this->output
            ? new Cursor($this->output->getOutput())
            : null;

        $data = $this->client->search(limit: static::LIMIT);
        $count = count($data->results);

        while (true) {
            foreach ($data->results as $pageData) {
                $this->save($pageData);
            }

            $cursor?->moveUp();
            $cursor?->clearLine();
            $this->output?->writeln("{$message} {$count} page(s) saved.");

            if (!$data->has_more) {
                break;
            }

            $data = $this->client->search(cursor: $data->next_cursor,
                limit: static::LIMIT);
            $count += count($data->results);
        }
    }

    protected function save(\stdClass $data): void
    {
        if (!($page = NotionPage::whereWorkspaceId($this->workspace->id)
            ->whereUuid($data->id)->first()))
        {
            $page = new NotionPage();

            $page->workspace_id = $this->workspace->id;
            $page->uuid = $data->id;
        }

        $page->data = json_encode($data);

        $page->type = $data->object;
        $page->title = match($page->type) {
            'page' => ($title = $this->pageTitle($data))
                ? mb_substr($title, 0, 256)
                : null,
            'database' => mb_substr($this->title($data), 0, 256),
            default => null,
        };
        $page->parent_uuid = in_array($data->parent?->type, ['database_id', 'page_id'])
            ? $data->parent?->{$data->parent?->type}
            : null;

        $page->save();
    }

    protected function assignParentId()
    {
        NotionPage::whereWorkspaceId($this->workspace->id)
            ->with('parentByUuid:id,uuid')
            ->lazyById()
            ->each(function(NotionPage $page) {
                $page->parent_id = $page->parentByUuid?->id;
                $page->save();
            });
    }

    protected function pageTitle(\stdClass $data): ?string
    {
        foreach ($data->properties as $property) {
            if ($property->type === 'title') {
                return $this->title($property);
            }
        }

        return null;
    }

    /**
     * @param mixed $property
     * @return string
     */
    protected function title(\stdClass $property): string
    {
        return collect($property->title)->implode('plain_text', '');
    }
}
