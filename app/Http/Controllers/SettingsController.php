<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Response;

class SettingsController extends Controller
{
    public function view(User $user): Response
    {
        $this->authorize('view', $user);

        return inertia('Settings');
    }
}
