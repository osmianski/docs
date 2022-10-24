<script setup>
import { Head } from '@inertiajs/inertia-vue3';
import Hero from "@/Components/Home/Hero.vue";
import Features from "@/Components/Home/Features.vue";
import Cta from "@/Components/Home/Cta.vue";

defineProps({
    notionAuthUrl: String,
    registerUrl: String,
});

</script>

<template>
    <Head>
        <title>Home</title>
    </Head>

    <Hero :notionAuthUrl="notionAuthUrl" :registerUrl="registerUrl" />
    <Features />
    <Cta />
</template>
<script>
import Layout from "@/Layouts/LandingLayout.vue";
export default {
    layout: Layout,
}
</script>
