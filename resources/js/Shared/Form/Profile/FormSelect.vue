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
    options: {
        type: Array,
        required: true,
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
        <select :name="name" :id="idPrefix + name" v-model="form[name]"
                :required="required" :autofocus="autofocus"
                class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm max-w-lg">

            <option :selected="form[name] === null || form[name] === undefined"></option>

            <option v-for="option in options" :value="option.value" :selected="form[name] === option.value">
                {{ option.label }}
            </option>
        </select>
        <div class="mt-2" v-show="form.errors[name]">
            <p class="text-sm text-red-600">{{ form.errors[name] }}</p>
        </div>
    </div>
</template>
