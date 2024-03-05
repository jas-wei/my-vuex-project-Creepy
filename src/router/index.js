// router/index.js

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/creepylogin' // Redirect root path to the login page
  },
  {
    path: '/creepylogin',
    name: 'CreepyLoginForm',
    component: () => import('@/components/CreepyLoginForm.vue') // Lazy-loaded component for the login page
  },
  {
    path: '/names',
    name: 'names',
    component: () => import('@/components/NamePage.vue') // Lazy-loaded component for the login page
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
