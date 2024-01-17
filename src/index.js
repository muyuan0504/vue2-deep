import Vue from 'vue'
import App from './app.vue'

import store from './store/index'

new Vue({
    store, // 注入 store
    render: (h) => h(App),
}).$mount('#app')
