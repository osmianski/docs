<script setup>

import { useForm } from '@inertiajs/inertia-vue3';
import HeroSectionIntegrationList from "@/Components/Home/Home/HeroSectionIntegrationList.vue";
import Form from "@/Shared/Form/Home/Form.vue";
import FormInput from "@/Shared/Form/Home/FormInput.vue";

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
                                <HeroSectionIntegrationList
                                    :notionAuthUrl="notionAuthUrl"
                                />
                            </div>
                        </div>
                        <div class="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                            <Form class="sm:mx-auto sm:w-full" :data="signUpForm" @submit="signUp">
                                <FormInput name="name" label="User name" required autofocus />
                                <FormInput name="email" label="Email" type="email" required />
                                <FormInput name="password" label="Password" type="password" required />

                                <div>
                                    <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        Create your account, it's free!
                                    </button>
                                </div>

                                <template #footer>
                                    <div class="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10">
                                        <p class="text-xs leading-5 text-gray-500">
                                            By signing up, you agree to our
                                            <a href="#" class="font-medium text-gray-900 hover:underline">Terms</a>,
                                            <a href="#" class="font-medium text-gray-900 hover:underline">Data Policy</a> and
                                            <a href="#" class="font-medium text-gray-900 hover:underline">Cookies Policy</a>.
                                        </p>
                                    </div>
                                </template>
                            </Form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
