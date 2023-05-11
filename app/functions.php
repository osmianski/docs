<?php

use App\Reflection\Singletons;
use Illuminate\Support\Collection;

/**
 * @template T of object
 *
 * @param  class-string<T>  $baseClass
 * @return Collection<string, T>
 */
function singletons_of(string $baseClass): Collection
{
    return app(Singletons::class)->of($baseClass);
}

// test
