<?php

namespace App\Http\Controllers;

use App\Exceptions\NotImplemented;
use App\Jobs\SyncNotionWorkspace;
use App\Models\NotionWorkspace;
use App\NotionClient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class NotionController extends Controller
{
    public function authCallback(Request $request, NotionClient $client) {
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
        $data = $client->getOAuthToken($code);

        // save the Notion workspace information
        if (!($workspace = NotionWorkspace::whereUserId(auth()->id())
            ->whereUuid($data->workspace_id)->first()))
        {
            $workspace = new NotionWorkspace();

            $workspace->user_id = auth()->id();
            $workspace->uuid = $data->workspace_id;
        }

        $workspace->data = json_encode($data);

        $workspace->title = mb_substr($data->workspace_name, 0, 256);
        $workspace->bearer_token = mb_substr($data->access_token, 0, 256);

        $workspace->save();

        SyncNotionWorkspace::dispatch($workspace);

        return redirect()->route('profile.books.create', [
            'profile' => auth()->user()->name,
            'source' => 'notion',
            'notion_workspace_id' => $workspace->id,
        ]);
    }
}
