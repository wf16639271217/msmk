import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index/index.vue'


Vue.use(VueRouter)

const routes = [{
        path: "/",
        redirect: "/tabbar",
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login.vue')
    }, {
        path: '/tabbar',
        name: 'tabbar',
        redirect: "/index",
        component: () =>
            import ('../components/tabbar/tabbar.vue'),
        children: [{
            path: "/index",
            component: Index
        }]
    }
]

const router = new VueRouter({
    routes
})

export default router