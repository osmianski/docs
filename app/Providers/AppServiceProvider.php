<?php

namespace App\Providers;

use App\GitHub;
use App\Reflection\Loader;
use App\Reflection\Registries;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Application;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->registerReflectionLoader();
        $this->registerSingletonContainer();
        $this->registerGitHub();
    }

    protected function registerReflectionLoader(): void
    {
        $this->app->singleton(Loader::class, function () {
            return new Loader([
                'App' => base_path('app'),
            ]);
        });
    }

    protected function registerSingletonContainer(): void
    {
        $this->app->singleton(Registries::class, function (Application $app) {
            return new Registries($app[Loader::class]->getClasses());
        });
    }

    public function boot(): void
    {
        Model::preventLazyLoading(! $this->app->isProduction());
    }

    protected function registerGitHub(): void
    {
        $this->app->singleton(GitHub::class, function () {
            return new GitHub(
                token: config('github.token'),
                user: auth()->user() ?? null,
            );
        });
    }
}
