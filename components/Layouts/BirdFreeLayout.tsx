import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'

import BlockContent from 'components/Sanity/BlockContent'
import Sanity from 'services/Sanity'
import { CompanyService } from 'types/company-service'
import { SanityImage } from 'types/sanity'

export default function BirdFreeLayout({ companyService }: { companyService: CompanyService }): JSX.Element {
  return (
    <article className="max-w-6xl w-full mx-auto px-6 md:px-8 xl:px-0 py-8 md:py-12">
      <h1 className="mb-4 md:mb-7 text-4xl lg:text-5xl xl:text-6xl font-semibold text-center">
        {companyService.title}
      </h1>

      {companyService.images && (
        <Image
          alt={companyService.images[0].alt}
          className="rounded-lg"
          height={351}
          src={Sanity.buildImageUrl(companyService.images[0].asset)}
          width={1396}
        />
      )}

      {companyService.content && (
        <Fragment>
          <BlockContent blocks={companyService.content} className="mx-auto my-10 prose" />
        </Fragment>
      )}

      {companyService.subCategories?.slice(0, 1).map((elem) => (
        <div className="space-y-4" key={elem._id}>
          <Image
            alt={elem.images[0].alt}
            className="rounded-lg"
            height={808}
            src={Sanity.buildImageUrl(elem.images[0].asset)}
            width={2000}
          />
        </div>
      ))}
    </article>
  )
}
