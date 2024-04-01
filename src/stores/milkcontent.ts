import { defineStore } from 'pinia'
import type { MilkContent, PaginatedMilkContent } from '@/models/Milk.interface'

import type { QTablePagination, PageFilter } from '../models/page.interface'
import type { Query } from '../models/page.interface'
import API from '@/api/milkcontent'
import { queryBuilder } from '@/utils/api.utils'
export const useMilkContentStore = defineStore({
  id: 'useMilkContentStore',
  state: () => ({
    PaginatedMilkContent: {} as PaginatedMilkContent,
    MilkContentDetail: {} as MilkContent,
    MilkContentTablePagination: {
      sortBy: 'registered_date',
      descending: true,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 1
    } as QTablePagination
  }),

  actions: {
    setMilkContentTablePagination(data: QTablePagination) {
      this.MilkContentTablePagination = data
    },


    async getMilkContent(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const milk_content = (await API.getMilkContent(query)) as PaginatedMilkContent
      this.PaginatedMilkContent = milk_content
    },
 

    async getdetailFarmer(id: number) {
      const response = await API.getdetailMilkContent(id)
      this.MilkContentDetail = response
      return response
    }
   
  }
})
