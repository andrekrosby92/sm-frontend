import SectionHeaderPrimary from 'components/SectionHeaders/SectionHeaderPrimary'
import SectionWrapperPrimary from 'components/SectionWrappers/SectionWrapperPrimary'
import { CompanyServiceMinimal } from 'types/company-service'

import CompanyServiceItem from './CompanyServiceItem'

export default function CompanyServicesList({
  companyServices,
}: {
  companyServices: CompanyServiceMinimal[]
}): JSX.Element {
  return (
    <SectionWrapperPrimary className="space-y-6">
      <SectionHeaderPrimary>Våre tjenester</SectionHeaderPrimary>
      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {companyServices.map((elem) => (
          <CompanyServiceItem
            icon={elem.icon}
            key={elem.title}
            shortDescription={elem.shortDescription}
            slug={elem.slug.current}
            title={elem.title}
          />
        ))}
      </section>
    </SectionWrapperPrimary>
  )
}
