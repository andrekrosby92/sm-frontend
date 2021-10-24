import React from 'react'

export default function DividerFaded({ flip }: { flip?: boolean }): JSX.Element {
  const classNames = flip ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
  return <div className={`w-72 h-0.5 rounded from-primary-light to-transparent ${classNames}`} />
}
