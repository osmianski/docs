<?php

namespace Osmianski\ViewModels;

use Illuminate\Support\ServiceProvider as BaseServiceProvider;
use Livewire\Component;
use Livewire\Livewire;
use Livewire\Request;
use Livewire\Response;

class ServiceProvider extends BaseServiceProvider
{
    public function boot(): void
    {
        Livewire::listen('component.hydrate.subsequent', function (Component $component, Request $request) {
            $a = 1;
        });

        Livewire::listen('component.dehydrate.subsequent', function (Component $component, Response $response) {
            $a = 1;
        });

        Livewire::listen('property.hydrate', function (string $property, mixed $value, Component $component, Request $request) {
            $a = 1;
        });

        Livewire::listen('property.dehydrate', function (string $property, mixed $value, Component $component, Response $response) {
            $a = 1;
        });
    }
}
