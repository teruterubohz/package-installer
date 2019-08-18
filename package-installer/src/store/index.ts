import Vue from 'vue'
import Vuex from 'vuex'

import { RootState } from './types'

import { appInfo } from './appInfo'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  state: {},
  modules: {
    appInfo
  },
  mutations:{
    
  }
})
