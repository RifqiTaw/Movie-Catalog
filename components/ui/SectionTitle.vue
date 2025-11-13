<template>
  <div class="flex items-center gap-2 px-8">
    <Icon
      v-if="icon"
      :icon="icon"
      class="text-primary"
      width="24"
      height="24"
    />
    <h2 class="text-2xl font-semibold">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  title: string;
  icon?: string;
}>();
</script>
