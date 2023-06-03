<?php

namespace App\Http\Controllers;

use Inertia\Response;

class PlaygroundController extends Controller
{
    public function show(): Response
    {
        return inertia('Playground');
    }
}
