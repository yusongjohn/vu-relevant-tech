/* global Vue */

Vue.component('slot-test', {
    template: `
      <div style="border: 1px solid red">
      <slot name="header" v-bind:user="user"></slot>
      </div>
    `,
    data() {
        return {
            user: {
                name: 'songyu',
                sex: "box"
            }
        }
    }
})

new Vue({
    el: '#app',
    data: {
        showSpan: true,
        searchText: 'init search value',
        items: ['a', 'b', 'c']
    },
    watch: {
        searchText() {
            console.log('searchText', this.searchText)
        }
    },
    methods: {
        clickHandler() {
            this.showSpan = !this.showSpan
        }
    }

})
