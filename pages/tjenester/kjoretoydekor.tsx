import { GetStaticPropsResult } from 'next'
import { Fragment } from 'react'

export default function Bildekor(): JSX.Element {
  return <Fragment />
}

export async function getStaticProps(): Promise<GetStaticPropsResult<unknown>> {
  // Check for the specific route and trigger a redirect
  return {
    redirect: {
      destination: '/tjenester/dekor-til-kjoretoy',
      permanent: false,
    },
  }
}
