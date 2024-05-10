<template>
    <div class="mb-1">
        <label
            class="font-standard text-sm font-normal text-gray-450"
            :class="customStyle"
            :for="labelName"
            >{{ labelName }}</label
        ><span v-if="requiredTag" class="text-red-600">*</span>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        requiredTag: {
            type: Boolean,
        },
        labelName: {
            type: String,
        },
        customStyle: {
            type: String,
        },
    },
};
</script>

<style scoped></style>
