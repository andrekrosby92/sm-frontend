import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from 'next'

import BlockContent from 'components/Sanity/BlockContent'
import Sanity from 'services/Sanity'
import SectionWrapperPrimary from 'components/SectionWrappers/SectionWrapperPrimary'
import { CompanyService } from 'types/company-service'

export default function CompanyServiceDetail({
  companyService,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <SectionWrapperPrimary>
      <article className="max-w-max mx-auto space-y-4">
        <h1 className="text-4xl xl:text-6xl font-semibold">{companyService.title}</h1>
        <BlockContent blocks={companyService.content} className="prose xl:prose-lg" />
      </article>
    </SectionWrapperPrimary>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult<{ slug: string }>> {
  const res = await Sanity.getCompanyServicePaths()

  return {
    paths: res.map((elem) => ({ params: { slug: elem.slug.current } })),
    fallback: 'blocking',
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string }>,
): Promise<GetStaticPropsResult<{ companyService: CompanyService }>> {
  return {
    props: {
      companyService: await Sanity.getCompanyServiceDetail(context.params?.slug),
    },
    revalidate: 30,
  }
}
