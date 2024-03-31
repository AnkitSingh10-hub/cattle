import type { Page } from './page.interface'
export interface PaginatedLandCompleted extends Page {
  results: LandCompleted[]
}

export interface LandCompleted {
  id: number
  username: string
  location: Location
  registered_trees_count: string
  approved_trees_count: string
  paid_trees_count: string
  date_joined: string
  total_trees_count: string
  last_login: string
  district_name: string
  fullname: string
  municipality_name: string
  mobile_number: string
  reject_trees_count: string
  total_land_area: string
  approved_land_area: string
  geo_trees_list: string
  bank_name: string
  ac_no: string
  ac_holder: string
  plotted: string
  has_payment_details: string
  assigned_trees_count: string
  assigned_land_area: string
  paid_land_area: string
}
export interface Location {
  type: string
  coordinates?: number[] | null
}
