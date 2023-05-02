<script setup>
import { Head } from '@inertiajs/vue3';
import LayoutApp from "@/Components/LayoutApp.vue";
import {__} from "@/functions";

defineProps({
    user: {
        type: Object,
    },
});

</script>

<template>
    <Head :title="__('Home')" />

    <LayoutApp :user="user">
    </LayoutApp>
</template>
