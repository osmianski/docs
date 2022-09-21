<script setup>
import { Head } from '@inertiajs/inertia-vue3';
import Hero from "@/Landing/Home/Hero.vue";
import Features from "@/Landing/Home/Features.vue";
import Cta from "@/Landing/Home/Cta.vue";
</script>

<template>
    <Head>
        <title>Spot</title>
    </Head>

    <Hero />
    <Features />
    <Cta />
</template>
<script>
import Layout from "@/Layouts/Landing.vue";
export default {
    layout: Layout,
}
</script>
