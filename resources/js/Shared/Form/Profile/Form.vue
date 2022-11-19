<script setup>

import { provide } from 'vue';

const props = defineProps({
    idPrefix: {
        type: String,
        default: '',
    },
    data: Object,
});

const emit = defineEmits(['submit']);

provide('form', props.data);
provide('idPrefix', props.idPrefix);

function submit() {
    emit('submit');
}
</script>

<template>
    <form @submit.prevent="submit" class="space-y-8 divide-y divide-gray-200">
        <div class="space-y-8 divide-y divide-gray-200">
            <slot />
        </div>

        <slot name="footer" />
    </form>
</template>
