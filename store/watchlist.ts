import { defineStore } from "pinia";

export interface WatchlistItem {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  vote_average?: number;
}

export const useWatchlistStore = defineStore("watchlist", {
  state: () => ({
    items: [] as WatchlistItem[],
  }),

  actions: {
    add(item: WatchlistItem) {
      if (!this.items.find((i) => i.id === item.id)) {
        this.items.push(item);
      }
    },
    remove(id: number) {
      this.items = this.items.filter((i) => i.id !== id);
    },
    toggle(item: WatchlistItem) {
      if (this.items.find((i) => i.id === item.id)) {
        this.remove(item.id);
      } else {
        this.add(item);
      }
    },
  },

  getters: {
    isInWatchlist: (state) => (id: number) =>
      state.items.some((i) => i.id === id),
  },
});
