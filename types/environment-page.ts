import { SanityBlock, SanityElement, SanityImage } from './sanity'

export interface EnvironmentPage extends SanityElement {
  _type: 'environment-page'
  content?: SanityBlock[]
  images?: SanityImage[]
  title: string
}
