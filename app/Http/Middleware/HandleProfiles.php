<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\URL;

class HandleProfiles
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param  \Closure(Request): (Response|RedirectResponse)  $next
     * @return Response|RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $route = $request->route();

        // $user profile model is implicitly bound from their name in a route
        // parameter not that there is no user with specified name, the 404 page
        // is returned. For this to work, all profile routes have the
        // `{profile:name}` parameter, and all profile controller actions have
        // the `User $profile` parameter.

        /* @var User $profile */
        $profile = $route->parameter('profile');

        if ($profile->id !== $request->user()?->id) {
            $route->setParameter('isOwner', false);
            return $next($request);
        }

        if ($request->user() instanceof MustVerifyEmail &&
            ! $request->user()->hasVerifiedEmail())
        {
            return $request->expectsJson()
                ? abort(403, 'Your email address is not verified.')
                : Redirect::guest(URL::route('verification.notice'));
        }

        $route->setParameter('isOwner', true);
        return $next($request);
    }
}
