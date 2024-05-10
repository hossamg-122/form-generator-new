<template>
    <div class="grid grid-cols-12 gap-x-5">
        <div
            v-for="(field, index) in fields"
            :key="index"
            :class="renderFieldWidth(index)"
            class="relative"
        >
            <component
                :is="repeatedField"
                v-bind="{
                    labelName:
                        index === 0
                            ? labelName
                            : `${enums.inputsOrder[index + 1]} ${labelName}`,
                    placeholder,
                    disabled,
                    fieldWidth,
                    errors,
                }"
                v-model="fields[index]"
            />
            <DeleteField
                v-if="index > 0 && !disabled"
                class="-ml-8 absolute right-3 top-8 hover:cursor-pointer mt-2"
                @click="deleteField(index)"
            />
        </div>

        <AddField
            v-if="!disabled"
            class="col-span-1 self-center mt-2 hover:cursor-pointer"
            @click="fields.push('')"
        />
    </div>
</template>

<script lang="ts">
import TextField from './TextField.vue';
import PasswordField from './PasswordField.vue';
import PhoneNumber from './PhoneNumber.vue';
import { AddField, DeleteField } from '@/assets';
interface IData {
    fields: Array<String>;
}
export default {
    components: {
        TextField,
        PhoneNumber,
        AddField,
        DeleteField,
        PasswordField,
    },
    props: {
        modelValue: {
            type: Array<String>,
            default: () => [''],
        },
        repeatedField: { type: String, required: true },
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
    data(): IData {
        return {
            fields: [''],
        };
    },

    watch: {
        modelValue: {
            immediate: true,
            deep: true,
            handler() {
                this.fields = this.modelValue;
            },
        },
        fields: {
            deep: true,
            handler(value) {
                this.$emit('update:modelValue', value);
            },
        },
    },
    methods: {
        deleteField(index: number) {
            this.fields.splice(index, 1);
            console.log(index);
        },
        renderFieldWidth(index: number) {
            if (this.disabled) {
                return 'col-span-12';
            } else if (index !== this.fields.length - 1) {
                return 'col-span-6';
            } else {
                return 'col-span-5';
            }
        },
    },
};
</script>

<style scoped></style>
