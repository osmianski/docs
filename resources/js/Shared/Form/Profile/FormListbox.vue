<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { inject } from 'vue'

const form = inject('form');
const idPrefix = inject('idPrefix');

const props = defineProps({
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
        //required: true,
    },
    required: Boolean,
    autofocus: Boolean,
    disabled: Boolean,
});

let allOptions = [{ value: null, label: ''}].concat(props.options || []);

const selected = ref(allOptions[0])

</script>

<template>
    <Listbox as="div" v-model="selected" :disabled="disabled">
        <ListboxLabel class="block text-sm font-medium text-gray-700">
            {{ label }}
            <span v-if="required">*</span>
        </ListboxLabel>
        <div class="mt-1 text-sm text-gray-500">
            <slot name="description" />
        </div>
        <div class="flex items-center">
            <div class="grow relative mt-1 max-w-lg">
                <ListboxButton class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                    <span class="block truncate h-5">{{ selected.label }}</span>
                    <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <ListboxOption as="template" v-for="option in allOptions" :key="option.value" :value="option" v-slot="{ active, selected }">
                            <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                                <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate h-5']">{{ option.label }}</span>

                                <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
            <slot name="after"></slot>
        </div>
        <div class="mt-2" v-if="form.errors[name]">
            <p class="text-sm text-red-600">{{ form.errors[name] }}</p>
        </div>
    </Listbox>
</template>
