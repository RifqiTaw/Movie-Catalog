export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const token = config.tmdbReadToken as string;

  const rawPath = event.context.params?.path;
  const path = Array.isArray(rawPath) ? rawPath.join("/") : rawPath || "";

  const query = getQuery(event);

  const url = `https://api.themoviedb.org/3/${path}?${new URLSearchParams(
    query as any
  )}`;  
  const data = await $fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
});
