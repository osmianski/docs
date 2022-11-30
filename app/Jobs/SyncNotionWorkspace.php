<?php

namespace App\Jobs;

use App\Enums\OnNotionRateLimit;
use App\Models\NotionWorkspace;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Symfony\Component\Console\Output\OutputInterface;

class SyncNotionWorkspace implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

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
     * @var ?OutputInterface
     */
    public ?OutputInterface $output;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(NotionWorkspace $workspace,
        OutputInterface $output = null,
        bool $fullSync = false,
        OnNotionRateLimit $onNotionRateLimit = OnNotionRateLimit::Queue)
    {
        $this->workspace = $workspace;
        $this->fullSync = $fullSync;
        $this->onNotionRateLimit = $onNotionRateLimit;
        $this->output = $output;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //
    }
}
