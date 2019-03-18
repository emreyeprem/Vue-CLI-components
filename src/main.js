import Vue from 'vue'
import App from './App.vue'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })




new Vue({
  el: '.app',
  render: h => h(App),
  data: {
    status: 'Critical'
  },
  template: '<p>Server status: {{ status }}</p>'
})
