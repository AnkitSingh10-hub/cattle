export interface Page {
  next: null | string
  previous: null | string
  currentPage: number
  pageSize: number
  totalPages: number
  totalObjects: number
}

export interface QTablePagination {
  sortBy: string
  descending: boolean
  page: number
  rowsPerPage: number
  rowsNumber: number
}

export interface Query {
  [key: string]: string | number
}

export interface PageFilter {
  page?: number
  page_size?: number
}
