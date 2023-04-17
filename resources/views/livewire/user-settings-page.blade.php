@php /* @see \App\Http\Livewire\UserSettingsPage */ @endphp

<div>
    <h1>{{ __('Settings') }}</h1>

    <h2>{{ __('General') }}</h2>
    <p>
        <label for="username">{{ __('Username') }}</label>
        <input wire:model="username" type="text" id="username">
    </p>

    <h2>{{ __('Repository mappings') }}</h2>
    <table>
        <thead>
            <tr>
                <th>{{ __('Path') }}</th>
                <th>{{ __('Repository URL') }}</th>
            </tr>
        </thead>
        <tbody>
            @foreach($repository_mappings as $mapping)
                @php
                    ray($mapping);
                @endphp
                <tr>
                    <td>{{ $mapping->path }}</td>
                    <td>{{ $mapping->repo_url }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
