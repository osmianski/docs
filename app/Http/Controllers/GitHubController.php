<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Http;

class GitHubController extends Controller
{
    public function show(Request $request)
    {
        // Step 1. https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app#using-the-web-application-flow-to-generate-a-user-access-token
        return inertia('GitHub', [
            'githubUrl' => 'https://github.com/login/oauth/authorize?'.http_build_query([
                'client_id' => config('github.client_id'),
                'redirect_uri' => config('github.callback_url', url('/_github/auth')),
                'state' => $request->query('to'),
            ]),
        ]);
    }

    public function callback(Request $request)
    {
        // Step 3. https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app#using-the-web-application-flow-to-generate-a-user-access-token
        $response = Http::post('https://github.com/login/oauth/access_token', [
            'client_id' => config('github.client_id'),
            'client_secret' => config('github.client_secret'),
            'code' => $request->query('code'),
            'redirect_uri' => config('github.callback_url', url('/_github/auth')),
        ]);

        parse_str($response->body(), $payload);

        if (isset($payload['error'])) {
            return inertia('GitHubError', [
                'error' => $payload,
            ]);
        }

        $user = auth()->user();

        $user->data = array_merge_recursive($user->data ?? [], [
            'github' => $payload,
        ]);

        $user->save();

        return redirect(url(Crypt::decrypt($request->query('state'))));
    }
}
