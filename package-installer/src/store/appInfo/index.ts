import { Module } from 'vuex'

import { RootState } from '../types'
import { AppInfo } from './types'

const initialState = {
  email: '',
  name: '',
  age: 0,
  platform: '',
  teamname: '',
  configuration: '',
  ide: '',
}

export const appInfo: Module<AppInfo, RootState> = {
  namespaced: true,
  state: initialState,
  mutations: {
    clear (state: AppInfo) {
      state.email = ''
      state.name = ''
      state.age = 0
      state.platform = ''
      state.teamname = ''
      state.configuration = ''
      state.ide = ''
    },
    update_state_platform: function(state, platform){
      state.platform = platform
    },
    update_state_teamname: function(state, teamname){
      state.teamname = teamname
    },
    update_state_configuration: function(state, configuration){
      state.configuration = configuration
    },
    update_state_ide: function(state, ide){
      state.ide = ide
    }
  },
  actions: {
    async submit (): Promise<void> {
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
}
