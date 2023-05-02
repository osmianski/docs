<?php

namespace App\Providers;

use App\Reflection\Loader;
use App\Reflection\Singletons;
use Illuminate\Foundation\Application;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->registerReflectionLoader();
        $this->registerSingletonContainer();
    }

    protected function registerReflectionLoader(): void
    {
        $this->app->singleton(Loader::class, function () {
            return new Loader([
                'App\Models' => base_path('app/Models'),
            ]);
        });
    }

    protected function registerSingletonContainer(): void
    {
        $this->app->singleton(Singletons::class, function (Application $app) {
            return new Singletons($app[Loader::class]->getClasses());
        });
    }

    public function boot(): void
    {
        //
    }
}
