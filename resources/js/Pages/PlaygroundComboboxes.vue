<script setup>
import { Head } from '@inertiajs/vue3';
import LayoutPlayground from "@/Components/LayoutPlayground.vue";
import {__, route} from "@/functions";
import Breadcrumbs from "@/Components/Breadcrumbs.vue";

</script>

<template>
    <Head :title="__('Comboboxes') + ' | ' + __('Playground')" />

    <LayoutPlayground>
        <template v-slot:header>
            <Breadcrumbs :pages="[
                { name: __('Playground'), href: route('/_playground') },
                { name: __('Comboboxes') },
            ]" />
            <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                {{ __('Comboboxes')}}
            </h1>
        </template>
    </LayoutPlayground>
</template>
