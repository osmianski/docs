# JavaScript functions

* [`route()` function](#route-function)
* [`__()` function](#-function)

## `route()` function

Use the `route()` helper function to generate URLs in the client-side code:

```jsx
import {route} from "@/functions";

const href = route(`/${user.slug}/_mappings/create`, {type: type.key});
```

Unlike it’s server-side counterpart, it’s first parameter is a relative URL, not a route name.

Currently, it creates a relative URL instead of absolute URLs, which will be fixed later.

However, it does generate the query string from an object. The example above will generate `/john-doe/_mappings/create?type=github` URL.

## `__()` function

Use the `__()` helper function to translate an English string to the current locale:

```jsx
import {__} from "@/functions";

const message = __('Hello, :name!', {name: 'John Doe'});
```

Currently, it doesn't translate from the application resources. 

However, it does replace placeholders from the provided object.
