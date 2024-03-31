import { defineStore } from 'pinia'
import API from '../api/plot'
import type {
  Plot,
  PaginatedPlot,
  AvailablePlotList,
  PaginatedAvailablePlotList,
  PlotReject
} from '../models/plot.interface'

import type { Query } from '../models/page.interface'
import { queryBuilder } from '@/utils/api.utils'

import type { QTablePagination, PageFilter } from '../models/page.interface'
import type { UploadedLand, PaginatedPlotCompleted } from '../models/uploadedland.interface'
import type { LandCompleted, PaginatedLandCompleted } from '../models/landcompleted.interface'
import type {
  UploadedLandDetail,
  PaginatedPlotCompletedDetail
} from '../models/uploadedlanddetail.interface'

export const usePlotStore = defineStore('plot', {
  state: () => {
    return {
      PaginatedPlot: {} as PaginatedPlot,
      PlotDetail: {} as Plot,
      PaginatedPlotCompleted: {} as PaginatedPlotCompleted,
      UploadedLand: {} as UploadedLand,
      UploadedLandDetail: {} as UploadedLandDetail,
      PaginatedPlotCompletedDetail: {} as PaginatedPlotCompletedDetail,
      PaginatedLandCompleted: {} as PaginatedLandCompleted,
      LandCompleted: {} as LandCompleted,
      PlotTablePagination: {
        sortBy: 'id',
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 1
      } as QTablePagination,
      PaginatedAvailablePlot: {} as PaginatedAvailablePlotList,
      AvailablePlotDetail: {} as AvailablePlotList,
      AvailablePlotTablePagination: {
        sortBy: '-available_land_area',
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 1
      } as QTablePagination
    }
  },
  actions: {
    setPlotTablePagination(data: QTablePagination) {
      this.PlotTablePagination = data
    },
    setAvailablePlotTablePagination(data: QTablePagination) {
      this.AvailablePlotTablePagination = data
    },
    async getPlots(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const plot = (await API.getPlots(query)) as PaginatedPlot
      this.PaginatedPlot = plot
    },
    async getRegisteredPlots(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const plot = (await API.getRegisteredPlots(query)) as PaginatedPlot
      this.PaginatedPlot = plot
    },
    async getVerifiedPlots(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const plot = (await API.getVerifiedPlots(query)) as PaginatedPlot
      this.PaginatedPlot = plot
    },
    async getAvailablePlotList(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const plotlist = (await API.getAvailablePlotList(query)) as PaginatedAvailablePlotList
      this.PaginatedAvailablePlot = plotlist
    },

    async getPlotDetail(id: number) {
      const plotdetail = (await API.getPlotDetail(id)) as Plot

      this.PlotDetail = plotdetail
    },
    async postVerifyPlot(id: number) {
      const response = await API.postVerifyPlot(id)
      this.PlotDetail = response
    },
    async postPlotReject(id: number, data: PlotReject) {
      const postPlotReject = await API.postPlotReject(id, data)
      return postPlotReject
    },
    async getUploadedLand(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const plot = (await API.getUploadedLand(query)) as PaginatedPlotCompleted
      this.PaginatedPlotCompleted = plot
    },
    async getUploadedLandDetail(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const plot = (await API.getUploadedLandDetail(query)) as PaginatedPlotCompletedDetail
      this.PaginatedPlotCompletedDetail = plot
    },
    async getCompletedLand(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const plot = (await API.getCompletedLand(query)) as PaginatedLandCompleted
      this.PaginatedLandCompleted = plot
    },
    async getCompletedLandDetail(params: PageFilter = {}) {
      const query = queryBuilder(params as Query)
      const plot = (await API.getCompletedLandDetail(query)) as PaginatedLandCompleted
      this.PaginatedLandCompleted = plot
    }
  }
})
