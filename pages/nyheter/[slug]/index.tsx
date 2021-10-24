import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import Image from 'next/image'

import BlockContent from 'components/Sanity/BlockContent'
import Sanity from 'services/Sanity'
import SectionWrapperPrimary from 'components/SectionWrappers/SectionWrapperPrimary'
import { NewsArticle } from 'types/news-article'

export default function NewsArticleDetail({
  newsArticle,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <SectionWrapperPrimary>
      <article className="max-w-4xl mx-auto space-y-6">
        <header className="space-y-2">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text[#292929]">{newsArticle.title}</h1>
          <p className="text-lg md:text-xl text-[#757575]">{newsArticle.shortDescription}</p>
        </header>
        <div className="relative h-64 md:h-[320px]">
          <Image
            alt={newsArticle.title}
            layout="fill"
            objectFit="cover"
            src={Sanity.buildImageUrl(newsArticle.coverImage)}
          />
        </div>
        <BlockContent blocks={newsArticle.content} className="prose xl:prose-lg" />
      </article>
    </SectionWrapperPrimary>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult<{ slug: string }>> {
  const res = await Sanity.getNewsArticlePaths()

  return {
    paths: res.map((elem) => ({ params: { slug: elem.slug.current } })),
    fallback: false,
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string }>,
): Promise<GetStaticPropsResult<{ newsArticle: NewsArticle }>> {
  return {
    props: {
      newsArticle: await Sanity.getNewsArticleDetail(context.params?.slug),
    },
  }
}
