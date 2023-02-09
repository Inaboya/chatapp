import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'PrivateChat',
    component: () => import('../views/PrivateChat.vue'),
  },

  {
    path: '/login',
    name: 'AuthComponent',
    component: () => import('../views/AuthComponent'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
