import type { Page } from './page.interface'
export interface PaginatedLandReward extends Page {
  results: LandReward[]
}
export interface LandReward {
  id: number
  reward_trees: number
  mobile_number: string
  account_holder_name: string
  account_type: string
  account_type_picture?: null
  bank_name: string
  account_no: string
  branch?: null
  wallet_name?: null
  wallet_no?: null
  is_verified: boolean
  of_user: number
}
