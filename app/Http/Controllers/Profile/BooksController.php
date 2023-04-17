<?php

namespace App\Http\Controllers\Profile;

use App\Enums\SourcePlatform;
use App\Exceptions\NotImplemented;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateBookRequest;
use App\Models\Book;
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
            'saveUrl' => profileUrl('books.do_create'),
        ]);
    }

    public function saveNew(CreateBookRequest $request) {
        $request->validated();

        Book::create([
            'user_id' => auth()->id(),
            'source' => $request->source,
            'notion_workspace_id' => $request->notion_workspace_id,
            'notion_object_id' => $request->notion_object_id,
            'name' => $request->name,
            'title' => $request->title,
        ]);

        return redirect(profileUrl('books'));
    }
}
