import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NavbarLogo(): JSX.Element {
  return (
    <Fragment>
      <Link className="md:hidden" href="/">
        <Image alt="Logo" height={45} src="/images/logo.png" width={145} />
      </Link>
      <Link className="hidden md:block" href="/">
        <Image alt="Logo" height={55} src="/images/logo.png" width={178} />
      </Link>
    </Fragment>
  )
}
