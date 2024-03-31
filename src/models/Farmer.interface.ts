import type { Page } from './page.interface'
import type { GeoJsonTreeFeatures } from './tree.interface'
import type { Plot } from './plot.interface'

export interface PaginatedFarmer extends Page {
  results: Farmer[]
}

export interface Farmer {
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
  mobile_number?: null
  reject_trees_count: number
  total_land_area: number
  approved_land_area: number
  // last_login?: null
  geo_trees_list: GeoJsonTreeFeatures
  // plotted?: (PlottedEntity)[] | null;
  plotted: Plot[]
  has_payment_details: boolean

}

export interface PlottedEntity {
  id: number
  plot_status: string
  land_owner_fullname: string
  land_area: number
  plot_ward: string
  plot_boundary: PlotBoundary
  registered_date: string
  verified_date?: null
  rejected_date?: null
  plot_remarks?: null
  is_assigned: boolean
  plot_doc?: string
  user: number
  plot_province?: null
  plot_district?: null
  plot_palika?: null
}
export interface PlotBoundary {
  type: string
  coordinates?: ((number[] | null)[] | null)[] | null
}




export interface PaginatedFarmerReward extends Page {
  results: FarmerReward[]
}
export interface FarmerReward {
  id: number;
  total_amount_rewarded: number;
  total_trees_rewarded: number;
  last_login?: null;
  first_name: string;
  last_name: string;
  is_active: boolean;
  date_joined: string;
  is_deleted: boolean;
  deleted_date?: null;
  username: string;
  mobile_number?: string | null;
  avatar?: string | null;
  gender?: string | null;
  age?: number | null;
  is_phone_verfied?: boolean | null;
  ward?: string | null;
  province: number;
  district: number;
  municipality: number;
  groups?: (number)[] | null;
}
