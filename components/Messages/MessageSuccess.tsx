import React from 'react'

import MessageBase from './MessageBase'

export default function MessageSuccess(props: { header: string; message: string }): JSX.Element {
  return (
    <MessageBase {...props}>
      <svg className="w-14 h-14 flex-shrink-0" fill="none" viewBox="0 0 452 452" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M226 451.871C350.744 451.871 451.869 350.746 451.869 226.002C451.869 101.258 350.744 0.132812 226 0.132812C101.256 0.132812 0.130859 101.258 0.130859 226.002C0.130859 350.746 101.256 451.871 226 451.871Z"
          fill="#42D000"
        />
        <path
          d="M125.202 231.489L192.937 299.271L326.798 152.727"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="35"
        />
      </svg>
    </MessageBase>
  )
}
