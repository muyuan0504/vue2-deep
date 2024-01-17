import Vue from 'vue'
import Vuex from 'vuex'

import ModuleA from './moduleA'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        calcCount(state) {
            state.count++
        },
    },
    modules: {
        a: ModuleA,
    },
})
