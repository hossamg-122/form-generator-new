<template>
    <InputFieldWrapper>
        <LabelWrapper :requiredTag="requiredTag" :labelName="labelName" />

        <textarea
            class="bg-white shadow-sm rounded-md p-3 focus:outline-gray hover:bg-gray-100 placeholder:text-gray"
            :class="fieldWidth"
            type="text"
            :placeholder="placeholder"
            :id="labelName"
            v-model="localValue"
            :disabled="disabled"
        />
        <ErrorMessage
            v-for="error of errors"
            :key="error.$uid"
            :error="error"
        />
    </InputFieldWrapper>
</template>

<script lang="ts">
import ErrorMessage from './ErrorMessage.vue';
import InputFieldWrapper from './InputFieldWrapper.vue';
import LabelWrapper from './LabelWrapper.vue';

export default {
    components: { ErrorMessage, LabelWrapper, InputFieldWrapper },
    props: {
        modelValue: { type: String },
        requiredTag: {
            type: Boolean,
        },
        labelName: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        disabled: {
            type: Boolean,
        },
        fieldWidth: {
            type: String,
            default: 'w-full',
        },
        errors: {
            type: Array,
            default: () => [],
        },
    },

    computed: {
        localValue: {
            get() {
                return this.modelValue;
            },
            set(value: String) {
                this.$emit('update:modelValue', value);
            },
        },
    },
};
</script>

<style scoped></style>
