import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import AboutViewVue from '@/views/AboutView.vue'
import FormViewVue from '@/views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginViewVue
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/Formulario',
      name: 'Formulario',
      component: FormViewVue
    }
  ]
})

export default router
