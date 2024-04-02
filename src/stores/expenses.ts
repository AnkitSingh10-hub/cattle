import { defineStore } from 'pinia'
import type { Expenses, PaginatedExpenses } from '@/models/Expenses.interface'

import type { QTablePagination, PageFilter } from '../models/page.interface'
import type { Query } from '../models/page.interface'
import API from '@/api/expenses'
import { queryBuilder } from '@/utils/api.utils'
export const useExpensesStore = defineStore({
  id: 'useExpensesStore',
  state: () => ({
    PaginatedExpenses: {} as PaginatedExpenses,
    ExpensesDetail: {} as Expenses,
    ExpensesTablePagination: {
      sortBy: 'registered_date',
      descending: true,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 1
    } as QTablePagination
  }),

  actions: {
    setExpensesTablePagination(data: QTablePagination) {
      this.ExpensesTablePagination = data
    },


    async getExpenses(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const expenses = (await API.getExpenses(query)) as PaginatedExpenses
      this.PaginatedExpenses = expenses
    },
 

    async getdetailFarmer(id: number) {
      const response = await API.getdetailExpenses(id)
      this.ExpensesDetail = response
      return response
    },

     
    async deleteExpenses(id: number) {
      const response = await API.deleteExpenses(id)
      return response
    },
   
  }
})
