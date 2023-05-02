<?php

namespace App\Models\Mapping;

use App\Attributes\Get;
use App\Attributes\Key;
use App\Attributes\Name;

abstract class Type
{
    #[Get(Key::class)]
    public string $key;

    #[Get(__: Name::class)]
    public string $name;
}
