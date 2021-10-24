import React from 'react'

import DividerFaded from 'components/Dividers/DividerFaded'

export default function SectionHeaderSecondary({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <header className="space-x-2 md:space-x-4 flex items-center justify-center">
      <DividerFaded flip />
      <h2 className="text-lg md:text-2xl font-medium whitespace-nowrap">{children}</h2>
      <DividerFaded />
    </header>
  )
}
