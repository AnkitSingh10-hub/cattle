import { defineStore } from 'pinia'
import type { MilkSold, PaginatedMilkSold } from '@/models/Milk.interface'

import type { QTablePagination, PageFilter } from '../models/page.interface'
import type { Query } from '../models/page.interface'
import API from '@/api/milksold'
import { queryBuilder } from '@/utils/api.utils'
export const useMilkSoldStore = defineStore({
  id: 'useMilkSoldStore',
  state: () => ({
    PaginatedMilkSold: {} as PaginatedMilkSold,
    MilkSoldDetail: {} as MilkSold,
    MilkSoldTablePagination: {
      sortBy: 'registered_date',
      descending: true,
      page: 1,
      rowsPerPage: 5,
      rowsNumber: 1
    } as QTablePagination
  }),

  actions: {
    setMilkSoldTablePagination(data: QTablePagination) {
      this.MilkSoldTablePagination = data
    },


    async getMilkSold(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const milk_sold = (await API.getMilkSold(query)) as PaginatedMilkSold
      this.PaginatedMilkSold = milk_sold
    },
 

    async getdetailFarmer(id: number) {
      const response = await API.getdetailMildSold(id)
      this.MilkSoldDetail = response
      return response
    }
   
  }
})
