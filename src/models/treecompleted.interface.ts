import type { Page } from './page.interface'
export interface PaginatedTreeCompleted extends Page {
  results: TreeCompleted[]
}
export interface TreeCompleted {
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
  plotted?: null[] | null
  has_payment_details: boolean
}
