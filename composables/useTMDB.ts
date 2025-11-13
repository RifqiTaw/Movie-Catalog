import type { TMDBResponse, TMDBMovie } from "~/types/tmdb";

export const useTMDB = <T = any>(
  endpoint: string,
  params: Record<string, any> = {}
) => {
  const { data, error, pending } = useFetch<TMDBResponse<T>>(
    `/api/tmdb${endpoint}`,
    {
      params,
      key: endpoint + JSON.stringify(params),
      // lazy: true,
    }
  );
  return { data, error, pending };
};
