import Image from 'next/image'
import { useEffect, useState } from 'react'

import SEO from 'components/SEO/SEO'

const images = [
  { src: '/images/containerdekor/hæhre.jpg', alt: 'Hæhre' },
  { src: '/images/containerdekor/henger.jpg', alt: 'Henger' },
  { src: '/images/containerdekor/implenia.jpg', alt: 'Implenia' },
  { src: '/images/containerdekor/lns.jpg', alt: 'Lns' },
  { src: '/images/containerdekor/mobilitetspunkt-1.jpg', alt: 'Mobilitetspunkt 1' },
  { src: '/images/containerdekor/mobilitetspunkt-2.jpg', alt: 'Mobilitetspunkt 2' },
  { src: '/images/containerdekor/sørby-blå.jpg', alt: 'Sørby blå' },
  { src: '/images/containerdekor/sørby-svart.jpg', alt: 'Sørby svart' },
  { src: '/images/containerdekor/sub-sea.jpg', alt: 'Sub Sea' },
  { src: '/images/containerdekor/wurth.jpg', alt: 'Würth' },
]

// prettier-ignore
const seo = {
  canonicalUrl: 'https://www.skiltmakeren.no/tjenester/containerdekor',
  description: 'En ledende aktør innen containerdekor. 30 års erfaring, landsdekkende service og høyeste kvalitet på folie.',
  descriptionFacebook: 'Ledende på containerdekor i Norge. Skiltmakeren - kvalitet og erfaring du kan stole på!',
  descriptionTwitter: 'Stol på Skiltmakeren AS for din containerdekor. Høy kvalitet, landsdekkende service, og erfaring fra store oppdrag',
  imageSource: 'https://www.skiltmakeren.no/images/meta-image.png',
  title: 'Containerdekor · Skiltmakeren AS',
}

export default function Page(): JSX.Element {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevState) => {
        if (images && prevState === images.length - 1) {
          return 0
        } else {
          return prevState + 1
        }
      })
    }, 4000)

    return () => {
      setIndex(0)
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <SEO {...seo} />
      <article className="max-w-6xl w-full mx-auto px-6 md:px-8 xl:px-0 py-8 md:py-12">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
          <h1 className="mb-4 text-4xl xl:text-6xl font-semibold md:hidden">Containerdekor</h1>
          <section className="order-2 md:order-1 mt-4 md:mt-0">
            <h1 className="mb-4 text-4xl xl:text-6xl font-semibold hidden md:block">Containerdekor</h1>
            <div className="prose xl:prose-lg">
              <p>
                Skiltmakeren AS er en landets ledende aktører innen dekor til containere/ vekselbeholdere. Blant større
                profiloppdrag kan nevnes: Hellmann med mer enn 700 vekselbeholdere, Lys-Line med mer enn 1200 containere
                i forskjellige størrelser. Vi dekorerer daglig containere for Containertech og mange av deres kunder,
                som Veidekke, NCC Construction, Hæhre Maskinutleie, Skanska, LNS, Kaeser etc.
              </p>

              <p>
                Vi har et landsdekkende montasjenettverk og påtar oss oppdrag over hele landet. Vi benytter den beste
                folie i vår produksjon, med meget høy kvalitet og i fra verdens største produsenter av selvklebende
                materiell.
              </p>
            </div>
          </section>
          <section className="order-1 md:order-2 h-[200px] md:h-[500px] overflow-x-hidden">
            <div className="flex transition-transform" style={{ transform: `translateX(-${index * 100}%)` }}>
              {images.map((elem) => (
                <div className="relative flex-shrink-0 h-[200px] md:h-[500px] w-full" key={elem.alt}>
                  <Image alt={elem.alt} className="rounded-lg" layout="fill" objectFit="cover" src={elem.src} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}
