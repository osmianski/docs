<?php

namespace App\Console\Commands;

use App\Enums\OnNotionRateLimit;
use App\Jobs\SyncNotionWorkspace;
use App\Models\NotionWorkspace;
use Illuminate\Console\Command;
use Symfony\Component\Console\Command\Command as CommandAlias;

class SyncNotion extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notion:sync
        {workspace-id?* : One or more workspace IDs to sync}
        {--f|full : Force a full re-sync instead of incremental sync}
        {--no-wait : Don\'t wait through rate-limiting timeouts }
        {--a|all : Sync all workspaces instead of specifying individual IDs}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Syncs new, modified and deleted pages from one or more Notion workspaces into the database.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        foreach (NotionWorkspace::all() as $workspace) {
            SyncNotionWorkspace::dispatchSync($workspace,
                $this->output,
                $this->option('full'),
                $this->option('no-wait')
                    ? OnNotionRateLimit::Stop
                    : OnNotionRateLimit::Wait);
        }

        return static::SUCCESS;
    }
}
