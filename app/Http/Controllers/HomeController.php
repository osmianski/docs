<?php

namespace App\Http\Controllers;

use Inertia\Response;

class HomeController extends Controller
{
    public function show(): Response
    {
        return inertia('Home');
    }
}
