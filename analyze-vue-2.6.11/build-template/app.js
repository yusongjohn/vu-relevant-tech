/* global Vue */

new Vue({
    el: '#app',
    // data: {
    //   info: {title: 'Hello Vue!'},
    //   arrayData: [{a: 'a'}, {b: 'b'}]
    // },
    data: {
        showSpan: true,
        items: ['a', 'b', 'c']
    },
    methods: {
        clickHandler() {
            this.showSpan = !this.showSpan
        }
    }

})
