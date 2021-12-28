import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NavbarLogo(): JSX.Element {
  return (
    <Fragment>
      <Link href="/">
        <a className="md:hidden">
          <Image alt="Logo" height={45} src="/images/logo.png" width={145} />
        </a>
      </Link>
      <Link href="/">
        <a className="hidden md:block">
          <Image alt="Logo" height={55} src="/images/logo.png" width={178} />
        </a>
      </Link>
    </Fragment>
  )
}
