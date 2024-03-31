import type { Page } from './page.interface'
export interface PaginatedTreeCompletedDetail extends Page {
  results: TreeCompletedDetail[]
}
export interface TreeCompletedDetail {
  id: number
  user: number
  tag_number: string
  tree_status: string
  m_id: string
  plotid?: null
  location: Location
  altitude: number
  gps_accuracy: number
  tree_remarks?: null
  registered_date: string
  unregistered_date?: null
  verified_date?: string | null
  approved_date: string
  paid_date: string
  rejected_date?: null
  tree_photo: string
  is_assigned: boolean
  assign_type: string
  tree_rate: number
  username: string
  fullname: string
  district_name: string
}
export interface Location {
  type: string
  coordinates?: number[] | null
}
