import type { Page } from './page.interface'

export interface Assign {
  id: number
  client: number
  farmer: number
  number_of_tree: number
  per_tree_payable: number
  assigned_land_area: number
  per_square_payable: number
  plot: number
  assign_type: string
  assigned_date: string
  planterfullname: string
  clientemail: string
}

export interface PaginatedAssignGroup extends Page {
  results: Assign[]
}
