<script setup lang="ts">
import MovieCard from "./MovieCard.vue";
defineProps<{ movies: any[] }>();
</script>

<template>
  <div
    class="flex overflow-x-auto gap-4 px-6 pb-4 scrollbar-hide snap-x snap-mandatory"
    aria-label="Movie list"
  >
    <div
      v-for="movie in movies"
      :key="movie.id"
      class="snap-start w-40 md:w-48 flex-shrink-0"
    >
      <MovieCard :movie="movie" />
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
