<template>
    <div>
        <input
            type="file"
            :id="labelName"
            class="hidden"
            @change="handleUploadFile"
            :disabled="disabled"
        />
        <div
            class="flex items-center mt-5 bg-transparent rounded-md border-2 border-dashed w-full py-3 px-5"
            :class="localValue ? 'border-green-200' : 'border-info'"
        >
            <UploadedFile v-if="localValue" />
            <UploadFile v-else />
            <div
                class="bg-white shadow-md p-3 grow ml-3 rounded-lg flex items-center justify-between"
            >
                <div
                    class="font-standard font-normal text-base text-primary px-3"
                >
                    {{ labelName }}
                </div>
                <label v-if="localValue && !disabled" :for="labelName">
                    <DeleteFile class="hover:cursor-pointer" />
                </label>

                <label
                    v-else-if="!disabled"
                    :for="labelName"
                    class="bg-white border border-1 border-primary rounded px-4 text-primary font-standard font-medium text-sm hover:cursor-pointer hover:-translate-y-px active:translate-y-0"
                >
                    {{ uploadButtonText }}
                </label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { UploadedFile, UploadFile, DeleteFile } from '@/assets';
export default {
    components: { UploadedFile, UploadFile, DeleteFile },
    props: {
        modelValue: { type: String },
        labelName: {
            type: String,
            default: 'Upload Your Document',
        },
        uploadButtonText: {
            type: String,
            default: 'Upload',
        },
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
            localValue: null,
        };
    },
    watch: {
        modelValue: {
            immediate: true,
            handler(value) {
                this.localValue = this.modelValue;
            },
        },
    },
    methods: {
        handleUploadFile(file) {
            this.$emit('update:modelValue', file.target.files[0]);
        },
    },
};
</script>

<style scoped></style>
