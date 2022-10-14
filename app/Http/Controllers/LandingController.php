<?php

namespace App\Http\Controllers;

use App\Exceptions\Required;

class LandingController extends Controller
{
    public function show() {
        return inertia('Landing/Home', [
            'notionAuthUrl' => 'https://api.notion.com/v1/oauth/authorize?' .
                http_build_query([
                    'client_id' => env('NOTION_CLIENT_ID', fn() =>
                        throw new Required("Register a public Notion integration, and put its client ID into NOTION_CLIENT_ID environment variable.")),
                    'redirect_uri' => env('NOTION_AUTH_CALLBACK_URL',
                        route('notion.auth-callback')),
                    'owner' => 'user',
                    'response_type' => 'code',
                ]),
        ]);
    }
}
