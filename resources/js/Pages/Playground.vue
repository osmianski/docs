<script setup>
import { Head, Link } from '@inertiajs/vue3';
import LayoutPlayground from "@/Components/LayoutPlayground.vue";
import {__, route} from "@/functions";
import {PuzzlePieceIcon} from '@heroicons/vue/24/outline';
import Breadcrumbs from "@/Components/Breadcrumbs.vue";

const links = [
    {
        title: __('Comboboxes'),
        href: route(`/_playground/comboboxes`),
    },
]

</script>

<template>
    <Head :title="__('Playground')" />

    <LayoutPlayground>
        <template v-slot:header>
            <Breadcrumbs :pages="[
                { name: __('Playground') },
            ]" />
            <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                {{ __('Playground')}}
            </h1>
        </template>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link v-for="link in links" :key="link.href" :href="link.href" :title="link.title" class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                <div class="flex-shrink-0">
                    <PuzzlePieceIcon class="block h-10 w-10" aria-hidden="true" />
                </div>
                <div class="min-w-0 flex-1">
                    <div class="focus:outline-none">
                        <span class="absolute inset-0" aria-hidden="true" />
                        <p class="text-sm font-medium text-gray-900">{{ link.title }}</p>
                    </div>
                </div>
            </Link>
        </div>
    </LayoutPlayground>
</template>
