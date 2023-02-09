import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from 'next'

import { Fragment } from 'react'

import Sanity from 'services/Sanity'
import SplitLayout from 'components/Layouts/SplitLayout'
import TwoColumnLayout from 'components/Layouts/TwoColumnLayout'
import { CompanyService } from 'types/company-service'
import BirdFreeLayout from 'components/Layouts/BirdFreeLayout'

export default function CompanyServiceDetail(props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  switch (props.companyService.layout) {
    case 'split':
      return <SplitLayout {...props} />

    case 'two-column':
      return <TwoColumnLayout {...props} />

    case 'bird-free':
      return <BirdFreeLayout {...props} />

    default:
      return <Fragment />
  }
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
