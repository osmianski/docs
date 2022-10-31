<script setup>

defineProps({
    notionAuthUrl: String,
});

</script>

<template>
    <div class="mt-10 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
        <div class="flex flex-wrap items-start justify-around">
            <div class="flex justify-center px-1">
                <a :href="notionAuthUrl">
                    <img class="h-9 sm:h-10" src="/images/notion.png" alt="Notion" />
                </a>
            </div>
            <div class="flex justify-center px-1">
                <img class="h-9 sm:h-10" src="/images/github.png" alt="GitHub" />
            </div>
        </div>
    </div>
</template>
