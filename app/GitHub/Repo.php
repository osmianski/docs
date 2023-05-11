<?php

namespace App\GitHub;

use Osmianski\Traits\ConstructedFromArray;
use Osmianski\Traits\HasLazyProperties;

class Repo
{
    use ConstructedFromArray;
    use HasLazyProperties;

    protected array $raw;

    public string $name;
}
