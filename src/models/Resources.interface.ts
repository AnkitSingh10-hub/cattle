import type { Page } from './page.interface'

export interface Infographics {
  id: number
  title: string
  description: string
  type: string
  photo: string | any
  file: File
  video_link: string
  category: string
  thumbnail: File
}

export interface PaginatedResources extends Page {
  results: Infographics[]
}
