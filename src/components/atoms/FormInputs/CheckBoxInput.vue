<template>
    <InputFieldWrapper>
        <div class="flex items-center">
            <div
                class="border bg-white rounded w-4 h-4 mr-2"
                :class="disabled ? 'cursor-default' : 'cursor-pointer'"
                @click="handleCheckBoxClick"
            >
                <SelectedBox v-if="modelValue" />
                <UnSelectedBox v-else />
            </div>
            <LabelWrapper
                :requiredTag="requiredTag"
                :labelName="labelName"
                :customStyle="
                    modelValue
                        ? 'font-heading font-semibold text-primary'
                        : 'font-heading font-normal text-gray-450'
                "
            />
            <RoutingLink
                v-if="hyperLink && route"
                :route="route"
                :name="hyperLink"
                :containerStyle="containerStyle"
                :routeStyle="routeStyle"
            />
        </div>
    </InputFieldWrapper>
</template>

<script lang="ts">
import { SelectedBox, UnSelectedBox } from '@/assets';

import RoutingLink from '../RoutingLink.vue';
import InputFieldWrapper from './InputFieldWrapper.vue';
import LabelWrapper from './LabelWrapper.vue';
export default {
    components: {
        SelectedBox,
        UnSelectedBox,
        InputFieldWrapper,
        LabelWrapper,
        RoutingLink,
    },
    props: {
        modelValue: { type: Boolean, default: false },
        disabled: {
            type: Boolean,
        },
        labelName: {
            type: String,
            default: 'dddd',
        },
        requiredTag: {
            type: Boolean,
        },
        hyperLink: {
            type: String,
        },
        route: {
            type: String,
        },
        routeStyle: {
            type: String,
        },
        containerStyle: {
            type: String,
        },
    },
    data() {
        return {
            localValue: false,
        };
    },

    watch: {
        localValue(value) {
            console.log(value);
            this.$emit('update:modelValue', value);
        },
    },
    created() {
        this.localValue = this.modelValue;
    },
    methods: {
        handleCheckBoxClick() {
            if (this.disabled) return;
            this.localValue = !this.localValue;
        },
    },
};
</script>

<style lang="scss">
input[type='checkbox'] {
    position: relative;
    cursor: pointer;
}
input[type='checkbox']:before {
    content: '';
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    border: 2px solid #555555;
    border-radius: 3px;
    background-color: white;
}
input[type='checkbox']:checked:after {
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
    background-color: red;
}
</style>

01
