# `/{user:slug}/...` pages

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
