import React from 'react'

export default function MessageError({ message }: { message: string | undefined }): JSX.Element | null {
  if (!message) {
    return null
  }

  return (
    <small className="flex items-center space-x-1 text-red-600">
      <svg
        aria-label="Feilindikator"
        className="w-3.5 h-3.5 fill-current"
        focusable="false"
        role="img"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 10.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm.8-6.6H7.2v5.2h1.6z" />
      </svg>
      <span className="text-xs font-light">{message}</span>
    </small>
  )
}
