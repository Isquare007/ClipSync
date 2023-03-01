import { createRouter, createWebHistory } from 'vue-router'
import Texts from '../views/Texts.vue'
import Pictures from '../views/Pictures.vue'
import Documents from '../views/Documents.vue'
import LoginForm from '../views/LoginForm.vue';
import SignupForm from '../views/SignupForm.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/texts',
      name: 'texts',
      component: Texts
    },
    {
      path: '/pictures',
      name: 'pictures',
      component: Pictures
    },
    {
      path: '/documents',
      name: 'documents',
      component: Documents
    }
  ]
})

export default router
