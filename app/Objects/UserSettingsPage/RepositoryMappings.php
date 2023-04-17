<?php

namespace App\Objects\UserSettingsPage;

use ArrayAccess;
use Livewire\Wireable;
use Osmianski\Traits\ConstructedFromArray;

class RepositoryMappings implements Wireable, ArrayAccess
{
    use ConstructedFromArray;

    public function __construct(protected array $items = [])
    {
    }

    public function toLivewire(): array
    {
        return $this->items;
    }

    public static function fromLivewire($value): static
    {
        return new static(array_map(fn($item) => RepositoryMapping::fromLivewire($item), $value));
    }

    public function offsetExists(mixed $offset): bool
    {
        return isset($this->items[$offset]);
    }

    public function offsetGet(mixed $offset): mixed
    {
        return $this->items[$offset];
    }

    public function offsetSet(mixed $offset, mixed $value): void
    {
        if (is_null($offset)) {
            $this->items[] = $value;
        } else {
            $this->items[$offset] = $value;
        }
    }

    public function offsetUnset(mixed $offset): void
    {
        unset($this->items[$offset]);
    }
}
