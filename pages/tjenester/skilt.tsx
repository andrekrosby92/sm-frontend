import Image from 'next/image'
import { useEffect, useState } from 'react'

import SEO from 'components/SEO/SEO'

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

      <article className="max-w-6xl w-full mx-auto px-6 md:px-8 xl:px-0 py-8 md:py-12">
        <h1 className="mb-4 md:mb-7 text-4xl xl:text-6xl font-semibold">Skilt og foliedekor</h1>
        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <ImageCarousel images={imagesSkilt} />
            <section className="prose xl:prose-md">
              <h2 className="">Skilt</h2>
              <p>
                Mange har ett ønske om en kjapp og kostnadseffektiv løsning. Om det gjelder skilt med kort leveringstid
                eller produksjon i stort volum. Plateskilt kan lages med alle mulige trykk og logoer. Vi kan trykke rett
                på platene, eller monter print/vinyldekor. Platene består som oftest av aluminium eller en blanding av
                aluminium og kompositt (ibond). Plateskilt har mange bruksområder. Det kan være arenareklame,
                butikkskilt, parkeringsskilt osv.
              </p>
            </section>
          </div>

          <div className="space-y-4">
            <ImageCarousel images={imagesFolie} initDelay={5500} />
            <section className="prose xl:prose-md">
              <h2 className="">Folie</h2>
              <p>
                Folie kan brukes på så mangt. Enten som ferdig innfarget eller print på folie. Med print folie kan man
                produsere klistremerker, dekor og større budskap i alle typer farger. Her er det kun fantasien som
                setter grenser. Vi produserer også dekor med ferdig innfarget folie. Disse blir ofte brukt ved enkle
                budskap med få farger, enkle tekster eller hvis man ønsker en unik farge. Vi har ett stort spekter av
                ferdig innfarget folier fra kvalitetsleverandører som 3M og Avery.
              </p>
            </section>
          </div>
        </section>
      </article>
    </div>
  )
}

function ImageCarousel({
  images,
  initDelay = 0,
}: {
  images: Array<{ src: string; alt: string }>
  initDelay?: number
}): JSX.Element {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout

    const startInterval = (): void => {
      interval = setInterval(() => {
        setIndex((prevState) => {
          if (images && prevState === images.length - 1) {
            return 0
          } else {
            return prevState + 1
          }
        })
      }, 4000)
    }

    const timeout = setTimeout(() => {
      setIndex((prevState) => {
        if (images && prevState === images.length - 1) {
          return 0
        } else {
          return prevState + 1
        }
      })

      startInterval()
    }, initDelay)

    return () => {
      setIndex(0)
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [images, initDelay])

  return (
    <div className="h-[200px] md:h-[512px] overflow-x-hidden">
      <div className="flex transition-transform" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((elem) => (
          <div className="relative flex-shrink-0 h-[200px] md:h-[512px] w-full" key={elem.alt}>
            <Image alt={elem.alt} className="rounded-lg" layout="fill" objectFit="cover" src={elem.src} />
          </div>
        ))}
      </div>
    </div>
  )
}
