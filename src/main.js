import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/scss/reset.scss'

Vue.use(MintUI)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
