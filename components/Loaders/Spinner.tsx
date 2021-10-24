import React from 'react'

type SpinnerColor = 'white' | 'primary'

export default function Spinner({
  className,
  color = 'primary',
}: {
  className?: string
  color?: SpinnerColor
}): JSX.Element {
  const spinnerColor = getSpinnerColor(color)

  return (
    <svg className={`animate-spin ${className}`} fill="none" viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="clip">
        <path d="M0 65C0 29.1015 29.1015 0 65 0C100.899 0 130 29.1015 130 65C130 100.899 100.899 130 65 130C29.1015 130 0 100.899 0 65ZM111 65C111 39.5946 90.4054 18.9995 65 18.9995C39.5946 18.9995 18.9995 39.5946 18.9995 65C18.9995 90.4054 39.5946 111 65 111C90.4054 111 111 90.4054 111 65Z" />
      </clipPath>
      <path
        d="M65 0H65.5C70.7467 0 75 4.2533 75 9.5V9.5C75 14.7467 70.7467 19 65.5 19H65V0Z"
        fill={`rgb(${spinnerColor})`}
      />
      <foreignObject clipPath="url(#clip)" height="130" width="130">
        <div
          style={{
            height: '100%',
            width: '100%',
            background: `conic-gradient(transparent, rgba(${spinnerColor}, .5), rgb(${spinnerColor}))`,
          }}
        />
      </foreignObject>
    </svg>
  )
}

function getSpinnerColor(color: SpinnerColor): string {
  switch (color) {
    case 'primary':
      return '254, 184, 19'

    default:
      return '255, 255, 255'
  }
}
