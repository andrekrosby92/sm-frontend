import React from 'react'

export default function SectionWrapperPrimary({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}): JSX.Element {
  return <section className={`max-w-6xl mx-auto px-6 py-8 md:p-12 xl:px-0 ${className}`}>{children}</section>
}
