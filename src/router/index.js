import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index/Index.vue'
import ShowTeachers from '@/views/ShowTeachers/ShowTeachers.vue'
import BookList from '@/views/BookList/BookList.vue'
import News from '@/views/News/News.vue'
import Person from '@/views/Person/Person.vue'


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
        // redirect: "/Index",
        component: () =>
            import ('../components/tabbar/tabbar.vue'),
        children: [{
            path: "/ShowTeachers",
            component: ShowTeachers
        }, {
            path: "/BookList",
            component: BookList
        }, {
            path: "/News",
            component: News
        }, {
            path: "/Person",
            component: Person
        }, {
            path: "/Index",
            component: Index
        }]
    }
]

const router = new VueRouter({
    routes
})

export default router