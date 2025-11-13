# 🎬 Nuxt 3 TMDB Movie App

A modern and responsive movie catalog built with **Nuxt 3**, **TailwindCSS**, and **Pinia**,  
integrated with **The Movie Database (TMDB)** API.  
Inspired by Netflix UI — featuring watchlist management, search with debounce, and smooth animations.

---

## 🚀 Features

- ✅ Server-Side Rendering (SSR) with `useFetch` for TMDB API
- ✅ Integrated with multiple TMDB endpoints:
  - Top Rated Movies
  - Upcoming Movies
  - Now Playing Movies
  - Popular Movies
  - Popular / Top Rated / Airing Today / On The Air TV Shows
- ✅ Search functionality (with **debounce** to prevent excessive API calls)
- ✅ Add / Remove from Watchlist using **Pinia**
- ✅ Smooth section loading animation with `transition`
- ✅ Fully semantic HTML structure (`<main>`, `<section>`, `<nav>`, `<footer>`)
- ✅ Accessible UI: keyboard-friendly and `aria-label` usage
- ✅ Dark theme with Netflix-inspired design
- ✅ Optimized with `<NuxtImg>` from `@nuxt/image` for fast, lazy-loaded images

---

## 🧩 Tech Stack

| Technology       | Description                                       |
| ---------------- | ------------------------------------------------- |
| **Nuxt 3**       | Vue framework with SSR support                    |
| **Pinia**        | State management (for watchlist and search query) |
| **TailwindCSS**  | Utility-first CSS framework                       |
| **TMDB API v4**  | External movie and TV data source                 |
| **@iconify/vue** | Icon management                                   |
| **@nuxt/image**  | Optimized image component with lazy loading       |

---

## ⚙️ Installation

Clone this repository and install dependencies:

```bash
# npm
npm install

# or yarn
yarn install
```
