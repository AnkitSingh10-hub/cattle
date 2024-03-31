import { defineStore } from 'pinia'
import API from '../api/resources'
import type { PaginatedResources, Infographics } from '../models/Resources.interface'

import type { Query } from '../models/page.interface'
import { queryBuilder } from '@/utils/api.utils'

import type { QTablePagination, PageFilter } from '../models/page.interface'
import type { Category } from '@/models/Category.interface'

export const useResourcesStore = defineStore('resources', {
  state: () => {
    return {
      PaginatedResources: {} as PaginatedResources,
      Resources: {} as Infographics,
      Category: {} as Category,
      CategoryList: [] as Category[],

      ResourceTablePagination: {
        sortBy: 'registered_date',
        descending: true,
        page: 1,
        rowsPerPage: 5,
        rowsNumber: 1
      } as QTablePagination
    }
  },
  actions: {
    setResourceTablePagination(data: QTablePagination) {
      this.ResourceTablePagination = data
    },
    async getResourceAPI(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const resources = (await API.getResources(query)) as PaginatedResources
      this.PaginatedResources = resources
    },

    async postResources(resources: Infographics, data: FormData): Promise<any> {
      const response = await API.PostResourcesAPI(resources, data)
      resources = response
      console.log(response)
      return response
    },

    async patchResources(id: number, data: FormData) {
      const patchResources = (await API.PatchResourcesAPI(id, data)) as PaginatedResources
      return patchResources
    },

    async deleteResources(id: number) {
      const deleteResponse = (await API.DeleteResourcesAPI(id)) as PaginatedResources
      return deleteResponse
    },
    async getCategoryAPI() {
      // const query = queryBuilder({})
      // const resources = (await API.getCategory(query)) as Category
      // this.Category = resources
      const CategoryList = (await API.getCategory()) as Category[]
      this.CategoryList = CategoryList
    },

    async postCategory(resource: Category, data: FormData): Promise<any> {
      const response = await API.PostCategoryAPI(resource, data)
      resource = response
      console.log(response)
      return response
    }
  }
})
