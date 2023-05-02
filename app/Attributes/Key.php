<?php

namespace App\Attributes;

use Attribute;

#[Attribute(Attribute::TARGET_CLASS)]
final class Key
{
    public function __construct(public string $value)
    {
    }
}
