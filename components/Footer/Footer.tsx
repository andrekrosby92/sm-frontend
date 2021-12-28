import Image from 'next/image'
import Link from 'next/link'

import Icon from 'components/Icons/Icon'
import { CompanyServiceMinimal } from 'types/company-service'

export default function Footer({ companyServices }: { companyServices: CompanyServiceMinimal[] }): JSX.Element {
  return (
    <footer className="bg-secondary-darker text-primary">
      <div className="max-w-5xl mx-auto px-6 py-12 md:p-12 xl:pb-32 xl:px-0 space-y-16 xl:space-y-20">
        <section className="space-y-10 md:space-y-0 md:flex md:justify-between">
          <section>
            <span className="block font-semibold text-2xl">Skiltmakeren AS</span>
            <span className="block">Vi kan skilt og dekor.</span>
            <div className="mt-4">
              <Image alt="Miljøfyrtårn" height={58} src="/images/miljøfyrtårn.png" width={70} />
            </div>
            <span className="text-xs font-light">&copy; Copyright 2021 &middot; Skiltmakeren AS</span>
          </section>
          <section>
            <div className="text-lg font-medium">Våre tjenester</div>
            {companyServices.map((elem) => (
              <Link href={`/tjenester/${elem.slug.current}`} key={elem.slug.current}>
                <a className="block hover:underline">{elem.title}</a>
              </Link>
            ))}
          </section>
          <section>
            <div className="text-lg font-medium">Kontakt oss</div>
            <address className="space-y-1 flex flex-col not-italic">
              <div className="flex flex-col">
                <a href="mailto:post@skiltmakeren.no">post@skiltmakeren.no</a>
                <span>+47 23 14 14 14</span>
              </div>
              <div className="flex flex-col">
                <span>Gramveien 16</span>
                <span>1832 Askim, Norge</span>
              </div>
            </address>
          </section>
          <section className="hidden xl:block space-y-2">
            <div className="text-lg font-medium">Vi bruker kvalitetsprodukter fra:</div>
            <span className="block">
              <Image
                alt="Avery Dennison Logo"
                height={45}
                src="/images/avery-dennison-logo.svg"
                unoptimized
                width={137}
              />
            </span>
            <span className="block">
              <Image alt="3M Logo" height={45} src="/images/3m-logo.svg" unoptimized width={85} />
            </span>
          </section>
        </section>
        <section className="max-w-max mx-auto space-x-4 flex text-primary">
          {(['facebook'] as const).map((elem) => (
            <div className="flex justify-center items-center w-12 h-12 rounded-full border border-primary" key={elem}>
              <Icon className="w-5 h-5" name={elem} />
            </div>
          ))}
        </section>
        <section className="xl:hidden space-y-2">
          <div className="text-lg font-medium">Vi bruker kvalitetsprodukter fra:</div>
          <span className="block">
            <Image alt="Avery Dennison Logo" height={45} src="/images/avery-dennison-logo.svg" width={137} />
          </span>
          <span className="block">
            <Image alt="3M Logo" height={45} src="/images/3m-logo.svg" width={85} />
          </span>
        </section>
      </div>
    </footer>
  )
}
