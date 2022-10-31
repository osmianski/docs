<script setup>
import { Head } from '@inertiajs/inertia-vue3';
import HeroSection from "@/Components/Home/Home/HeroSection.vue";
import FeatureList from "@/Components/Home/Home/FeatureList.vue";
import CallToAction from "@/Components/Home/Home/CallToAction.vue";

defineProps({
    notionAuthUrl: String,
    registerUrl: String,
});

</script>

<template>
    <Head>
        <title>Home</title>
    </Head>

    <HeroSection :notionAuthUrl="notionAuthUrl" :registerUrl="registerUrl" />
    <FeatureList />
    <CallToAction />
</template>
<script>
import HomeLayout from "@/Layouts/HomeLayout.vue";
export default {
    layout: HomeLayout,
}
</script>
