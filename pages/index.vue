<script setup lang="ts">
import { useMovies } from "~/composables/useMovies";
import MovieList from "~/components/movie/MovieList.vue";
import SectionTitle from "~/components/ui/SectionTitle.vue";
import Loader from "~/components/common/Loader.vue";
import { useSearchStore } from "~/store/search";
import { useWatchlistStore } from "~/store/watchlist";

const { popular, topRated, nowPlaying, upcoming } = useMovies();

const store = useSearchStore();
const watchlist = useWatchlistStore();

const search = computed(() => {
  return store.query ? useSearchMovies(store.query) : null;
});
</script>

<template>
  <main class="space-y-12 py-10">
    <section v-if="watchlist.items.length">
      <SectionTitle title="Your Watchlist" icon="mdi:bookmark" />
      <MovieList :movies="watchlist.items" />
    </section>

    <div v-if="store.query && search">
      <SectionTitle
        :title="`Search results for '${store.query}'`"
        icon="mdi:search"
      />
      <MovieList :movies="search.data.value?.results || []" />
    </div>

    <div v-else>
      <section>
        <SectionTitle title="Popular Movies" icon="mdi:fire" />
        <MovieList :movies="popular.data.value?.results || []" />
        <Loader v-if="popular.pending.value" />
      </section>

      <section>
        <SectionTitle title="Top Rated" icon="mdi:star" />
        <MovieList :movies="topRated.data.value?.results || []" />
        <Loader v-if="topRated.pending.value" />
      </section>

      <section>
        <SectionTitle title="Now Playing" icon="mdi:movie-open" />
        <MovieList :movies="nowPlaying.data.value?.results || []" />
        <Loader v-if="nowPlaying.pending.value" />
      </section>

      <section>
        <SectionTitle title="Upcoming Movies" icon="mdi:calendar-month" />
        <MovieList :movies="upcoming.data.value?.results || []" />
        <Loader v-if="upcoming.pending.value" />
      </section>
    </div>
  </main>
</template>
