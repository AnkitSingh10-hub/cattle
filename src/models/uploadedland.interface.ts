import type { Page } from './page.interface'
export interface PaginatedPlotCompleted extends Page {
  results: UploadedLand[]
}
export interface UploadedLand {
  id: number
  username: string
  location?: null
  registered_trees_count: number
  approved_trees_count: number
  paid_trees_count: number
  date_joined: string
  total_trees_count: number
  last_login?: null
  district_name: string
  fullname: string
  municipality_name: string
  mobile_number: string
  reject_trees_count: number
  total_land_area: number
  approved_land_area: number
  geo_trees_list?: null
  bank_name: string
  ac_no: string
  ac_holder: string
  plotted?: PlottedEntity[] | null
  has_payment_details: boolean
  assigned_trees_count: number
  assigned_land_area: number
  paid_land_area: number
}
export interface PlottedEntity {
  id: number
  user: number
  plot_status: string
  land_owner_fullname: string
  land_area: number
  plot_province: number
  plot_district: number
  plot_palika: number
  plot_ward: string
  plot_boundary?: PlotBoundary | null
  registered_date: string
  plot_remarks?: null
  verified_date?: null
  plot_doc?: null
  is_assigned: boolean
}
export interface PlotBoundary {
  type: string
  coordinates?: ((number[] | null)[] | null)[] | null
}
