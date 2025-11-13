import { defineStore } from "pinia";

export const useWatchlistStore = defineStore("watchlist", {
  state: () => ({
    items: [] as any[],
  }),
  actions: {
    add(item: any) {
      if (!this.items.find((i) => i.id === item.id)) this.items.push(item);
    },
    remove(id: number) {
      this.items = this.items.filter((i) => i.id !== id);
    },
    toggle(item: any) {
      if (this.items.find((i) => i.id === item.id)) this.remove(item.id);
      else this.add(item);
    },
  },
  getters: {
    isInWatchlist: (state) => (id: number) =>
      state.items.some((i) => i.id === id),
  },
});
