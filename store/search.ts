import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    query: '',
  }),
  actions: {
    setQuery(q: string) {
      this.query = q
    },
    clear() {
      this.query = ''
    },
  },
})
