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

const showPopular = ref<boolean>(false);
const showTopRated = ref<boolean>(false);
const showAiringToday = ref<boolean>(false);
const showOnAir = ref<boolean>(false);

onMounted(() => {
  setTimeout(() => (showPopular.value = true), 100);
  setTimeout(() => (showTopRated.value = true), 200);
  setTimeout(() => (showAiringToday.value = true), 300);
  setTimeout(() => (showOnAir.value = true), 400);
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

    <section v-if="store.query && search">
      <SectionTitle
        :title="`Search results for '${store.query}'`"
        icon="mdi:search"
      />
      <div class="mt-4">
        <MovieList :movies="search.data.value?.results || []" />
      </div>
    </section>

    <template v-else>
      <section>
        <SectionTitle title="Popular TV Shows" icon="mdi:fire" />
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
        <SectionTitle title="Airing Today" icon="mdi:television" />
        <transition name="fade" mode="out-in">
          <div v-if="showAiringToday" class="mt-4">
            <MovieList :movies="airingToday.data.value?.results || []" />
          </div>
          <Loader v-else class="h-40 mt-6" />
        </transition>
      </section>

      <section>
        <SectionTitle title="Currently On Air" icon="mdi:calendar-month" />
        <transition name="fade" mode="out-in">
          <div v-if="showOnAir" class="mt-4">
            <MovieList :movies="onAir.data.value?.results || []" />
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
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
