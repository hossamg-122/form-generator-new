<template>
    <InputFieldWrapper>
        <LabelWrapper :requiredTag="requiredTag" :labelName="labelName" />

        <div class="relative">
            <input
                class="bg-white shadow-sm rounded-md p-3 focus:outline-gray hover:bg-gray-100 placeholder:text-gray"
                :class="fieldWidth"
                :type="showPassword ? 'text' : 'password'"
                :placeholder="placeholder"
                :id="labelName"
                v-model="localValue"
                v-bind="bindOptions"
            />
            <Eye
                v-if="showPassword"
                class="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
                @click="showPassword = !showPassword"
            />
            <EyeSlash
                v-else
                class="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
                @click="showPassword = !showPassword"
            />
        </div>
        <ErrorMessage
            v-for="error of errors"
            :key="error.$uid"
            :error="error"
        />
    </InputFieldWrapper>
</template>

<script lang="ts">
import EyeSlash from '@/assets/svg/EyeSlash.vue';
import Eye from '@/assets/svg/Eye.vue';
import ErrorMessage from './ErrorMessage.vue';
import LabelWrapper from './LabelWrapper.vue';
import InputFieldWrapper from './InputFieldWrapper.vue';
export default {
    components: {
        EyeSlash,
        ErrorMessage,
        Eye,
        LabelWrapper,
        InputFieldWrapper,
    },
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
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            showPassword: false,
        };
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
        bindOptions() {
            console.log('computed', this.disabled);
            return {
                disabled: this.disabled,
            };
        },
    },
    created() {
        console.log('test', this.disabled);
    },
};
</script>

<style scoped></style>
