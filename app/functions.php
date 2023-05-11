<?php

use App\GitHub;
use App\Reflection\Registries;

if (! function_exists('registries')) {
    function registries(): Registries
    {
        return app(Registries::class);
    }
}

if (! function_exists('github')) {
    function github(): GitHub
    {
        return app(GitHub::class);
    }
}

// test 2
