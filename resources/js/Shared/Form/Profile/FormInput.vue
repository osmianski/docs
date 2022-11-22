<script setup>

import { inject } from 'vue'

const form = inject('form');
const idPrefix = inject('idPrefix');

defineProps({
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'text',
    },
    required: Boolean,
    autofocus: Boolean,
});

</script>

<template>
    <div>
        <label :for="idPrefix + name" class="block text-sm font-medium text-gray-700">
            {{ label }}
            <span v-if="required">*</span>
        </label>
        <div class="mt-1 text-sm text-gray-500">
            <slot name="description" />
        </div>
        <input :type="type" :name="name" :id="idPrefix + name" :autocomplete="name"
               v-model="form[name]" :required="required" :autofocus="autofocus"
               class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        <div class="mt-2" v-show="form.errors[name]">
            <p class="text-sm text-red-600">{{ form.errors[name] }}</p>
        </div>
    </div>
</template>
