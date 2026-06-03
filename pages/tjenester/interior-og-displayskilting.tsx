import Image from 'next/image'
import { Fragment } from 'react'

import ContactForm from 'scenarios/contact/components/ContactForm'
import DividerFaded from 'components/Dividers/DividerFaded'
import ImageCarousel from 'components/ImageCarousel/ImageCarousel'
import SEO from 'components/SEO/SEO'

export default function Fasadeskilt(): JSX.Element {
  return (
    <Fragment>
      <SEO
        canonicalUrl="https://www.skiltmakeren.no/tjenester/fasadeskilt"
        description="Fasadeskilt som skaper inntrykk - skreddersydd for å gi din bedrift et profesjonelt uttrykk. Vi tilbyr lysskilt, bokstaver i metall, plateskilt og folieskilt til alle bransjer."
        descriptionFacebook="Profesjonelle fasadeskilt som gir bedriften din et tydelig og gjennomført uttrykk. Skiltmakeren leverer alt fra folieskilt og plateskilt til lysskilt og bokstaver i metall."
        descriptionTwitter="Skreddersydde fasadeskilt som gir synlighet og identitet til din bedrift. Velg mellom lysskilt, bokstaver, folieskilt og mer - levert av Skiltmakeren AS."
        imageSource="https://www.skiltmakeren.no/images/meta-image.png"
        title="Fasadeskilt · Skiltmakeren AS"
      />

      <div className="article-container mx-auto mt-4 md:mt-6 xl:mt-8 mb-24 text-[#231F20]">
        <span className="text-sm xl:text-base text-primary">Tjenester / Interiør og displayskilting</span>

        <article className="mt-4 xl:mt-6">
          <section>
            <h1 className="mb-2 text-4xl md:text-5xl font-semibold">Interiørdekor som engasjerer</h1>
            <DividerFaded />

            <div className="max-w-3xl mt-4 xl:mt-6">
              <p className="text-xl leading-[32px] xl:text-2xl xl:leading-[36px]">
                Vil du skape et godt arbeidsmiljø og sikre et profesjonelt uttrykk for besøkende? Våre løsninger for
                interiør og displayskilting er skreddersydd til deres lokaler. God innvendig profilering er ikke bare
                estetisk – det er et kraftfullt verktøy for trivsel, effektivitet og merkevarebygging.
              </p>
            </div>

            <div className="mt-8 mx-[-16px] md:mx-auto xl:pr-80">
              <ImageCarousel
                images={[
                  {
                    src: '/images/interior-og-displayskilting/elektrotjenesten.jpg',
                    alt: 'Elektrotjenesten',
                  },
                  {
                    src: '/images/interior-og-displayskilting/frostfolie.jpg',
                    alt: 'Frostfolie',
                  },
                  {
                    src: '/images/interior-og-displayskilting/frostfolie-med-monster.jpg',
                    alt: 'Frostfolie med mønster',
                  },
                ]}
                priority
              />
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-3xl md:text-4xl font-medium">Innvendig profilering til alle lokaler</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                I over 30 år har Skiltmakeren vært en viktig spiller innen alt av visuell kommunikasjon. Vi tilbyr et
                komplett utvalg av interiørdekor, glassfolie og smarte skiltsystemer. Enten du trenger elegant frosting
                til møterom, enkle og robuste systemskilt eller unike displayer til butikken, leverer vi løsninger som
                gir lokalene dine en frisk og unik identitet.
              </p>
              <p>
                Våre løsninger tilpasses helt etter bedriftens lokaler og behov, uansett om du ønsker et minimalistisk
                design eller et mer fargerikt og kreativt uttrykk. Vi leverer interiør og displayskilting til alle typer
                lokaler, inkludert:
              </p>
              <ul className="pl-2 list-disc list-inside marker:text-primary space-y-1">
                <li>Kontorlandskap og hovedkontorer</li>
                <li>Butikker, showrooms og kjøpesentre</li>
                <li>Hoteller, restauranter og serveringssteder</li>
                <li>Helsesektoren, skoler og offentlige bygg</li>
                <li>Messer, utstillinger og eventer</li>
              </ul>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl md:text-4xl font-medium">Gjør bedriften levende</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                En gjennomtenkt profilering skal ikke bare fylle tomme flater – den skal fortelle en historie og spille
                sammen med interiøret og arkitekturen. Våre designere og produksjonsmedarbeidere samarbeider tett for å
                oppnå kreative og profesjonelle resultater. Vi behersker alt fra moderne trykkmetoder til tradisjonelle
                patineringsteknikker for materialer som stål, glass, treverk og stein.
              </p>

              <p>
                For å sikre at du blir 100 % fornøyd før produksjonen starter for alvor, utarbeider vi nøyaktige
                skisser, og vi kan ofte produsere et fysisk prøveeksempel eller en modell. På denne måten har du full
                oversikt over hva du får.
              </p>
            </div>

            <div className="xl:pr-80 mt-8 mx-[-16px] md:mx-auto">
              <div className="relative w-full pb-[56.25%]">
                <Image
                  alt="Illustrasjonsbilde, togstasjon"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  layout="fill"
                  src="/images/interior-og-displayskilting/illustrasjonsbilde.jpg"
                />
              </div>
              <div className="mt-0.5 pl-4 md:pl-1">
                <span className="text-[#777777] text-xs font-light">Illustrasjonsbilde</span>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl md:text-4xl font-medium">Våre løsninger</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7">
              <div className="space-y-4">
                <p>
                  Innvendig profilering handler om balansen mellom funksjon og estetikk. Våre produkter er designet for
                  å være stilrene, funksjonelle og også slitesterke. Vi kombinerer tradisjonelt håndverk med moderne
                  teknologi for å levere interiørløsninger av høyeste kvalitet som varer.
                </p>
                <p>Vi tilbyr flere typer innvendige løsninger tilpasset dine behov:</p>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl md:text-2xl font-medium">1. Glassfolie og frosting – Estetisk skjerming</h3>
                <p>
                  Frostet eller melert folie på glassvegger sikrer nødvendig personvern til møterom og kontorer uten å
                  stenge dagslyset ute. Vi anbefaler dette for å skape uforstyrrede soner i åpne landskap. Vi kan
                  konturskjære striper, mønstre eller bedriftens logo direkte inn i folien for et eksklusivt og
                  dekorativt uttrykk.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl md:text-2xl font-medium">2. Systemskilt – Gjør det enkelt å finne frem</h3>
                <p>
                  Kontor og offentlige bygg har et løpende behov for oversiktlig informasjon. Skiltmakeren leverer
                  komplette skiltsystemer som ivaretar byggets arkitektur og sørger for at besøkende alltid finner frem.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl md:text-2xl font-medium">3. Veggdekor og 3D-logoer – Bedriftens identitet</h3>
                <p>
                  Forvandle tomme vegger til blikkfang med skreddersydd, høyoppløselig fototapet eller flotte
                  lerretsbilder. Vi leverer og monterer også utfreste fasadebokstaver og logoer i materialer som plast,
                  tre og metaller. Disse kan monteres med avstandsholdere til veggen for å skape en eksklusiv,
                  tredimensjonal effekt.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl md:text-2xl font-medium">4. Innvendige displayer og spesialløsninger</h3>
                <p>
                  Vi lager displaymateriell i alle størrelser og fasonger – fra enkle brosjyredisplayer, meny- og
                  plakatholdere på disk, til store gulvdisplayer, produktdisplayer for torg, og funksjonelle roll-ups.
                </p>
              </div>
            </div>

            <div className="xl:pr-80 mt-8 mx-[-16px] md:mx-auto">
              <div className="relative w-full pb-[56.25%]">
                <Image
                  alt="Illustrasjonsbilde, Pantone"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  layout="fill"
                  src="/images/interior-og-displayskilting/pantone.jpg"
                />
              </div>
              <div className="mt-0.5 pl-4 md:pl-1">
                <span className="text-[#777777] text-xs font-light">Illustrasjonsbilde</span>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-3xl md:text-4xl font-medium">Hvorfor velge Skiltmakeren?</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                Med lang erfaring innen produksjon og montering av interiørdekor, vet vi hva som skal til for å skape en
                sterk visuell identitet. Våre designere jobber tett med deg for å sikre at profileringen harmonerer med
                bedriftens identitet og byggets arkitektur. Vi bruker kun materialer av høy kvalitet, og vår ekspertise
                sikrer et sluttprodukt som både ser bra ut og varer i mange år.
              </p>
            </div>

            <div>
              <h3 className="mt-6 text-2xl md:text-3xl">Prosessen fra design til ferdigmontert dekor</h3>
              <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
                <ol className="list-decimal list-inside marker:font-bold space-y-2">
                  <li>
                    <strong>Design og rådgivning</strong> - Vi hjelper deg med å utvikle et unikt og skreddersydd design
                    som reflekterer din bedrifts identitet.
                  </li>
                  <li>
                    <strong>Produksjon</strong> - Alt produseres med moderne produksjonsteknikker i slitesterke
                    kvalitetsmaterialer.
                  </li>
                  <li>
                    <strong>Montering</strong> - Våre erfarne montører sørger for nøyaktig, rett og boblefri montering
                    av folie og stødig oppheng av skiltsystemer.
                  </li>
                  <li>
                    <strong>Vedlikehold</strong> - Vi gir deg enkle råd om hvordan du tar vare på overflatene og
                    materialene slik at de holder seg pene i år etter år.
                  </li>
                </ol>
              </div>
            </div>

            <div className="xl:pr-80 mt-8 mx-[-16px] md:mx-auto">
              <div className="relative w-full pb-[56.25%]">
                <Image
                  alt="Skiltmakeren tilbyr profesjonell service og rask levering"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  layout="fill"
                  src="/images/fasadeskilt/profesjonell-service.webp"
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
