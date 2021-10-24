import React from 'react'

import DividerFaded from 'components/Dividers/DividerFaded'

export default function SectionHeaderPrimary({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <header className="space-y-1">
      <h2 className="text-4xl font-medium">{children}</h2>
      <DividerFaded />
    </header>
  )
}
