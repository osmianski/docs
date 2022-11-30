<?php

namespace App;

use Illuminate\Support\Facades\Http;

class NotionClient
{
    public const VERSION = '2022-06-28';

    protected ?string $bearerToken;

    public function __construct(string $bearerToken = null)
    {
        $this->bearerToken = $bearerToken;
    }

    public function getOAuthToken(string $code): \stdClass {
        // Get the information about user and granted permissions
        $response = Http::acceptJson()
            ->withBasicAuth(env('NOTION_CLIENT_ID'), env('NOTION_CLIENT_SECRET'))
            ->post('https://api.notion.com/v1/oauth/token', [
                'code' => $code,
                'redirect_uri' => env('NOTION_AUTH_CALLBACK_URL',
                    route('notion.auth-callback')),
                'grant_type' => 'authorization_code',
            ]);

        // Throw an exception if a client or server error occurred.
        $response->throw();

        // Otherwise, retrieve Notion workspace data from the response JSON
        return $response->object();
    }

    public function search(string $cursor = null, int $limit = 100): \stdClass
    {
        $data = [
            'page_size' => $limit,
            'sort' => [
                'direction' => 'ascending',
                'timestamp' => 'last_edited_time',
            ],
        ];

        if ($cursor) {
            $data['start_cursor'] = $cursor;
        }

        // Get the information about user and granted permissions
        $response = Http::acceptJson()
            ->withHeaders([
                'Authorization' => "Bearer {$this->bearerToken}",
                'Notion-Version' => static::VERSION,
            ])
            ->post('https://api.notion.com/v1/search', $data);

        // Throw an exception if a client or server error occurred.
        $response->throw();

        // Otherwise, retrieve Notion workspace data from the response JSON
        return $response->object();
    }
}
