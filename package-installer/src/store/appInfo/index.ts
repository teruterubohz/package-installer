import { Module } from 'vuex'

import { RootState } from '../types'
import { AppInfo } from './types'

const initialState = {
  email: '',
  name: '',
  age: 0,
  os: '',
  teamname: '',
  configuration: ''
}

export const appInfo: Module<AppInfo, RootState> = {
  namespaced: true,
  state: initialState,
  mutations: {
    clear (state: AppInfo) {
      state.email = ''
      state.name = ''
      state.age = 0
      state.os = ''
      state.teamname = ''
      state.configuration = ''
    }
  },
  actions: {
    async submit (): Promise<void> {
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
}
