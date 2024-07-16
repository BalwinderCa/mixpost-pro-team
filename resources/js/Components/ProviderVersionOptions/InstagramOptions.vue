<script setup>
import Radio from "@/Components/Form/Radio.vue";
import ProviderOptionWrap from "@/Components/ProviderVersionOptions/ProviderOptionWrap.vue";
import {onMounted, ref, watch} from "vue";

const props = defineProps(['options', 'activeVersion', 'versions'])

const postTypeDisabled = ref(false);

const validate = () => {
    const hasVideo = props.versions[props.activeVersion].content.some(contentItem =>
        contentItem.media.some(file => file.is_video === true)
    );

    if (hasVideo) {
        postTypeDisabled.value = true;

        if (props.options.type === 'post') {
            props.options.type = 'reel';
        }

        return;
    }

    postTypeDisabled.value = false;
}

watch(props.versions, () => {
    validate();
})

onMounted(() => {
    validate();
})
</script>
<template>
    <ProviderOptionWrap :title="$t('service.provider_options', {provider: 'Instagram'})" provider="instagram">
        <div>
            <div class="flex items-center space-x-sm">
                <label>
                    <Radio v-model:checked="options.type" :disabled="postTypeDisabled" @change="validate" value="post"/>
                    {{ $t('service.meta.post') }}
                </label>
                <label>
                    <Radio v-model:checked="options.type" @change="validate" value="reel"/>
                    {{ $t('service.meta.reel') }}
                </label>
                <label>
                    <Radio v-model:checked="options.type" @change="validate" value="story"/>
                    {{ $t('service.meta.story') }}
                </label>
            </div>
        </div>
    </ProviderOptionWrap>
</template>
