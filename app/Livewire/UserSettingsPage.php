<?php

namespace App\Livewire;

use App\Livewire\UserSettingsPage\RepositoryMapping;
use Illuminate\View\View;
use Livewire\Component;

class UserSettingsPage extends Component
{
    public string $username = 'osmianski';

    /**
     * @var array<RepositoryMapping>
     */
    public array $repository_mappings;

    public function mount(): void
    {
        $this->repository_mappings = [
            new RepositoryMapping([
                'repo_url' => 'https://github.com/osmianski/docs',
            ]),
        ];
    }

    public function render(): View
    {
        ray($this->repository_mappings);

        return view('livewire.user-settings-page');
    }
}
