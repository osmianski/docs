<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;

function homeUrl() {
    return route('home');
}

function profileUrl() {
    /* @var User $user */
    $user = Auth::user();

    return route('profile.home', [
        'profile' => $user->name,
    ]);
}

function loggedInUrl() {
    return homeUrl();
}
