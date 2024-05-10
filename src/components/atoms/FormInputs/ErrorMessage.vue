<template>
  <div class="text-sm text-danger font-standard font-normal mt-1 ml-2">
    {{ error.$message }}
  </div>
</template>

<script lang="ts">
export default {
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style scoped></style>
