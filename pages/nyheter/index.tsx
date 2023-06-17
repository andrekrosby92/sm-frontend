import type { GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import SEO from 'components/SEO/SEO'
import Sanity from 'services/Sanity'
import SectionHeaderPrimary from 'components/SectionHeaders/SectionHeaderPrimary'
import SectionWrapperPrimary from 'components/SectionWrappers/SectionWrapperPrimary'
import { NewsArticle } from 'types/news-article'

export default function NewsArticlesList({
  newsArticles,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div>
      <SEO
        description="Bli oppdatert med de siste nyhetene fra Skiltmakeren."
        descriptionFacebook="Bli oppdatert med de siste nyhetene fra Skiltmakeren."
        descriptionTwitter="Bli oppdatert med de siste nyhetene fra Skiltmakeren."
        metaImage="https://www.skiltmakeren.no/images/meta-image.png"
        title="Nyheter - Skiltmakeren AS · Vi kan skilt og dekor."
        url="https://www.skiltmakeren.no/nyheter"
      />

      <SectionWrapperPrimary className="space-y-6">
        <SectionHeaderPrimary>Nyheter</SectionHeaderPrimary>
        <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {newsArticles.map((elem) => (
            <Link href={`/nyheter/${elem.slug.current}`} key={elem._id}>
              <a className="block space-y-1">
                <div className="relative h-48">
                  <Image
                    alt={elem.title}
                    className="rounded"
                    layout="fill"
                    objectFit="cover"
                    src={Sanity.buildImageUrl(elem.coverImage)}
                  />
                </div>
                <small className="text-[#757575]">{parseSanityDate(elem._createdAt)}</small>
                <header>
                  <h1 className="text-2xl font-semibold text[#292929]">{elem.title}</h1>
                  <p className="text-md text-[#757575]">{elem.shortDescription}</p>
                </header>
              </a>
            </Link>
          ))}
        </section>
      </SectionWrapperPrimary>
    </div>
  )
}

function parseSanityDate(date: string): string {
  return new Date(date).toLocaleString('nb-NO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function getStaticProps(): Promise<GetStaticPropsResult<{ newsArticles: NewsArticle[] }>> {
  return {
    props: {
      newsArticles: await Sanity.getNewsArticlesList(),
    },
    revalidate: 30,
  }
}
