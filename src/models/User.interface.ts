export interface UserDetail {
  id: number
  fullName: string
  firstName: string
  lastName: string
  email: string
  dateJoined?: string
  lastLogin?: string
  isActive?: true
  isSuperuser?: true
  groups: string[]
  username: string
}

export interface Register {
  id?: number;
  password: string;
  groups?: (string)[] | null;
  username: string;
  organization_address: string;
  organization_name: string;
  last_login?: null;
  is_superuser?: boolean;
  first_name?: string;
  last_name?: string;
  is_active?: boolean;
  date_joined?: string;
  email: string;
  mobile_number?: number;
  avatar?: null;
  gender?: null;
  age?: null;
  location?: null;
  is_phone_verfied?: null;
  ward?: null;
  client_address: string;
  province?: null;
  district?: null;
  municipality?: null;
  country : string;
}