import { useTMDB } from "./useTMDB";
import type { TMDBMovie } from "~/types/tmdb";

export function useMovies() {
  const topRated = useTMDB<TMDBMovie>("/movie/top_rated");
  const popular = useTMDB<TMDBMovie>("/movie/popular");
  const upcoming = useTMDB<TMDBMovie>("/movie/upcoming");
  const nowPlaying = useTMDB<TMDBMovie>("/movie/now_playing");

  return { topRated, popular, upcoming, nowPlaying };
}
