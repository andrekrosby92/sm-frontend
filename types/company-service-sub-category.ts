import { SanityBlock, SanityElement, SanityImage } from './sanity'

export interface CompanyServiceSubCategory extends SanityElement {
  _type: 'company-service-sub-category'
  content: SanityBlock[]
  images: SanityImage[]
  title: string
}
