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
        <span className="text-sm xl:text-base text-primary">Tjenester / Fasadeskilt</span>

        <article className="mt-4 xl:mt-6">
          <section>
            <h1 className="mb-2 text-4xl md:text-5xl font-semibold">Fasadeskilt som skaper inntrykk</h1>
            <DividerFaded />

            <div className="max-w-3xl mt-4 xl:mt-6">
              <p className="text-xl leading-[32px] xl:text-2xl xl:leading-[36px]">
                Vil du gjøre bedriften din mer tilgjengelig og tiltrekke flere kunder? Våre fasadeskilt er skreddersydd
                for å gi din virksomhet et profesjonelt og tydelig uttrykk. Et godt skilt er ikke bare et praktisk
                element - det er et kraftfullt verktøy for merkevarebygging og synlighet.
              </p>
            </div>

            <div className="mt-8 mx-[-16px] md:mx-auto xl:pr-80">
              <ImageCarousel
                images={[
                  {
                    src: '/images/fasadeskilt/terminal-1.webp',
                    alt: 'Terminal 1',
                  },
                  {
                    src: '/images/fasadeskilt/krosby-mobler.webp',
                    alt: 'Krosby Møbler',
                  },
                  {
                    src: '/images/fasadeskilt/transportsentralen.webp',
                    alt: 'Transportsentralen',
                  },
                  {
                    src: '/images/fasadeskilt/roaf.webp',
                    alt: 'Roaf',
                  },
                ]}
                priority
              />
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-3xl md:text-4xl font-medium">Fasadeskilt til alle bransjer</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                I over 30 år har Skiltmakeren vært tilbyder av et bredt utvalg av fasadeskilt i ulike materialer,
                størrelser og design. Enten du trenger et eksklusivt lysskilt, elegante bokstaver i metall eller en
                moderne LED-løsning, leverer vi skilt som gir din bedrift den oppmerksomheten den fortjener.
              </p>
              <p>
                Våre løsninger tilpasses etter dine behov, enten du ønsker et minimalistisk uttrykk eller et mer
                kreativt og blikkfangende design. Vi leverer fasadeskilt til bedrifter i alle bransjer, inkludert:
              </p>
              <ul className="pl-2 list-disc list-inside marker:text-primary space-y-1">
                <li>Butikker og kjøpesentre</li>
                <li>Hoteller og restauranter</li>
                <li>Kontorbygg og næringsparker</li>
                <li>Verksteder og industriområder</li>
                <li>Helsesektoren og offentlige bygg</li>
              </ul>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl md:text-4xl font-medium">Moderne produksjon</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                Et fasadeskilt skal ikke bare være synlig - det skal fortelle en historie. Det skal formidle bedriftens
                identitet og skape en helhet med byggets arkitektur. Vi bistår med valg av plassering, størrelse og
                utforming, slik at skiltet passer naturlig inn i omgivelsene og samtidig oppfyller krav og forskrifter.
              </p>

              <p>
                Større fasadeskilt kan kreve tillatelse fra Plan- og bygningsetaten eller Statens vegvesen. Vi hjelper
                deg med å finne ut av hvilke regler som gjelder i ditt tilfelle og tar oss av søknader til de respektive
                organene.
              </p>

              <div className="p-4 bg-primary-lighter border-l-4 border-primary">
                <div className="flex space-x-2">
                  <span className="text-5xl font-serif">&ldquo;</span>
                  <blockquote cite="https://www.vegvesen.no/trafikkinformasjon/langs-veien/sok-om-reklame-langs-vei">
                    <span>
                      Vil du feste reklame for en virksomhet på bygningen der virksomheten drives, og reklamen kun viser
                      firmanavnet eller typen virksomhet, trenger du ikke tillatelse fra Statens vegvesen.
                    </span>
                    <cite className="block">
                      <a
                        href="https://www.vegvesen.no/trafikkinformasjon/langs-veien/sok-om-reklame-langs-vei"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="text-sm text-blue-500 underline not-italic">
                          Søk om reklame langs vei - Statens vegvesen
                        </span>
                      </a>
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="xl:pr-80 mt-8 mx-[-16px] md:mx-auto">
              <div className="relative w-full pb-[56.25%]">
                <Image
                  alt="Skiltmakeren tilbyr profesjonell service og rask levering"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  layout="fill"
                  src="/images/fasadeskilt/gramveien.webp"
                />
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl md:text-4xl font-medium">Våre løsninger</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7">
              <div className="space-y-4">
                <p>
                  Et fasadeskilt er mer enn bare et navn på en vegg - det er en visuell signatur som representerer
                  merkevaren. Våre fasadeskilt er designet for å være slitesterke, stilrene og godt synlige, uansett vær
                  og lysforhold. Vi kombinerer tradisjonelt håndverk med moderne teknologi for å levere skilt av høy
                  kvalitet som varer over tid.
                </p>
                <p>
                  Våre skilt er UV-bestandige og tåler all slags vær, det betyr lang levetid og vedlikeholdsfrie
                  løsninger. Vi tilbyr flere typer fasadeskilt tilpasset dine behov:
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl md:text-2xl font-medium">1. Folieskilt - Synlighet til lav pris</h3>
                <p>
                  Folieskilt er den rimeligste formen for fasadeskilt og gir en ren og tydelig profilering. Folie kan
                  monteres direkte på fasaden og passer perfekt for informasjonsskilt eller midlertidig merking. Vi
                  anbefaler dette til glatte overflater der limet har godt feste.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl md:text-2xl font-medium">2. Plateskilt - Enkelt og fleksibelt</h3>
                <p>
                  Plateskilt er en praktisk løsning som kan tilpasses i størrelse, form og materialvalg. Vi benytter et
                  utvalg av materialer, inkludert rustfritt stål, aluminium, PVC, akryl, glass og tre, for å sikre et
                  skilt som passer perfekt til din fasade. Plateskilt kan monteres flatt mot veggen eller med avstand
                  for en mer dynamisk effekt.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl md:text-2xl font-medium">
                  3. Frittstående bokstaver - Unikt og tredimensjonalt
                </h3>
                <p>
                  For en eksklusiv fremtoning er frittstående bokstaver det klare valget. Disse kan monteres med avstand
                  til fasaden for en flytende effekt og kan kombineres med belysning. Rammeverket kan også lakkeres for
                  å gå i ett med fasaden.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl md:text-2xl font-medium">4. Lysskilt - Profilering døgnet rundt</h3>
                <p>
                  Lysforsterkede fasadeskilt sørger for synlighet både dag og natt. Vi benytter energieffektiv
                  LED-teknologi for å gi et moderne uttrykk med lavt strømforbruk. Fasadeskilt med LED-lys gir din
                  bedrift et eksklusivt preg.
                </p>
              </div>

              <p className="mt-8">
                Uansett hvilket fasadeskilt du velger, kan du være trygg på at vi benytter høykvalitetsmaterialer og
                presise produksjonsmetoder for å sikre et varig og estetisk resultat. Ta kontakt med oss for en
                skreddersydd løsning som styrker din bedrifts visuelle uttrykk.
              </p>
            </div>

            <div className="mt-8 mx-[-16px] md:mx-auto xl:pr-80">
              <ImageCarousel
                images={[
                  {
                    src: '/images/fasadeskilt/wowo-hair.webp',
                    alt: 'Wowo Hair',
                  },
                  {
                    src: '/images/fasadeskilt/naboens-pub.webp',
                    alt: 'Naboens Pub',
                  },
                  {
                    src: '/images/fasadeskilt/pmt.webp',
                    alt: 'PMT',
                  },
                  {
                    src: '/images/fasadeskilt/gflogistikk.webp',
                    alt: 'GF Logistikk',
                  },
                  {
                    src: '/images/fasadeskilt/strom-larsen.webp',
                    alt: 'Strøm Larsen',
                  },
                ]}
              />
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-3xl md:text-4xl font-medium">Hvorfor velge Skiltmakeren?</h2>
            <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
              <p>
                Med lang erfaring innen produksjon og montering av fasadeskilt, vet vi hva som skal til for å skape en
                sterk visuell identitet. Våre designere jobber tett med deg for å sikre at skiltet harmonerer med din
                bedrifts profil og byggets arkitektur. Vi bruker kun materialer av høy kvalitet, og vår ekspertise
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
                    <strong>Produksjon</strong> - Skiltet produseres i materialer av høy kvalitet, med moderne
                    produksjonsteknikker for best mulig resultat.
                  </li>
                  <li>
                    <strong>Montering</strong> - Våre erfarne montører sørger for at skiltet installeres trygt og
                    effektivt. Vi tar oss av alle ledd i prosessen og stiller med nødvendig utstyr.
                  </li>
                  <li>
                    <strong>Vedlikehold</strong> - Vi gir deg råd om hvordan du kan forlenge levetiden på skiltet med
                    riktig vedlikehold.
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
