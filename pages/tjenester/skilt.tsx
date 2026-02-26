import SEO from 'components/SEO/SEO'
import ImageCarousel from 'components/ImageCarousel/ImageCarousel'
import ContactForm from 'scenarios/contact/components/ContactForm'
import DividerFaded from 'components/Dividers/DividerFaded'

const imagesSkilt = [
  { src: '/images/skilt/fafo.jpg', alt: 'Fafo' },
  { src: '/images/skilt/fasadeskilt.jpg', alt: 'Fasadeskilt' },
  { src: '/images/skilt/kranz.png', alt: 'Kranz' },
  { src: '/images/skilt/mysen-rackethall.jpg', alt: 'Mysen Rackethall' },
  { src: '/images/skilt/over-oslo-1.jpg', alt: 'Over Oslo 1' },
  { src: '/images/skilt/over-oslo-2.jpg', alt: 'Over Oslo 2' },
  { src: '/images/skilt/peppes-pizza.jpg', alt: 'Peppes Pizza' },
  { src: '/images/skilt/plogskilt.jpg', alt: 'Plogskilt' },
  { src: '/images/skilt/roaf.jpg', alt: 'Roaf' },
  { src: '/images/skilt/wurth-1.jpg', alt: 'Würth 1' },
  { src: '/images/skilt/wurth-2.jp', alt: 'Würth 2' },
]

const imagesFolie = [
  { src: '/images/skilt/assy.jpg', alt: 'Assy' },
  { src: '/images/skilt/avfallsdunker.jpg', alt: 'Avfallsdunker' },
  { src: '/images/skilt/folieskilt.jpg', alt: 'Folieskilt' },
  { src: '/images/skilt/klistremerker.jpg', alt: 'Klistremerker' },
  { src: '/images/skilt/kontorskilt.jpg', alt: 'Kontorskilt' },
  { src: '/images/skilt/nobina-1.jpg', alt: 'Nobina 1' },
  { src: '/images/skilt/nobina-2.jpg', alt: 'Nobina 2' },
  { src: '/images/skilt/wurth-3.jpg', alt: 'Würth 3' },
]

// prettier-ignore
const seo = {
  canonicalUrl: 'https://www.skiltmakeren.no/tjenester/skilt',
  description: 'Skiltmakeren gir kjappe, kostnadseffektive løsninger på skilt og foliedekor. Tilpasset trykk på plateskilt, klistremerker og mer.',
  descriptionFacebook: 'Skreddersydd skilt og foliedekor av høy kvalitet. Rask levering og stor produksjonskapasitet!',
  descriptionTwitter: 'Skiltmakeren tilbyr plateskilt og foliedekor i alle farger. Din løsning, vårt mål!',
  imageSource: 'https://www.skiltmakeren.no/images/meta-image.png',
  title: 'Profilering med skilt og foliedekor · Skiltmakeren AS',
}

