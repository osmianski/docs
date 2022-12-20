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
                $count = NotionWorkspace::count();
                $index = 0;
                foreach (NotionWorkspace::all() as $workspace) {
                    // Distribute Notion API calls evenly within the
                    // 5-minute interval by delaying the job execution
                    // accordingly
                    $delay = floor(floatval($index) / floatval($count) * 300);

                    SyncNotionWorkspace::dispatch($workspace)
                        ->delay(now()->addSeconds($delay));

                    $index++;
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
