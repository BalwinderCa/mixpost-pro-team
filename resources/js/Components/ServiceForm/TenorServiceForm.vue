<script setup>
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import {router} from "@inertiajs/vue3";
import useNotifications from "@/Composables/useNotifications";
import Panel from "@/Components/Surface/Panel.vue";
import Input from "@/Components/Form/Input.vue";
import PrimaryButton from "@/Components/Button/PrimaryButton.vue";
import Error from "@/Components/Form/Error.vue";
import ReadDocHelp from "@/Components/Util/ReadDocHelp.vue";
import Checkbox from "../Form/Checkbox.vue";
import Flex from "../Layout/Flex.vue";
import Label from "../Form/Label.vue";
import Tenor from "../../Icons/Tenor.vue";
import LabelSuffix from "../Form/LabelSuffix.vue";
import HorizontalGroup from "../Layout/HorizontalGroup.vue";

const {t: $t} = useI18n()

const props = defineProps({
    form: {
        required: true,
        type: Object
    }
})

const {notify} = useNotifications();
const errors = ref({});

const save = () => {
    errors.value = {};

    router.put(route('mixpost.services.update', {service: 'tenor'}), props.form, {
        preserveScroll: true,
        onSuccess() {
            notify('success', $t('service.service_saved', {service: 'Tenor'}));
        },
        onError: (err) => {
            errors.value = err;
        },
    });
}
</script>
<template>
    <Panel>
        <template #title>
            <div class="flex items-center">
                <span class="mr-xs"><Tenor/></span>
                Tenor
            </div>
        </template>

        <template #description>
            <p>{{ $t('service.tenor.use_gif') }}</p>
            <p>
                <a href="https://console.cloud.google.com/" class="link" target="_blank">
                    {{ $t('service.create_app', {name: 'Google Console'}) }}</a>.
            </p>
            <ReadDocHelp :href="`${$page.props.mixpost.docs_link}/services/media/tenor`"
                         class="mt-xs"/>
        </template>

        <HorizontalGroup class="mt-lg">
            <template #title>
                <label for="client_id">API Key <LabelSuffix danger>*</LabelSuffix></label>
            </template>

            <Input v-model="form.configuration.client_id"
                   :error="errors['configuration.client_id'] !== undefined"
                   type="text"
                   id="client_id"
                   autocomplete="off"/>

            <template #footer>
                <Error :message="errors['configuration.client_id']"/>
            </template>
        </HorizontalGroup>

        <HorizontalGroup class="mt-lg">
            <template #title>
                {{ $t('general.status') }}
            </template>

            <Flex :responsive="false" class="items-center">
                <Checkbox v-model:checked="form.active" id="active"/>
                <Label for="active" class="!mb-0">{{ $t('general.active') }}</Label>
            </Flex>

            <template #footer>
                <Error :message="errors.active"/>
            </template>
        </HorizontalGroup>

        <PrimaryButton @click="save" class="mt-lg">{{ $t('general.save') }}</PrimaryButton>
    </Panel>
</template>
