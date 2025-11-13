<template>
  <div
    class="relative group cursor-pointer transition-transform hover:scale-105"
  >
    <img
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      :alt="movie.title || movie.name"
      class="rounded-xl shadow-lg w-full object-cover"
    />

    <!-- Overlay saat hover -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 transition-opacity"
    >
      <p class="text-lg font-semibold mb-2">{{ movie.title || movie.name }}</p>
      <Rating :value="movie.vote_average" />

      <!-- Tombol Add/Remove Watchlist -->
      <button
        @click.stop="toggleWatchlist"
        class="mt-2 flex items-center gap-2 px-3 py-1 rounded bg-primary/80 hover:bg-primary text-white text-sm transition"
      >
        <Icon
          :icon="isInWatchlist ? 'mdi:bookmark-remove' : 'mdi:bookmark-plus'"
          width="18"
        />
        {{ isInWatchlist ? "Remove" : "Watchlist" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Rating from "../ui/Rating.vue";
import { useWatchlistStore } from "~/store/watchlist";

const props = defineProps<{ movie: any }>();

const store = useWatchlistStore();
const isInWatchlist = computed(() => store.isInWatchlist(props.movie.id));

const toggleWatchlist = () => {
  store.toggle(props.movie);
};
</script>