export default function Page(): JSX.Element {
  return (
    <div>
      <SEO {...seo} />

      <article className="max-w-6xl w-full mx-auto px-6 md:px-8 xl:px-0 pt-8 pb-24">
        <span className="text-sm xl:text-base text-primary">Tjenester / Skilt og foliedekor</span>

        <header className="py-2 md:py-0 text-[#111]">
          <h1 className="font-bebas text-[68px] leading-[0.92] md:text-[112px] md:leading-[1.2]">
            Skilt og foliedekor
          </h1>
        </header>

        <div className="relative">
          <div className="absolute -top-[12px] md:-top-[24px]">
            <DividerFaded />
          </div>
        </div>

        <section className="max-w-4xl">
          <div className="space-y-4">
            <ImageCarousel images={imagesSkilt} />
            <section className="mt-10">
              <h2 className="text-3xl md:text-4xl font-medium">Plateskilt</h2>
              <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
                <p>
                  Trenger du skilt med kort leveringstid og til en god pris? Vi leverer kostnadseffektive reklameskilt
                  over hele landet, tilpasset dine behov - enten du trenger ett enkelt skilt eller produksjon i større
                  volum.
                </p>

                <h3 className="text-xl md:text-2xl font-medium">Hva er plateskilt?</h3>
                <p>
                  Plateskilt er en allsidig og holdbar skiltløsning som lages i aluminium eller en blanding av aluminium
                  og kompositt. Vi kan trykke direkte på platene eller montere print og folieldekor med ditt ønskede
                  design, logo og budskap.
                </p>

                <h3 className="text-xl md:text-2xl font-medium">Bruksområder for plateskilt</h3>

                <ul className="pl-6 list-disc list-outside marker:text-primary space-y-1">
                  <li>
                    <strong>Butikkskilt</strong> - synlig profilering av din virksomhet
                  </li>
                  <li>
                    <strong>Parkeringsskilt</strong> - tydelig skilting av parkeringsområder
                  </li>
                  <li>
                    <strong>Arenareklame</strong> - effektiv eksponering ved arrangementer
                  </li>
                  <li>
                    <strong>Informasjonsskilt</strong> - veivisning og praktisk informasjon
                  </li>
                </ul>

                <h3 className="text-xl md:text-2xl font-medium">Hvorfor velge oss?</h3>
                <p>
                  Vi tilbyr rask leveringstid, konkurransedyktige priser og skilt av høy kvalitet. Uansett om du trenger
                  ett enkelt skilt eller en stor bestilling, sørger vi for at resultatet blir akkurat slik du ønsker.
                </p>
              </div>
            </section>
          </div>
        </section>

        <section className="mt-10 max-w-4xl">
          <div className="space-y-4">
            <ImageCarousel images={imagesFolie} />
            <section className="mt-10">
              <h2 className="text-3xl md:text-4xl font-medium">Folie</h2>
              <div className="max-w-3xl mt-4 md:text-lg leading-7 space-y-4">
                <p>
                  Folie er en av de mest allsidige løsningene for skilting og dekor. Enten du trenger klistremerker,
                  vinyldekor eller større budskap i full farge, gir folie nesten ubegrensede muligheter for kreativ
                  profilering.
                </p>

                <h3 className="text-xl md:text-2xl font-medium">Full frihet i design og farger</h3>
                <p>
                  Med printfolie kan vi produsere klistremerker, dekor og grafikk i alle typer farger og motiver.
                  Trykket legges direkte på folien, noe som gjør det mulig å gjenskape komplekse logoer, bilder og
                  budskap. Her er det kun fantasien som setter grenser.
                </p>

                <h3 className="text-xl md:text-2xl font-medium">Holdbar og profesjonell finish</h3>
                <p>
                  For enkle budskap med få farger, tekst eller en spesifikk fargetone tilbyr vi ferdig innfarget folie.
                  Denne typen folie er spesielt holdbar og gir et rent, profesjonelt uttrykk. Vi har et stort utvalg av
                  innfargede folier fra kvalitetsleverandører som 3M og Avery.
                </p>

                <h3 className="text-xl md:text-2xl font-medium">Bruksområder for folie</h3>
                <ul className="pl-2 list-disc list-inside marker:text-primary space-y-1">
                  <li>Klistremerker og etiketter</li>
                  <li>Vindusdekor og frostet folie</li>
                  <li>Bildekor og kjøretøyfolering</li>
                  <li>Veggdekor og interiørdesign</li>
                  <li>Fasadedekor og butikkprofilering</li>
                </ul>
              </div>
            </section>
          </div>
        </section>

        <div className="mt-8 xl:pr-80">
          <h3 className="mt-8 text-2xl md:text-3xl">Rask levering og profesjonell service</h3>
          <div className="mt-4 mb-6 md:text-lg leading-7 space-y-4">
            <p>Kontakt oss for et uforpliktende tilbud, ditt neste skilt er rett rundt hjørnet!</p>
          </div>

          <ContactForm />
        </div>
      </article>
    </div>
  )
}
