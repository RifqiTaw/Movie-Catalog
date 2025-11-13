<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{ value: number }>();
</script>

<template>
  <div class="flex items-center gap-1">
    <Icon
      class="text-yellow-400"
      v-for="i in 5"
      :key="i"
      icon="mdi:star"
      width="24"
    />
    <span class="text-sm">{{ (value / 2).toFixed(1) }}/5</span>
  </div>
</template>
