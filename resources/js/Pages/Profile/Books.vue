<script setup>
import { Head } from '@inertiajs/inertia-vue3';
import PageLayout from "@/Layouts/PageLayout.vue";

defineProps({
    profile: Object,
    isOwner: Boolean,
});
</script>

<template>
    <Head :title="`${profile.name} Books`" />
    <PageLayout>
        <header>
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    {{ profile.name }} Books
                </h2>
            </div>
        </header>

        <main>
            <p class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                Books go here
            </p>
        </main>
    </PageLayout>
</template>
