<script setup>
import PageHeader from "@/Components/Home/Layout/PageHeader.vue";
import PageFooter from "@/Components/Home/Layout/PageFooter.vue";
</script>

<template>
    <PageHeader />
    <slot />
    <PageFooter />
</template>
