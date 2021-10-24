import { SanityElement, SanityImage } from './sanity'

export interface Employee extends SanityElement {
  _type: 'employee'
  email: string
  image: SanityImage
  name: string
  phoneNumber: string
  title: string
}
