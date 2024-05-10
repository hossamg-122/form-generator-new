<template>
    <InputFieldWrapper>
        <LabelWrapper :requiredTag="requiredTag" :labelName="labelName" />
        <div class="flex items-center flex-nowrap">
            <input
                class="bg-white shadow-sm rounded-md p-3 focus:outline-gray hover:bg-gray-100 placeholder:text-gray"
                :class="fieldWidth"
                :type="type"
                :min="minValue"
                :placeholder="placeholder"
                :id="labelName"
                v-model="localValue"
                :disabled="disabled"
            />
            <div
                v-if="suffix"
                class="w-[10%] ml-2 font-standard font-medium text-sm text-gray-450 whitespace-nowrap"
            >
                {{ suffix }}
            </div>
        </div>

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
        modelValue: { type: [String, Number] },
        requiredTag: {
            type: Boolean,
        },
        type: {
            type: String,
            default: 'text',
        },
        minValue: {
            type: Number,
            default: 0,
        },
        labelName: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        suffix: {
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
