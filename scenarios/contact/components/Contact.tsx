import SectionHeaderPrimary from 'components/SectionHeaders/SectionHeaderPrimary'
import SectionWrapperPrimary from 'components/SectionWrappers/SectionWrapperPrimary'

import ContactCard from './ContactCard'
import ContactForm from './ContactForm'

export default function Contact(): JSX.Element {
  return (
    <SectionWrapperPrimary className="space-y-6">
      <SectionHeaderPrimary>La oss ta en prat</SectionHeaderPrimary>
      <div className="space-y-6 xl:space-y-0 xl:space-x-4 xl:flex xl:items-start">
        <ContactCard />
        <ContactForm />
      </div>
    </SectionWrapperPrimary>
  )
}
