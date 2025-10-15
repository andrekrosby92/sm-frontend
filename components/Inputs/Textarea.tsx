import React, { useState } from 'react'

import FloatingLabel from './Labels/FloatingLabel'
import ErrorMessage from './Messages/ErrorMessage'

export default function Textarea({
  autoComplete,
  disabled = false,
  label,
  messageError,
  name,
  onChange,
  value,
}: {
  autoComplete: string
  disabled?: boolean
  label: string
  messageError?: string | null | undefined
  name: string
  onChange: (value: string) => void
  value: string
}): JSX.Element {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="space-y-1.5">
      <div className={`relative rounded-lg ${messageError ? 'bg-[#FFF8F6]' : 'bg-white'}`}>
        <FloatingLabel htmlFor={name} isError={Boolean(messageError)} shouldTranslate={isFocused || Boolean(value)}>
          {label}
        </FloatingLabel>
        <textarea
          autoComplete={autoComplete}
          className={
            'w-full block px-3 pt-6 pb-2 rounded-lg bg-transparent font-light appearance-none ' +
            `ring-inset ring-1 focus:ring-2 focus:outline-none ` +
            `${messageError ? 'focus:ring-red-600' : 'focus:ring-black'} ` +
            `${messageError ? 'ring-red-600' : 'ring-gray-300'}`
          }
          disabled={disabled}
          id={name}
          name={name}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={(isFocused && !value) || messageError ? label : ''}
          rows={5}
          value={value}
        />
      </div>

      <ErrorMessage message={messageError} />
    </div>
  )
}
