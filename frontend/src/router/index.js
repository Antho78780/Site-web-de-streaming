import { createRouter, createWebHashHistory } from 'vue-router'
import accueil from '../views/accueilView.vue'
import login from "../views/loginView.vue"


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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
