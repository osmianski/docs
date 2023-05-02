# Avoid Inertia persistent layout

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
