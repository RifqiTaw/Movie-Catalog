import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => ({
    query: "" as string,
  }),

  actions: {
    setQuery(q: string) {
      this.query = q;
    },
    clear() {
      this.query = "";
    },
  },
});
