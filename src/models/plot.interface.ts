import type { StringSchema } from 'yup'
import type { Page } from './page.interface'

export interface Plot {
  id: number
  user: number
  land_owner_fullname: string
  land_area: string
  plot_province: number
  plot_district: number
  plot_palika: number
  plot_ward: string
  plot_boundary: PlotBoundary
  registered_date: string
  is_verified: boolean
  verified_date: string
  plot_doc: string
  is_assigned: boolean
  plot_remarks: string
  plot_status: string
}

interface PlotBoundary {
  type: string
  coordinates: number[][][]
}

export interface PaginatedPlot extends Page {
  results: Plot[]
}

export interface AvailablePlotList {
  user: number
  username: string
  district: string
  land_area: number
  available_land_area: number
  assigned_land_area: number
  paid_plot: number
  plot_district__name: String
}

export interface PaginatedAvailablePlotList extends Page {
  results: AvailablePlotList[]
}

export interface PlotReject {
  id: number
  plot_remarks: string
}
