<script setup lang="ts">
import { ref, watch } from "vue";
import { Icon } from "@iconify/vue";
import { useSearchStore } from "~/store/search";
const store = useSearchStore();
const searchTerm = ref("");

watch(searchTerm, (val) => {
  store.setQuery(val);
});
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-dark/70 backdrop-blur-lg">
    <div class="flex items-center justify-between px-8 py-4">
      <div class="flex items-center gap-8">
        <NuxtLink to="/" class="text-2xl font-bold text-primary"
          >Catalog Movies</NuxtLink
        >
        <div class="hidden md:flex gap-6 text-sm">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/tv">TV Shows</NuxtLink>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <Icon icon="mdi:search" size="32" />
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Search..."
          class="bg-gray-800 rounded px-3 py-1 focus:outline-none text-black"
        />
      </div>
    </div>
  </nav>
</template>
