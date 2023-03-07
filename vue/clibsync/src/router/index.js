import { createRouter, createWebHistory } from 'vue-router';
import Texts from '../views/Texts.vue';
import Pictures from '../views/Pictures.vue';
import Documents from '../views/Documents.vue';
import LoginForm from '../views/LoginForm.vue';
import SignupForm from '../views/SignupForm.vue';
import PageNotFound from '../views/404.vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/main.js'



function getCurrentUser() {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(user) => {
				if (user) {
					// console.log('user')
					unsubscribe()
					resolve(user)
				} else {
					// console.log('no user')
					resolve(null)
				}
			},
			reject
		)
	})
}


// Navigation gaurd
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
		},
		{
			path: '/:pathMatch(.*)*',
			name: '404',
			component: PageNotFound,

		}
	]
})

router.beforeEach(async (to, from, next) => {
	const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
	const currentUser = await getCurrentUser();
	if (requiresAuth && !currentUser) {
		next('/login')
	} else {
		next()
	}
})
export default router
