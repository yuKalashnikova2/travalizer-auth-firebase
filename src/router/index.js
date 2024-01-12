import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/HomeVue.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeVue
        },
        {
            path: '/signin',
            name: 'signin',
            component: SignIn
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp
        },
        

    ]
})
export default router