export default {
  state: {
    posts: [],
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    },
  },
  actions: {
    async fetchPosts({ commit }, limit = 10) {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const posts = await res.json();

      commit('updatePosts', posts);
    },
  },
};
