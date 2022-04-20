import Image from 'next/image'
import { useEffect, useState } from 'react'

import BlockContent from 'components/Sanity/BlockContent'
import Sanity from 'services/Sanity'
import { CompanyService } from 'types/company-service'

export default function SplitLayoyt({ companyService }: { companyService: CompanyService }): JSX.Element {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const images = companyService.images
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
  }, [companyService.images])

  return (
    <article className="max-w-6xl w-full mx-auto px-6 md:px-8 xl:px-0 py-8 md:py-12">
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
        <h1 className="mb-4 text-4xl xl:text-6xl font-semibold md:hidden">{companyService.title}</h1>
        <section className="order-2 md:order-1 mt-4 md:mt-0">
          <h1 className="mb-4 text-4xl xl:text-6xl font-semibold hidden md:block">{companyService.title}</h1>
          <BlockContent blocks={companyService.content} className="prose xl:prose-lg" />
        </section>
        <section className="order-1 md:order-2 h-[200px] md:h-[500px] overflow-x-hidden">
          <div className="flex transition-transform" style={{ transform: `translateX(-${index * 100}%)` }}>
            {companyService.images?.map((elem) => (
              <div className="relative flex-shrink-0 h-[200px] md:h-[500px] w-full" key={elem.asset._ref}>
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
        </section>
      </div>
    </article>
  )
}
