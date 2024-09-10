import type { ImageAsset } from '@sanity/types'

export interface Category {
  _id: string
  categoryName: string
  singleName?: string
  categoryImg: ImageAsset
  categoryDefWeight?: number
}
