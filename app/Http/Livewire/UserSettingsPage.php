<?php

namespace App\Http\Livewire;

use App\Objects\UserSettingsPage\RepositoryMapping;
use App\Objects\UserSettingsPage\RepositoryMappings;
use Illuminate\Support\Collection;
use Illuminate\View\View;
use Livewire\Component;

class UserSettingsPage extends Component
{
    public string $username = 'osmianski';

    public RepositoryMappings $repository_mappings;

    public function mount(): void
    {
        $this->repository_mappings = new RepositoryMappings([
            new RepositoryMapping([
                'repo_url' => 'https://github.com/osmianski/docs',
            ]),
        ]);
    }

    public function render(): View
    {
        return view('livewire.user-settings-page');
    }
}
