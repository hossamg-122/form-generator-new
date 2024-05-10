<template>
  <div :class="containerStyle">
    <slot name="pre-text" />
    <RouterLink :to="route" :class="routeStyle">{{ name }}</RouterLink>
    <slot name="post-text" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
    routeStyle: {
      type: String,
      default: "text-info text-sm font-heading",
    },
    containerStyle: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
