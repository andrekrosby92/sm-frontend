import { CompanyServiceSubCategory } from './company-service-sub-category'
import { SanityBlock, SanityElement, SanityImage, SanitySlug } from './sanity'

export interface CompanyService extends SanityElement {
  _type: 'company-service'
  canonicalUrl?: string
  content?: SanityBlock[]
  icon: SanityImage
  images?: SanityImage[]
  layout: 'split' | 'two-column' | 'bird-free'
  metaDescription: string
  metaDescriptionFacebook: string
  metaDescriptionTwitter: string
  metaImageSource: string
  metaTitle: string
  shortDescription: string
  slug: SanitySlug
  subCategories?: CompanyServiceSubCategory[]
  title: string
}

export type CompanyServiceMinimal = Pick<CompanyService, 'icon' | 'shortDescription' | 'slug' | 'title'>
