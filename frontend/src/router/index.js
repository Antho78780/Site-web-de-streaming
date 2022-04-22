import { createRouter, createWebHashHistory } from 'vue-router'
import accueil from '../views/accueilView.vue'
import login from "../views/loginView.vue"
import register from "../views/registerView.vue"

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: accueil
  },
  {
    path: '/login',
    name: 'login',
   component: login
  },
  {
    path: "/register",
    name: 'register',
    component: register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
