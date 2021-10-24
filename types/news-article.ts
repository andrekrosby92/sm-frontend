import { SanityBlock, SanityElement, SanityImage, SanitySlug } from './sanity'

export interface NewsArticle extends SanityElement {
  _type: 'news-article'
  content: SanityBlock[]
  coverImage: SanityImage
  shortDescription: string
  slug: SanitySlug
  title: string
}
