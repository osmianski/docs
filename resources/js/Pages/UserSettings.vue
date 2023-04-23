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

