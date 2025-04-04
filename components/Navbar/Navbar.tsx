import React, { Dispatch, Fragment, SetStateAction, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

import type { CompanyServiceMinimal } from 'types/company-service'
import Icon from 'components/Icons/Icon'
import Sanity from 'services/Sanity'
import { hrefFromSlug } from 'utils/helpers'

import NavbarLink from './NavbarLink'
import NavbarLogo from './NavbarLogo'

function useSubMenusController(): {
  displayMobileMenu: boolean
  displayServicesMenu: boolean
  setDisplayMobileMenu: Dispatch<SetStateAction<boolean>>
  setDisplayServicesMenu: Dispatch<SetStateAction<boolean>>
} {
  const router = useRouter()
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false)
  const [displayServicesMenu, setDisplayServicesMenu] = useState(false)

  useEffect(() => {
    const resetMenusOnRouteChange = (): void => {
      setDisplayMobileMenu(false)
      setDisplayServicesMenu(false)
    }

    router.events.on('routeChangeStart', resetMenusOnRouteChange)

    return () => {
      router.events.off('routeChangeStart', resetMenusOnRouteChange)
    }
  }, [router.events])

  return {
    displayMobileMenu,
    displayServicesMenu,
    setDisplayMobileMenu,
    setDisplayServicesMenu,
  }
}

export default function Navbar({ links }: { links: CompanyServiceMinimal[] }): JSX.Element {
  const { displayMobileMenu, displayServicesMenu, setDisplayMobileMenu, setDisplayServicesMenu } =
    useSubMenusController()

  return (
    <nav className="sticky top-0 h-16 md:h-20 bg-primary-darker" style={{ zIndex: 999 }}>
      <section className="max-w-6xl mx-auto h-full px-4 xl:px-0 flex items-center justify-between">
        <NavbarLogo />
        <button className="xl:hidden space-y-1.5" onClick={() => setDisplayMobileMenu(!displayMobileMenu)}>
          <div className="w-7 h-0.5 rounded bg-gradient-to-l from-primary to-primary-light" />
          <div className="w-7 h-0.5 rounded bg-gradient-to-l from-primary to-primary-light" />
          <div className="w-7 h-0.5 rounded bg-gradient-to-l from-primary to-primary-light" />
        </button>
        <div className="hidden xl:block space-x-8">
          <NavbarLink onClick={() => setDisplayServicesMenu(!displayServicesMenu)} path="/tjenester" text="Tjenester" />
          <NavbarLink path="/miljo" text="Miljø" />
          <NavbarLink path="/nedlastninger" text="Nedlastninger" />
          <NavbarLink path="/om-oss" text="Om oss" />
          <NavbarLink path="/nyheter" text="Nyheter" />
          <NavbarLink path="/kontakt" text="Kontakt" />
        </div>
      </section>

      <Fragment>
        <ServicesMenu displayMenu={displayServicesMenu} services={links} setDisplayMenu={setDisplayServicesMenu} />
      </Fragment>

      <Fragment>
        <MobileNavigationMenu displayMenu={displayMobileMenu} links={links} />
      </Fragment>
    </nav>
  )
}

