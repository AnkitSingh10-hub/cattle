import type { Page } from './page.interface'
export interface PaginatedClient extends Page {
  results: Client[]
}
export interface Client {
  id: number
  groups: string[]
  username: string
  organization_address: string
  organization_name: string
  last_login: null
  is_superuser: boolean
  first_name: string
  last_name: string
  is_active: boolean
  date_joined: string
  email: string
  mobile_number: null
  avatar: null
  gender: null
  age: null
  location: null
  is_phone_verfied: null
  ward: string
  client_address: string
  province: number
  district: number
  municipality: string
  fullname: string
}
