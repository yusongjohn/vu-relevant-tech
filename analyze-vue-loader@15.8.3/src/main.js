import Vue from 'vue'

import ('./App.vue'/* webpackChunkName: 'App' */).then((App) => {
    new Vue({
        render: h => h(App.default),
    }).$mount('#app')
})

