import Link from 'next/link'
import { Fragment, ReactNode, useState } from 'react'
import { GetStaticPropsResult, InferGetStaticPropsType } from 'next'

import DividerFaded from 'components/Dividers/DividerFaded'
import SEO from 'components/SEO/SEO'
import Sanity from 'services/Sanity'
import { ArbeidsklaerMinimal } from 'types/arbeidsklaer'
import SectionHeaderPrimary from 'components/SectionHeaders/SectionHeaderPrimary'
import ContactCard from 'scenarios/contact/components/ContactCard'
import ContactForm from 'scenarios/contact/components/ContactForm'

function Sort({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
}): JSX.Element {
  return (
    <Fragment>
      <div className="md:hidden">
        <button
          className={`flex items-center py-[5px] px-1 rounded-md border transition ${
            active
              ? 'bg-primary text-primary-darker border-primary-darker'
              : 'bg-transparent text-primary border-primary hover:bg-primary/10'
          }`}
          onClick={onClick}
        >
          <div>
            {active ? (
              <svg height={14} viewBox="0 0 24 24" width={14} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
              </svg>
            ) : (
              <div className=" w-[14px] h-[14px] border border-primary-darker rounded-full" />
            )}
          </div>

          <div className="flex ml-1">
            <span className="text-primary-darker text-[12px] leading-[0]">{children}</span>
          </div>
        </button>
      </div>

      <div className="hidden md:block">
        <button
          className={`flex items-center py-1 px-1.5 rounded-md border transition ${
            active
              ? 'bg-primary text-primary-darker border-primary-darker'
              : 'bg-transparent text-primary border-primary hover:bg-primary/10'
          }`}
          onClick={onClick}
        >
          <div>
            {active ? (
              <svg height={20} viewBox="0 0 24 24" width={20} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
              </svg>
            ) : (
              <div className=" w-[18px] h-[18px] mx-px border-2 border-primary-darker rounded-full" />
            )}
          </div>

          <div className="ml-1">
            <span className="text-primary-darker">{children}</span>
          </div>
        </button>
      </div>
    </Fragment>
  )
}

const tagOrder = [
  'jakke',
  'bukse',
  'synlighet',
  'vest',
  'genser',
  't-skjorte',
  'shorts',
  'regntoy',
  'sko',
  'verneutstyr',
  'luer-og-capser',
  'undertoy-og-sokker',
  'overige-klaer',
]

