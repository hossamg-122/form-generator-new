<template>
    <div class="w-full test" :class="color"></div>
</template>

<script lang="ts">
export default {
    props: {
        color: {
            type: String,
            default: 'bg-info',
        },
        direction: {
            type: String,
            default: 'hor',
        },
    },
};
</script>

<style scoped>
.test {
    height: 1px;
}
</style>
