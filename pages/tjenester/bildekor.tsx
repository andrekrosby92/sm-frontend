import { Fragment } from 'react'

import DividerFaded from 'components/Dividers/DividerFaded'
import ContactForm from 'scenarios/contact/components/ContactForm'
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

      <div className="w-[calc(100vw-32px)] md:w-[calc(100vw-128px)] xl:max-w-6xl mx-auto mt-[24px] *** pb-24 xl:pr-80">
        <div>
          <div className="text-[13px] font-medium text-primary">VÅRE TJENESTER</div>
          <h1 className="mt-4 mb-2 text-4xl md:text-5xl font-semibold">Bildekor</h1>
          <DividerFaded />
          <p className="mt-4 text-xl leading-[32px] text-[#222]">
            Bildekor er en av de mest effektive måtene å profilere din bedrift på. Med profesjonell firmadekor får du
            rullende reklame som skaper oppmerksomhet døgnet rundt.
          </p>

          <div className="mt-8 mx-[-16px] md:mx-auto">
            <img
              alt="Hvite firmabiler med bildekor"
              className="w-full h-[192px] md:h-[400px] object-cover"
              src="https://www.skiltmakeren.no/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fet9is1el%2Fproduction%2Fb867c6138094f38e97965a657d7f339087d49ad3-3025x4033.jpg&w=3840&q=75"
            />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl md:text-4xl font-medium">Bli synlig</h2>
          <div className="mt-4 leading-7 text-[#333] space-y-4">
            <p>
              Dekorering av kjøretøy gjør deg mer synlig både i trafikken og når kjøretøyet står parkert. Flere og flere
              firmaer bruker bildekor som et virkemiddel til å kommunisere sitt budskap og gjøre effektiv bruk av
              potensiell plass for annonsering og merkevarebygging. For mange firmaer har flåtedekor større virkning enn
              noe annet.
            </p>

            <p>
              Vi tilbyr alt fra enkel logo på bil til helfoliering og spesialdesignede løsninger som skreddersys etter
              dine behov.
            </p>
          </div>
          <div>
            <h3 className="mt-6 text-2xl md:text-3xl">Fordeler med bildekor</h3>
            <div className="mt-4 leading-7 text-[#333] space-y-4">
              <p>
                <b>Kostnadseffektiv markedsføring</b> - Bildekor gir langsiktig reklame uten løpende kostnader, i
                motsetning til digitale eller trykte annonser.
              </p>
              <p>
                <b>Høy synlighet</b> - Ditt budskap når ut til tusenvis av potensielle kunder hver dag, både i trafikken
                og når bilen står parkert.
              </p>
              <p>
                <b>Profesjonelt inntrykk</b> - En bil med firmadekor utstråler profesjonalitet og skaper tillit hos
                kundene.
              </p>
              <p>
                <b>Fleksibelt </b> - Velg mellom helfoliering, delvis foliering eller enkle logoer for å tilpasse
                reklamen etter dine behov.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl md:text-4xl font-medium">Firmadekor på bil</h2>
          <div className="mt-4 leading-7 text-[#333] space-y-4">
            <p className="">
              Gjør bilen synlig for potensielle kunder enten du er på en arbeidsplass, kjører på veien eller står
              parkert hjemme.
            </p>
            <p className="">
              Logo på bilen er en rimelig investering sammenlignet med andre former for markedsføring. Ingen løpende
              kostnader og dekoren varer i mange år.
            </p>
          </div>
        </div>

        <div className="mt-8 mx-[-16px] md:mx-auto">
          <img
            alt="Hvit firmabil med bildekor"
            className="w-full h-[192px] md:h-[400px] object-cover"
            src="https://www.skiltmakeren.no/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fet9is1el%2Fproduction%2F689fcf64a51d6c4047149f6c7a916944d386dbe5-3025x2269.jpg&w=1080&q=75"
          />
        </div>

        <div className="mt-10">
          <h2 className="text-3xl md:text-4xl font-medium">Helfoliering</h2>
          <div className="mt-4 leading-7 text-[#333] space-y-4">
            <p className="">
              Når du helfolierer bilen beskytter du lakken og sørger for at mindre riper og skader ikke påvirker
              annenhåndsverdien.
            </p>
            <p className="">
              Mange ønsker å utrykke sin personlighet gjennom bilens farge og helfoliering, også kjent som vinyl eller
              wrapping, er et svært kostandseffektivt alternativ i motsetning til lakkering.
            </p>
            <p>
              Når du fjerner folien er lakken like fin som den var når folien ble påført. Helfoliering av bil krever
              erfarne og dyktige montører, vi i Skiltmakeren hjelper deg i gjennom hele prosessen.
            </p>
          </div>
        </div>

        <div className="mt-8 mx-[-16px] md:mx-auto">
          <img
            alt="Personbil med helfoliering"
            className="w-full h-[192px] md:h-[400px] object-cover"
            src="https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/461279760_1079214870873090_7035849518513902949_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OUwLXa1ygV0Q7kNvgEi4jMn&_nc_oc=AdgI7hiSG9iP47DQEOKE233oUJowFpo1jwgoczYNv1Uw1Nv0fnc2mGJKWgueMBFd2-o&_nc_zt=23&_nc_ht=scontent.fsvg1-1.fna&_nc_gid=A2CJMtpJi-8EpT_iOxYpkAr&oh=00_AYCFuNNFDDDXoQZsGNGAvKBTwHEtfd5rrFBSS10bdx2Gxg&oe=67B8ADE0"
          />
        </div>

        <div className="mt-10">
          <h2 className="text-3xl md:text-4xl font-medium">Hvorfor velge Skiltmakeren?</h2>
          <div className="mt-4 leading-7 text-[#333] space-y-4">
            <p className="">
              Vi har dekorert flere tusen kjøretøy og har modeller av alle populærer personbiler slik at skissene gir et
              godt inntrykk av hvordan bildekor tar seg ut på akkurat ditt kjøretøy. Våre dyktige designere hjelper deg
              også med logoer, plassering og skreddersydde uttrykk.
            </p>
            <p className="">
              Skiltmakeren har et landsdekkende montasjenettverk og utfører oppdrag over hele landet. Vi benytter kun
              den beste folien i vår produksjon, fra verdens mest kjente produsenter.
            </p>
            <p>
              Både store og små bedrifter har brukt vår ekspertise til å markesføre sin merkevare på veien, blant annet:
            </p>
            <ul className="pl-2 list-disc list-inside space-y-1">
              <li>Bring</li>
              <li>Ruter</li>
              <li>Würth Norge</li>
              <li>Siemens</li>
            </ul>
          </div>
          <div>
            <h3 className="mt-6 text-2xl md:text-3xl">Prosessen fra design til ferdigmontert dekor</h3>
            <div className="mt-4 leading-7 text-[#333] space-y-4">
              <p>
                <b>1. Design</b> - Vi utvikler et skreddersydd design basert på din bedrifts profil og ønsker. Dette
                inkluderer fargevalg, logo, grafikk og budskap som formidler din merkevare på en effektiv måte.
              </p>
              <p>
                <b>2. Produksjon</b> - Etter godkjent design produseres dekoren med slitesterk og værbestandig folie av
                høy kvalitet.
              </p>
              <p>
                <b>3. Montering</b> - Våre erfarne montører sørger for en presis og boblefri påføring, enten det er
                helfoliering eller mindre dekorelementer.
              </p>
              <p>
                <b>4. Vedlikehold</b> - For å forlenge levetiden på folien anbefales regelmessig rengjøring med milde
                såper og unngå høytrykkspyling på kantene av folien.
              </p>
            </div>
          </div>

          <div className="mt-8 mx-[-16px] md:mx-auto">
            <img
              alt="Svart firmabil med bildekor"
              className="w-full h-[192px] md:h-[400px] object-cover"
              src="https://scontent.fsvg1-1.fna.fbcdn.net/v/t39.30808-6/433622450_932865018841410_6588732831492443927_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=w3Tgv6__aIUQ7kNvgEgkayE&_nc_oc=Adie8GgsS6Lpnr3-ssWeMdztpuoJsXyt_7bVey1ZM2B0YeyEirHc6zZwzP4kBSTUzmE&_nc_zt=23&_nc_ht=scontent.fsvg1-1.fna&_nc_gid=AaygO4TqLUGtqej3fmgEs0N&oh=00_AYAWLpIUD34p8qhpmaXGJ0MHSiFouQNgKbC9Q9lnoB_OXA&oe=67B8C8BA"
            />
          </div>

          <div>
            <h3 className="mt-6 text-2xl md:text-3xl">Rask levering og profesjonell service</h3>
            <div className="mt-4 mb-6 leading-7 text-[#333] space-y-4">
              <p>
                Kontakt oss for et uforpliktende tilbud, så hjelper vi deg med å skape en bilreklame som gir resultater!
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
