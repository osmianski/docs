<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMappingRequest;
use App\Http\Requests\UpdateMappingRequest;
use App\Models\Mapping;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Response;
use Osmianski\Exceptions\NotImplemented;

class MappingController extends Controller
{
    public function index(User $user): Response
    {
        return inertia('MappingIndex', [
            'types' => singletons_of(Mapping\Type::class),
        ]);
    }

    public function create(Request $request, User $user): Response
    {
        return inertia('MappingCreate', [
            'type' => singletons_of(Mapping\Type::class)
                ->get($request->query('type')),
        ]);
    }

    public function store(StoreMappingRequest $request)
    {
        throw new NotImplemented();
    }

    public function show(Mapping $mapping)
    {
        throw new NotImplemented();
    }

    public function edit(Mapping $mapping)
    {
        throw new NotImplemented();
    }

    public function update(UpdateMappingRequest $request, Mapping $mapping)
    {
        throw new NotImplemented();
    }

    public function destroy(Mapping $mapping)
    {
        throw new NotImplemented();
    }
}
