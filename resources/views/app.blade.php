<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">

    <!-- Scripts -->
    @vite('resources/js/app.js')
    @inertiaHead
</head>
<body class="h-full">
    {{-- @inertia --}}
    <div id="app" class="min-h-full flex flex-col" data-page="{{ json_encode($page) }}"></div>
</body>
</html>
