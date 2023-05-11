<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMappingRequest;
use App\Http\Requests\UpdateMappingRequest;
use App\Models\Mapping;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;
use Osmianski\Exceptions\NotImplemented;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class MappingController extends Controller
{
    public function index(User $user): Response
    {
        return inertia('MappingIndex', [
            'types' => registries()->singletonsOf(Mapping\Type::class),
        ]);
    }

    public function create(Request $request, User $user): Response|RedirectResponse
    {
        $type = registries()->singletonsOf(Mapping\Type::class)
            ->get($request->query('type'));

        if (! $type) {
            throw new BadRequestHttpException(__(
                '`type` query parameter should contain a valid mapping type, but it is `:type`',
                ['type' => $request->query('type')],
            ));
        }

        $controller = registries()->instanceOf(MappingTypeController::class, $type->key);

        if (! $controller) {
            throw new BadRequestHttpException(__(
                'There is no controller for mapping type `:type`',
                ['type' => $type->key],
            ));
        }

        return $controller->create();
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
