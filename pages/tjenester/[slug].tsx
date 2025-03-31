import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import { Fragment } from 'react'

import BirdFreeLayout from 'components/Layouts/BirdFreeLayout'
import SEO from 'components/SEO/SEO'
import Sanity from 'services/Sanity'
import SplitLayout from 'components/Layouts/SplitLayout'
import TwoColumnLayout from 'components/Layouts/TwoColumnLayout'
import { CompanyService } from 'types/company-service'

export default function CompanyServiceDetail(props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const LayoutComponent = {
    split: SplitLayout,
    'two-column': TwoColumnLayout,
    'bird-free': BirdFreeLayout,
  }[props.companyService.layout]

  const { canonicalUrl, metaDescription, metaDescriptionFacebook, metaDescriptionTwitter, metaImageSource, metaTitle } =
    props.companyService

  const seo = {
    canonicalUrl,
    description: metaDescription,
    descriptionFacebook: metaDescriptionFacebook,
    descriptionTwitter: metaDescriptionTwitter,
    imageSource: Sanity.buildImageUrl(metaImageSource),
    title: metaTitle,
  }

  if (typeof LayoutComponent !== 'function') {
    return <Fragment />
  }

  return (
    <div>
      <SEO {...seo} />
      <LayoutComponent {...props} />
    </div>
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
  if (context.params?.slug === 'kjoretoydekor') {
    return {
      redirect: {
        destination: '/tjenester/dekor-til-kjoretoy',
        permanent: false,
      },
    }
  }

  const companyService = await Sanity.getCompanyServiceDetail(context.params?.slug)

  return {
    revalidate: 30,
    props: {
      companyService,
    },
  }
}
