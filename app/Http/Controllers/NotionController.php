<?php

namespace App\Http\Controllers;

use App\Exceptions\NotImplemented;
use App\Models\NotionWorkspace;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class NotionController extends Controller
{
    public function authCallback(Request $request) {
        /** @see https://developers.notion.com/docs/authorization#user-grants-access */

        if (!(auth()->id())) {
            throw new NotImplemented('When user returns from Notion back to us, the session may have ended, and `auth()->id()` returns `null`');
        }

        // If a user refused to grant the permissions, or if Notion has some
        // other issue with granting the permissions, it passes the `error`
        // query parameter. In this case, just redirect to home page.
        if ($request->query('error')) {
            return redirect()->route('home');
        }

        // Otherwise, Notion passes `code` query parameter. If it doesn't,
        // something is not right
        if (!($code = $request->query('code'))) {
            throw new NotImplemented();
        }

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
        $data = $response->object();

        // save the Notion workspace information
        if (!($workspace = NotionWorkspace::whereUserId(auth()->id())
            ->whereUuid($data->workspace_id)->first()))
        {
            $workspace = new NotionWorkspace();

            $workspace->user_id = auth()->id();
            $workspace->uuid = $data->workspace_id;
        }

        $workspace->data = json_encode($data);
        $workspace->save();

        return 'OK';
    }
}
