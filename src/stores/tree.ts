import { defineStore } from 'pinia'
import API from '../api/tree'
import type {
  Tree,
  PaginatedTree,
  AvailableTreeList,
  PaginatedAvailableTreeList,
  GeoJsonTreeFeatures,
  NextPreviousTree
} from '../models/tree.interface'
import type { Query } from '../models/page.interface'
import { queryBuilder } from '@/utils/api.utils'

import type { QTablePagination, PageFilter } from '../models/page.interface'
import type {
  PaginatedTreeCompletedDetail,
  TreeCompletedDetail
} from '../models/treecompleteddetail.interface'
import { getAPI } from '@/api'

export const useTreeStore = defineStore('tree', {
  state: () => {
    return {
      PaginatedTree: {} as PaginatedTree,
      TreeDetail: {} as Tree,
      GeoTreeDetail: {} as GeoJsonTreeFeatures,
      NextPreviousTree: {} as NextPreviousTree,
      PaginatedTreeCompleteDetail: {} as PaginatedTreeCompletedDetail,
      TreeCompletedDetail: {} as TreeCompletedDetail,
      TreeTablePagination: {
        sortBy: 'registered_date',
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 1
      } as QTablePagination,
      PaginatedAvailableTree: {} as PaginatedAvailableTreeList,
      AvailableTreeDetail: {} as AvailableTreeList,
      AvailableTreeTablePagination: {
        sortBy: 'verified_tree',
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 1
      } as QTablePagination,
      GeoTreeList: null as GeoJsonTreeFeatures | null
    }
  },
  actions: {
    setTreeTablePagination(data: QTablePagination) {
      this.TreeTablePagination = data
    },
    setAvailableTreeTablePagination(data: QTablePagination) {
      this.AvailableTreeTablePagination = data
    },
    async getTrees(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const tree = (await API.getTree(query)) as PaginatedTree
      this.PaginatedTree = tree
    },
    async getRegisteredTrees(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const tree = (await API.getRegisteredTrees(query)) as PaginatedTree
      this.PaginatedTree = tree
    },
    async getVerifiedTrees(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const tree = (await API.getVerifiedTrees(query)) as PaginatedTree
      this.PaginatedTree = tree
    },
    async getPaidTrees(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const tree = (await API.getPaidTrees(query)) as PaginatedTree
      this.PaginatedTree = tree
    },
    async getRejectedTrees(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const tree = (await API.getRejectedTrees(query)) as PaginatedTree
      this.PaginatedTree = tree
    },
    async getTreeDetail(id: number) {
      const treedetail = (await API.getTreeDetail(id)) as Tree
      const geoTreeDetail = (await API.getGeoTreeDetail(id)) as GeoJsonTreeFeatures
      this.TreeDetail = treedetail
      this.GeoTreeDetail = geoTreeDetail
    },
    async getNextTreeDetail(id: number) {
      const treedetail = (await API.getNextTreeDetail(id)) as NextPreviousTree
      this.NextPreviousTree = treedetail
    },
    async postVerifyTree(id: number) {
      const response = await API.postVerifyTree(id)
      this.TreeDetail = response
    },
    async postTreeReject(id: number, data: any) {
      return await API.postTreeReject(id, data)
    },
    async getGeoTreeData(extent: number[], zoomLevel: number) {
      //use extent, zoom level later to filter
      const data = await getAPI('geo-tree')
      this.GeoTreeList = data
      // console.log(res)
    },
    async getAvailableTreeList(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const treelist = (await API.getAvailableTreeList(query)) as PaginatedAvailableTreeList
      this.PaginatedAvailableTree = treelist
    },

    // Tree CompletedDetail
    async getCompletedTreeDetail(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const tree = (await API.getCompletedTreeDetail(query)) as PaginatedTreeCompletedDetail
      this.PaginatedTreeCompleteDetail = tree
    }
  }
})
