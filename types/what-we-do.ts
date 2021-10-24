import { SanityElement } from './sanity'

export interface WhatWeDo extends SanityElement {
  _type: 'what-we-do'
  icon: {
    _type: 'image'
    asset: {
      _ref: string
      _type: string
    }
  }
  pitch: string
  title: string
}
