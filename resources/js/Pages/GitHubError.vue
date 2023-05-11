<script setup>
import { Head, Link } from '@inertiajs/vue3';
import {__, route} from "@/functions";

defineProps({
    error: {
        type: Object,
        required: true,
    },
});

</script>

<template>
    <Head :title="__('GitHub authorization error')" />

    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link :href="route('/')">
                <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            </Link>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {{ __('GitHub authorization error') }}
            </h2>
        </div>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-sm space-y-10">
        <p class="block text-sm font-medium leading-6 text-gray-900">
            {{ error.error }}
        </p>
        <p class="block text-sm leading-6 text-gray-900">
            {{ error.error_description }}
        </p>
        <a :href="error.error_uri" target="_blank" class="block text-sm leading-6 text-gray-900 underline text-indigo-600">
            {{ __('See GitHub documentation') }}
        </a>
    </div>
</template>
