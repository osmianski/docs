<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;

function homeUrl(): string {
    return route('home');
}

function profileUrl(string $routeName = 'home'): string {
    /* @var User $user */
    $user = Auth::user();

    return route("profile.{$routeName}", [
        'profile' => $user->name,
    ]);
}

function notionAuthUrl(): string {
    /** @see https://developers.notion.com/docs/authorization#prompting-users-to-add-an-integration */
    return 'https://api.notion.com/v1/oauth/authorize?' . http_build_query([
        'client_id' => env('NOTION_CLIENT_ID'),
        'redirect_uri' => env('NOTION_AUTH_CALLBACK_URL',
            route('notion.auth-callback')),
        'owner' => 'user',
        'response_type' => 'code',
    ]);
}

function loggedInUrl() {
    return homeUrl();
}
