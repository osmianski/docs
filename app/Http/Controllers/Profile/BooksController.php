<?php

namespace App\Http\Controllers\Profile;

use App\Enums\SourcePlatform;
use App\Exceptions\NotImplemented;
use App\Http\Controllers\Controller;
use App\Models\NotionWorkspace;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Enum;

class BooksController extends Controller
{
    public function show(User $profile, bool $isOwner) {
        return inertia('Profile/Books', [
            'profile' => $profile,
            'isOwner' => $isOwner,
            'notionAuthUrl' => notionAuthUrl(),
        ]);
    }

    public function showNew(Request $request) {
        $data = $request->validate([
            'source' => [new Enum(SourcePlatform::class)],
            'notion_workspace_id' => 'exists:notion_workspaces,id',
        ]);

        return inertia('Profile/CreateBook', [
            'profile' => auth()->user(),
            'isOwner' => true,
            'data' => (object)$data,
            'sourcePlatforms' => enumOptions(SourcePlatform::class),
            'notionWorkspaces' => NotionWorkspace::get(['id AS value', 'title AS label']),
        ]);
    }
}
