export default function FloatingLabel({
  children,
  htmlFor,
  isError,
  shouldTranslate,
}: {
  children: React.ReactNode
  htmlFor: string
  isError: boolean
  shouldTranslate: boolean
}): JSX.Element {
  const translatedClassNames = shouldTranslate || isError ? '-translate-y-2 text-sm' : ''
  const hasErrorClassNames = isError ? 'text-red-600 font-medium' : 'text-gray-500 font-light'

  return (
    <label
      className={`absolute top-4 left-3 transition-all duration-75 ${hasErrorClassNames} ${translatedClassNames}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}
