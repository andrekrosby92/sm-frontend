import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavbarLink({
  onClick,
  path,
  text,
}: {
  onClick?: () => void
  path: string
  text: string
}): JSX.Element {
  const router = useRouter()
  const isActive = router.pathname.includes(path)

  const classNames = `-mx-4 px-4 py-3 rounded-full ${isActive ? 'bg-primary text-primary-darker' : 'text-primary'}`

  if (typeof onClick === 'function') {
    return (
      <button className={classNames} onClick={onClick}>
        {text}
      </button>
    )
  }

  return (
    <Link href={path}>
      <a className={classNames}>{text}</a>
    </Link>
  )
}
