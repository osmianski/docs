<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Inertia\Response;

abstract class MappingTypeController extends Controller
{
    abstract public function create(): Response|RedirectResponse;
}
