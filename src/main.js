import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  './assets/styles/border.css'
import './assets/styles/resets.css'
import './assets/js/common.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
