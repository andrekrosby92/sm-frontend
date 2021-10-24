import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'

import { IconName } from './types'

const IconArrowRight = dynamic(() => import('./components/IconArrowRight'))
const IconEnvelope = dynamic(() => import('./components/IconEnvelope'))
const IconEnvelopeAlt = dynamic(() => import('./components/IconEnvelopeAlt'))
const IconFacebook = dynamic(() => import('./components/IconFacebook'))
const IconInstagram = dynamic(() => import('./components/IconInstagram'))
const IconLinkedIn = dynamic(() => import('./components/IconLinkedIn'))
const IconMapMarker = dynamic(() => import('./components/IconMapMarker'))
const IconPDFRed = dynamic(() => import('./components/IconPDFRed'))
const IconPhone = dynamic(() => import('./components/IconPhone'))
const IconPhoneAlt = dynamic(() => import('./components/IconPhoneAlt'))

export default function Icon({ className, name }: { className?: string; name: IconName }): JSX.Element {
  switch (name) {
    case 'arrow-right':
      return <IconArrowRight className={className} />

    case 'envelope':
      return <IconEnvelope className={className} />

    case 'envelope-alt':
      return <IconEnvelopeAlt className={className} />

    case 'facebook':
      return <IconFacebook className={className} />

    case 'instagram':
      return <IconInstagram className={className} />

    case 'linked-in':
      return <IconLinkedIn className={className} />

    case 'map-marker':
      return <IconMapMarker className={className} />

    case 'pdf-red':
      return <IconPDFRed className={className} />

    case 'phone':
      return <IconPhone className={className} />

    case 'phone-alt':
      return <IconPhoneAlt className={className} />

    default:
      return <Fragment />
  }
}
