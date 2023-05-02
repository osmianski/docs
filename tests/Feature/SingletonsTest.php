<?php

use App\Models\Mapping;

it('returns singletons extending the given type', function () {
    $mappingTypes = singletons_of(Mapping\Type::class);

    expect($mappingTypes)->toHaveKey('github')
        ->and($mappingTypes['github'])->toBeInstanceOf(Mapping\Type::class)
        ->and($mappingTypes['github']->key)->toBe('github')
        ->and($mappingTypes['github']->name)->toBe('GitHub');
});
