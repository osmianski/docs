<?php

namespace App\Models\Mapping\Type;

use App\Attributes\Key;
use App\Attributes\Name;
use App\Models\Mapping\Type;

#[Key('github'), Name('GitHub')]
class Github extends Type
{
}
