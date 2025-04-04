import React from 'react'

export default function IconChevronRight({ className }: { className?: string }): JSX.Element {
  return (
    <svg className={className} fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z " />
    </svg>
  )
}
