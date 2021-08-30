import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        remember_token: ''
    },
    mutations: {
        token(state, arg) {
            state.remember_token = arg
        }
    },
    actions: {},
    modules: {},
    plugins: [vuexLocal.plugin]
})