export default function ArbeidsklaerOgVerneutstyr(props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const orderedArbeidsklaer = [...props.arbeidsklaer].sort((a, b) => {
    const aIndex = Math.min(...(a.tags || []).map((tag) => tagOrder.indexOf(tag)).filter((i) => i !== -1))
    const bIndex = Math.min(...(b.tags || []).map((tag) => tagOrder.indexOf(tag)).filter((i) => i !== -1))
    return (aIndex === Infinity ? tagOrder.length : aIndex) - (bIndex === Infinity ? tagOrder.length : bIndex)
  })

  const filteredArbeidsklaer =
    activeTag === null ? orderedArbeidsklaer : orderedArbeidsklaer.filter((item) => item.tags?.includes(activeTag))

  return (
    <Fragment>
      <SEO
        canonicalUrl="https://www.skiltmakeren.no/tjenester/arbeidsklaer-og-verneutstyr"
        description="Skiltmakeren leverer arbeidsklær og verneutstyr fra kjente merker som L.Brador og Blåkläder."
        descriptionFacebook="Skiltmakeren leverer arbeidsklær og verneutstyr fra kjente merker som L.Brador og Blåkläder."
        descriptionTwitter="Skiltmakeren leverer arbeidsklær og verneutstyr fra kjente merker som L.Brador og Blåkläder."
        imageSource="https://www.skiltmakeren.no/images/meta-image.png"
        title="Arbeidsklær og Verneutstyr · Skiltmakeren AS"
      />

      <div className="article-container mx-auto mt-4 md:mt-6 xl:mt-8 mb-24 text-[#231F20]">
        <span className="text-sm xl:text-base text-primary">Tjenester / Arbeidsklær og Verneutstyr</span>

        <article className="mt-4 xl:mt-6">
          <section>
            <h1 className="mb-2 text-4xl md:text-5xl font-semibold">Arbeidsklær og Verneutstyr</h1>
            <DividerFaded />
          </section>

          <section className="mt-2 mb-4">
            <div className="flex flex-wrap gap-2">
              {[
                { title: 'Jakker', value: 'jakke' },
                { title: 'Bukser', value: 'bukse' },
                { title: 'Gensere', value: 'genser' },
                { title: 'Synlighet', value: 'synlighet' },
                { title: 'Sko', value: 'sko' },
                { title: 'Verneutstyr', value: 'verneutstyr' },
                { title: 'T-skjorter', value: 't-skjorte' },
                { title: 'Luer', value: 'luer-og-capser' },
                { title: 'Undertøy og sokker', value: 'undertoy-og-sokker' },
              ].map(({ title, value }) => (
                <Sort
                  active={activeTag === value}
                  key={value}
                  onClick={() => setActiveTag(activeTag === value ? null : value)}
                >
                  {title}
                </Sort>
              ))}
            </div>
            <div className="mt-1 text-[12px] text-gray-400 font-light">Filtrér på type</div>
          </section>

          <section>
            {filteredArbeidsklaer.length === 0 ? (
              <div className="text-center py-8 text-gray-500">Ingen produkter funnet.</div>
            ) : (
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
                {filteredArbeidsklaer.map((elem) => {
                  const img = elem.images[0]
                  const href = `/tjenester/arbeidsklaer-og-verneutstyr/${elem.slug.current}`

                  return (
                    <Link href={href} key={href}>
                      <Element>
                        <Element.Image alt={img.alt} src={Sanity.buildImageUrl(img)} />
                        <Element.Title>{elem.title}</Element.Title>
                        <Element.Button />
                      </Element>
                    </Link>
                  )
                })}
              </div>
            )}
          </section>
        </article>

        <div className="mt-10 space-y-6">
          <SectionHeaderPrimary>Ser du etter noe annet?</SectionHeaderPrimary>
          <div className="space-y-6 xl:space-y-0 xl:space-x-4 xl:flex xl:items-start">
            <ContactCard />
            <ContactForm />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

function Element({ children }: { children: ReactNode }): JSX.Element {
  return <div className="flex flex-col items-center">{children}</div>
}

Element.Image = function ElementImage({ src, alt }: { src: string; alt: string | undefined }): JSX.Element {
  return (
    <div className="p-4 w-full">
      <div className="relative pb-[155%]">
        <img alt={alt} className="absolute inset-0 w-full h-full object-contain" loading="lazy" src={src} />
      </div>
    </div>
  )
}

Element.Title = function ElementTitle({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="h-[48px] flex items-center justify-center">
      <span className="text-center font-semibold text-sm md:text-base truncate-2-lines">{children}</span>
    </div>
  )
}

Element.Button = function ElementButton(): JSX.Element {
  return (
    <div className="mt-2 w-full">
      <button className="text-center inline-block w-full px-4 py-2.5 rounded-lg bg-gradient-to-tl from-primary to-primary-light text-primary-darker">
        <span className="flex items-center justify-center">
          <span>Se produktet</span>
          <span>&nbsp;</span>
          <span aria-hidden="true" className="inline-block align-middle leading-none">
            <svg
              className="mt-px h-[14px] w-[14px] stroke-current"
              data-rtl-flip=""
              fill="currentColor"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.3349 13.3301V6.60645L5.47065 15.4707C5.21095 15.7304 4.78895 15.7304 4.52925 15.4707C4.26955 15.211 4.26955 14.789 4.52925 14.5293L13.3935 5.66504H6.66011C6.29284 5.66504 5.99507 5.36727 5.99507 5C5.99507 4.63273 6.29284 4.33496 6.66011 4.33496H14.9999L15.1337 4.34863C15.4369 4.41057 15.665 4.67857 15.665 5V13.3301C15.6649 13.6973 15.3672 13.9951 14.9999 13.9951C14.6327 13.9951 14.335 13.6973 14.3349 13.3301Z" />
            </svg>
          </span>
        </span>
      </button>
    </div>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{
    arbeidsklaer: ArbeidsklaerMinimal[]
  }>
> {
  return {
    revalidate: 30,
    props: {
      arbeidsklaer: await Sanity.getArbeidsklaerList(),
    },
  }
}
