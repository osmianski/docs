<?php

namespace App\Http\Controllers\MappingType;

use App\Attributes\Key;
use App\Http\Controllers\MappingTypeController;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

#[Key('github')]
class GitHubController extends MappingTypeController
{
    public function create(): Response|RedirectResponse
    {
        return inertia('MappingCreateGitHub', [
            //'repositories' => github()->getRepositories(),
        ]);
    }
}
