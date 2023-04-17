<?php

namespace App\Jobs;

use App\Enums\Notion\ObjectType;
use App\Enums\OnNotionRateLimit;
use App\Exceptions\NotImplemented;
use App\Models\NotionObject;
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
use Illuminate\Support\Collection;
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
        $this->sync();
    }

    protected function sync()
    {
        // Output to console
        $message = "Syncing '{$this->workspace->title}' workspace " .
            "on behalf of '{$this->workspace->user->name}' ...";
        $this->output?->write($message);

        // Use timestamp fetched _before_ getting data from Notion. This way,
        // the next time the partial sync happens, we'll fetch all the changes
        // made during the previous sync, too
        $this->startedSyncingAt = now();

        $this->syncRoots();

        $this->output?->writeln(' DONE');
    }

    protected function syncRoots(): void
    {
        // Get the first batch of Notion pages
        $data = $this->client->search(limit: static::BATCH_SIZE);

        collect($data->results)
            ->filter(fn (\stdClass $data) =>
                $data->parent?->type === 'workspace' &&
                $data->parent?->workspace
            )
            ->each(fn (\stdClass $data) => $this->insertOrUpdateObject($data));

        while ($data->has_more) {
            // Get the next batch of Notion pages
            $data = $this->client->search(cursor: $data->next_cursor,
                limit: static::BATCH_SIZE);

            collect($data->results)
                ->filter(fn (\stdClass $data) =>
                    $data->parent?->type === 'workspace' &&
                    $data->parent?->workspace
                )
                ->each(fn (\stdClass $data) => $this->insertOrUpdateObject($data));
        }

        $roots = NotionObject::whereParentId(null)->withTrashed()->get();
        foreach ($roots as $root) {
            $this->deleteOrUpdateObject($root);
        }

        // sync children, recursively
        $roots = NotionObject::whereParentId(null)->get();
        foreach ($roots as $root) {
            $this->syncChildrenRecursively($root);
        }
    }

    protected function insertOrUpdateObject(\stdClass $data,
        NotionObject $parent = null): void
    {
        if (!($page = NotionObject::whereWorkspaceId($this->workspace->id)
            ->whereUuid($data->id)->first()))
        {
            $page = new NotionObject();

            $page->workspace_id = $this->workspace->id;
            $page->uuid = $data->id;
        }

        $page->parent_id = $parent?->id;
        $page->data = $data;
        $page->save();
    }


    protected function deleteOrUpdateObject(NotionObject $object): void
    {
        $data = match($object->type) {
            ObjectType::Database->value => $this->client->getDatabase($object->uuid),
            ObjectType::Page->value => $this->client->getPage($object->uuid),
            default => $this->client->getBlock($object->uuid),
        };

        if (!$data) {
            $object->forceDelete();
            return;
        }

        if ($data->archived ?? false) {
            $object->delete();
            return;
        }

        $object->data = $data;
        $object->save();
    }

    protected function deleteOrUpdatePage(NotionObject $page): void
    {
        $data = $this->client->getPage($page->uuid);

    }

    protected function deleteOrUpdateDatabase(NotionObject $page): void
    {
        $data = $this->client->getDatabase($page->uuid);

        if (!$data) {
            $page->forceDelete();
            return;
        }

        if ($data->archived ?? false) {
            $page->delete();
            return;
        }

        $page->data = $data;
        $page->save();
    }

    protected function syncChildrenRecursively(NotionObject $parent): void
    {
        if ($parent->type === ObjectType::Database->value) {
            $this->syncRecordsRecursively($parent);
            return;
        }

        // Get the first batch of Notion pages
        $data = $this->client->getChildren($parent->uuid,
            limit: static::BATCH_SIZE);
        $children = $data->results;

        collect($data->results)
            ->each(fn (\stdClass $data) =>
                $this->insertOrUpdateObject($data, $parent)
            );

        while ($data->has_more) {
            // Get the next batch of Notion pages
            $data = $this->client->getChildren($parent->uuid,
                cursor: $data->next_cursor, limit: static::BATCH_SIZE);
            $children = array_merge($children, $data->results);

            collect($data->results)
                ->each(fn (\stdClass $data) =>
                    $this->insertOrUpdateObject($data, $parent)
                );
        }

        $parent->children = $children;
        $parent->save();

        $objects = NotionObject::whereParentId($parent->id)->withTrashed()->get();
        foreach ($objects as $object) {
            $this->deleteOrUpdateObject($object);
        }

        // sync children, recursively
        $objects = NotionObject::whereParentId($parent->id)->get();
        foreach ($objects as $object) {
            $this->syncChildrenRecursively($object);
        }
    }

    protected function syncRecordsRecursively(NotionObject $database): void
    {
        // Get the first batch of Notion pages
        $data = $this->client->query($database->uuid,
            limit: static::BATCH_SIZE);

        collect($data->results)
            ->each(fn (\stdClass $data) =>
                $this->insertOrUpdateObject($data, $database)
            );

        while ($data->has_more) {
            // Get the next batch of Notion pages
            $data = $this->client->query($database->uuid,
                cursor: $data->next_cursor, limit: static::BATCH_SIZE);

            collect($data->results)
                ->each(fn (\stdClass $data) =>
                    $this->insertOrUpdateObject($data, $database)
                );
        }

        $objects = NotionObject::whereParentId($database->id)->withTrashed()->get();
        foreach ($objects as $object) {
            $this->deleteOrUpdateObject($object);
        }

        // sync children, recursively
        $objects = NotionObject::whereParentId($database->id)->get();
        foreach ($objects as $object) {
            $this->syncChildrenRecursively($object);
        }
    }
}
