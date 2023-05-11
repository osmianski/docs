<?php

namespace App\Exceptions;

use Illuminate\Http\Exceptions\HttpResponseException;

class NoGitHubToken extends HttpResponseException
{
}
