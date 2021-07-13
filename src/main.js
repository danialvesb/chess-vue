import Vue from 'vue'
import App from './App.vue'
import store from './store'

import '@/assets/stylus/base.styl'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
