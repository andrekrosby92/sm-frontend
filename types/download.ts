import { SanityElement } from './sanity'

export interface Download extends SanityElement {
  _rev: string
  _type: 'download'
  category: {
    _ref: string
    _type: 'reference'
  }
  file: {
    _type: 'file'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  fileUrl: string
  title: string
}

export interface DownloadCategory extends SanityElement {
  _rev: string
  _type: 'download-category'
  downloads: Download[]
  name: string
}
