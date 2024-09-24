import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartasView from '../views/CartasView.vue'
import LoginView from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    },
    {
      path: '/cartas',
      name: 'cartas',
      component: CartasView,
      beforeEnter(to, from, next) {
        console.log("ola");
        if ((localStorage.getItem('token'))==='true') {
          next();
        } else {
          next('/login');
        }
      }
    }

  ]
})

export default router
