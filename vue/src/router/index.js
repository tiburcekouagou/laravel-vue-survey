// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import DashboardVue from '../views/Dashboard.vue'
import LoginVue from '../views/Login.vue'
import RegisterVue from '../views/Register.vue'
import SurveyVue from '../views/Surveys.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: DefaultLayout,
    meta: { requiresAuth: true }, // only log in users can get to those pages
    children: [
      { path: '/dashboard', name: 'Dashboard', component: DashboardVue },
      { path: '/surveys', name: 'Survey', component: SurveyVue }
    ]
  },
  { path: '/register', name: 'Register', component: RegisterVue },
  { path: '/login', name: 'Login', component: LoginVue },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !store.state.user.user.token) {
    return { name: 'Login' }
  } else if (store.state.user.user.token && (to.name === 'Login' || to.name === 'Register')) {
    return { name: 'Dashboard' }
  } else {
    return true
  }
})

export default router