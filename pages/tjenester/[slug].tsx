import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import Image from 'next/image'

import BlockContent from 'components/Sanity/BlockContent'
import Sanity from 'services/Sanity'
import SectionWrapperPrimary from 'components/SectionWrappers/SectionWrapperPrimary'
import { CompanyService } from 'types/company-service'

export default function CompanyServiceDetail({
  companyService,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  console.log(companyService)
  return (
    <SectionWrapperPrimary>
      <article className="max-w-max mx-auto space-y-6">
        <h1 className="text-4xl xl:text-6xl font-semibold">{companyService.title}</h1>
        <BlockContent blocks={companyService.content} className="prose xl:prose-lg" />
      </article>
      {companyService.subCategories && (
        <section className="grid md:grid-cols-2 gap-8 py-8">
          {companyService.subCategories.map((elem) => (
            <div className="space-y-4" key={elem._id}>
              <div className="relative h-[320px] md:h-[500px]">
                <Image alt={elem.title} layout="fill" objectFit="cover" src={Sanity.buildImageUrl(elem.coverImage)} />
              </div>
              <h2 className="text-2xl xl:text-4xl font-medium">{elem.title}</h2>
              <BlockContent blocks={elem.content} className="prose" />
            </div>
          ))}
        </section>
      )}
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
