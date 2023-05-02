# Don’t over-expose data

It may be tempting to retrieve a model and send it all to the client.

Don’t do that, or otherwise you may expose sensitive information. Instead of thinking what information is sensitive and hiding it from the client, only expose what’s strictly necessary.

## Hide model properties

List columns that are never necessary in the model’s `hidden` property. Start by listing all columns and remove them from here when you do need to expose them:

```php
...
class User extends Authenticatable
{
    ...
    protected $hidden = [
        'id',
        'created_at',
        'email_verified_at',
        'password',
        'remember_token',
        'updated_at',
        'two_factor_confirmed_at',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];
		...
}
```

## Select only what's displayed 

If you expose a column in one place of your application but not the other, don’t `SELECT *` and instead select the columns that only need to be exposed.

## Don’t expose model IDs

And don’t expose model IDs. If you need to reference the model later, use the `uuid` or `slug` unique columns.
