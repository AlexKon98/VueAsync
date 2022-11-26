import Vue from 'vue';
import VueRouter from 'vue-router';
import UserPage from '@/pages/UserPage.vue';
import SalesPage from '@/pages/SalesPage.vue';
import PostsPage from '@/pages/PostsPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'sales',
    path: '/',
    component: SalesPage,
  },
  {
    name: 'posts',
    path: '/posts',
    component: PostsPage,
  },
  {
    name: 'users',
    path: '/users',
    component: UserPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
