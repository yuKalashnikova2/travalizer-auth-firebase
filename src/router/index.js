import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import ListItem from '../views/ListItem.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import ImageTravalizer from '../views/ImageTravalizer.vue'
const isAuthenticated = localStorage.getItem('isAuthenticated')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        a: Home,
        travalizer: ImageTravalizer
      },
    },
    {
      path: '/signin',
      components: {
        default: SignIn,
        a: SignIn,
        travalizer: ImageTravalizer
      },
    },
    {
      path: '/signup',
      components: {
        default: SignUp,
        a: SignUp,
        travalizer: ImageTravalizer
      },
    },
    {
      path: '/list',
      components: {
        default: List,
        a: List,

      },
        beforeEnter: (to, from, next) => {
        if (!isAuthenticated) {
          next('/signin')
        } else {
          next()
        }
        return false
      },
    },
    {
      path: '/list/:idcard',
      components: {
        default: ListItem,
        a: ListItem,
      },
      beforeEnter: (to, from, next) => {
        if (!isAuthenticated) {
          next('/signin')
        } else {
          next()
        }
        return false
      },
    },
  ],
})

export default router
