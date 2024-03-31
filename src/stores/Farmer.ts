import { defineStore } from 'pinia'
import type { Farmer, PaginatedFarmer, PaginatedFarmerReward } from '@/models/Farmer.interface'

import type { TreeCompleted, PaginatedTreeCompleted } from '@/models/treecompleted.interface'

import type { QTablePagination, PageFilter } from '../models/page.interface'
import type { Query } from '../models/page.interface'
import API from '@/api/Farmer'
import { queryBuilder } from '@/utils/api.utils'
export const useFarmerStore = defineStore({
  id: 'useFarmerStore',
  state: () => ({
    PaginatedFarmer: {} as PaginatedFarmer,
    PaginatedFarmerReward: {} as PaginatedFarmerReward,
    farmerdetail: {} as Farmer,
    paginatedTreeCompleted: {} as PaginatedTreeCompleted,
    treecompleted: {} as TreeCompleted,
    FarmerTablePagination: {
      sortBy: 'registered_date',
      descending: true,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 1
    } as QTablePagination,
    FarmerRewardTablePagination: {
      sortBy: 'registered_date',
      descending: true,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 1
    } as QTablePagination
  }),

  // getters: {
  //   getFarmerList(state) {
  //     return state.farmerlist
  //   }
  // },
  actions: {
    setFarmerTablePagination(data: QTablePagination) {
      this.FarmerTablePagination = data
    },

    setFarmerRewardTablePagination(data: QTablePagination) {
      this.FarmerRewardTablePagination = data
    },
    async getFarmer(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const farmer = (await API.getFarmer(query)) as PaginatedFarmer
      this.PaginatedFarmer = farmer
    },

    async getFarmerRejectedTree(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const farmer = (await API.getFarmerRejectedTree(query)) as PaginatedFarmer
      this.PaginatedFarmer = farmer
    },

    async getFarmerRegisteredTree(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const farmer = (await API.getFarmerRegisteredTree(query)) as PaginatedFarmer
      this.PaginatedFarmer = farmer
    },

    async getFarmerAssignedTree(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const farmer = (await API.getFarmerAssignedTree(query)) as PaginatedFarmer
      this.PaginatedFarmer = farmer
    },
    async getFarmerReward(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const farmerreward = (await API.getFarmerReward(query)) as PaginatedFarmerReward
      this.PaginatedFarmerReward = farmerreward
    },

    async getdetailFarmer(id: number) {
      const response = await API.getdetailFarmer(id)
      this.farmerdetail = response
      return response
    },

    async getTreeCompletedList(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const TreeCompleted = (await API.getTreeCompletedList(query)) as PaginatedTreeCompleted
      this.paginatedTreeCompleted = TreeCompleted
    }
  }
})
