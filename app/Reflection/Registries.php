<?php

namespace App\Reflection;

use App\Attributes\Get;
use App\Attributes\Key;
use Illuminate\Support\Collection;
use ReflectionClass;
use ReflectionProperty;
use RuntimeException;

class Registries
{
    protected array $descendants = [];

    protected array $singletons = [];

    public function __construct(protected array $classes)
    {
    }

    /**
     * @return Collection<string, string>
     */
    public function descendantsOf(string $baseClass): Collection
    {
        if (! isset($this->descendants[$baseClass])) {
            $this->descendants[$baseClass] = $this->collect($baseClass);
        }

        return $this->descendants[$baseClass];
    }

    /**
     * @template T of object
     *
     * @param  class-string<T>  $baseClass
     * @return Collection<string, T>
     */
    public function singletonsOf(string $baseClass): Collection
    {
        if (! isset($this->singletons[$baseClass])) {
            $this->singletons[$baseClass] = $this->instantiate($baseClass);
        }

        return $this->singletons[$baseClass];
    }

    /**
     * @template T of object
     *
     * @param  class-string<T>  $baseClass
     * @return ?T
     */
    public function instanceOf(string $baseClass, string $key): mixed
    {
        if (! ($class = $this->descendantsOf($baseClass)->get($key))) {
            return null;
        }

        return $this->make($class);
    }

    protected function collect(string $baseClass): Collection
    {
        $classes = [];

        foreach ($this->classes as $class) {
            if (! is_subclass_of($class, $baseClass)) {
                continue;
            }

            $reflection = new ReflectionClass($class);

            if ($reflection->isAbstract()) {
                continue;
            }

            if (! ($attribute = $reflection->getAttributes(Key::class)[0] ?? null)) {
                continue;
            }

            $classes[$attribute->newInstance()->value] = $class;
        }

        return collect($classes);
    }

    protected function instantiate(string $baseClass): Collection
    {
        $singletons = [];

        foreach ($this->descendantsOf($baseClass) as $key => $class) {
            $singletons[$key] = $this->make($class);
        }

        return collect($singletons);
    }

    protected function make(string $class): object
    {
        $reflection = new ReflectionClass($class);

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
