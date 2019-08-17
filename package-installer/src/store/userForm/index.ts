import { Module } from 'vuex'

import { RootState } from '../types'
import { UserFormState } from './types'

const initialState = {
  email: '',
  name: '',
  age: 0
}

export const userForm: Module<UserFormState, RootState> = {
  namespaced: true,
  state: initialState,
  mutations: {
    clear (state: UserFormState) {
      state.email = ''
      state.name = ''
      state.age = 0
    }
  },
  actions: {
    async submit (): Promise<void> {
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
}
