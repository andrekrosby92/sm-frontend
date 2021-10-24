import React from 'react'

import type { CompanyServiceMinimal } from 'types/company-service'
import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'

export default function Layout({
  children,
  links,
}: {
  children: React.ReactNode
  links: CompanyServiceMinimal[]
}): JSX.Element {
  return (
    <React.Fragment>
      <Navbar links={links} />
      <main className="min-h-screen">{children}</main>
      <Footer companyServices={links} />
    </React.Fragment>
  )
}
