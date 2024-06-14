import Image from 'next/image'
import Link from 'next/link'

import Icon from 'components/Icons/Icon'
import { CompanyServiceMinimal } from 'types/company-service'
import { hrefFromSlug } from 'utils/helpers'

export default function Footer({ companyServices }: { companyServices: CompanyServiceMinimal[] }): JSX.Element {
  return (
    <footer className="bg-secondary-darker text-primary">
      <div className="max-w-5xl mx-auto px-6 py-12 md:p-12 xl:pb-32 xl:px-0 space-y-16 xl:space-y-20">
        <section className="space-y-10 md:space-y-0 md:flex md:justify-between">
          <section>
            <span className="block font-semibold text-2xl">Skiltmakeren AS</span>
            <span className="block">Vi kan skilt og dekor.</span>
            <div className="flex items-center space-x-4">
              <div className="mt-4">
                <Image alt="Miljøfyrtårn" height={53} src="/images/miljøfyrtårn-logo.png" width={67} />
              </div>
              <div className="mt-4">
                <Image alt="Startbank" height={32} src="/images/startbank-logo-hvit.png" width={165} />
              </div>
            </div>
            <span className="text-xs font-light">&copy; Copyright 1994-2023 &middot; Skiltmakeren AS</span>
          </section>

          <section>
            <div className="text-lg font-medium">Våre tjenester</div>
            {companyServices.map((elem) => (
              <Link href={hrefFromSlug(elem.slug.current)} key={elem.slug.current}>
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
                <span>Gramveien 31</span>
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
          <div className="flex justify-center items-center w-12 h-12 rounded-full border border-primary">
            <a href="https://www.facebook.com/Skiltmakeren" rel="noreferrer" target="_blank">
              <Icon className="w-5 h-5" name="facebook" />
            </a>
          </div>
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
