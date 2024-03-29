<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import {__, route} from "@/functions";
import { ExclamationCircleIcon } from '@heroicons/vue/24/solid';

const form = useForm({
    email: null,
    password: null,
});

</script>

<template>
    <Head :title="__('Sign in')" />

    <!-- https://tailwindui.com/components/application-ui/forms/sign-in-forms -->
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link :href="route('/')">
                <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            </Link>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {{ __('Sign in to your account') }}
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="form.post('/_sign-in')" class="space-y-6">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                        {{ __('Email address)') }}
                    </label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <input v-model="form.email" id="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        <div v-if="form.errors.email" class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
                        </div>
                    </div>
                    <p v-if="form.errors.email" class="mt-2 text-sm text-red-600" id="email-error">
                        {{ form.errors.email }}
                    </p>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
                            {{ __('Password') }}
                        </label>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">{{ __('Forgot password?') }}</a>
                        </div>
                    </div>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <input v-model="form.password" id="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        <div v-if="form.errors.password" class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
                        </div>
                    </div>
                    <p v-if="form.errors.password" class="mt-2 text-sm text-red-600" id="email-error">
                        {{ form.errors.password }}
                    </p>
                </div>

                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {{ __('Sign in') }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
