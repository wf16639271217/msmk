import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 移动端适配
import 'lib-flexible/flexible'


import { Button, List, Cell, Tabbar, TabbarItem, Icon } from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Icon);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')