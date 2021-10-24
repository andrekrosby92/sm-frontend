import React from 'react'

export default function IconEnvelopeAlt({ className }: { className?: string }): JSX.Element {
  return (
    <svg className={className} fill="none" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 6.66655L14 1.89722V10.6665C14 11.0349 13.7017 11.3332 13.3333 11.3332H2V6.66655Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M0 1.89722V10.6665C0 11.0349 0.298333 11.3332 0.666667 11.3332H13.3333C13.497 11.3332 13.645 11.2719 13.761 11.1739L0 1.89722Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M0 1.66663H14V2.23063L8.22667 6.71396C7.505 7.27429 6.495 7.27429 5.77333 6.71396L0 2.23063V1.66663Z"
        fill="black"
        opacity="0.05"
      />
      <path
        d="M0 1.5H14V2.064L7.98867 6.43467C7.40133 6.86933 6.59867 6.86933 6.01133 6.43467L0 2.064V1.5Z"
        fill="black"
        opacity="0.07"
      />
      <path
        d="M0.666667 0.666626H13.3333C13.7017 0.666626 14 0.964959 14 1.33329V1.89729L7.75067 6.15529C7.29767 6.46396 6.702 6.46396 6.24933 6.15529L0 1.89729V1.33329C0 0.964959 0.298333 0.666626 0.666667 0.666626Z"
        fill="#ffdc89"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear"
          x1="7.24333"
          x2="10.216"
          y1="4.63055"
          y2="12.4289"
        >
          <stop stopColor="#feb813" />
          <stop offset="0.999" stopColor="#7f5c0a" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear"
          x1="0.996"
          x2="26.8333"
          y1="0.315884"
          y2="26.1665"
        >
          <stop stopColor="#feb813" />
          <stop offset="1" stopColor="#fff8e7" />
        </linearGradient>
      </defs>
    </svg>
  )
}
