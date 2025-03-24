import { Fragment } from 'react'

import Image from 'next/image'

import ContactForm from 'scenarios/contact/components/ContactForm'
import DividerFaded from 'components/Dividers/DividerFaded'
import ImageCarousel from 'components/ImageCarousel/ImageCarousel'
import SEO from 'components/SEO/SEO'

export default function Bildekor(): JSX.Element {
  return (
    <Fragment>
      <SEO
        canonicalUrl="https://www.skiltmakeren.no/tjenester/bildekor"
        description="Vi tilbyr profesjonell profilering gjennom bildekor, helfoliering og reklame på bil."
        descriptionFacebook="Vi tilbyr profesjonell profilering gjennom bildekor, helfoliering og reklame på bil."
        descriptionTwitter="Vi tilbyr profesjonell profilering gjennom bildekor, helfoliering og reklame på bil."
        imageSource="https://www.skiltmakeren.no/images/meta-image.png"
        title="Bildekor & Helfoliering · Skiltmakeren AS"
      />

      <div className="article-container mx-auto mt-6 xl:mt-8 mb-24 text-[#231F20]">
        <span className="text-sm xl:text-base text-primary">Tjenester / Bildekor</span>

        <article className="mt-4 xl:mt-6">
          <section>
            <h1 className="mb-2 text-4xl md:text-5xl font-semibold">Bildekor</h1>
            <DividerFaded />

            <div className="max-w-3xl mt-4 xl:mt-6">
              <p className="text-xl leading-[32px] xl:text-2xl xl:leading-[36px]">
                Bildekor er en av de mest effektive måtene å profilere din bedrift på. Med profesjonell firmadekor får
                du rullende reklame som blir lagt merke til.
              </p>
            </div>

            <div className="mt-8 mx-[-16px] md:mx-auto xl:pr-80">
              <ImageCarousel
                images={[
                  {
                    src: '/images/bildekor-to-hvite-elektriske-varebiler.jpg',
                    alt: 'To hvite varebilder med blå firmadekor',
                  },
                  {
                    src: '/images/bildekor-hvite-biler.jpg',
                    alt: 'Hvite biler med firmadekor',
                  },
                  {
                    src: '/images/bildekor-hvit-bil.jpg',
                    alt: 'Hvit bil med bildekor',
                  },
                ]}
              />
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-3xl md:text-4xl font-medium">Bildekor gjør deg synlig</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                Dekorering av kjøretøy gjør deg mer synlig både i trafikken og når kjøretøyet står parkert. Flere og
                flere firmaer bruker bildekor som et virkemiddel til å kommunisere sitt budskap og gjøre effektiv bruk
                av potensiell plass for annonsering og merkevarebygging. For mange firmaer har flåtedekor større
                virkning enn noe annet.
              </p>

              <p>
                Vi tilbyr alt fra enkel logo på bil til helfoliering og spesialdesignede løsninger som skreddersys etter
                dine behov.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl md:text-3xl">Fordeler med bildekor</h3>
              <div className="max-w-3xl mt-4 md:text-lg leading-7">
                <ul className="pl-6 list-disc list-outside marker:text-primary space-y-1">
                  <li>
                    <strong>Kostnadseffektiv markedsføring</strong> - Bildekor gir langsiktig reklame uten løpende
                    kostnader, i motsetning til digitale eller trykte annonser.
                  </li>
                  <li>
                    <strong>Høy synlighet</strong> - Ditt budskap når ut til tusenvis av potensielle kunder hver dag,
                    både i trafikken og når bilen står parkert.
                  </li>
                  <li>
                    <strong>Profesjonelt inntrykk</strong> - En bil med firmadekor utstråler profesjonalitet og skaper
                    tillit hos kundene.
                  </li>
                  <li>
                    <strong>Fleksibelt </strong> - Velg mellom helfoliering, delvis foliering eller enkle logoer for å
                    tilpasse reklamen etter dine behov.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl md:text-4xl font-medium">Firmadekor på bil</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                Gjør bilen synlig for potensielle kunder enten du er på en arbeidsplass, kjører på veien eller står
                parkert hjemme.
              </p>
              <p>
                Logo på bilen er en solid og rimelig investering sammenlignet med andre former for markedsføring. Det er
                ingen løpende kostnader og dekoren varer ofte lenger enn kjøretøyet. Vi tilbyr også kampanjefolie med
                kortere holdbarhet, som er lettere å ta av.
              </p>
            </div>

            <div className="mt-8 mx-[-16px] md:mx-auto xl:pr-80">
              <ImageCarousel
                images={[
                  {
                    src: '/images/bildekor-firmadekor-hvit-bil.jpg',
                    alt: 'Hvit bil med firmadekor',
                  },
                  {
                    src: '/images/bildekor-firmadekor-svart-varebil.jpg',
                    alt: 'Svart varebil med firmadekor',
                  },
                  {
                    src: '/images/bildekor-firmadekor-gra-varebil-detalj.jpg',
                    alt: 'Detaljefoto av en grå varebil med blå firmadekor',
                  },
                ]}
              />
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-3xl md:text-4xl font-medium">Helfoliering</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                Når du helfolierer bilen beskytter du lakken og sørger for at mindre riper og skader ikke påvirker
                annenhåndsverdien.
              </p>
              <p>
                Mange ønsker å utrykke sin personlighet gjennom bilens farge. Helfoliering, også kjent som vinyl eller
                wrapping, er et svært kostandseffektivt alternativ i motsetning til lakkering.
              </p>
              <p>
                Når du fjerner folien er lakken like fin som den var når folien ble påført. Helfoliering av bil krever
                erfarne og dyktige montører, vi i Skiltmakeren hjelper deg i gjennom hele prosessen.
              </p>
            </div>

            <div className="mt-8 mx-[-16px] md:mx-auto xl:pr-80">
              <ImageCarousel
                images={[
                  {
                    src: '/images/bildekor-helfoliering-gronn-bil-bmw.jpg',
                    alt: 'Grønn BMW med helfoliering',
                  },
                  {
                    src: '/images/bildekor-helfoliering-svart-bil.jpg',
                    alt: 'Svart bil med helfoliering',
                  },
                  {
                    src: '/images/bildekor-helfoliering-gronn-bil-hyundai.jpg',
                    alt: 'Grønn Hyundai med helfoliering',
                  },
                ]}
              />
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-3xl md:text-4xl font-medium">Hvorfor velge Skiltmakeren?</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                Vi har dekorert flere tusen kjøretøy og har modeller av alle populærer personbiler og varebiler slik at
                skissene gir et godt inntrykk av hvordan bildekor tar seg ut på akkurat ditt kjøretøy. Våre dyktige
                designere hjelper deg også med logoer, plassering og skreddersydde uttrykk.
              </p>
              <p>
                Skiltmakeren har et landsdekkende montasjenettverk og utfører oppdrag over hele landet. Vi benytter kun
                den beste folien i vår produksjon, fra verdens mest kjente produsenter.
              </p>
              <p>
                Både store og små bedrifter har brukt vår ekspertise til å markesføre sin merkevare på veien, blant
                annet:
              </p>
              <ul className="pl-2 list-disc list-inside marker:text-primary space-y-1">
                <li>Bring</li>
                <li>Ruter</li>
                <li>Würth Norge</li>
                <li>Siemens</li>
              </ul>
            </div>

            <div>
              <h3 className="mt-6 text-2xl md:text-3xl">Prosessen fra design til ferdigmontert dekor</h3>
              <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
                <ol className="list-decimal list-inside marker:font-bold space-y-2">
                  <li>
                    <strong>Design</strong> - Vi utvikler et skreddersydd design basert på din bedrifts profil og
                    ønsker. Dette inkluderer fargevalg, logo, grafikk og budskap som effektivt formidler din merkevare.
                  </li>
                  <li>
                    <strong>Produksjon</strong> - Etter godkjent design produseres dekoren med slitesterk og
                    værbestandig folie av høy kvalitet.
                  </li>
                  <li>
                    <strong>Montering</strong> - Våre erfarne montører sørger for en presis og boblefri påføring, enten
                    det er helfoliering eller mindre dekorelementer.
                  </li>
                  <li>
                    <strong>Vedlikehold</strong> - For å forlenge levetiden på folien anbefales regelmessig rengjøring
                    med milde såper og unngå høytrykkspyling på kantene av folien.
                  </li>
                </ol>
              </div>
            </div>

            <div className="xl:pr-80 mt-8 mx-[-16px] md:mx-auto">
              <div className="relative w-full pb-[56.25%]">
                <Image
                  alt="Folieruller"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  layout="fill"
                  src="/images/profesjonell-service.jpg"
                />
              </div>
            </div>

            <div className="mt-10 xl:pr-80">
              <h3 className="mt-8 text-2xl md:text-3xl">Rask levering og profesjonell service</h3>
              <div className="mt-4 mb-6 md:text-lg leading-7 space-y-4">
                <p>
                  Kontakt oss for et uforpliktende tilbud, så hjelper vi deg med å skape en bilreklame som gir
                  resultater!
                </p>
              </div>

              <ContactForm />
            </div>
          </section>
        </article>
      </div>
    </Fragment>
  )
}
