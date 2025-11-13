<script setup lang="ts">
import { useMovies } from "~/composables/useMovies";
import MovieList from "~/components/movie/MovieList.vue";
import SectionTitle from "~/components/ui/SectionTitle.vue";
import Loader from "~/components/common/Loader.vue";
import { useSearchStore } from "~/store/search";
import { useWatchlistStore } from "~/store/watchlist";
import type { TMDBMovie, TMDBResponse, TMDBTvShow } from "~/types/tmdb";

const { popular, topRated, nowPlaying, upcoming } = useMovies();

const store = useSearchStore();
const watchlist = useWatchlistStore();

const searchResults = ref<TMDBResponse<TMDBMovie | TMDBTvShow> | null>(null);
const searchPending = ref<boolean>(false);

watch(
  () => store.query,
  async (q) => {
    if (!q) {
      searchResults.value = null;
      return;
    }

    searchPending.value = true;
    const { data, pending } = useSearchMovies(q);
    watchEffect(() => {
      if (data.value) {
        searchResults.value = data.value;
        searchPending.value = pending.value;
      }
    });
  },
  { immediate: true }
);

const showPopular = ref<boolean>(false);
const showTopRated = ref<boolean>(false);
const showNowPlaying = ref<boolean>(false);
const showUpcoming = ref<boolean>(false);

onMounted(() => {
  setTimeout(() => (showPopular.value = true), 100);
  setTimeout(() => (showTopRated.value = true), 200);
  setTimeout(() => (showNowPlaying.value = true), 300);
  setTimeout(() => (showUpcoming.value = true), 400);
});
</script>

<template>
  <main class="space-y-12 py-10">
    <section v-if="watchlist.items.length">
      <SectionTitle title="Your Watchlist" icon="mdi:bookmark" />
      <div class="mt-4">
        <MovieList :movies="watchlist.items" />
      </div>
    </section>

    <section v-if="store.query">
      <SectionTitle
        :title="`Search results for '${store.query}'`"
        icon="mdi:search"
      />

      <div class="mt-4 min-h-[12rem] flex justify-center items-center">
        <Loader v-if="searchPending" />
        <MovieList v-else :movies="searchResults?.results || []" />
      </div>
    </section>

    <template v-else>
      <section>
        <SectionTitle title="Popular Movies" icon="mdi:fire" />
        <transition name="fade" mode="out-in">
          <div v-if="showPopular" class="mt-4">
            <MovieList :movies="popular.data.value?.results || []" />
          </div>
          <Loader v-else class="h-40 mt-6" />
        </transition>
      </section>

      <section>
        <SectionTitle title="Top Rated" icon="mdi:star" />
        <transition name="fade" mode="out-in">
          <div v-if="showTopRated" class="mt-4">
            <MovieList :movies="topRated.data.value?.results || []" />
          </div>
          <Loader v-else class="h-40 mt-6" />
        </transition>
      </section>

      <section>
        <SectionTitle title="Now Playing" icon="mdi:movie-open" />
        <transition name="fade" mode="out-in">
          <div v-if="showNowPlaying" class="mt-4">
            <MovieList :movies="nowPlaying.data.value?.results || []" />
          </div>
          <Loader v-else class="h-40 mt-6" />
        </transition>
      </section>

      <section>
        <SectionTitle title="Upcoming Movies" icon="mdi:calendar-month" />
        <transition name="fade" mode="out-in">
          <div v-if="showUpcoming" class="mt-4">
            <MovieList :movies="upcoming.data.value?.results || []" />
          </div>
          <Loader v-else class="h-40 mt-6" />
        </transition>
      </section>
    </template>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
