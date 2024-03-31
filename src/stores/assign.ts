import { defineStore } from 'pinia'
import API from '../api/assign'
import type { Assign, PaginatedAssignGroup } from '../models/assign.interface'
import type { Query } from '../models/page.interface'
import { queryBuilder } from '@/utils/api.utils'

import type { QTablePagination, PageFilter } from '../models/page.interface'

export const useAssignStore = defineStore('assign', {
  state: () => {
    return {
      PaginatedAssignGroup: {} as PaginatedAssignGroup,
      Assign: {} as Assign,
      AssignGroupTablePagination: {
        sortBy: 'registered_date',
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 1
      } as QTablePagination
    }
  },
  actions: {
    setAssignGroupTablePagination(data: QTablePagination) {
      this.AssignGroupTablePagination = data
    },
    async getAssignedGroup(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const assigngroup = (await API.getAssignedGroup(query)) as PaginatedAssignGroup
      this.PaginatedAssignGroup = assigngroup
    },
    async postAssign(data: any) {
      return await API.postAssign(data)
    },
    async getdetailClient(id: number) {
      const response = await API.getAssignDetail(id)
      this.Assign = response
      return response
    }
  }
})
