import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index/Index.vue'
import ShowTeachers from '@/views/ShowTeachers/ShowTeachers.vue'
import BookList from '@/views/BookList/BookList.vue'
import News from '@/views/News/News.vue'
import Person from '@/views/Person/Person.vue'
import SetUser from '@/views/Person/setUser.vue'


Vue.use(VueRouter)
const routes = [{
        path: "/",
        redirect: "/tabbar",
    },
    // 登陆页面
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login.vue')
    },
    // 首页底部tabbar
    {
        path: '/tabbar',
        name: 'tabbar',
        redirect: "/index",
        component: () =>
            import ('../components/tabbar/tabbar.vue'),
        children: [{
            path: "/showteachers",
            component: ShowTeachers
        }, {
            path: "/booklist",
            component: BookList
        }, {
            path: "/news",
            component: News
        }, {
            path: "/person",
            component: Person
        }, {
            path: "/index",
            component: Index
        }]
    }, {
        path: "/setUser",
        component: SetUser
    }
]




const router = new VueRouter({
    routes
})

export default router