<?php

namespace App\Http\Controllers;

use App\Exceptions\Required;

class LandingController extends Controller
{
    public function show() {
        return inertia('Home/Home', [
            'notionAuthUrl' => notionAuthUrl(),
            'registerUrl' => route('register'),
        ]);
    }
}
