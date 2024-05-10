<template>
    <div
        v-if="type === 'buttons'"
        class="flex items-center bg-white py-2 px-1 shadow-sm rounded-md"
    >
        <div
            class="grow text-center mx-1 font-heading text-base py-1 rounded-md hover:cursor-pointer"
            :class="
                currentTab === value
                    ? 'font-semibold text-white  bg-secondary'
                    : 'font-normal text-gray-250 bg-gray-1000'
            "
            v-for="({ name, value }, i) in tabs"
            :key="i"
            @click="currentTab = value"
        >
            {{ name }}
        </div>
    </div>
    <div
        v-else
        class="flex items-center justify-between border-b-2 border-gray"
    >
        <div
            class="font-heading text-base py-2 px-8 hover:cursor-pointer"
            :class="
                currentTab === value
                    ? 'font-semibold text-primary border-b-4 border-primary rounded'
                    : 'font-normal text-gray-250'
            "
            v-for="({ name, value }, i) in tabs"
            :key="i"
            @click="currentTab = value"
        >
            {{ name }}
        </div>
    </div>
</template>

<script lang="ts">
interface ITab {
    name: string;
    value: number;
}
export default {
    props: {
        type: {
            type: String,
        },
        activeTab: { type: Number, required: true, default: 0 },
        tabs: {
            type: Array<ITab>,
            required: true,
            default: () => [],
        },
    },
    data() {
        return {
            currentTab: null as any,
        };
    },
    watch: {
        currentTab(value) {
            this.$emit('toggleTab', value);
        },
    },
    created() {
        this.currentTab = this.activeTab;
    },
};
</script>

<style scoped></style>
