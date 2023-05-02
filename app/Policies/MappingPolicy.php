<?php

namespace App\Policies;

use App\Models\Mapping;
use App\Models\User;
use Osmianski\Exceptions\NotImplemented;

class MappingPolicy
{
    public function viewAny(User $user): bool
    {
        throw new NotImplemented();
    }

    public function view(User $user, Mapping $mapping): bool
    {
        throw new NotImplemented();
    }

    public function create(User $user): bool
    {
        throw new NotImplemented();
    }

    public function update(User $user, Mapping $mapping): bool
    {
        throw new NotImplemented();
    }

    public function delete(User $user, Mapping $mapping): bool
    {
        throw new NotImplemented();
    }

    public function restore(User $user, Mapping $mapping): bool
    {
        throw new NotImplemented();
    }

    public function forceDelete(User $user, Mapping $mapping): bool
    {
        throw new NotImplemented();
    }
}
