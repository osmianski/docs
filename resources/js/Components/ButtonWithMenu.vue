<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import {__, route} from "@/functions";

defineProps({
    title: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        validator(value) {
            return ['primary'].includes(value)
        },
    },
});

</script>

<template>
    <div class="inline-flex rounded-md shadow-sm">
        <button type="button" :class="[
            'relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold ring-1 ring-inset focus:z-10',
            color === 'primary' ? 'bg-indigo-600 text-white ring-gray-600 hover:bg-indigo-500' : '',
            !color ? 'bg-white text-gray-900 ring-gray-300 hover:bg-gray-50' : '',
        ]">
            {{ title }}
        </button>
        <Menu as="div" class="relative -ml-px block">
            <MenuButton :class="[
                'relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset focus:z-10',
                color === 'primary' ? 'bg-indigo-600 text-white ring-gray-600 hover:bg-indigo-500' : '',
                !color ? 'bg-white text-gray-400 ring-gray-300 hover:bg-gray-50' : '',
            ]">
                <span class="sr-only">{{ __('Open options') }}</span>
                <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
            </MenuButton>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 -mr-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1">
                        <slot />
                    </div>
                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>
