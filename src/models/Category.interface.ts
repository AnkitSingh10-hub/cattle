export interface Category {
  id: number
  label: string
  description: string
  related_infographics?: number[] | null
  thumbnail: File
}
