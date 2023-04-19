<?php

namespace App\Livewire\UserSettingsPage\Traits;

use App\Livewire\UserSettingsPage\RepositoryMapping;

trait ViewModels
{
    public function hydrateViewModels(...$args): void
    {
        $a = 1;
//        $this->repository_mappings = array_map(
//            fn (array $item) => RepositoryMapping::fromLivewire($item),
//            $this->repository_mappings,
//        );
    }

    public function dehydrateViewModels(): void
    {
//        $this->repository_mappings = array_map(
//            fn (RepositoryMapping $item) => $item->toLivewire(),
//            $this->repository_mappings,
//        );
    }
}
