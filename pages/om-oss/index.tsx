import type { GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import Image from 'next/image'

import EmployeeCard from 'components/_pages/Employees/EmployeeCard'
import SEO from 'components/SEO/SEO'
import Sanity from 'services/Sanity'
import SectionHeaderPrimary from 'components/SectionHeaders/SectionHeaderPrimary'
import SectionWrapperPrimary from 'components/SectionWrappers/SectionWrapperPrimary'
import { Employee } from 'types/employee'

export default function About({ employees }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div>
      <SEO
        description="Leverandør av skilt og bildekor siden 1992. Vi tilbyr personlig service, høy kvalitet og innovative løsninger."
        descriptionFacebook="Vi tilbyr personlig service, høy kvalitet og innovative løsninger."
        descriptionTwitter="Siden 1992 har vi levert personlig service, høy kvalitet og innovative løsninger."
        metaImage="https://www.skiltmakeren.no/images/meta-image.png"
        title="Om oss - Skiltmakeren AS · Vi kan skilt og dekor."
        url="https://www.skiltmakeren.no/om-oss"
      />

      <div className="relative w-full h-[25vw]">
        <Image alt="Gramveien 16, 1832 Askim" layout="fill" objectFit="cover" src="/images/fasade.jpg" />
      </div>
      <SectionWrapperPrimary className="space-y-12">
        <section className="space-y-4">
          <SectionHeaderPrimary>Om Skiltmakeren AS</SectionHeaderPrimary>
          <p className="prose xl:prose-lg max-w-none">
            Skiltmakeren AS ble etablert i begynnelsen av 1992 da med et annet navn. Vi holdt da til i små lokaler i det
            gamle postkontoret i Skiveien i Oppegård kommune. Bedriften vokste raskt og i 1994 flyttet vi inn til
            Alnabru i Oslo, vi har stadig ekspandert og har vært heldig som kunne gjøre dette i samme lokaler. Vi har
            siden starten produsert bildekor og skilt til næringslivet. Det hele fra vår egen produksjonslinje på
            Alnabru i Oslo. Våre medarbeidere har alltid lagt vekt på personlig service og god kvalitet, og sammen med
            kreative og kostnadseffektive løsninger basert på moderne produksjonsteknologi har vi vært et naturlig valg
            for en lang rekke kunder.
          </p>
        </section>
        <section className="space-y-6">
          <SectionHeaderPrimary>Vi er skiltmakeren</SectionHeaderPrimary>
          <div className="md:max-w-max md:mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {employees.map(({ email, image, name, phoneNumber, title }) => (
              <EmployeeCard
                className="w-full md:w-80"
                email={email}
                image={Sanity.buildImageUrl(image)}
                key={name}
                name={name}
                phoneNumber={phoneNumber}
                title={title}
              />
            ))}
          </div>
        </section>
      </SectionWrapperPrimary>
    </div>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<{ employees: Employee[] }>> {
  return {
    props: {
      employees: await Sanity.getEmployeesList(),
    },
    revalidate: 30,
  }
}
