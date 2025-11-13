import { useTMDB } from "./useTMDB";
import type { TMDBMovie, TMDBTvShow } from "~/types/tmdb";

export function useSearchMovies(query: string) {
  if (!query || query.trim() === "") {
    return { data: ref(null), error: ref(null), pending: ref(false) };
  }

  return useTMDB<TMDBMovie>("/search/movie", {
    query: query.trim(),
  });
}

export function useSearchTvShows(query: string) {
  if (!query || query.trim() === "") {
    return { data: ref(null), error: ref(null), pending: ref(false) };
  }

  return useTMDB<TMDBTvShow>("/search/tv", {
    query: query.trim(),
  });
}
