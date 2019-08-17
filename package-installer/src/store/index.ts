import Vue from 'vue'
import Vuex from 'vuex'

import { RootState } from './types'

import { userForm } from './userForm'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  state: {},
  modules: {
    userForm
  }
})
