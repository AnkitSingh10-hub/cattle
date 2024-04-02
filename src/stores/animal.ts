import { defineStore } from 'pinia'
import type { Animal, PaginatedAnimal } from '@/models/Animal.interface'

import type { QTablePagination, PageFilter } from '../models/page.interface'
import type { Query } from '../models/page.interface'
import API from '@/api/animal'
import { queryBuilder } from '@/utils/api.utils'
export const useAnimalStore = defineStore({
  id: 'useAnimalStore',
  state: () => ({
    PaginatedAnimal: {} as PaginatedAnimal,
    AnimalDetail: {} as Animal,
    AnimalTablePagination: {
      sortBy: 'registered_date',
      descending: true,
      page: 1,
      rowsPerPage: 5,
      rowsNumber: 1
    } as QTablePagination
  }),

  actions: {
    setAnimalTablePagination(data: QTablePagination) {
      this.AnimalTablePagination = data
    },


    async getAnimal(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const animal = (await API.getAnimal(query)) as PaginatedAnimal
      this.PaginatedAnimal = animal
    }, 

    async getdetailFarmer(id: number) {
      const response = await API.getdetailAnimal(id)
      this.AnimalDetail = response
      return response
    },
    async deleteAnimal(id: number) {
      const response = await API.deleteAnimal(id)
      return response
    },
   
  }
})
