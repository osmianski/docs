<script setup>
import {Head, useForm} from '@inertiajs/inertia-vue3';
import PageLayout from "@/Layouts/PageLayout.vue";
import Form from "@/Shared/Form/Profile/Form.vue";
import FormSelect from "@/Shared/Form/Profile/FormSelect.vue";
import FormSection from "@/Shared/Form/Profile/FormSection.vue";

const props = defineProps({
    profile: Object,
    isOwner: Boolean,
    saveUrl: String,
    sourcePlatforms: Array,
    data: {
        type: Object,
        default: {},
    },
});

const form = useForm(props.data);

function save() {
    form.post(props.saveUrl);
}

</script>

<template>
    <Head :title="`New Book - ${profile.name}`" />

    <PageLayout>
        <header class="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 ">
            <div class="w-full relative border-b border-gray-200 pb-5">
                <div class="md:flex md:items-center md:justify-between">
                    <h1 class="text-2xl font-medium leading-6 text-gray-900">
                        Create a new book
                    </h1>
                </div>
                <p class="mt-1 text-sm text-gray-500">
                    A book is a tree-like set of documentation pages. A book is
                    targeted at certain type of readers, for example, the user
                    guide and the developer guide.
                </p>
            </div>
        </header>

        <main>
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <Form class="sm:mx-auto sm:w-full" :data="form" @submit="save">
                    <FormSection title="Source">
                        <template #description>
                            <p class="mt-1 text-sm text-gray-500">
                                Specify where you edit the source text of the book and where it should be synced from.
                            </p>
                        </template>
                        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <FormSelect name="source" label="Platform" required
                                :options="sourcePlatforms"
                                class="sm:col-span-3" />
                        </div>
                    </FormSection>

                    <template #footer>
                        <div class="pt-5">
                            <div class="flex justify-end">
                                <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancel</button>
                                <button type="submit" class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                            </div>
                        </div>
                    </template>
                </Form>
            </div>
        </main>
    </PageLayout>
</template>