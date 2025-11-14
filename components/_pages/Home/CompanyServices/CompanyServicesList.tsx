import SectionHeaderPrimary from 'components/SectionHeaders/SectionHeaderPrimary'
import SectionWrapperPrimary from 'components/SectionWrappers/SectionWrapperPrimary'
import { TJENESTER } from 'lib/data/tjenester'

import CompanyServiceItem from './CompanyServiceItem'

export default function CompanyServicesList(): JSX.Element {
  return (
    <SectionWrapperPrimary className="space-y-6">
      <SectionHeaderPrimary>Våre tjenester</SectionHeaderPrimary>
      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {TJENESTER.map((elem) => {
          return (
            <CompanyServiceItem
              desc={elem.desc}
              href={elem.href}
              icon={elem.icon}
              key={elem.title}
              title={elem.title}
            />
          )
        })}
      </section>
    </SectionWrapperPrimary>
  )
}
