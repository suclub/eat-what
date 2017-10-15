import Vue from 'vue'
import Router from 'vue-router'
import Select from '../view/select/select.vue'
import List from '../view/list/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/list'
    },
    {
      path: '/select',
      component: Select
    },
    {
      path: '/list',
      component: List
    }
  ]
})
