import Vue from 'vue'
import App from './App.vue'
import { router } from './route/router'
import api from './services/api'

Vue.prototype.$http = api

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
