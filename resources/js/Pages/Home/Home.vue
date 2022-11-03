<script setup>
import { Head } from '@inertiajs/inertia-vue3';
import HeroSection from "@/Components/Home/Home/HeroSection.vue";
import FeatureList from "@/Components/Home/Home/FeatureList.vue";
import CallToAction from "@/Components/Home/Home/CallToAction.vue";
import PageLayout from "@/Layouts/PageLayout.vue";

defineProps({
    notionAuthUrl: String,
    registerUrl: String,
});

</script>

<template>
    <Head title="Home" />

    <PageLayout>
        <HeroSection :notionAuthUrl="notionAuthUrl" :registerUrl="registerUrl" />
        <FeatureList />
        <CallToAction />
    </PageLayout>
</template>
