<script setup>
import { Head } from '@inertiajs/vue3';
import LayoutApp from "@/Components/LayoutApp.vue";
import {__, route} from "@/functions";
import Breadcrumbs from "@/Components/Breadcrumbs.vue";

defineProps({
    user: {
        type: Object,
        required: true,
    },
});

</script>

<template>
    <Head :title="__('New GitHub mapping') + ' | ' + __('Mappings')" />

    <LayoutApp :user="user">
        <template v-slot:header>
            <Breadcrumbs :pages="[
                { name: __('Mappings'), href: route(`/${user.slug}/_mappings`), },
                { name: __('New GitHub mapping') },
            ]" />
            <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                {{ __('New GitHub mapping')}}
            </h1>
        </template>

    </LayoutApp>
</template>

