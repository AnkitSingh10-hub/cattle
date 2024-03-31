import type { Page } from './page.interface'
export interface PaginatedPlotCompletedDetail extends Page {
  results: UploadedLandDetail[]
}
export interface UploadedLandDetail {
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
