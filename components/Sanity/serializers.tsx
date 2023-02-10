import Image from 'next/image'
import { ReactNode } from 'react'

import Sanity from 'services/Sanity'
import { SanityImage } from 'types/sanity'

export const serializers = {
  types: {
    image: (props: unknown): JSX.Element => {
      const { node } = props as { node: SanityImage }

      return (
        <figure className="relative">
          <Image
            alt={node.alt}
            className="block mx-auto max-w-full"
            height={9}
            layout="responsive"
            objectFit="contain"
            src={Sanity.buildImageUrl(node.asset)}
            width={16}
          />
        </figure>
      )
    },
  },

  marks: {
    link: ({ mark, children }: { mark: { blank: boolean; href: string }; children: ReactNode }): JSX.Element => {
      const { blank, href } = mark
      return blank ? (
        <a href={href} rel="noopener noreferrer" target="_blank">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      )
    },
  },
}
