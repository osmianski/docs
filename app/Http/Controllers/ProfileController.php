<?php

namespace App\Http\Controllers;

use App\Models\User;

class ProfileController extends Controller
{
    public function show(User $user) {
        // $user model is implicitly bound from their name in a route parameter
        // not that there is no user with specified name, the
        // 404 page is returned

        if ($user->id === auth()->user()?->id) {
        }
        else {
        }
        return inertia('Profile');
    }
}
