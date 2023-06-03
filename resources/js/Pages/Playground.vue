<script setup>
import { Head } from '@inertiajs/vue3';
import LayoutPlayground from "@/Components/LayoutPlayground.vue";
import {__} from "@/functions";

</script>

<template>
    <Head :title="__('Playground')" />

    <LayoutPlayground>
    </LayoutPlayground>
</template>
