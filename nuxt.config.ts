// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/image"],
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title: "Movie Catalog App",
      meta: [
        {
          name: "description",
          content: "Netflix-style TMDB App built with Nuxt 3",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/movie.png" }],
    },
  },
  runtimeConfig: {
    tmdbReadToken: process.env.NUXT_TMDB_READ_TOKEN_KEY,
    public: {
      tmdbApiKey: process.env.NUXT_PUBLIC_TMDB_KEY,
    },
  },
});
