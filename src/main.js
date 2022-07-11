import Vue from 'vue'
import App from './App.vue'
import { router } from './route/router'

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
