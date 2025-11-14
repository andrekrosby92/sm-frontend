import React from 'react'

import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <React.Fragment>
      <Navbar />
      <main className="min-h-screen-wo-navbar-sm md:min-h-screen-wo-navbar">{children}</main>
      <Footer />
    </React.Fragment>
  )
}
