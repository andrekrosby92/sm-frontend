import { SanityElement } from './sanity'

export interface Customer extends SanityElement {
  _type: 'customer'
  logo: {
    _type: 'image'
    asset: {
      _ref: string
      _type: string
    }
  }
  title: string
}
