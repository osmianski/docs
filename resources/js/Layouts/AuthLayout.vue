<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import Logo from "@/Shared/Logo.vue";
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
            <Link :href="$page.props.homeUrl">
                <span class="sr-only">Docs</span>
                <Logo class="h-20" />
            </Link>
        </div>

        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <slot />
        </div>
    </div>
</template>
