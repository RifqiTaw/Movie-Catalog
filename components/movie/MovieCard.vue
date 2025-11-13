<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { NuxtImg } from "#components";
import Rating from "../ui/Rating.vue";
import { useWatchlistStore } from "~/store/watchlist";

const props = defineProps<{ movie: any }>();

const store = useWatchlistStore();
const isInWatchlist = computed(() => store.isInWatchlist(props.movie.id));

const toggleWatchlist = () => {
  store.toggle(props.movie);
};
</script>

<template>
  <article
    class="relative group cursor-pointer transition-transform hover:scale-105 focus-within:scale-105 outline-none"
    tabindex="0"
    role="button"
    aria-label="View movie details"
  >
    <NuxtImg
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      :alt="movie.title || movie.name"
      class="rounded-xl shadow-lg w-full object-cover"
      width="300"
      height="450"
      format="webp"
    />

    <div
      class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 flex flex-col justify-end p-4 transition-opacity"
    >
      <h3 class="text-lg font-semibold mb-2 text-white">
        {{ movie.title || movie.name }}
      </h3>

      <Rating :value="movie.vote_average" />

      <button
        @click.stop="toggleWatchlist"
        class="mt-2 flex items-center gap-2 px-3 py-1 rounded bg-primary/80 hover:bg-primary text-white text-sm transition"
        :aria-pressed="isInWatchlist"
        :aria-label="
          isInWatchlist ? 'Remove from watchlist' : 'Add to watchlist'
        "
      >
        <Icon
          :icon="isInWatchlist ? 'mdi:bookmark-remove' : 'mdi:bookmark-plus'"
          width="18"
          aria-hidden="true"
        />
        {{ isInWatchlist ? "Remove" : "Watchlist" }}
      </button>
    </div>
  </article>
</template>
