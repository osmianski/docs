<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Osmianski\Exceptions\NotImplemented;

class StoreMappingRequest extends FormRequest
{
    public function authorize(): bool
    {
        throw new NotImplemented();
    }

    public function rules(): array
    {
        throw new NotImplemented();
    }
}
