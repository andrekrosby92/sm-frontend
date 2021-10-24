import SanityBlockContent, { BlockContentProps } from '@sanity/block-content-to-react'

import Sanity from 'services/Sanity'

import { serializers } from './serializers'

export default function BlockContent(props: BlockContentProps): JSX.Element {
  return <SanityBlockContent serializers={serializers} {...props} {...Sanity.client.config()} />
}
