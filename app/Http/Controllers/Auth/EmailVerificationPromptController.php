<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EmailVerificationPromptController extends Controller
{
    /**
     * Display the email verification prompt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    public function __invoke(Request $request)
    {
        return $request->user()->hasVerifiedEmail()
                    ? redirect()->intended(route('profile.home', [
                        'profile' => Auth::user()->name,
                    ]))
                    : inertia('Auth/VerifyEmail', [
                        'status' => session('status'),
                        'verificationSendUrl' => route('verification.send'),
                        'logoutUrl' => route('logout'),
                    ]);
    }
}
