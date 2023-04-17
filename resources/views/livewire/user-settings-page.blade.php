@php /* @see \App\Http\Livewire\UserSettingsPage */ @endphp

<div>
    <h1>{{ __('Settings') }}</h1>
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
                <tr>
                    <td>{{ $mapping->path }}</td>
                    <td>{{ $mapping->repository_url }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
