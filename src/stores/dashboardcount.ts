import { defineStore } from 'pinia'
import type { DashboardCount } from '@/models/DashboardCount.interface'
import API from '@/api/dashboardcount'
export const useDashboardCountStore = defineStore({
  id: 'useDashboardCountStore',
  state: () => ({
    dashboardcount: {} as DashboardCount
  }),
  getters: {
    getDashboardCount(state) {
      return state.dashboardcount
    }
  },

  actions: {
    async getDashboardCountAPI(): Promise<any> {
      const query: string = ''
      const response = await API.getDashboardCountAPI(query)
      console.log(response)
      this.dashboardcount = response
      return response
    }
  }
})
