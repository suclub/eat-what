import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import './common/scss/reset.scss'

Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
