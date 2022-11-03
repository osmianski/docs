<script setup>
import PageHeader from "@/Components/PageLayout/PageHeader.vue";
import PageFooter from "@/Components/PageLayout/PageFooter.vue";
</script>

<template>
    <PageHeader />
    <slot />
    <PageFooter />
</template>
