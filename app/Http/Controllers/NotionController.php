<?php

namespace App\Http\Controllers;

use App\Exceptions\NotImplemented;

class NotionController extends Controller
{
    public function authCallback() {
        throw new NotImplemented();
    }
}
