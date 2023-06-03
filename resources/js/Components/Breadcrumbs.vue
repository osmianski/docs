<script setup>
import { Link } from '@inertiajs/vue3';
import { HomeIcon } from '@heroicons/vue/20/solid'
import {route} from "@/functions";

defineProps({
    pages: {
        type: Array,
    },
});

</script>

<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
            <li>
                <div>
                    <Link :href="route('/')" class="text-gray-400 hover:text-gray-500">
                        <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                        <span class="sr-only">Home</span>
                    </Link>
                </div>
            </li>
            <li v-for="page in pages" :key="page.name">
                <div class="flex items-center">
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                    <Link v-if="page.href" :href="page.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">{{ page.name }}</Link>
                    <span v-else class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page">{{ page.name }}</span>
                </div>
            </li>
        </ol>
    </nav>
</template>
