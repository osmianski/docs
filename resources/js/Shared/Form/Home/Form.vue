<script setup>

import { provide } from 'vue';

const props = defineProps({
    data: Object,
});

const emit = defineEmits(['submit']);

provide('form', props.data);

function submit() {
    emit('submit');
}
</script>

<template>
    <div class="bg-white sm:max-w-md sm:overflow-hidden sm:rounded-lg border-2 border-gray-200">
        <div class="px-4 py-8 sm:px-10">
            <div class="mt-6">
                <form @submit.prevent="submit" class="space-y-6">
                    <slot />
                </form>
            </div>
        </div>
        <slot name="footer" />
    </div>

</template>
