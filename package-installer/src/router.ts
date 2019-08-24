import Vue from 'vue'
import Router from 'vue-router'

import WithVuexInput1 from './views/Input1.vue'
import WithVuexInput2 from './views/Input2.vue'
import WithVuexConfirm from './views/Confirm.vue'
import WithVuexComplete from './views/Complete.vue'

import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: WithVuexInput1
    },
    {
      path: '/input1',
      component: WithVuexInput1,
      beforeEnter (to, from, next) {
        if (from.path !== '/input2') {
          store.commit('userForm/clear')
        }
        next()
      }
    },
    {
      path: '/input2',
      component: WithVuexInput2
    },
    {
      path: '/confirm',
      component: WithVuexConfirm
    },
    {
      path: '/complete',
      component: WithVuexComplete
    }
  ]
})
