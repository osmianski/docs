<script setup>

defineProps({
    title: {
        type: String,
        required: true,
    },
    description: String,
});

</script>

<template>
    <div>
        <div>
            <h3 class="text-lg font-medium leading-6 text-gray-900">{{ title }}</h3>
            <div class="mt-1 text-sm text-gray-500">
                <slot name="description" />
            </div>
        </div>

        <slot />
    </div>
</template>
