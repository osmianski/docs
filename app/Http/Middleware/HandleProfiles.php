<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Route;

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
        $this->setIsOwnerParameter($route = $request->route(),
            $route->parameter('profile'));

        return $next($request);
    }

    protected function setIsOwnerParameter(Route $route, ?User $profile): void
    {
        // $user profile model is implicitly bound from their name in a route
        // parameter not that there is no user with specified name, the 404 page
        // is returned. For this to work, all profile routes have the
        // `{profile:name}` parameter, and all profile controller actions have
        // the `User $profile` parameter.

        $route->setParameter('isOwner',
            $profile->id === auth()->user()?->id);
    }
}
