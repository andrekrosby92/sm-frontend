import Image from 'next/image'
import Link from 'next/link'

import Sanity from 'services/Sanity'
import SectionHeaderPrimary from 'components/SectionHeaders/SectionHeaderPrimary'
import SectionWrapperPrimary from 'components/SectionWrappers/SectionWrapperPrimary'
import { WhatWeDo as IWhatWeDo } from 'types/what-we-do'

export default function WhatWeDo({ whatWeDo }: { whatWeDo: IWhatWeDo[] }): JSX.Element {
  return (
    <div className="bg-secondary-lighter/50">
      <SectionWrapperPrimary className="xl:py-24 space-y-6">
        <SectionHeaderPrimary>Hva gjør vi?</SectionHeaderPrimary>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {whatWeDo.map((elem) => (
            <div className="space-y-1" key={elem.title}>
              <Image alt={elem.title} height={75} src={Sanity.buildImageUrl(elem.icon)} width={75} />
              <header className="flex items-center justify-between">
                <h3 className="text-2xl font-medium">{elem.title}</h3>
              </header>
              <p className="text-gray-700">{elem.pitch}</p>
            </div>
          ))}
        </section>
        <Link href="/om-oss">
          <span className="inline-block px-4 py-2.5 rounded-lg bg-gradient-to-tl from-primary to-primary-light text-primary-darker">
            Les mer om Skiltmakeren
          </span>
        </Link>
      </SectionWrapperPrimary>
    </div>
  )
}
