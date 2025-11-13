import { useTMDB } from "./useTMDB";
import type { TMDBMovie, TMDBTvShow } from "~/types/tmdb";

export function useSearchMovies(query: string) {
  return useTMDB<TMDBMovie>("/search/movie", { query });
}

export function useSearchTvShows(query: string) {
  return useTMDB<TMDBTvShow>("/search/tv", { query });
}
