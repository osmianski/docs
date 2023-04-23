<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserSettingsController extends Controller
{
    public function show(User $user)
    {
        $this->authorize('view', $user);

        return inertia('UserSettings');
    }
}
