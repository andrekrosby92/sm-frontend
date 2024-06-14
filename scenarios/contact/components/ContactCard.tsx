import React from 'react'

import Icon from 'components/Icons/Icon'

export default function ContactCard(): JSX.Element {
  return (
    <div className="relative overflow-hidden xl:max-w-sm p-6 space-y-4 rounded-xl shadow-md bg-gradient-to-tl from-primary-light to-primary">
      <h3 className="text-2xl font-medium">Kontaktinformasjon</h3>
      <p className="text-gray-800">
        Fyll ut skjemaet eller ta kontakt med oss direkte ved hjelp av informasjonen under. Vi ser frem til å høre fra
        deg!
      </p>
      <div className="space-y-2">
        <span className="space-x-3 flex">
          <Icon className="w-6 h-6" name="envelope" />
          <a className="font-light" href="mailto:post@skiltmakeren.no">
            post@skiltmakeren.no
          </a>
        </span>
        <span className="space-x-3 flex">
          <Icon className="w-6 h-6" name="phone" />
          <span className="font-light">+47 23 14 14 14</span>
        </span>
        <span className="space-x-3 flex">
          <Icon className="w-6 h-6" name="map-marker" />
          <span className="flex flex-col">
            <span className="font-light">Gramveien 31</span>
            <span className="font-light">1832 Askim, Norge</span>
          </span>
        </span>
      </div>
      <div className="pt-[150px] flex space-x-4">
        {(['facebook'] as const).map((elem) => (
          <Icon className="w-5 h-5" key={elem} name={elem} />
        ))}
      </div>
      <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] rounded-full bg-black" />
      <div className="absolute bottom-16 right-16 w-[120px] h-[120px] rounded-full shadow-lg bg-primary-light bg-opacity-90" />
    </div>
  )
}
