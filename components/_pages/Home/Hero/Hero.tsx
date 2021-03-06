import SectionWrapperPrimary from 'components/SectionWrappers/SectionWrapperPrimary'

export default function Hero(): JSX.Element {
  return (
    <div className="relative isolate bg-gradient-to-l from-primary to-primary-light">
      <SectionWrapperPrimary className="relative z-10 xl:py-24 space-y-2">
        <h1 className="text-3xl xl:text-6xl font-semibold">Vi kan skilt og dekor.</h1>
        <p className="max-w-3xl xl:text-xl font-light text-gray-800">
          Siden 1994 har vi produsert, levert og montert skilt og dekor til næringslivet, fra skisse og idé – frem til
          ferdig produkt.
        </p>
      </SectionWrapperPrimary>
    </div>
  )
}