function ServicesMenu({
  displayMenu,
  services,
  setDisplayMenu,
}: {
  displayMenu: boolean
  services: CompanyServiceMinimal[]
  setDisplayMenu: Dispatch<SetStateAction<boolean>>
}): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setDisplayMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, setDisplayMenu])

  const classNames = displayMenu ? 'h-36 border-b border-secondary-lighter' : 'h-0 border-0'
  const style: React.CSSProperties = {
    backdropFilter: 'blur(32px)',
    backgroundColor: 'rgb(255, 255, 255, 0.90)',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23191202' fill-opacity='0.075' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
  }

  return (
    <div className={`fixed top-16 md:top-20 left-0 w-full overflow-hidden ${classNames}`} ref={ref}>
      <div className="h-full space-x-16 flex justify-center items-center" style={style}>
        {services.map((elem) => {
          // TODO START
          // Temp change url from "kjoretoydekor" to "dekor-til-kjoretoy"
          let slugMirror = ''

          if (elem.slug.current === 'kjoretoydekor') {
            slugMirror = 'dekor-til-kjoretoy'
          } else {
            slugMirror = elem.slug.current
          }

          const href = hrefFromSlug(slugMirror)
          // TODO END

          // TODO START
          // Temp change title from "Kjøretøydekor" to "Dekor til kjøretøy"
          let titleMirror = ''

          if (elem.title === 'Kjøretøydekor') {
            titleMirror = 'Dekor til kjøretøy'
          } else {
            titleMirror = elem.title
          }

          // TODO END

          return (
            <Link href={href} key={href}>
              <a className="group flex flex-col items-center">
                <span className="transition transform group-hover:scale-110">
                  <Image alt={titleMirror} height={64} src={Sanity.buildImageUrl(elem.icon)} width={64} />
                </span>
                <span className="transition tracking-wide font-medium text-gray-800 group-hover:text-black">
                  {titleMirror}
                </span>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function MobileNavigationMenu({
  className,
  displayMenu,
  links,
}: {
  className?: string
  displayMenu: boolean
  links: CompanyServiceMinimal[]
}): JSX.Element {
  const height = displayMenu ? 'h-[calc(100vh-4rem)]' : 'h-0'
  const style: React.CSSProperties = {
    backdropFilter: 'blur(32px)',
    backgroundColor: 'rgb(17, 14, 9, 0.975)',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23feb813' fill-opacity='0.075' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
  }

  return (
    <section className={`fixed top-16 left-0 right-0 overflow-hidden ${className} ${height}`}>
      <nav aria-label="Mobile menu" className="h-full p-6" style={style}>
        <div className="space-y-5 flex flex-col">
          <Fragment>
            <h2 className="font-light text-2xl text-primary">Våre tjenester</h2>
            <Fragment>
              <LinksList links={links} />
            </Fragment>

            <hr className="border-t border-primary/75" />

            <Link href="/miljo">
              <a className="font-light text-xl text-primary">Miljø</a>
            </Link>
            <Link href="/nedlastninger">
              <a className="font-light text-xl text-primary">Nedlastninger</a>
            </Link>
            <Link href="/om-oss">
              <a className="font-light text-xl text-primary">Om oss</a>
            </Link>
            <Link href="/nyheter">
              <a className="font-light text-xl text-primary">Nyheter</a>
            </Link>
            <Link href="/kontakt">
              <a className="font-light text-xl text-primary">Kontakt</a>
            </Link>
          </Fragment>

          <section className="max-w-max mx-auto py-8 space-x-4 flex text-primary">
            <div className="flex justify-center items-center w-12 h-12 rounded-full border border-primary">
              <a href="https://www.facebook.com/Skiltmakeren" rel="noreferrer" target="_blank">
                <Icon className="w-5 h-5" name="facebook" />
              </a>
            </div>
          </section>
        </div>
      </nav>
    </section>
  )
}

function LinksList({ links }: { links: CompanyServiceMinimal[] }): JSX.Element {
  return (
    <Fragment>
      {links.map((elem) => {
        // TODO START
        // Temp change url from "kjoretoydekor" to "dekor-til-kjoretoy"
        let slugMirror = ''

        if (elem.slug.current === 'kjoretoydekor') {
          slugMirror = 'dekor-til-kjoretoy'
        } else {
          slugMirror = elem.slug.current
        }

        const href = hrefFromSlug(slugMirror)
        // TODO END

        // TODO START
        // Temp change title from "Kjøretøydekor" to "Dekor til kjøretøy"
        let titleMirror = ''

        if (elem.title === 'Kjøretøydekor') {
          titleMirror = 'Dekor til kjøretøy'
        } else {
          titleMirror = elem.title
        }

        // TODO END

        return (
          <Link href={href} key={href}>
            <a className="flex justify-between items-center font-light text-xl text-primary">
              <span>{titleMirror}</span>
              <svg className="w-5 h-5 fill-current currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z " />
              </svg>
            </a>
          </Link>
        )
      })}
    </Fragment>
  )
}
