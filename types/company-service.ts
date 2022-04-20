import { CompanyServiceSubCategory } from './company-service-sub-category'
import { SanityBlock, SanityElement, SanityImage, SanitySlug } from './sanity'

export interface CompanyService extends SanityElement {
  _type: 'company-service'
  content?: SanityBlock[]
  icon: SanityImage
  images?: SanityImage[]
  shortDescription: string
  layout: 'split' | 'two-column'
  slug: SanitySlug
  title: string
  subCategories?: CompanyServiceSubCategory[]
}

export type CompanyServiceMinimal = Pick<CompanyService, 'icon' | 'shortDescription' | 'slug' | 'title'>
