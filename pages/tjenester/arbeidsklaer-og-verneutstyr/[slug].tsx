import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useCallback, useRef, useState } from 'react'

import BlockContent from 'components/Sanity/BlockContent'
import ContactCard from 'scenarios/contact/components/ContactCard'
import ContactFormProduct from 'scenarios/contact/components/ContactFormProduct'
import DividerFaded from 'components/Dividers/DividerFaded'
import Sanity from 'services/Sanity'
import SEO from 'components/SEO/SEO'
import SectionHeaderPrimary from 'components/SectionHeaders/SectionHeaderPrimary'
import { Arbeidsklaer } from 'types/arbeidsklaer'

type ListStatus = 'OPEN' | 'CLOSED'

export default function Page(props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const images = props.arbeidsklaer.images.map((elem) => {
    return {
      src: Sanity.buildImageUrl(elem.asset),
      alt: elem.alt,
    }
  })

  const [currImageIdx, setCurrImageIdx] = useState(0)
  const currImageSrc = images[currImageIdx].src
  const currImageAlt = images[currImageIdx].alt

  const [listStatus, setListStatus] = useState<ListStatus>('CLOSED')
  const listRef = useRef<null | HTMLDivElement>(null)

  const handleOnImageClick = (index: number): void => {
    setCurrImageIdx(index)
  }

  const handleOnClick = useCallback((): void => {
    if (listRef.current instanceof HTMLDivElement) {
      switch (listStatus) {
        case 'OPEN':
          setListStatus('CLOSED')
          listRef.current.style.height = '0'
          break

        case 'CLOSED':
          setListStatus('OPEN')
          listRef.current.style.height = '100%'
          break

        default:
          break
      }
    }
  }, [listStatus])

  return (
    <Fragment>
      <SEO
        canonicalUrl="________________________________________"
        description="________________________________________"
        descriptionFacebook="________________________________________"
        descriptionTwitter="________________________________________"
        imageSource="https://www.skiltmakeren.no/images/meta-image.png"
        title="________________________________________"
      />

      <div className="article-container mx-auto mt-4 md:mt-6 xl:mt-8 mb-24 text-[#231F20]">
        {/* Breadcrumbs */}

        <span className="text-sm xl:text-base text-primary">
          <span className="text-primary">Tjenester</span>
          <span className="text-primary">&nbsp;/&nbsp;</span>
          <Link href="/tjenester/arbeidsklaer-og-verneutstyr">Arbeidsklær og Verneutstyr</Link>
        </span>

        <article className="mt-4 xl:mt-6">
          <section>
            <h1 className="mb-2 text-3xl md:text-4xl lg:text-5xl font-semibold">{props.arbeidsklaer.title}</h1>
            <DividerFaded />
          </section>

          <section className="mt-4 flex flex-col md:flex-row items-center md:items-start">
            {/* Bilder */}
            <div className="w-full max-w-[240px] lg:max-w-[336px] flex-shrink-0">
              <div className="w-full flex justify-center p-4">
                <div className="w-full relative pb-[155%]">
                  <Image alt={currImageAlt} className="object-contain" fill src={currImageSrc} />
                </div>
              </div>

              <div className="mr-2">
                <ImageGrid images={images} onImageClick={handleOnImageClick} />
              </div>

              <hr className="my-4" />

              <div className="flex justify-center md:justify-start flex-wrap gap-2">
                {props.arbeidsklaer.iconsRow1?.map((elem) => {
                  const src = Sanity.buildImageUrl(elem.asset)
                  return <img alt={elem.alt} height={34} key={src} src={src} width={34} />
                })}
              </div>

              <hr className="my-4" />

              <div className="flex justify-center md:justify-start flex-wrap space-x-2">
                {props.arbeidsklaer.iconsRow2?.map((elem) => {
                  const src = Sanity.buildImageUrl(elem.asset)
                  return <img alt={elem.alt} className="object-contain" height={40} key={src} src={src} width={40} />
                })}
              </div>
            </div>

            {/* Produktinfo */}
            <div>
              <div className="relative md:ml-6 mt-6 bg-gray-50">
                <div className="w-full h-10 bg-primary flex items-center pl-4">
                  <h2 className="font-bold text-base">PRODUKTINFORMASJON</h2>
                </div>
                <div className="py-4 px-6">
                  <p className="text-lg font-semibold">Beskrivelse</p>
                  <p>{props.arbeidsklaer.description}</p>

                  <div className="-mx-2 mt-2 bg-white px-4 py-3 border rounded-md">
                    <div className="">
                      <button className="w-full flex justify-between items-center" onClick={handleOnClick}>
                        <div>
                          <span className="font-medium">Detaljer</span>
                        </div>

                        <Fragment>
                          {listStatus === 'CLOSED' && (
                            <svg height="20" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                            </svg>
                          )}
                          {listStatus === 'OPEN' && (
                            <svg height="20" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 10h24v4h-24z" />
                            </svg>
                          )}
                        </Fragment>
                      </button>
                    </div>

                    <div className="overflow-hidden details" ref={listRef} style={{ height: '0' }}>
                      <div className="text-sm py-2">
                        <BlockContent blocks={props.arbeidsklaer.details} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 text-sm">
                    {props.arbeidsklaer.material && (
                      <Fragment>
                        <p className="mt-1 font-semibold">Materiale:</p>
                        <p>{props.arbeidsklaer.material}</p>
                      </Fragment>
                    )}

                    {props.arbeidsklaer.gramWeight && (
                      <Fragment>
                        <p className="mt-1 font-semibold">Gramvekt:</p>
                        <p>{props.arbeidsklaer.gramWeight}</p>
                      </Fragment>
                    )}

                    {props.arbeidsklaer.certifiedAccordingTo && props.arbeidsklaer.certifiedAccordingTo.length > 0 && (
                      <Fragment>
                        <p className="mt-1 font-semibold">Sertifisert iht.:</p>
                        <span>
                          {props.arbeidsklaer.certifiedAccordingTo?.map((elem) => {
                            return <p key={elem}>{elem}</p>
                          })}
                        </span>
                      </Fragment>
                    )}
                  </div>
                </div>

                {props.arbeidsklaer.brand === 'texstar' && (
                  <div className="absolute right-6 bottom-4">
                    <img className="" src="/images/texstar-logo-svart.png" width={128} />
                  </div>
                )}

                {props.arbeidsklaer.brand === 'lbrador' && (
                  <div className="absolute right-6 bottom-4">
                    <img className="" src="/images/lbrador-logo.png" width={64} />
                  </div>
                )}

                {props.arbeidsklaer.brand === 'bulldog' && (
                  <div className="absolute right-6 bottom-4">
                    <img className="" src="/images/bulldog-logo.png" width={128} />
                  </div>
                )}

                {props.arbeidsklaer.brand === 'blaklader' && (
                  <div className="absolute right-6 bottom-4">
                    <img className="" src="/images/blaklader-logo.png" width={144} />
                  </div>
                )}

                {props.arbeidsklaer.brand === 'kask' && (
                  <div className="absolute right-6 bottom-4">
                    <img className="" src="/images/kask-logo.png" width={144} />
                  </div>
                )}

                {props.arbeidsklaer.brand === 'wenaas' && (
                  <div className="absolute right-6 bottom-4">
                    <img className="" src="/images/wenaas-logo.png" width={144} />
                  </div>
                )}

                {props.arbeidsklaer.brand === '3m-peltor' && (
                  <div className="absolute right-6 bottom-4">
                    <img className="" src="/images/3m-peltor-logo.png" width={144} />
                  </div>
                )}

                {props.arbeidsklaer.brand === 'eris' && (
                  <div className="absolute right-6 bottom-4">
                    <img className="" src="/images/eris-logo.svg" width={144} />
                  </div>
                )}

                {props.arbeidsklaer.brand === 'guide' && (
                  <div className="absolute right-6 bottom-4">
                    <img className="" src="/images/guide-logo.svg" width={160} />
                  </div>
                )}

                {props.arbeidsklaer.brand === 'uvex' && (
                  <div className="absolute right-6 bottom-4">
                    <img className="" src="/images/uvex-logo.png" width={144} />
                  </div>
                )}

                {props.arbeidsklaer.brand === 'arbesko' && (
                  <div className="absolute right-6 bottom-4">
                    <img className="" src="/images/arbesko-logo.png" width={144} />
                  </div>
                )}

                {props.arbeidsklaer.brand === 'heckel' && (
                  <div className="absolute right-6 bottom-4">
                    <img className="" src="/images/heckel-logo.svg" width={160} />
                  </div>
                )}

                {props.arbeidsklaer.brand === 'reebok' && (
                  <div className="absolute right-6 bottom-4">
                    <img className="" src="/images/reebok-logo.svg" width={128} />
                  </div>
                )}

                {props.arbeidsklaer.brand === 'albatros' && (
                  <div className="absolute right-6 bottom-4">
                    <img className="" src="/images/albatros-logo.png" width={128} />
                  </div>
                )}

                {props.arbeidsklaer.brand === 'dunlop' && (
                  <div className="absolute right-6 bottom-4">
                    <img className="" src="/images/dunlop-logo.webp" width={144} />
                  </div>
                )}
              </div>

              {/* Egenskaper */}
              <div className="md:ml-6 mt-6 bg-gray-50">
                <div className="w-full h-10 bg-primary flex items-center pl-4">
                  <h2 className="font-bold text-base">EGENSKAPER</h2>
                </div>
                <div className="text-sm">
                  <table className="w-full table-fixed">
                    <tbody>
                      {props.arbeidsklaer.properties.map((elem) => {
                        return (
                          <tr className="bg-white even:bg-gray-100" key={elem._key}>
                            <th className="text-left border px-4 py-2">{elem.th}</th>
                            <td className="border px-4 py-2">{elem.td}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </article>

        <div className="mt-10 space-y-6">
          <SectionHeaderPrimary>Forespør produktet</SectionHeaderPrimary>
          <div className="space-y-6 xl:space-y-0 xl:space-x-4 xl:flex xl:items-start">
            <ContactCard />
            <ContactFormProduct productTitle={props.arbeidsklaer.title} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

function ImageGridElement({
  src,
  alt,
  index,
  onImageClick,
}: {
  src: string
  alt: string
  index: number
  onImageClick: (index: number) => void
}): JSX.Element {
  return (
    <button className="w-full" onClick={() => onImageClick(index)}>
      <div className="relative pb-[100%]">
        <Image alt={alt} className="object-contain" fill src={src} />
      </div>
    </button>
  )
}

function ImageGrid({
  images,
  onImageClick,
}: {
  images: Array<{ src: string; alt: string }>
  onImageClick: (index: number) => void
}): JSX.Element {
  return (
    <div className="grid grid-cols-4 gap-3">
      {images.map((elem, index) => {
        return (
          <ImageGridElement alt={elem.alt} index={index} key={elem.src} onImageClick={onImageClick} src={elem.src} />
        )
      })}
    </div>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult<{ slug: string }>> {
  const res = await Sanity.getArbeidsklaerPaths()

  return {
    paths: res.map((elem) => ({ params: { slug: elem.slug.current } })),
    fallback: 'blocking',
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string }>,
): Promise<GetStaticPropsResult<{ arbeidsklaer: Arbeidsklaer }>> {
  return {
    revalidate: 30,
    props: {
      arbeidsklaer: await Sanity.getArbeidsklaerDetail(context.params?.slug),
    },
  }
}
