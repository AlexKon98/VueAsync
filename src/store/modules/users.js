export default {
  state: {
    users: [],
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },
    createUser(state, newUser) {
      state.users.unshift(newUser);
    },
  },
  actions: {
    async fetchUsers({ commit }, limit = 4) {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`);
      const users = await res.json();

      commit('updateUsers', users);
    },
  },
};
