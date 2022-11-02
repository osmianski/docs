<script setup>
// based on https://tailwindui.com/components/marketing/elements/headers#component-1c0390a81b16cf5028aeff08be955766

import { Popover, PopoverButton, PopoverPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, BellIcon, UserIcon } from '@heroicons/vue/24/outline/index'
import { Link, usePage } from '@inertiajs/inertia-vue3'
import Logo from "@/Shared/Logo.vue";

const userNavigation = [
    { name: 'Your Profile', href: usePage().props.value.profileUrl },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: usePage().props.value.logoutUrl, method: 'post', as: 'button' },
];

</script>

<template>
    <Popover class="relative bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
            <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <Link :href="$page.props.homeUrl">
                        <span class="sr-only">Docs</span>
                        <Logo class="h-8 sm:h-10" />
                    </Link>
                </div>
                <div class="-my-2 -mr-2 md:hidden">
                    <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span class="sr-only">Open menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                </div>
                <div v-if="$page.props.auth.user" class="hidden sm:ml-6 sm:flex sm:items-center">
                    <button type="button" class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="sr-only">View notifications</span>
                        <BellIcon class="h-6 w-6" aria-hidden="true" />
                    </button>

                    <!-- Profile dropdown -->
                    <Menu as="div" class="relative ml-3">
                        <div>
                            <MenuButton class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <span class="sr-only">Open user menu</span>
                                <UserIcon class="h-6 w-6" aria-hidden="true" />
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                    <Link :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" :method="item.method" :as="item.as">
                                        {{ item.name }}
                                    </Link>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
                <div v-else class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                    <Link :href="$page.props.loginUrl" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</Link>
                    <Link :href="$page.props.registerUrl" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</Link>
                </div>
            </div>
        </div>

        <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-10">
                <div class="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="px-5 pt-5 pb-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <Logo class="h-8" />
                            </div>
                            <div class="-mr-2">
                                <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span class="sr-only">Close menu</span>
                                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                </PopoverButton>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-6 py-6 px-5">
                        <div v-if="$page.props.auth.user">
                            <Link v-for="item in userNavigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900" :method="item.method" :as="item.as">
                                {{ item.name }}
                            </Link>
                        </div>
                        <div v-else>
                            <Link :href="$page.props.registerUrl" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</Link>
                            <p class="mt-6 text-center text-base font-medium text-gray-500">
                                Existing customer?
                                {{ ' ' }}
                                <Link :href="$page.props.loginUrl" class="text-indigo-600 hover:text-indigo-500">Sign in</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>
