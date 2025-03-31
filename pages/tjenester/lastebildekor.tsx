import { Fragment } from 'react'
import Image from 'next/image'

import ContactForm from 'scenarios/contact/components/ContactForm'
import DividerFaded from 'components/Dividers/DividerFaded'
import ImageCarousel from 'components/ImageCarousel/ImageCarousel'
import SEO from 'components/SEO/SEO'

export default function Lastebildekor(): JSX.Element {
  return (
    <Fragment>
      <SEO
        canonicalUrl="https://www.skiltmakeren.no/tjenester/lastebildekor"
        description="Vil du skape en gjenkjennbar identitet for bedriften din? Bli synlig med lastebildekor fra Skiltmakeren."
        descriptionFacebook="Vil du skape en gjenkjennbar identitet for bedriften din? Bli synlig med lastebildekor fra Skiltmakeren."
        descriptionTwitter="Vil du skape en gjenkjennbar identitet for bedriften din? Bli synlig med lastebildekor fra Skiltmakeren."
        imageSource="https://www.skiltmakeren.no/images/meta-image.png"
        title="Lastebildekor · Skiltmakeren AS"
      />

      <div className="article-container mx-auto mt-4 md:mt-6 xl:mt-8 mb-24 text-[#231F20]">
        <span className="text-sm xl:text-base text-primary">Tjenester / Lastebildekor</span>

        <article className="mt-4 xl:mt-6">
          <section>
            <h1 className="mb-2 text-4xl md:text-5xl font-semibold">
              <span>Lastebildekor</span>
            </h1>

            <DividerFaded />

            <div className="max-w-3xl mt-4 xl:mt-6">
              <p className="text-xl leading-[32px] xl:text-2xl xl:leading-[36px]">
                Dekor på lastebil er en sikker måte å gjøre bedriften din synlig på. Med store flater og eksponering
                døgnet rundt har du et rullende reklameskilt som når ut til tusenvis hver dag.
              </p>
            </div>

            <div className="mt-8 mx-[-16px] md:mx-auto xl:pr-80">
              <div className="relative w-full pb-[56.25%]">
                <Image
                  alt="Hvit skaphytte fra Timetrekkeren AS"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  layout="fill"
                  src="/images/lastebildekor/timetrekkeren.webp"
                />
              </div>
              <div className="mt-0.5 pl-4 md:pl-1">
                <span className="text-[#777777] text-xs font-light">Foto: Timetrekkeren AS</span>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl md:text-4xl font-medium">Lastebildekor som skaper synlighet</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                Vil du skape en gjenkjennbar identitet for bedriften din? Uansett om du ønsker en enkel logo eller en
                helfoliering med et kreativt design, sørger vi for at ditt budskap blir sett. Dekoren kan brukes både
                til firmaprofilering og kampanjebasert markedsføring - alltid med kvalitetsmaterialer som tåler
                skandinavisk vær, vind og daglig bruk.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl md:text-3xl">Hva får du ut av dekor på lastebil?</h3>
              <div className="max-w-3xl mt-4 md:text-lg leading-7">
                <ul className="pl-6 list-disc list-outside marker:text-primary space-y-1">
                  <li>
                    <strong>Kostnadseffektiv markedsføring</strong> - Lave enganskostnader som gir reklameeffekt i
                    årevis.
                  </li>
                  <li>
                    <strong>Profesjonelt inntrykk</strong> - En helhetlig dekor gir et solid og seriøst inntrykk.
                  </li>
                  <li>
                    <strong>Høy synlighet</strong> - Store flater gir maksimal eksponering.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl md:text-4xl font-medium">Dekor for alle typer kjøretøy</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                Vi leverer lastebildekor til alle typer kjøretøy, fra trekkvogner og hengere, til skapbiler og
                spesialkjøretøy. Enten du ønsker en enkel logo eller heldekkende design, tilpasser vi dekoren for
                maksimal synlighet og profesjonell profilering.
              </p>
              <p>
                Med fotorealistisk print, refleksfolie og slitesterke materialer sørger vi for at din bedrift skiller
                seg ut på veien.
              </p>
            </div>

            <div className="mt-8 mx-[-16px] md:mx-auto xl:pr-80">
              <ImageCarousel
                images={[
                  {
                    src: '/images/lastebildekor/hvit-lastebil-med-heldekkende-design-salten-n950.webp',
                    alt: 'Hvit lastebil fra Salten N950 med heldekkende design',
                  },
                  {
                    src: '/images/lastebildekor/hvit-semitrailer-med-logo.webp',
                    alt: 'Hvit semitrailer med logo',
                  },
                  {
                    src: '/images/lastebildekor/hvit-lastebil-med-logo.webp',
                    alt: 'Hvit lastebil med logo',
                  },
                  {
                    src: '/images/lastebildekor/hvit-henger-med-logo.webp',
                    alt: 'Hvit henger med logo',
                  },
                ]}
              />
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-3xl md:text-4xl font-medium">Jobb med Skiltmakeren</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                Med lang erfaring og fokus på kvalitet leverer vi slitesterk lastebildekor som gir din bedrift synlighet
                på veien. Våre designere skreddersyr løsninger basert på din visuelle profil, og våre montører sørger
                for presis og profesjonell påføring.
              </p>
              <p>
                Vi tilbyr montering over hele landet og har håndtert store profiloppdrag, som bl.a. over ti tusen
                kjøretøy for Posten Norge. I tillegg har vi jobbet med noen av Norges fremste bedrifter, som Nettbuss,
                ROAF og Transportsentralen. Mange sverger til flåtedekor som den mest effektive formen for markedsføring
                - la oss gjøre deg synlig der det gjelder.
              </p>
            </div>

            <div className="xl:pr-80 mt-8 mx-[-16px] md:mx-auto">
              <div className="relative w-full pb-[56.25%]">
                <Image
                  alt="Printer i arbeid"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  layout="fill"
                  src="/images/lastebildekor/printer-i-arbeid.webp"
                />
              </div>
            </div>

            <div className="mt-10 xl:pr-80">
              <h3 className="mt-8 text-2xl md:text-3xl">Rask levering og profesjonell service</h3>
              <div className="mt-4 mb-6 md:text-lg leading-7 space-y-4">
                <p>La oss hjelpe deg å gjøre bedriften synlig, kontakt oss for et uforpliktende tilbud!</p>
              </div>

              <ContactForm />
            </div>
          </section>
        </article>
      </div>
    </Fragment>
  )
}
