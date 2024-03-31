import { defineStore } from 'pinia'
import type { Client, PaginatedClient } from '@/models/Client.interface'
import API from '../api/client'
import type { Query } from '../models/page.interface'
import { queryBuilder } from '@/utils/api.utils'

import type { QTablePagination, PageFilter } from '../models/page.interface'


export const useClientStore = defineStore('client', {
  state: () => {
    return {
      PaginatedClient: {} as PaginatedClient,
      ClientDetail: {} as Client,
      ClientTablePagination: {
        sortBy: 'date_joined',
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 1
      } as QTablePagination
    }
  },
  actions: {
    setClientTablePagination(data: QTablePagination) {
      this.ClientTablePagination = data
    },
    async getClients(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const client = (await API.getClients(query)) as PaginatedClient
      this.PaginatedClient = client
    },
    
    async getdetailClient(id: number) {
      const response = await API.getdetailClient(id)
      this.ClientDetail = response
      return response
    }
    
  }
})
