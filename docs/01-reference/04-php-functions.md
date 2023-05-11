# PHP functions

* [`singletons_of()` function](#singletonsof-function)

## `registries()` function

Organize type hierarchies as follows:

```php
abstract class Type
{
    #[Get(Key::class)]
    public string $key; // required

    #[Get(__: Name::class)]
    public string $name;
}

#[Key('github'), Name('GitHub')]
class Github extends Type
{

}
```

Then access singleton instance array of all descending classes as follows:

```php
$types = registries()->singletonsOf(Mapping\Type::class);

$type = registries()->singletonsOf(Mapping\Type::class)->get('github');
```
