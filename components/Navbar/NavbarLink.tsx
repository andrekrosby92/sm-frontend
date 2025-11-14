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
  const classNames = `p-1.5 text-primary ${isActive ? 'border-b-2 border-primary' : ''}`

  if (typeof onClick === 'function') {
    return (
      <button className={classNames} onClick={onClick}>
        {text}
      </button>
    )
  }

  return (
    <Link className={classNames} href={path}>
      {text}
    </Link>
  )
}
