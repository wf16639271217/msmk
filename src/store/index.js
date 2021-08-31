import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        remember_token: '',
        nickname: ''
    },
    mutations: {
        token(state, arg) {
            state.remember_token = arg.remember_token
            state.nickname = arg.nickname
        }
    },
    actions: {},
    modules: {},
    plugins: [vuexLocal.plugin]
})