<script setup lang="ts">
import { useTvShows } from "~/composables/useTvShows";
import MovieList from "~/components/movie/MovieList.vue";
import SectionTitle from "~/components/ui/SectionTitle.vue";
import Loader from "~/components/common/Loader.vue";
import { useSearchStore } from "~/store/search";
import { useWatchlistStore } from "~/store/watchlist";

const { popular, topRated, airingToday, onAir } = useTvShows();
const store = useSearchStore();
const watchlist = useWatchlistStore();

const search = computed(() => {
  return store.query ? useSearchTvShows(store.query) : null;
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

    <template v-else>
      <section>
        <SectionTitle title="Popular TV Shows" icon="mdi:fire" />
        <MovieList :movies="popular.data.value?.results || []" />
        <Loader v-if="popular.pending.value" />
      </section>

      <section>
        <SectionTitle title="Top Rated" icon="mdi:star" />
        <MovieList :movies="topRated.data.value?.results || []" />
        <Loader v-if="topRated.pending.value" />
      </section>

      <section>
        <SectionTitle title="Airing Today" icon="mdi:movie-open" />
        <MovieList :movies="airingToday.data.value?.results || []" />
        <Loader v-if="airingToday.pending.value" />
      </section>

      <section>
        <SectionTitle title="On the Air" icon="mdi:calendar-month" />
        <MovieList :movies="onAir.data.value?.results || []" />
        <Loader v-if="onAir.pending.value" /></section
    ></template>
  </main>
</template>
