<?php

namespace App\Http\Livewire;

use Illuminate\View\View;
use Livewire\Component;

class UserSettingsPage extends Component
{
    public array $repository_mappings = [];

    public function render() : View
    {
        return view('livewire.user-settings-page');
    }
}
