import type { GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import type { CompanyServiceMinimal } from 'types/company-service'
import type { Customer } from 'types/customer'
import type { WhatWeDo } from 'types/what-we-do'
import Sanity from 'services/Sanity'

const CompanyServicesList = dynamic(() => import('components/_pages/Home/CompanyServices/CompanyServicesList'))
const Contact = dynamic(() => import('scenarios/contact/components/Contact'))
const Customers = dynamic(() => import('components/_pages/Home/Customers/CustomersList'))
const Hero = dynamic(() => import('components/_pages/Home/Hero/Hero'))
const WhatWeDoSection = dynamic(() => import('components/_pages/Home/WhatWeDo/WhatWeDo'))

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div className="space-y-6 xl:space-y-20">
      <Head>
        <title>Skiltmakeren AS · Vi kan skilt og dekor.</title>
        <meta content="Skiltmakeren AS · Vi kan skilt og dekor." property="og:title" />
      </Head>
      <Hero />
      <CompanyServicesList companyServices={props.companyServices} />
      <WhatWeDoSection whatWeDo={props.whatWeDo} />
      <Customers customers={props.customers} />
      <Contact />
    </div>
  )
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{
    companyServices: CompanyServiceMinimal[]
    customers: Customer[]
    whatWeDo: WhatWeDo[]
  }>
> {
  return {
    props: {
      companyServices: await Sanity.getCompanyServicesList(),
      customers: await Sanity.getCustomersList(),
      whatWeDo: await Sanity.getWhatWeDoList(),
    },
    revalidate: 30,
  }
}
