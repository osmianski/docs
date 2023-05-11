<script setup>
import { Head, Link } from '@inertiajs/vue3';
import {__, route} from "@/functions";

defineProps({
    user: {
        type: Object,
        required: true,
    },
    githubUrl: {
        type: String,
        required: true,
    },
});

</script>

<template>
    <Head :title="__('Authorize accessing your GitHub account')" />

    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link :href="route('/')">
                <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            </Link>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {{ __('Authorize accessing your GitHub account') }}
            </h2>
        </div>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-sm space-y-10">
        <p class="block text-sm leading-6 text-gray-900">
            {{ __('Before going on, click on the button below and allow us to fetch a list of your repositories from your GitHub account.') }}
        </p>
        <div>
            <a :href="githubUrl" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {{ __('Go to GitHub') }}
            </a>
        </div>
    </div>
</template>
