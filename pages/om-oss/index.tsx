import type { GetStaticPropsResult, InferGetStaticPropsType } from 'next'
import Image from 'next/image'

import Icon from 'components/Icons/Icon'
import Sanity from 'services/Sanity'
import SectionHeaderPrimary from 'components/SectionHeaders/SectionHeaderPrimary'
import SectionWrapperPrimary from 'components/SectionWrappers/SectionWrapperPrimary'
import { Employee } from 'types/employee'

export default function About({ employees }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <div>
      <div className="relative h-64 md:h-[320px] xl:h-[400px]">
        <Image alt="Gramveien 16, 1832 Askim" layout="fill" objectFit="cover" src="/images/skiltmakeren.jpeg" />
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

function EmployeeCard({
  className,
  email,
  image,
  name,
  phoneNumber,
  title,
}: {
  className?: string
  email: string
  image: string
  name: string
  phoneNumber: string
  title: string
}): JSX.Element {
  return (
    <div className={`relative isolate max-w-xs py-12 rounded-xl shadow-xl bg-white overflow-hidden ${className}`}>
      <div className="absolute z-0 w-[500px] h-48 transform -translate-x-40 -translate-y-24 -rotate-12">
        <div className="h-full bg-gradient-to-br from-primary via-primary/80 to-primary-lighter" />
      </div>
      <section className="relative z-10 h-full space-y-4 flex flex-col items-center">
        <div className="w-40 h-40 p-1 rounded-full shadow-xl bg-gradient-to-br from-primary-light to-primary">
          <div className="relative h-full flex justify-center items-center border-2 border-white rounded-full">
            <Image alt={name} className="rounded-full object-cover" layout="fill" src={image} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-medium">{name}</span>
          <span className="text-md text-gray-600">{title}</span>
        </div>
        <div className="max-w-max mx-auto space-y-4">
          <div className="space-x-3 flex justify-items-start items-center">
            <Icon className="w-8 h-8" name="envelope-alt" />
            <span className="space-y-1 flex flex-col">
              <span className="text-xs leading-none text-gray-500">E-post</span>
              <span className="font-medium leading-none text-gray-600">{email}</span>
            </span>
          </div>
          <div className="space-x-3 flex justify-items-start items-center">
            <Icon className="w-8 h-8" name="phone-alt" />
            <span className="space-y-1 flex flex-col">
              <span className="text-xs leading-none text-gray-500">Telefon</span>
              <span className="font-medium leading-none text-gray-600">{phoneNumber}</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<{ employees: Employee[] }>> {
  return {
    props: {
      employees: await Sanity.getEmployeesList(),
    },
  }
}
