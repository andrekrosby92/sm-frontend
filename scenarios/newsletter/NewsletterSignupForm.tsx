import axios from 'axios'
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'

import Input from 'components/Inputs/Input'
import MessageSuccess from 'components/Messages/MessageSuccess'
import Spinner from 'components/Loaders/Spinner'
import { isValidEmailAddress } from 'utils/helpers'

export default function NewsletterSignupForm(): JSX.Element {
  const [didAttemptToSubmit, setDidAttemptToSubmit] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState({ email: '' })

  interface ResponseData {
    status: number
  }

  interface ResponseError {
    response: { data: { email: string[] } } | undefined
  }

  const mutation = useMutation<ResponseData, ResponseError, { email: string }>((data) => {
    return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/newsletter/subscribers/`, data)
  })

  useEffect(() => {
    if (didAttemptToSubmit) {
      if (!isValidEmailAddress(email)) {
        setError({ email: 'Oppgi en gyldig e-post.' })
      } else {
        setError({ email: '' })
      }
    }
  }, [didAttemptToSubmit, email])

  useEffect(() => {
    if (mutation.isSuccess) {
      setEmail('')
      setDidAttemptToSubmit(false)
    }

    if (mutation.isError) {
      setError({ email: mutation.error?.response?.data.email[0] ?? 'Noe gikk galt' })
    }
  }, [mutation.error?.response?.data.email, mutation.isError, mutation.isSuccess])

  const handleOnSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    setError({ email: '' })

    if (!didAttemptToSubmit) {
      setDidAttemptToSubmit(true)
    }

    if (!isValidEmailAddress(email)) {
      setError({ email: 'Oppgi en gyldig e-post.' })
      return
    }

    if (!mutation.isLoading) {
      mutation.mutate({ email })
    }
  }

  const handleOnChange = (value: string): void => {
    if (didAttemptToSubmit) mutation.reset()
    setEmail(value)
  }

  return (
    <div className="space-y-1 max-w-sm mx-auto">
      <span className="font-light">Ønsker du å få med deg siste nytt fra Skiltmakeren?</span>
      <form className="space-y-2" noValidate onSubmit={handleOnSubmit}>
        <Input
          autoComplete="email"
          label="E-post"
          messageError={error.email}
          name="newsletter-signup-email"
          onChange={handleOnChange}
          type="email"
          value={email}
        />

        {mutation.isSuccess && (
          <MessageSuccess header="Du er nå påmeldt!" message="Takk for at du viser interesse i Skiltmakeren AS." />
        )}

        <button className="px-3 py-2.5 rounded-lg bg-primary-darker text-primary">
          {mutation.isLoading ? <Spinner className="h-6 w-6" /> : 'Ja, meld meg på nyhetsbrevet!'}
        </button>
      </form>
    </div>
  )
}
