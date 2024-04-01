import { defineStore } from 'pinia'
import type { MilkProduction, PaginatedMilkProduction } from '@/models/Milk.interface'

import type { QTablePagination, PageFilter } from '../models/page.interface'
import type { Query } from '../models/page.interface'
import API from '@/api/milkproduction'
import { queryBuilder } from '@/utils/api.utils'
export const useMilkProductionStore = defineStore({
  id: 'useMilkProductionStore',
  state: () => ({
    PaginatedMilkProduction: {} as PaginatedMilkProduction,
    MilkProductionDetail: {} as MilkProduction,
    MilkProductionTablePagination: {
      sortBy: 'registered_date',
      descending: true,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 1
    } as QTablePagination
  }),

  actions: {
    setMilkProductionTablePagination(data: QTablePagination) {
      this.MilkProductionTablePagination = data
    },


    async getMilkProduction(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const milk_production = (await API.getMilkProduction(query)) as PaginatedMilkProduction
      this.PaginatedMilkProduction = milk_production
    },
 

    async getdetailFarmer(id: number) {
      const response = await API.getdetailMilkProduction(id)
      this.MilkProductionDetail = response
      return response
    }
   
  }
})
