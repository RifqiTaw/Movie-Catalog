/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E50914", // Netflix red
        dark: "#141414",
        light: "#F5F5F5",
        gray: "#808080",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-overlay":
          "linear-gradient(to top, rgba(20,20,20,1), rgba(20,20,20,0))",
      },
    },
  },
  plugins: [],
};
