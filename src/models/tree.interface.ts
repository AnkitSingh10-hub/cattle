import type { Page } from './page.interface'

export interface Tree {
  id: number
  user: number
  tag_number: string
  tree_status: string
  plotid: number
  location: string
  altitude: string
  gps_accuracy: number
  tree_remarks: string
  registered_date: string
  unregistered_date: string
  verified_date: string
  approved_date: string
  paid_date: string
  rejected_date: string
  tree_photo: string
  tree_rate: number
  username: string
  fullname: string
  district_name: string
}

export interface PaginatedTree extends Page {
  results: Tree[]
}

export interface AvailableTreeList {
  user: number
  username: string
  district: string
  registered_tree: number
  verified_tree: number
  paid_tree: number
}

export interface PaginatedAvailableTreeList extends Page {
  results: AvailableTreeList[]
}
export interface GeoJsonTreeFeatures {
  type: string
  features: GeoJsonTree[]
}
export interface GeoJsonTree {
  id: number
  type: string
  geometry: TreeGeometry
  properties: TreeProperties | TreeProperties[]
}

export interface TreeGeometry {
  type: string
  coordinates: number[]
}
type stringOrNull = string | null
type numberOrNull = number | null
export interface TreeProperties {
  tag_number: string
  tree_status: string
  altitude: numberOrNull
  gps_accuracy: numberOrNull
  tree_remarks: stringOrNull
  registered_date: Date | null
  unregistered_date: stringOrNull
  verified_date: stringOrNull
  approved_date: stringOrNull
  paid_date: stringOrNull
  rejected_date: stringOrNull
  tree_rate: numberOrNull
  is_assigned: boolean
  assign_type: stringOrNull
  tree_photo: stringOrNull
  user: number
  plotid: stringOrNull
}

export interface NextPreviousTree {
  next_tree: Tree
  previous_tree: Tree
}
