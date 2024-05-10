<template>
    <InputFieldWrapper>
        <LabelWrapper :requiredTag="requiredTag" :labelName="labelName" />
        <div class="relative">
            <select
                class="appearance-none rounded-md text-base font-medium px-2 py-3 shadow-inset-md focus:border-2 focus:border-info focus:ring-info focus:outline-none"
                :class="fieldWidth"
                v-model="localValue"
                :disabled="disabled"
            >
                <option class="text-gray p-2" :value="undefined">
                    {{ placeholder }}
                </option>
                <option
                    v-for="(option, index) in options"
                    :value="option[optionValue]"
                    :key="index"
                    class="p-2"
                >
                    {{ option[optionLabel] }}
                </option>
            </select>
            <ChevronDown class="absolute right-4 top-3.5" />
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
import { ChevronDown } from '@/assets';
export default {
    components: {
        InputFieldWrapper,
        LabelWrapper,
        ErrorMessage,
        ChevronDown,
    },
    props: {
        modelValue: { type: [String, Number] },
        requiredTag: {
            type: Boolean,
        },
        labelName: {
            type: String,
        },
        placeholder: {
            type: String,
            default: 'None',
        },
        disabled: {
            type: Boolean,
        },
        fieldWidth: {
            type: String,
            default: 'w-full',
        },
        options: {
            type: Array,
            default: () => [],
        },
        optionLabel: String,
        optionValue: { required: true },
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

<style lang="scss" scoped></style>
