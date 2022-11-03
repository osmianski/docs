<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\User;

class BooksController extends Controller
{
    public function show(User $profile, bool $isOwner) {
        return inertia('Profile/Books', [
            'profile' => $profile,
            'isOwner' => $isOwner,
        ]);
    }

}
