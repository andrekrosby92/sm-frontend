import type { GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import BlockContent from 'components/Sanity/BlockContent'
import SEO from 'components/SEO/SEO'
import Sanity from 'services/Sanity'
import { EnvironmentPage as IEnvironmentPage } from 'types/environment-page'

export default function EnvironmentPage({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const images = data.images
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
  }, [data.images])

  return (
    <div>
      <SEO
        description="Skiltmakeren fokuserer på miljøvern og bærekraft. Vi tar ansvar, utvikler miljøvennlige prosesser og stiller strenge etiske krav til våre leverandører."
        descriptionFacebook="Vi tar ansvar og fokuserer på miljøvern og bærekraft."
        descriptionTwitter="Vi tar ansvar, utvikler miljøvennlige prosesser og fokuserer på miljøvern og bærekraft."
        metaImage="https://www.skiltmakeren.no/images/meta-image-miljo.png"
        title="Miljø - Skiltmakeren AS · Vi kan skilt og dekor."
        url="https://www.skiltmakeren.no/miljo"
      />

      <article className="max-w-6xl w-full mx-auto px-6 md:px-8 xl:px-0 py-8 md:py-12">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
          <h1 className="mb-4 text-4xl xl:text-6xl font-semibold md:hidden">{data.title}</h1>
          <section className="order-2 md:order-1 mt-4 md:mt-0">
            <h1 className="mb-8 text-4xl xl:text-6xl font-semibold hidden md:block">{data.title}</h1>
            <a
              className="block mb-6 underline text-blue-500"
              href="/documents/miljo-rapport-2022.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Klikk her for å se Skiltmakerens innrapportering for 2022
            </a>
            <BlockContent blocks={data.content} className="prose xl:prose-lg" />
          </section>
          <div className="order-1 md:order-2 h-full flex flex-col">
            <div className="w-full my-auto">
              <section className="h-[200px] md:h-[325px] w-full overflow-x-hidden">
                <div className="flex transition-transform" style={{ transform: `translateX(-${index * 100}%)` }}>
                  {data.images?.map((elem) => (
                    <div className="relative flex-shrink-0 h-[200px] md:h-[325px] w-full" key={elem.asset._ref}>
                      <Image
                        alt={elem.alt}
                        className="rounded-lg"
                        layout="fill"
                        objectFit="contain"
                        src={Sanity.buildImageUrl(elem.asset)}
                      />
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-2 mb-4 xl:my-1 text-[20px] xl:text-[30px] text-center text-[#043170] font-cursivex">
                <h2>Stolt Miljøfyrtårn siden 2017!</h2>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<{ data: IEnvironmentPage }>> {
  return {
    revalidate: 30,
    props: {
      data: await Sanity.getEnvironmentPageData(),
    },
  }
}
