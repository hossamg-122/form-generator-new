<template>
    <div>
        <Loader v-if="loading" />
        <button
            v-else
            class="flex items-center justify-center py-2 text-center w-full rounded-lg uppercase font-heading font-medium text-lg text-white disabled:text-gray-350 disabled:bg-gray-200"
            :class="customStyle"
            :disabled="isDisabled"
        >
            {{ name }}
            <div class="ml-2">
                <slot />
            </div>
        </button>
    </div>
</template>

<script lang="ts">
import Loader from './Loader.vue';

export default {
    name: 'custom-button',
    components: { Loader },
    props: {
        name: {
            type: String,
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        customStyle: {
            type: String,
        },
    },
    computed: {
        isDisabled() {
            return this.disabled;
        },
    },
};
</script>

<style scoped></style>
