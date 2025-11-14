import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import DividerFaded from 'components/Dividers/DividerFaded'
import IconChevronRight from 'components/Icons/components/IconChevronRight'
import ImageCarousel from 'components/ImageCarousel/ImageCarousel'
import SEO from 'components/SEO/SEO'

const SERVICES = [
  {
    href: '/tjenester/bildekor',
    iconSrc: '/images/icons/car.png',
    iconAlt: 'Car Icon',
    title: 'Bildekor',
  },
  {
    href: '/tjenester/lastebildekor',
    iconSrc: '/images/icons/truck.png',
    iconAlt: 'Truck Icon',
    title: 'Lastebildekor',
  },
  {
    href: '/tjenester/bussdekor',
    iconSrc: '/images/icons/bus.png',
    iconAlt: 'Bus Icon',
    title: 'Bussdekor',
  },
]

export default function DekorTilKjøretøy(): JSX.Element {
  return (
    <Fragment>
      <SEO
        canonicalUrl="https://www.skiltmakeren.no/tjenester/dekor-til-kjoretøy"
        description="Skiltmakeren har siden 1994 levert dekor til biler, busser og lastebiler over hele Norge, vi gjør din bedrift synlig på veien!"
        descriptionFacebook="Skiltmakeren har siden 1994 levert dekor til biler, busser og lastebiler over hele Norge, vi gjør din bedrift synlig på veien!"
        descriptionTwitter="Skiltmakeren har siden 1994 levert dekor til biler, busser og lastebiler over hele Norge, vi gjør din bedrift synlig på veien!"
        imageSource="https://www.skiltmakeren.no/images/meta-image.png"
        title="Dekor til kjøretøy · Skiltmakeren AS"
      />

      <div className="article-container mx-auto mt-4 md:mt-6 xl:mt-8 mb-12 md:mb-16 text-[#231F20]">
        <span className="text-sm xl:text-base text-primary">Tjenester / Dekor til kjøretøy</span>

        <article className="mt-4 xl:mt-6">
          <section>
            <h1 className="mb-2 text-4xl md:text-5xl font-semibold">Dekor til kjøretøy</h1>
            <DividerFaded />

            <div className="max-w-3xl mt-4 xl:mt-6">
              <p className="text-xl leading-[32px] xl:text-2xl xl:leading-[36px]">
                Med noen av Norges aller største bedrifter som Posten og VY på kundelisten er Skiltmakeren et sikkert
                valg dersom du ønsker å foliere en personbil, dekorere en flåte med trailere eller gjøre bedriften din
                synlig på en buss. Les mer ved å klikke på lenkene under.
              </p>
            </div>

            <div className="mt-6 flex flex-col space-y-2">
              {SERVICES.map((service) => (
                <LinkCard
                  href={service.href}
                  iconAlt={service.iconAlt}
                  iconSrc={service.iconSrc}
                  key={service.href}
                  title={service.title}
                />
              ))}
            </div>

            <div className="mt-8 mx-[-16px] md:mx-auto xl:pr-80">
              <ImageCarousel
                images={[
                  {
                    src: '/images/dekor-til-kjoretoy/connect.webp',
                    alt: 'Connect Bus detaljebilde',
                  },
                  {
                    src: '/images/dekor-til-kjoretoy/hvit-lastebil-med-heldekkende-design-salten-n950.webp',
                    alt: 'Hvit lastebil fra Salten N950 med heldekkende design',
                  },
                  {
                    src: '/images/dekor-til-kjoretoy/bildekor-firmadekor-svart-varebil.jpg',
                    alt: 'Svart varebil med firmadekor',
                  },
                  {
                    src: '/images/dekor-til-kjoretoy/bildekor-helfoliering-gronn-bil-bmw.jpg',
                    alt: 'Grønn BMW med helfoliering',
                  },
                ]}
                priority
              />
            </div>
          </section>
        </article>
      </div>
    </Fragment>
  )
}

function LinkCard({
  href,
  iconSrc,
  iconAlt,
  title,
}: {
  href: string
  iconSrc: string
  iconAlt: string
  title: string
}): React.ReactElement {
  return (
    <Link href={href}>
      <span className="w-full md:w-96 px-4 flex items-center justify-between border rounded-lg">
        <div className="flex items-center space-x-4">
          <Image alt={iconAlt} height={52} src={iconSrc} width={52} />
          <span className="text-lg font-medium">{title}</span>
        </div>

        <span>
          <IconChevronRight className="w-5 h-5 fill-current currentColor" />
        </span>
      </span>
    </Link>
  )
}
