# Customizing Laravel Fortify

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
