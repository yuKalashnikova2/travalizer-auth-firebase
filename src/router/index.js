import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import ListItem from '../views/ListItem.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/list',
            name: 'list',
            component: List,
            meta: {
                enter: true
            }
        },
        {
            path: '/list/:idcard',
            name: 'listitem',
            component: ListItem,
        },
        {
            path: '/signin',
            name: 'signin',
            component: SignIn,
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp,

        },
        

    ]
})

// router.beforeEach((to, from, next) => {
//     const isAuthenticated = localStorage.getItem('isAuthenticated');
  
//     if (to.meta.enter && isAuthenticated === '' && to.name !== 'signin') {
//       next('/signin')
//     } else {
//       next('');
//     }
//   });
export default router