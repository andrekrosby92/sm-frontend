import Image from 'next/image'

import Sanity from 'services/Sanity'
import SectionWrapperPrimary from 'components/SectionWrappers/SectionWrapperPrimary'
import { Customer } from 'types/customer'
import SectionHeaderSecondary from 'components/SectionHeaders/SectionHeaderSecondary'

export default function CustomersList({ customers }: { customers: Customer[] }): JSX.Element {
  return (
    <SectionWrapperPrimary className="space-y-6 xl:space-y-10">
      <SectionHeaderSecondary>Over 700 fornøyde kunder</SectionHeaderSecondary>
      <section className="mx-auto grid xl:flex xl:space-x-8 gap-8 xl:gap-0">
        {customers.map((elem) => (
          <div className="relative w-full h-8 md:h-10 xl:h-8 filter grayscale" key={elem.title}>
            <Image alt={elem.title} layout="fill" objectFit="contain" src={Sanity.buildImageUrl(elem.logo)} />
          </div>
        ))}
      </section>
    </SectionWrapperPrimary>
  )
}
