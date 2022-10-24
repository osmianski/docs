<?php

namespace App\Http\Controllers;

use App\Exceptions\Required;

class LandingController extends Controller
{
    public function show() {
        return inertia('Home', [
            /** @see https://developers.notion.com/docs/authorization#prompting-users-to-add-an-integration */
            'notionAuthUrl' => 'https://api.notion.com/v1/oauth/authorize?' .
                http_build_query([
                    'client_id' => env('NOTION_CLIENT_ID'),
                    'redirect_uri' => env('NOTION_AUTH_CALLBACK_URL',
                        route('notion.auth-callback')),
                    'owner' => 'user',
                    'response_type' => 'code',
                ]),
            'registerUrl' => route('register'),
        ]);
    }
}
