import {createRouter , createWebHistory} from 'vue-router'
import Home from '../components/pages/Home.vue' 
import About from '../components/pages/About.vue'
import Contact from '../components/pages/Contact.vue'
import Services from '../components/pages/Services.vue'
import Not from '../components/pages/Not.vue'

const routes = [
    {
        path: '/',
        component : Home
    },
    {
        path: '/about',
        component : About
    },
    {
        path: '/contact',
        component : Contact
    },
    {
        path : '/services',
        component : Services
    },
    {
        //path : '/:catchAll(.*)',
        path : '/:pathMatch(.*)*',
        component : Not
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes : routes
})

export default router;