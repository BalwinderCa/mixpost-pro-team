<script setup>
import {inject, onMounted} from "vue";
import useMedia from "@/Composables/useMedia";
import useNotifications from "@/Composables/useNotifications";
import UploadMedia from "@/Components/Media/UploadMedia.vue";
import MediaSelectable from "@/Components/Media/MediaSelectable.vue";
import MediaFile from "@/Components/Media/MediaFile.vue";
import Masonry from "@/Components/Layout/Masonry.vue";
import SectionTitle from "@/Components/DataDisplay/SectionTitle.vue";

const workspaceCtx = inject('workspaceCtx');

const props = defineProps({
    columns: {
        type: Number,
        default: 3
    }
})

const {notify} = useNotifications();

const {
    page,
    items,
    endlessPagination,
    selected,
    toggleSelect,
    deselectAll,
    removeItems,
    isSelected,
    createObserver
} = useMedia('mixpost.media.fetchMedia', {workspace: workspaceCtx.id});

onMounted(() => {
    createObserver();
});

defineExpose({selected, deselectAll, removeItems});
</script>

<template>
    <div :class="{'mt-lg': items.length}">
        <!-- Adding the link to Healthinomics here -->
        <div class="mb-4 text-primary-500 flex items-center border-b-2 border-gray-200 pb-xs mr-md rtl:mr-0 rtl:ml-md last:mr-0 rtl:last:ml-0 font-medium transition-colors ease-in-out duration-200">
            <a href="https://www.healthinomics.com/" target="_blank" rel="noopener noreferrer">
                Visit Healthinomics
            </a>
        </div>

        <template v-if="items.length">
            <SectionTitle class="mb-4">{{ $t('media.healthnomics_library') }}</SectionTitle>

            <Masonry :items="items" :columns="columns">
                <template #default="{item}">
                    <MediaSelectable v-if="item" :active="isSelected(item)" @click="toggleSelect(item)">
                        <MediaFile :media="item"/>
                    </MediaSelectable>
                </template>
            </Masonry>
        </template>
        <div ref="endlessPagination" class="-z-10 w-full"/>
    </div>
</template>
