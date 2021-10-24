import React from 'react'

export default function MessageBase({
  children,
  header,
  message,
}: {
  children: React.ReactNode
  header: string
  message: string
}): JSX.Element {
  return (
    <div className="p-4 space-x-3 flex items-start border border-gray-300 rounded-xl bg-white">
      {children}
      <div>
        <h4 className="font-semibold">{header}</h4>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    </div>
  )
}
