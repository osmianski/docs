<?php

namespace App\Http\Controllers;

class SignInController extends Controller
{
    public function show()
    {
        return inertia('SignIn');
    }

    public function signIn()
    {
    }
}
