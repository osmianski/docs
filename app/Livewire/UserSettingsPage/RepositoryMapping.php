<?php

namespace App\Livewire\UserSettingsPage;

use Livewire\Wireable;
use Osmianski\Traits\ConstructedFromArray;
use Osmianski\Traits\HasLazyProperties;

class RepositoryMapping implements Wireable
{
    use ConstructedFromArray;
    use HasLazyProperties;

    public ?string $path = null;

    public ?string $repo_url = null;

    public function toLivewire(): array
    {
        return [
            'path' => $this->path,
            'repo_url' => $this->repo_url,
        ];
    }

    public static function fromLivewire($value): static
    {
        return new static($value);
    }
}
