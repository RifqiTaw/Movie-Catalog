import { useTMDB } from "./useTMDB";

export function useTvShows() {
  const popular = useTMDB("/tv/popular");
  const topRated = useTMDB("/tv/top_rated");
  const airingToday = useTMDB("/tv/airing_today");
  const onAir = useTMDB("/tv/on_the_air");

  return { popular, topRated, airingToday, onAir };
}
