<script setup lang="ts">
import { ref, watch } from "vue";
import { Icon } from "@iconify/vue";
import { useSearchStore } from "~/store/search";

const store = useSearchStore();
const searchTerm = ref<string>("");
const isLoading = ref<boolean>(false);

let debounceTimer: ReturnType<typeof setTimeout>;

watch(searchTerm, (val) => {
  clearTimeout(debounceTimer);
  if (val.trim() === "") {
    store.clear();
    isLoading.value = false;
    return;
  }

  isLoading.value = true;

  debounceTimer = setTimeout(async () => {
    try {
      store.setQuery(val.trim());
    } finally {
      setTimeout(() => (isLoading.value = false), 300);
    }
  }, 600);
});
</script>

<template>
  <nav
    class="fixed top-0 w-full z-50 bg-dark/70 backdrop-blur-lg"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="flex items-center justify-between px-8 py-4">
      <div class="flex items-center gap-8">
        <NuxtLink
          to="/"
          class="text-2xl font-bold text-primary"
          aria-label="Go to homepage"
        >
          Catalog Movies
        </NuxtLink>

        <div class="hidden md:flex gap-6 text-sm">
          <NuxtLink to="/" aria-label="Go to homepage">Home</NuxtLink>
          <NuxtLink to="/tv" aria-label="Go to TV Shows">TV Shows</NuxtLink>
        </div>
      </div>

      <div class="relative flex items-center gap-2">
        <label for="search" class="sr-only">Search movies or TV shows</label>

        <Icon
          icon="mdi:magnify"
          width="24"
          class="text-gray-400 absolute left-3 text-black"
        />

        <input
          id="search"
          v-model="searchTerm"
          type="text"
          placeholder="Search..."
          class="pl-10 pr-8 bg-gray-800 rounded px-3 py-1 text-black placeholder-gray-400 w-48 md:w-64 transition-all"
          aria-label="Search movies or TV shows"
        />

        <div
          v-if="isLoading"
          class="absolute right-3 animate-spin rounded-full border-2 border-t-transparent border-primary w-4 h-4"
          aria-label="Loading search results"
        ></div>
      </div>
    </div>
  </nav>
</template>
