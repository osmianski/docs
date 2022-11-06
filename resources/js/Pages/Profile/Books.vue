<script setup>
import { Head } from '@inertiajs/inertia-vue3';
import PageLayout from "@/Layouts/PageLayout.vue";

const props = defineProps({
    profile: Object,
    isOwner: Boolean,
    profileUrl: String,
    profileBooksUrl: String,
    notionAuthUrl: String,
});

const tabs = [
    { name: 'Profile', href: props.profileUrl, current: false },
    { name: 'Books', href: props.profileBooksUrl, current: true },
]
</script>

<template>
    <Head :title="`${profile.name} Books`" />

    <PageLayout>
        <header class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 ">
            <div class="w-full relative border-b border-gray-200 pb-5 sm:pb-0">
                <div class="md:flex md:items-center md:justify-between">
                    <h1 class="text-lg font-medium leading-6 text-gray-900">
                        {{ profile.name }}
                    </h1>
                    <div class="mt-3 flex md:absolute md:top-3 md:right-0 md:mt-0">
                        <a :href="notionAuthUrl" class="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Create</a>
                    </div>
                </div>
                <div class="mt-4">
                    <div class="sm:hidden">
                        <label for="current-tab" class="sr-only">Select a tab</label>
                        <select id="current-tab" name="current-tab" class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
                        </select>
                    </div>
                    <div class="hidden sm:block">
                        <nav class="-mb-px flex space-x-8">
                            <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm']" :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <p class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                Books go here
            </p>
        </main>
    </PageLayout>
</template>
