<template>
    <div class="grid grid-cols-12 gap-5" :class="formStyle">
        <slot />
    </div>
    <div v-if="showButtons" class="flex items-center justify-end mt-8">
        <CustomButton
            v-if="!isLoading"
            class="mr-4"
            customStyle="capitalize px-16 bg-gray-225"
            @click="$emit('resetForm')"
            :name="resetButtonText"
        />
        <CustomButton
            :loading="isLoading"
            customStyle="capitalize px-16 bg-primary"
            :name="submitButtonText"
            :disabled="isDisabled"
            @click="$emit('saving')"
        />
    </div>
</template>

<script lang="ts">
import CustomButton from './atoms/CustomButton.vue';
export default {
    components: {
        CustomButton,
    },

    props: {
        submitButtonText: {
            type: String,
            default: 'Save Changes',
        },
        resetButtonText: {
            type: String,
            default: 'Cancel Changes',
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
        showButtons: {
            type: Boolean,
            default: true,
        },
        formStyle: {
            type: String,
        },
    },
    emits: ['saving', 'resetForm'],
};
</script>

<style scoped></style>
