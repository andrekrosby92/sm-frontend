import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'

import BlockContent from 'components/Sanity/BlockContent'
import Sanity from 'services/Sanity'
import { CompanyService } from 'types/company-service'
import { SanityImage } from 'types/sanity'

export default function TwoColumnLayout({ companyService }: { companyService: CompanyService }): JSX.Element {
  console.log(companyService)
  return (
    <article className="max-w-6xl w-full mx-auto px-6 md:px-8 xl:px-0 py-8 md:py-12">
      <h1 className="mb-4 md:mb-7 text-4xl xl:text-6xl font-semibold">{companyService.title}</h1>
      {companyService.subCategories && (
        <section className="grid md:grid-cols-2 gap-8">
          {companyService.subCategories.map((elem) => (
            <div className="space-y-4" key={elem._id}>
              <ImageCarousel images={elem.images} />
              <section className="prose xl:prose-md">
                <h2 className="">{elem.title}</h2>
                <BlockContent blocks={elem.content} />
              </section>
            </div>
          ))}
        </section>
      )}
      {companyService.content && (
        <Fragment>
          <div className="my-12 flex justify-center space-x-4 text-lg">
            <span>&middot;</span>
            <span>&middot;</span>
            <span>&middot;</span>
          </div>
          <BlockContent blocks={companyService.content} className="mx-auto prose" />
        </Fragment>
      )}
    </article>
  )
}

function ImageCarousel({ images }: { images: SanityImage[] }): JSX.Element {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevState) => {
        if (images && prevState === images.length - 1) {
          return 0
        } else {
          return prevState + 1
        }
      })
    }, 4000)

    return () => {
      setIndex(0)
      clearInterval(interval)
    }
  }, [images])

  return (
    <div className="h-[200px] md:h-[400px] overflow-x-hidden">
      <div className="flex transition-transform" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((elem) => (
          <div className="relative flex-shrink-0 h-[200px] md:h-[400px] w-full" key={elem.asset._ref}>
            <Image
              alt={elem.alt}
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
              src={Sanity.buildImageUrl(elem.asset)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
