export default {
  state: {
    items: [],
  },
  getters: {
    allItems(state) {
      return state.items;
    },
  },
  mutations: {
    updateItems(state, items) {
      state.items = items;
    },
    createItem(state, newItem) {
      state.items.unshift(newItem);
    },
  },
  actions: {
    async fetchItems({ commit }, limit = 10) {
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`);
      const items = await res.json();

      commit('updateItems', items);
    },
  },
};
