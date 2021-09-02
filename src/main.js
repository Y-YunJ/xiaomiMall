// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import './jquery-3.5.1'
import './assets/css/style.css'
import './assets/css/index.css'
import store from './store'
import Utils from './lib/utils'
import vueMiniPlayer from 'vue-mini-player'
import 'vue-mini-player/lib/vue-mini-player.css'

Vue.config.productionTip = false
Vue.use(Utils)
Vue.use(vueMiniPlayer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
