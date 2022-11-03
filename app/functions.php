<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;

function homeUrl() {
    return route('home');
}

function profileUrl(string $routeName = 'home') {
    /* @var User $user */
    $user = Auth::user();

    return route("profile.{$routeName}", [
        'profile' => $user->name,
    ]);
}

function loggedInUrl() {
    return homeUrl();
}
