// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import './assets/css/style.css'
import './assets/css/index.css'
import store from './store'
import Utils from './lib/utils'
import './mock.js'

Vue.config.productionTip = false
Vue.use(Utils)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
