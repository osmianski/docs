<?php

namespace App\Reflection;

use App\Attributes\Get;
use Illuminate\Support\Collection;
use ReflectionClass;
use ReflectionProperty;
use RuntimeException;

class Singletons
{
    protected array $singletons = [];

    public function __construct(protected array $classes)
    {
    }

    public function of(string $baseClass): Collection
    {
        if (! isset($this->singletons[$baseClass])) {
            $this->singletons[$baseClass] = $this->collect($baseClass);
        }

        return $this->singletons[$baseClass];
    }

    protected function collect(string $baseClass): Collection
    {
        $singletons = [];

        foreach ($this->classes as $class) {
            if (! is_subclass_of($class, $baseClass)) {
                continue;
            }

            $reflection = new ReflectionClass($class);

            if ($reflection->isAbstract()) {
                continue;
            }

            $singleton = $this->make($reflection);
            $singletons[$singleton->key] = $singleton;
        }

        return collect($singletons);
    }

    protected function make(ReflectionClass $reflection): object
    {
        $singleton = app($reflection->getName());

        foreach ($reflection->getProperties(ReflectionProperty::IS_PUBLIC) as $property) {
            if ($property->isStatic()) {
                continue;
            }

            if ($property->isInitialized($singleton)) {
                continue;
            }

            if (! ($attribute = $property->getAttributes(Get::class)[0] ?? null)) {
                continue;
            }

            /* @var Get $get */
            $get = $attribute->newInstance();

            if ($get->value) {
                $property->setValue($singleton, $this->value($reflection, $get->value));
            }
            elseif ($get->__) {
                $property->setValue($singleton, $this->__($reflection, $get->__));
            }
            else {
                throw new RuntimeException(sprintf(
                    'Provide a value to the `%s` attribute of the `%s::%s` property',
                    Get::class,
                    $reflection->getName(),
                    $property->getName(),
                ));
            }
        }

        return $singleton;
    }

    public function value(ReflectionClass $reflection, string $attribute): mixed
    {
        if (! ($attribute = $reflection->getAttributes($attribute)[0] ?? null)) {
            throw new RuntimeException(sprintf(
                'The `%s` attribute is required for the `%s` class',
                $attribute,
                $reflection->getName(),
            ));
        }

        return $attribute->newInstance()->value;
    }

    public function __(ReflectionClass $reflection, string $attribute): string
    {
        return __($this->value($reflection, $attribute));
    }
}
