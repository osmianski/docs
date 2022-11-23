<script setup>
import {Head, useForm, Link} from '@inertiajs/inertia-vue3';
import PageLayout from "@/Layouts/PageLayout.vue";
import Form from "@/Shared/Form/Profile/Form.vue";
import FormInput from "@/Shared/Form/Profile/FormInput.vue";
import FormSelect from "@/Shared/Form/Profile/FormSelect.vue";
import FormSection from "@/Shared/Form/Profile/FormSection.vue";
import FormListbox from "@/Shared/Form/Profile/FormListbox.vue";

const props = defineProps({
    profile: Object,
    isOwner: Boolean,
    saveUrl: String,
    sourcePlatforms: Array,
    notionWorkspaces: Array,
    data: {
        type: Object,
        default: {},
    },
    profileBooksUrl: String,
});

const form = useForm(Object.assign({
    source: null,
    notion_workspace_id: null,
    notion_page_id: null,
    name: null,
    title: null,
}, props.data));

function save() {
    form.post(props.saveUrl);
}

const notionPages = [];

</script>

<template>
    <Head :title="`New Book - ${profile.name}`" />

    <PageLayout>
        <header class="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 ">
            <div class="w-full relative border-b border-gray-200 pb-5">
                <div class="md:flex md:items-center md:justify-between">
                    <h1 class="text-2xl font-medium leading-6 text-gray-900">
                        Create a new book
                    </h1>
                </div>
                <p class="mt-1 text-sm text-gray-500">
                    A book is a tree-like set of documentation pages. A book is
                    targeted at certain type of readers. A user guide or a
                    developer guide are 2 examples of books.
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
                                        class="sm:col-span-6" />

                            <FormSelect name="notion_workspace_id" label="Notion workspace" required
                                        :options="notionWorkspaces"
                                        class="sm:col-span-6" />

                            <FormListbox name="notion_page_id" label="Root page"
                                         :options="notionPages" disabled
                                         class="sm:col-span-6">
                                <template #description>
                                    <p>If only a part of the selected Notion workspace should be rendered as documentation, select the root page containing that part.</p>
                                </template>
                                <template #after>
                                    <div class="text-sm text-gray-500 ml-2" role="status">
                                        <svg class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                        <span class="">Loading Notion workspace ...</span>
                                    </div>
                                </template>
                            </FormListbox>
                        </div>
                    </FormSection>

                    <FormSection title="Book properties">
                        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <FormInput name="name" label="Name" required
                                       :leading="profile.name + '/'"
                                       class="sm:col-span-6" />

                            <FormInput name="title" label="Title" required
                                        class="sm:col-span-6" />
                        </div>
                    </FormSection>

                    <template #footer>
                        <div class="pt-5">
                            <div class="flex justify-end pb-1">
                                <Link :href="profileBooksUrl" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancel</Link>
                                <button type="submit" class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                            </div>
                        </div>
                    </template>
                </Form>
            </div>
        </main>
    </PageLayout>
</template>
