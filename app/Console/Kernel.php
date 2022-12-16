<?php

namespace App\Console;

use App\Jobs\SyncNotionWorkspace;
use App\Models\NotionWorkspace;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        //$schedule->command('inspire')->everyMinute();
        $schedule->command('telescope:prune')->daily();

        $schedule
            ->call(function () {
                foreach (NotionWorkspace::all() as $workspace) {
                    SyncNotionWorkspace::dispatch($workspace);
                }
            })
            ->name('Sync Notion workspaces incrementally')
            ->everyFiveMinutes();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
