import Marquee from 'react-fast-marquee'

import Sanity from 'services/Sanity'
import SectionHeaderSecondary from 'components/SectionHeaders/SectionHeaderSecondary'
import { Customer } from 'types/customer'

export default function CustomersList({ customers }: { customers: Customer[] }): JSX.Element {
  return (
    <div className="py-16 space-y-8">
      <SectionHeaderSecondary>Over 700 fornøyde kunder</SectionHeaderSecondary>
      <section className="w-full">
        <Marquee gradient={false}>
          {[...customers, ...customers].map((elem) => (
            /* eslint-disable @next/next/no-img-element */
            <img
              alt={elem.title}
              className="h-8 mx-8 filter grayscale md:opacity-75 hover:opacity-100"
              key={elem.title}
              src={Sanity.buildImageUrl(elem.logo)}
            />
            /* eslint-enable @next/next/no-img-element */
          ))}
        </Marquee>
      </section>
    </div>
  )
}
