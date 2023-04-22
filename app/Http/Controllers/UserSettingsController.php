<?php

namespace App\Http\Controllers;

class UserSettingsController extends Controller
{
    public function show()
    {
        return inertia('UserSettings');
    }
}
