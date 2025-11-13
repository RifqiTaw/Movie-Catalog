<script setup lang="ts">
defineProps({
  fullscreen: { type: Boolean, default: false },
  size: { type: Number, default: 10 },
});
</script>

<template>
  <div class="flex justify-center items-center h-48">
    <div
      class="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"
      aria-label="Loading"
    ></div>
  </div>
</template>
