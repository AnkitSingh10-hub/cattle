import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'

import type { UserLoginInfo, JWT, DecodedJWTPayload } from '@/models/JWT.interface'
import type { UserDetail } from '@/models/User.interface'
import API from '@/api/jwt'
import { LocalStorage } from 'quasar'
import router from '@/router'

export const useJwtStore = defineStore('token', {
  state: () => {
    return {
      AccessToken: '',
      DecodedPayload: {} as DecodedJWTPayload,
      isLoggedIn: false,
      RefreshingToken: true,
      UserDetail: {} as UserDetail
    }
  },
  getters: {
    loggedIn: (state) => {
      return state.isLoggedIn
    },
    // role:(state)=>{
    //   if(state.isLoggedIn == true && state.UserDetail)
    //   return state.UserDetail.groupsName
    // }
  },
  actions: {
    refreshingToken() {
      this.RefreshingToken = true
    },
    async setIsLoggedIn(value: boolean) {
      LocalStorage.set('isLoggedIn', value)
      this.isLoggedIn = value
    },
    async getJWT(user: UserLoginInfo) {
      const detail = (await API.getJWT(user)) as JWT
      const decodedPayload = jwtDecode(detail.access) as DecodedJWTPayload
      this.AccessToken = detail.access
      this.DecodedPayload = decodedPayload
      this.UserDetail = decodedPayload.userDetail
      this.isLoggedIn = true
    },
    async refreshAccessToken() {
      let detail = (await API.refreshAccessToken()) as JWT

      // eslint-disable-next-line
      let decodedPayload: DecodedJWTPayload = {} as DecodedJWTPayload
      let isLoggedIn = false
      if (!detail || !detail.access) {
        const loggedIn = this.isLoggedIn
        detail = {} as JWT
        detail.access = ''
        decodedPayload = {} as DecodedJWTPayload
        if (loggedIn) {
          router.push({ name: 'Home' })
        }
      } else {
        decodedPayload = jwtDecode(detail.access)
        isLoggedIn = true
      }
      this.AccessToken = detail.access
      this.DecodedPayload = decodedPayload
      this.isLoggedIn = isLoggedIn
      this.UserDetail = decodedPayload.userDetail
      this.RefreshingToken = false
    },
    async ClearToken() {
      await API.ClearToken()
      this.AccessToken = ''
      this.DecodedPayload = {} as DecodedJWTPayload
      this.isLoggedIn = false
    }
  }
})
