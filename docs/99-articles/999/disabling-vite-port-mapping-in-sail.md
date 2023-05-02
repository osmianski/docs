# Disabling Vite port mapping in Laravel Sail configuration

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

