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
        canonicalUrl="https://www.skiltmakeren.no/tjenester/bussdekor"
        description="Øk synligheten med profesjonell bussdekor - reklame i stort format som når ut til tusenvis hver dag."
        descriptionFacebook="Øk synligheten med profesjonell bussdekor - reklame i stort format som når ut til tusenvis hver dag."
        descriptionTwitter="Øk synligheten med profesjonell bussdekor - reklame i stort format som når ut til tusenvis hver dag."
        imageSource="https://www.skiltmakeren.no/images/meta-image.png"
        title="Bussdekor · Skiltmakeren AS"
      />

      <div className="article-container mx-auto mt-4 md:mt-6 xl:mt-8 mb-24 text-[#231F20]">
        <span className="text-sm xl:text-base text-primary">Tjenester / Bussdekor</span>

        <article className="mt-4 xl:mt-6">
          <section>
            <h1 className="mb-2 text-4xl md:text-5xl font-semibold">
              <span>Bussdekor</span>
            </h1>

            <DividerFaded />

            <div className="max-w-3xl mt-4 xl:mt-6">
              <p className="text-xl leading-[32px] xl:text-2xl xl:leading-[36px]">
                Bussdekor er en velprøvd løsning for reklame i et tett trafikkbilde. Med store, synlige flater blir
                budskapet ditt eksponert kontinuerlig for et stort publikum, enten bussen kjører i bytrafikk eller på
                lengre strekninger.
              </p>
            </div>

            <div className="mt-8 mx-[-16px] md:mx-auto xl:pr-80">
              <div className="relative w-full pb-[56.25%]">
                <Image
                  alt="Dekorert buss fra Nettbuss"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  layout="fill"
                  src="/images/bussdekor/nettbuss.webp"
                />
              </div>
              <div className="mt-0.5 pl-4 md:pl-1">
                <span className="text-[#777777] text-xs font-light">Foto: Nettbuss</span>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl md:text-4xl font-medium">Hvorfor velge bussdekor?</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                Bussdekor er en kostnadseffektiv og varig markedsføringsløsning. Med folie tilpasset bussens flater får
                du en reklameplass som jobber for deg 24/7, uten løpende kostnader.
              </p>
              <p>
                Det er også et smart alternativ til lakkering – både for å matche en visuell profil eller for å beskytte
                lakken mot slitasje.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl md:text-4xl font-medium">Bussdekor for ulike behov</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                Enten du ønsker helfoliering eller delvis dekor, tilpasser vi designet for maksimal synlighet. Vi tilbyr
                også «Superbacks» - en kostnadseffektiv kampanjeløsning hvor bakenden av bussen brukes som reklameflate.
              </p>
            </div>

            <div className="mt-8 mx-[-16px] md:mx-auto xl:pr-80">
              <ImageCarousel
                images={[
                  {
                    src: '/images/bussdekor/connect.webp',
                    alt: 'Connect Bus detaljebilde',
                  },
                  {
                    src: '/images/bussdekor/sarpsborg-08.webp',
                    alt: 'Bussdekor Sarpsborg 08 spillerbuss',
                  },
                  {
                    src: '/images/bussdekor/kulturbuss.webp',
                    alt: 'Bussdekor for Sparebankstiftelsen DNB',
                  },
                  {
                    src: '/images/bussdekor/inspira.webp',
                    alt: 'Bussdekor for Inspira',
                  },
                ]}
              />
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-3xl md:text-4xl font-medium">Jobb med Skiltmakeren</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                Skiltmakeren har lang erfaring med bussdekor, inkludert store prosjekter som profileringen av Nettbuss.
                Vi bruker slitesterke materialer og avansert printteknologi for å sikre et profesjonelt og varig
                resultat.
              </p>
              <p>Vår designavdeling hjelper deg med å skape en visuell identitet som skiller seg ut på veien.</p>
            </div>

            <div className="xl:pr-80 mt-8 mx-[-16px] md:mx-auto">
              <div className="relative w-full pb-[56.25%]">
                <Image
                  alt="Skiltmakeren montasjehaller"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  layout="fill"
                  src="/images/bussdekor/haller.webp"
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
