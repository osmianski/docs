<?php

namespace App\Console\Commands;

use App\Models\NotionWorkspace;
use Illuminate\Console\Command;

class NotionShow extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notion:show
        {workspace : A workspace ID show}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Shows content of a Notion Workspace.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $workspace = NotionWorkspace::find($this->argument('workspace'));
        $client = $workspace->client();

        $data = $client->search(limit: 100);
        $results = $data->results;

        while ($data->has_more) {
            $data = $client->search(cursor: $data->next_cursor,
                limit: 100);

            $results = array_merge($results, $data->results);
        }

        $this->output->writeln(json_encode($results, JSON_PRETTY_PRINT));

        return static::SUCCESS;
    }
}
