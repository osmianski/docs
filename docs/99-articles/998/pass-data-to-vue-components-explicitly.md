# Pass data to Vue components explicitly

Call it an experiment, if you will, but...

Instead of [`usePage()`](https://inertiajs.com/shared-data#accessing-shared-data), do pass shared data down from the page component:

```html
<script setup>
defineProps({
    user: {
        type: Object,
        required: true,
    },
    ...
});

</script>

<template>
    ...
    <LayoutApp :user="user">
        ...
    </LayoutApp>
</template>
```
