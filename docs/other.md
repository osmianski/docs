# Other

Here is some unsorted stuff that haven't found its place in the documentation yet.

Table of contents:

- [Laravel Pint rules and pre-commit hook](#laravel-pint-rules-and-pre-commit-hook)
- [Disabling Vite port mapping in Laravel Sail configuration](#disabling-vite-port-mapping-in-laravel-sail-configuration)
- [Avoid Inertia persistent layout](#avoid-inertia-persistent-layout)
- [Componentitize later](#componentitize-later)
- [Don’t expose unnecessary information](#dont-expose-unnecessary-information)
- [Don’t expose model IDs](#dont-expose-model-ids)
- [`/{user:slug}/...` pages](#userslug-pages)
- [Client-side URL generation](#client-side-url-generation)
- [Client-side translations](#client-side-translations)
- [Customizing Laravel Fortify](#customizing-laravel-fortify)

## Laravel Pint rules and pre-commit hook

1. Install [Laravel Pint](https://laravel.com/docs/10.x/pint#main-content).
2. Add `pint.json`:

    ```json
    {
        "preset": "laravel",
        "rules": {
            "control_structure_continuation_position": {
                "position": "next_line"
            }
        }
    }
    ```

3. Create `git-hooks/pre-commit`:

    ```bash
    #!/bin/sh
    
    # Any subsequent(*) commands which fail will cause the shell script to exit immediately
    set -e
    
    # Fix PHP styles
    vendor/bin/pint --dirty
    
    # Include changes made by Pint into this commit. Without this line, the style changes
    # will stay uncommitted.
    git add .
    ```

4. Install the hook:

    ```bash
    chmod a+x git-hooks/*
    cp git-hooks/* .git/hooks/
    ```

5. Add this to the [installation instructions](https://github.com/osmianski/docs).

## Disabling Vite port mapping in Laravel Sail configuration

The `sail up` command may fail with the following error:

```
Error starting userland proxy: listen tcp4 0.0.0.0:5173: bind: address already in use
```

It happens if there `npm run dev` is already running on some other project.

To fix this error, disable Vite port mapping in the `docker-compose.yml`:

```yaml
...
services:
    laravel.test:
        ...
        ports:
            ...
            #- '${VITE_PORT:-5173}:${VITE_PORT:-5173}'
```

Now, `sail up` will work.

## Avoid Inertia persistent layout

Don’t use Inertia persistent layout as a page layout component.

Although it’s a “layout”, it’s mission is to prevent re-creation of certain HTML elements on the page, for example, the video player on Laracasts. And it’s perfect for such stuff.

For a page layout, it’s too limited. The deal breaker for me was suppoting only one slot.

Instead, use a standard Vue component, for example, the `[LayoutApp` component](https://github.com/osmianski/docs/blob/v0.3/resources/js/Components/LayoutApp.vue):

```html
<script setup>
import { Head } from '@inertiajs/vue3';
import LayoutApp from "@/Components/LayoutApp.vue";
import {__} from "@/functions";
</script>

<template>
    <Head :title="__('Settings')" />

    <LayoutApp>
        <template v-slot:header>
            <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">{{ __('Settings')}}</h1>
        </template>

    </LayoutApp>
</template>
```

## Componentitize later

The DRY principle suggests extracting the repeated markup into components.

And it’s fine, unless it’s not.

In the early days of your application, the markup is very dynamic, and componentization is just too early. Do have long page components. The only exception here is the layout component which you do want to extract early.

This way, you can stay agile and experiment.

The early days last longer than you think. They are over when you’ve answered yourself all the small UX questions, and the unimplemented part of the app is a repetition of the practices established in the already implemented parts.

Typically, at this moment you’ve implemented 1/4 to 1/2 of the whole scope. Not less.

Only then review the markup, identify repeating patterns, extract components, document their usage, provide sample pages, write tests.

## Don’t expose unnecessary information

It may be tempting to retrieve a model and send it all to the client.

Don’t do that or otherwise you may expose sensitive information. Instead of thinking what information is sensitive and hiding it from the client, only expose what’s strictly necessary.

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

If you expose a column in one place of your application but not the other, don’t `SELECT *` and instead select the columns that only need to be exposed.

## Don’t expose model IDs

And don’t expose model IDs. If you need to reference the model later, use the `uuid` or `slug` unique columns.

## `/{user:slug}/...` pages

Use a user slug in the URL for better UX as it allows user page URL sharing.

Here are the steps to implement it:

1. Define a route in the `routes/web.php`:

    ```php
    Route::get('/{user:slug}/_settings', [UserSettingsController::class, 'show'])->middleware('auth');
    ```

2. Bind the route parameter to a model and check if the current user is authorized for the route action in the controller method:

    ```php
    public function view(User $user): Response
    {
        $this->authorize('view', $user);
    
        return inertia('UserSettings');
    }
    ```

3. Create a policy class for the model:

    ```bash
    php artisan make:policy UserPolicy --model=User
    ```

4. Implement policy for the view action in the `app/Policies/UserPolicy.php`:

    ```php
    ...
    class UserPolicy
    {
    		...
        public function view(User $user, User $model): bool
        {
    				// Only the user can see his settings
            return $user->id === $model->id;
        }
    		...
    }
    ```

5. Bind the policy to the model in the `app/Providers/AuthServiceProvider.php`:

    ```php
    class AuthServiceProvider extends ServiceProvider
    {
        ...
        protected $policies = [
            User::class => UserPolicy::class,
    		    ...
        ];
        ...
    }
    ```

6. Generate URLs with the user’s slug:

    ```jsx
    import { computed } from 'vue';
    import { usePage } from '@inertiajs/vue3';
    import {route} from "@/functions";
    
    const page = usePage();
    const user = computed(() => page.props.user);
    const href = route(`/${user.value.slug}/_settings`);
    ```

## Client-side URL generation

Use the `route()` helper function:

```jsx
import {route} from "@/functions";

const href = route('/');
```

Currently, it doesn’t do anything. Later, it will create absolute URLs, generate the query string from an array of parameters, and more.

Unlike it’s server-side counterpart, it’s first parameter is a relative URL, not a route name.

## Client-side translations

Use the `__()` helper function:

```jsx
import {__} from "@/functions";

const message = __('Hello, world!');
```

Currently, it doesn’t do anything. Later, it will find the translation in the application resources and replace placeholders from an array of parameters.

## Customizing Laravel Fortify

Laravel Fortify provides you the best-of-breed implementation of user authentication. It may be a bit confusing at the beginning, but it’s worth the effort.

Here is how it’s used it in the `docs` project.

1. Install Laravel Fortify:

    ```bash
    composer require laravel/fortify
    php artisan vendor:publish --provider="Laravel\Fortify\FortifyServiceProvider"
    php artisan migrate
    ```

2. Customize URLs in the `fortify.paths` configuration section. The `docs` project reserves all the top-level paths to user slugs, so all the other URLs by convention start with `_`:

    ```php
    'paths' => [
        'login' => '/_sign-in',
        'register' => '/_sign-up',
        'logout' => '/_sign-out',
        'password' => [
            'request' => '/_forgot-password',
            'email' => '/_forgot-password',
            'update' => '/_reset-password',
            'reset' => '/_reset-password',
            'confirm' => '/osmianski/_confirm-password',
            'confirmation' => '/osmianski/_confirmed-password-status',
        ],
        'two-factor' => [
            'login' => '/_two-factor-challenge',
            'confirm' => '/osmianski/_confirmed-two-factor-authentication',
            'enable' => '/osmianski/_two-factor-authentication',
            'disable' => '/osmianski/_two-factor-authentication',
            'qr-code' => '/osmianski/_two-factor-qr-code',
            'recovery-codes' => '/osmianski/_two-factor-recovery-codes',
            'secret-key' => '/osmianski/_two-factor-secret-key',
        ],
        'user-password' => [
            'update' => '/osmianski/_password',
        ],
        'user-profile-information' => [
            'update' => '/osmianski/_profile-information',
        ],
    
        'verify-email' => '/_verify-email',
    ],
    ```

3. Provide the rendering information in the `app/Providers/FortifyServiceProvider.php`:

    ```php
    ...
    class FortifyServiceProvider extends ServiceProvider
    {
    		...
        public function boot(): void
        {
            ...
            Fortify::loginView(function () {
                return inertia('SignIn');
            });
        }
    }
    ```
