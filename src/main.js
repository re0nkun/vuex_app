import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

// Vue.component('app', App)

new Vue({
  el: '#app',
  store,
  router,
  // render: h => h(App)
  // components: {'app':App}
  components: { App }
})
