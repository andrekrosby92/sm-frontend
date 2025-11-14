import { SanityBlock, SanityElement, SanityImage, SanitySlug } from './sanity'

export interface ArbeidsklaerTableRow {
  _key: string
  _type: 'tableRow'
  td: string
  th: string
}

export interface Arbeidsklaer extends SanityElement {
  _type: 'arbeidsklaer'
  brand: string
  certifiedAccordingTo?: string[]
  description: string
  details: SanityBlock[]
  gramWeight?: string
  iconsRow1?: SanityImage[]
  iconsRow2?: SanityImage[]
  images: SanityImage[]
  material?: string
  properties: ArbeidsklaerTableRow[]
  slug: SanitySlug
  tags: string[]
  title: string
}


export type ArbeidsklaerMinimal = Pick<Arbeidsklaer, 'title' | 'slug' | 'images' | 'tags'>