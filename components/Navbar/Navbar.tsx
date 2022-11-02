import React, { Dispatch, Fragment, SetStateAction, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

import type { CompanyServiceMinimal } from 'types/company-service'
import Sanity from 'services/Sanity'
import Icon from 'components/Icons/Icon'

import NavbarLogo from './NavbarLogo'
import NavbarLink from './NavbarLink'

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
          <NavbarLink path="/nyheter" text="Nyheter" />
          <NavbarLink path="/nedlastninger" text="Nedlastninger" />
          <NavbarLink path="/miljo" text="Miljø" />
          <NavbarLink path="/om-oss" text="Om oss" />
          <NavbarLink path="/kontakt" text="Kontakt" />
        </div>
      </section>
      <ServicesMenu displayMenu={displayServicesMenu} services={links} setDisplayMenu={setDisplayServicesMenu} />
      <MobileNavigationMenu displayMenu={displayMobileMenu} links={links} />
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
        {services.map((elem) => (
          <Link href={`/tjenester/${elem.slug.current}`} key={elem.slug.current}>
            <a className="group flex flex-col items-center">
              <span className="transition transform group-hover:scale-110">
                <Image alt={elem.title} height={64} src={Sanity.buildImageUrl(elem.icon)} width={64} />
              </span>
              <span className="transition tracking-wide font-medium text-gray-800 group-hover:text-black">
                {elem.title}
              </span>
            </a>
          </Link>
        ))}
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
            <LinksList links={links} />
            <hr className="border-t border-primary/75" />
            <Link href="/nyheter">
              <a className="font-light text-xl text-primary">Nyheter</a>
            </Link>
            <Link href="/nedlastninger">
              <a className="font-light text-xl text-primary">Nedlastninger</a>
            </Link>
            <Link href="/miljo">
              <a className="font-light text-xl text-primary">Miljø</a>
            </Link>
            <Link href="/om-oss">
              <a className="font-light text-xl text-primary">Om oss</a>
            </Link>
            <Link href="/kontakt">
              <a className="font-light text-xl text-primary">Kontakt</a>
            </Link>
          </Fragment>
          <section className="max-w-max mx-auto py-8 space-x-4 flex text-primary">
            {(['facebook'] as const).map((elem) => (
              <div className="flex justify-center items-center w-12 h-12 rounded-full border border-primary" key={elem}>
                <Icon className="w-5 h-5" name={elem} />
              </div>
            ))}
          </section>
        </div>
      </nav>
    </section>
  )
}

function LinksList({ links }: { links: CompanyServiceMinimal[] }): JSX.Element {
  return (
    <Fragment>
      {links.map((elem) => (
        <Link href={`/tjenester/${elem.slug.current}`} key={elem.slug.current}>
          <a className="flex justify-between items-center font-light text-xl text-primary">
            <span>{elem.title}</span>
            <svg className="w-5 h-5 fill-current currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z " />
            </svg>
          </a>
        </Link>
      ))}
    </Fragment>
  )
}
