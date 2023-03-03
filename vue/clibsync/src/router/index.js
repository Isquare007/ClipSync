import { createRouter, createWebHistory } from 'vue-router'
import Texts from '../views/Texts.vue'
import Pictures from '../views/Pictures.vue'
import Documents from '../views/Documents.vue'
import LoginForm from '../views/LoginForm.vue';
import SignupForm from '../views/SignupForm.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';



function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      this.$auth,
      (user) => {
        if (user) {
          unsubscribe()
          resolve(user)
        }
        
      },
      reject
    )
  })
}

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
      path: '/signup',
      component: SignupForm
    },
    {
      path: '/texts',
      name: 'texts',
      component: Texts,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/pictures',
      name: 'pictures',
      component: Pictures,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/documents',
      name: 'documents',
      component: Documents,
      meta: {
        requiresAuth: true,
      },
    }
  ]
})

router.beforeEach(async (to) => {
  console.log(to.meta)
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth && !(await getCurrentUser())) {
    return '/login'
  }
})

export default router
