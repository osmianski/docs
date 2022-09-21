<script setup>
import Header from "@/Landing/Shared/Header.vue";
import Footer from "@/Shared/Footer.vue";
</script>

<template>
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</template>
