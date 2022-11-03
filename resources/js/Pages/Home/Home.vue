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
    <PageLayout>
        <Head>
            <title>Home</title>
        </Head>

        <HeroSection :notionAuthUrl="notionAuthUrl" :registerUrl="registerUrl" />
        <FeatureList />
        <CallToAction />
    </PageLayout>
</template>
