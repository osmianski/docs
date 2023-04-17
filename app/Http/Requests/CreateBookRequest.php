<?php

namespace App\Http\Requests;

use App\Enums\SourcePlatform;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

/**
 * @property string $source
 * @property int $notion_workspace_id
 * @property int $notion_object_id
 * @property string $name
 * @property string $title
 */
class CreateBookRequest extends FormRequest
{
    public function rules()
    {
        return [
            'source' => ['required', new Enum(SourcePlatform::class)],
            'notion_workspace_id' => 'required|integer|exists:notion_workspaces,id',
            'notion_object_id' => 'nullable|integer|exists:notion_objects,id',
            'name' => 'required|string|max:255|regex:/^\w+$/',
            'title' => 'required|string|max:255',
        ];
    }

    public function messages()
    {
        return [
            'name.regex' => 'Use letters, numbers and underscore (_)',
        ];
    }
}
