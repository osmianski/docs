<script setup>
import { Head, Link } from '@inertiajs/vue3';
import LayoutApp from "@/Components/LayoutApp.vue";
import {__, route} from "@/functions";
import ButtonWithMenu from "@/Components/ButtonWithMenu.vue";
import {MenuItem} from "@headlessui/vue";
import Breadcrumbs from "@/Components/Breadcrumbs.vue";

defineProps({
    user: {
        type: Object,
        required: true,
    },
    types: {
        type: Array,
        required: true,
    },
});

</script>

<template>
    <Head :title="__('Mappings')" />

    <LayoutApp :user="user">
        <template v-slot:header>
            <Breadcrumbs :pages="[
                { name: __('Mappings') },
            ]" />
            <div class="mt-2 md:flex md:items-center md:justify-between">
                <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                    {{ __('Mappings') }}
                </h1>
                <div class="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0 space-x-2">
                    <ButtonWithMenu :title="__('Create')" color="primary">
                        <MenuItem v-for="type in types" :key="type.key" v-slot="{ active }">
                            <Link :href="route(`/${user.slug}/_mappings/create`, {type: type.key})" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
                                {{ __(':type mapping', {type: type.name}) }}
                            </Link>
                        </MenuItem>
                    </ButtonWithMenu>
                </div>
            </div>

        </template>

    </LayoutApp>
</template>

