import Vue from 'vue';
import Vuex from 'vuex';
import posts from '@/store/modules/posts';
import items from '@/store/modules/items';
import users from '@/store/modules/users';
import scrollTop from '@/store/modules/scrollTop';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    items,
    users,
    scrollTop,
  },
});
