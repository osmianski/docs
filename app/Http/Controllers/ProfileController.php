<?php

namespace App\Http\Controllers;

use App\Exceptions\NotImplemented;
use App\Models\User;

class ProfileController extends Controller
{
    public function show(User $profile, bool $isOwner) {
        return inertia('Profile/Home', [
            'profile' => $profile,
            'isOwner' => $isOwner,
        ]);
    }
}
