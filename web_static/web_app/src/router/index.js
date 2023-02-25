import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import LoginForm from '../views/LoginForm.vue';
import SignupForm from '../views/SignupForm.vue';
import HomePage from '../views/HomePage.vue';

const routes = [
  {
    name: 'LoginForm',
    path: '/login',
    component: LoginForm
  },
  {
    name: 'SignupForm',
    path: '/create',
    component: SignupForm
  },
  {
    name: 'HomePage',
    path: '/home',
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;