<?php

namespace App\Jobs;

use App\Enums\OnNotionRateLimit;
use App\Exceptions\NotImplemented;
use App\Models\NotionPage;
use App\Models\NotionWorkspace;
use App\NotionClient;
use DB;
use Illuminate\Bus\Queueable;
use Illuminate\Console\OutputStyle;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Date;
use Symfony\Component\Console\Cursor;

class SyncNotionWorkspace implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Pages are retrieved from Notion in batches, and this constant specifies
     * the batch size. According to <https://developers.notion.com/reference/post-search>,
     * the maximum batch size is 100.
     */
    protected const BATCH_SIZE = 100;
    /**
     * A workspace to sync
     * @var NotionWorkspace
     */
    protected NotionWorkspace $workspace;

    /**
     * Force a full re-sync instead of incremental sync
     *
     * @var bool
     */
    protected bool $fullSync;

    /**
     * Specifies what happens if Notion rate-limits us
     *
     * @var OnNotionRateLimit
     */
    protected OnNotionRateLimit $onNotionRateLimit;

    /**
     * Console output. Only provided if it runs in console
     *
     * @var ?OutputStyle
     */
    protected ?OutputStyle $output;

    protected NotionClient $client;

    /**
     * The timestamp to be written as `synced_at` if this sync is successful
     *
     * @var Carbon|null
     */
    protected ?Carbon $startedSyncingAt;

    /**
     * The `synced_at` timestamp of the last successful sync.
     *
     * @var Carbon|null
     */
    protected ?Carbon $lastSyncedAt;
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
        $this->lastSyncedAt = $this->workspace->synced_at
            ? Date::parse($this->workspace->synced_at)
            : null;
    }

    public function middleware()
    {
        return [new WithoutOverlapping($this->workspace->id)];
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle() {
        DB::transaction(function() {
            $this->importFromNotion();
            $this->assignParentId();
            $this->markWorkspaceAsSynced();
        });
    }

    protected function importFromNotion()
    {
        // Output to console
        $message = "Syncing '{$this->workspace->title}' workspace " .
            "on behalf of '{$this->workspace->user->name}' ...";
        $this->output?->writeln($message);
        $cursor = $this->output
            ? new Cursor($this->output->getOutput())
            : null;

        // Use timestamp fetched _before_ getting data from Notion. This way,
        // the next time the partial sync happens, we'll fetch all the changes
        // made during the previous sync, too
        $this->startedSyncingAt = now();

        // Get the first batch of Notion pages
        $data = $this->client->search(limit: static::BATCH_SIZE);
        $count = 0;
        $changedSinceLastSync = true;

        while (true) {
            // Save fetched data to the `notion_pages` database table.
            foreach ($data->results as $pageData) {
                if (!$this->changedSinceLastSync($pageData)) {
                    // All subsequent Notion pages are not changed since the
                    // last sync. We know that because Notion returns pages
                    // sorted by `last_edited_time` in descending order.
                    // So we can safely ignore the rest Notion pages.
                    $changedSinceLastSync = false;
                    break;
                }

                $this->save($pageData);
                $count++;
            }

            // Output to console
            $cursor?->moveUp();
            $cursor?->clearLine();
            $this->output?->writeln("{$message} {$count} page(s) saved.");

            // If it's the last batch, stop syncing
            if (!$data->has_more) {
                break;
            }

            if (!$changedSinceLastSync) {
                // All subsequent batches are not changed since the last sync.
                // We know that because Notion returns pages sorted by
                // `last_edited_time` in descending order.
                // So we can safely ignore the batches.
                break;
            }

            // Get the next batch of Notion pages
            $data = $this->client->search(cursor: $data->next_cursor,
                limit: static::BATCH_SIZE);
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
                ? mb_substr($title, 0, 255)
                : null,
            'database' => mb_substr($this->title($data), 0, 255),
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

    protected function markWorkspaceAsSynced(): void
    {
        $this->workspace->synced_at = $this->startedSyncingAt;
        $this->workspace->save();
    }

    protected function changedSinceLastSync(\stdClass $data): bool
    {
        // During the first sync all Notion pages are worth syncing
        if (!$this->lastSyncedAt) {
            return true;
        }

        $lastEditedTime = Date::parse($data->last_edited_time);

        return $lastEditedTime->gte($this->lastSyncedAt);
    }
}
