<?php

namespace App\Http\Controllers;

use Inertia\Response;

class PlaygroundController extends Controller
{
    public function show(): Response
    {
        return inertia('Playground');
    }

    public function showComboboxes(): Response
    {
        return inertia('PlaygroundComboboxes');
    }
}
