import { defineStore } from 'pinia'
import type { Income, PaginatedIncome } from '@/models/Income.interface'

import type { QTablePagination, PageFilter } from '../models/page.interface'
import type { Query } from '../models/page.interface'
import API from '@/api/income'
import { queryBuilder } from '@/utils/api.utils'
export const useIncomeStore = defineStore({
  id: 'useIncomeStore',
  state: () => ({
    PaginatedIncome: {} as PaginatedIncome,
    IncomeDetail: {} as Income,
    IncomeTablePagination: {
      sortBy: 'registered_date',
      descending: true,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 1
    } as QTablePagination
  }),

  actions: {
    setIncomeTablePagination(data: QTablePagination) {
      this.IncomeTablePagination = data
    },


    async getIncome(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const income = (await API.getIncome(query)) as PaginatedIncome
      this.PaginatedIncome = income
    },
 

    async getdetailFarmer(id: number) {
      const response = await API.getdetailIncome(id)
      this.IncomeDetail = response
      return response
    },

    
    async deleteIncome(id: number) {
      const response = await API.deleteIncome(id)
      return response
    },
  }
})
