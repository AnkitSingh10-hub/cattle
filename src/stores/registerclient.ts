import { defineStore } from 'pinia'
import type { Register } from '@/models/User.interface'
import API from '@/api/registerClient'
export const useRegisterClientStore = defineStore({
  id: 'useRegisterClientStore',

  state: () => ({
    user: {} as Register
  }),

  actions: {
    async registerClient(user: Register): Promise<any> {
      const response = await API.registerClient(user)
      user = response
      console.log(response)
      return response
    }
  }
})
