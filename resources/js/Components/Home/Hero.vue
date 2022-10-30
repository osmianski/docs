<script setup>

import { useForm } from '@inertiajs/inertia-vue3';
import InputError from '@/Components/InputError.vue';

const props = defineProps({
    notionAuthUrl: String,
    registerUrl: String,
});

const signUpForm = useForm({
    name: null,
    email: null,
    password: null,
});

const signUp = () => {
    signUpForm.post(props.registerUrl);
};
</script>

<template>
    <div class="relative overflow-hidden">
        <div class="relative pt-6 pb-16 sm:pb-24">
            <main class="mt-16 sm:mt-24">
                <div class="mx-auto max-w-7xl">
                    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div class="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                            <div>
                                <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl">
                                    If it's not documented, it doesn't exist.
                                </h1>
                                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                    Turn Notion workspaces and GitHub repositories into beautiful
                                    documentation websites.
                                </p>
                                <p class="mt-8 text-base font-semibold sm:mt-10">
                                    Click on a logo and get started with
                                </p>
                                <div class="mt-10 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                                    <div class="flex flex-wrap items-start justify-around">
                                        <div class="flex justify-center px-1">
                                            <a :href="notionAuthUrl">
                                                <img class="h-9 sm:h-10" src="/images/notion.png" alt="Notion" />
                                            </a>
                                        </div>
                                        <div class="flex justify-center px-1">
                                            <img class="h-9 sm:h-10" src="/images/github.png" alt="GitHub" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                            <div class="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg border-2 border-gray-200">
                                <div class="px-4 py-8 sm:px-10">
                                    <div class="mt-6">
                                        <form @submit.prevent="signUp" method="POST" class="space-y-6">
                                            <div>
                                                <label for="name" class="sr-only">User name</label>
                                                <input type="text" name="name" id="name" autocomplete="name"
                                                    v-model="signUpForm.name" placeholder="User name" required autofocus
                                                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                                <InputError class="mt-2" :message="signUpForm.errors.name" />
                                            </div>

                                            <div>
                                                <label for="email" class="sr-only">Email</label>
                                                <input type="email" name="email" id="email" autocomplete="email"
                                                    v-model="signUpForm.email" placeholder="Email" required
                                                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                                <InputError class="mt-2" :message="signUpForm.errors.email" />
                                            </div>

                                            <div>
                                                <label for="password" class="sr-only">Password</label>
                                                <input id="password" name="password" type="password"
                                                    v-model="signUpForm.password" placeholder="Password" autocomplete="current-password" required
                                                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                                <InputError class="mt-2" :message="signUpForm.errors.password" />
                                            </div>

                                            <div>
                                                <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Create your account, it's free!</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10">
                                    <p class="text-xs leading-5 text-gray-500">By signing up, you agree to our <a href="#" class="font-medium text-gray-900 hover:underline">Terms</a>, <a href="#" class="font-medium text-gray-900 hover:underline">Data Policy</a> and <a href="#" class="font-medium text-gray-900 hover:underline">Cookies Policy</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
