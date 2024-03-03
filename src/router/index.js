// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [
  {
    path: '/',
    // redirect: '/login' // Redirect root path to the login page
  },
  {
    path: '/creepylogin',
    name: 'CreepyLoginForm',
    component: () => import('@/components/CreepyLoginForm.vue') // Lazy-loaded component for the login page
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Route guard to check if the user is authenticated before accessing protected routes
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['isAuthenticated'];
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to the login page if the route requires authentication and the user is not authenticated
    next('/creepylogin');
  } else {
    // Proceed to the next route
    next();
  }
});

export default router;
