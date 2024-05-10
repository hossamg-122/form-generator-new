<template>
    <InputFieldWrapper>
        <LabelWrapper :requiredTag="requiredTag" :labelName="labelName" />

        <vue-tel-input
            class="rounded-lg"
            v-model="localValue"
            mode="international"
            autoFormat
            :dropdownOptions="options"
            validCharactersOnly
            styleClasses="shadow-sm"
            :disabled="disabled"
        >
            <template #arrow-icon>
                <ArrowDown />
            </template>
        </vue-tel-input>
        <ErrorMessage
            v-for="error of errors"
            :key="error.$uid"
            :error="error"
        />
    </InputFieldWrapper>
</template>
<script lang="ts">
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import ArrowDown from '@/assets/svg/ArrowDown.vue';
import ErrorMessage from '@/components/atoms/FormInputs/ErrorMessage.vue';
import LabelWrapper from './LabelWrapper.vue';
import InputFieldWrapper from './InputFieldWrapper.vue';
export default {
    components: {
        VueTelInput,
        ArrowDown,
        ErrorMessage,
        LabelWrapper,
        InputFieldWrapper,
    },
    props: {
        modelValue: { type: String },
        labelName: { type: String },
        requiredTag: {
            type: Boolean,
        },
        disabled: {
            type: Boolean,
        },
        errors: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            phone: null,
            options: {
                disabled: false,
                showDialCodeInList: true,
                showDialCodeInSelection: true,
                showFlags: true,
                showSearchBox: false,
                tabindex: 0,
                width: 100,
            },
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
    },
};
</script>
<style lang="scss">
.vue-tel-input {
    border-radius: 6px;
    padding: 10px 5px;
    display: flex;
    border: none;
    text-align: left;
    &:focus {
        outline: 1px solid red;
    }
}
.vti__dropdown {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    position: relative;
    padding: 0 5px;
    cursor: pointer;
    border-right: 1px solid #48beea;
}

.vti__dropdown-arrow {
    transform: scaleY(1);
    display: inline-block;
}
.vti__country-code {
    color: #48beea !important;
    padding-right: 5px;
    font-weight: 600;
    font-family: Lato;
    font-size: 12px;
}
.vti__input {
    border: none;
    border-radius: 0 2px 2px 0;
    width: 100%;
    outline: none;
    padding-left: 7px;
    &::placeholder {
        color: #d9d9d9;
    }
}
</style>
