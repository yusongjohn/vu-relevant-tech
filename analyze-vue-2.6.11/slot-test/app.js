/* global Vue */
Vue.component('slot-test', {
  template: `
    <div id="a">
      <div style="background:red">header：</div>
      <slot name="header" v-bind:user="user"></slot>
      
      <div style="background:red">default：</div>
      <slot></slot>
      
      <div style="background:red">footer：</div>
      <slot name="footer"></slot>
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
  el: '#app'
})
