import type { GetStaticPropsResult, InferGetStaticPropsType } from 'next'

import type { CompanyServiceMinimal } from 'types/company-service'
import type { Customer } from 'types/customer'
import type { WhatWeDo } from 'types/what-we-do'
import CompanyServicesList from 'components/_pages/Home/CompanyServices/CompanyServicesList'
import Contact from 'scenarios/contact/components/Contact'
import Customers from 'components/_pages/Home/Customers/CustomersList'
import Hero from 'components/_pages/Home/Hero/Hero'
import SEO from 'components/SEO/SEO'
import Sanity from 'services/Sanity'
import WhatWeDoSection from 'components/_pages/Home/WhatWeDo/WhatWeDo'

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div className="space-y-6 xl:space-y-20">
      <SEO
        canonicalUrl="https://www.skiltmakeren.no"
        description="Skiltmaker med 30 års erfaring og over 700 fornøyde kunder. Din partner for skilt, bannere og bildekor med høy kvalitet, personlig service, og miljøfokus."
        descriptionFacebook="30 års erfaring og 700+ kunder. Din partner for skilt, bannere og bildekor."
        descriptionTwitter="30 års erfaring. Over 700 fornøyde kunder. Din partner for skilt, bannere og bildekor med høy kvalitet, personlig service og miljøfokus."
        imageSource="https://www.skiltmakeren.no/images/meta-image.png"
        title="Skiltmakeren AS · Vi kan skilt og dekor."
      />

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
  const data = {
    companyServices: await Sanity.getCompanyServicesList(),
    customers: await Sanity.getCustomersList(),
    whatWeDo: await Sanity.getWhatWeDoList(),
  }

  return {
    props: { ...data },
    revalidate: 30,
  }
}
