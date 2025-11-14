import Image from 'next/image'
import Link from 'next/link'
import { a, to, useSpring } from '@react-spring/web'

import Icon from 'components/Icons/Icon'

export default function CompanyServiceItem({
  title,
  desc,
  href,
  icon,
}: {
  title: string
  desc: string
  href: string
  icon: {
    src: string
    alt: string
  }
}): JSX.Element {
  const [{ scale, x }, api] = useSpring(() => ({
    config: { mass: 1, tension: 500, friction: 12 },
    scale: 1,
    x: 1,
  }))

  const transform = {
    onMouseEnter: () => api({ scale: 1.02, x: 6 }),
    onMouseLeave: () => api({ scale: 1, x: 1 }),
    style: { scale: to([scale], (s) => s) },
  }

  const options: {
    rel?: string
    target?: string
  } = {}

  if (href === 'https://www.bird-free.no') {
    options.rel = 'noopener noreferrer'
    options.target = '_blank'
  }

  return (
    <Link className="relative p-6 xl:py-8" href={href} {...options}>
      <a.div className="group absolute inset-0 hidden xl:flex rounded-xl shadow-light overflow-hidden" {...transform}>
        <button className="w-full mt-auto h-14 border-t border-gray-100 bg-gradient-to-tl from-primary to-primary-light text-primary-darker">
          <span className="space-x-2 flex items-center justify-center">
            <span className="mb-px uppercase font-bold">Les mer</span>
            <a.span style={{ transform: to([x], (x) => `translateX(${x}px)`) }}>
              <Icon className="w-4 h-4 fill-current" name="arrow-right" />
            </a.span>
          </span>
        </button>
      </a.div>

      <div className="h-full flex flex-col items-center text-center">
        <a.div {...transform}>
          <Image alt={icon.alt} height={80} src={icon.src} width={80} />
        </a.div>
        <h3 className="my-3 text-2xl font-semibold">{title}</h3>
        <p className="mb-4 xl:mb-12 text-gray-700">{desc}</p>
        <button className="xl:hidden w-full h-12 mt-auto rounded-xl bg-gradient-to-br from-primary to-primary-light font-medium">
          Les mer
        </button>
      </div>
    </Link>
  )
}
