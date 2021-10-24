import React, { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { useMutation } from 'react-query'

import Input from 'components/Inputs/Input'
import MessageSuccess from 'components/Messages/MessageSuccess'
import Spinner from 'components/Loaders/Spinner'
import Textarea from 'components/Inputs/Textarea'
import { isValidEmailAddress, pick } from 'utils/helpers'

const initialState = {
  company: '',
  email: '',
  message: '',
  name: '',
  phone_number: '',
}

export default function ContactForm(): JSX.Element {
  const [didAttemptToSubmit, setDidAttemptToSubmit] = useState(false)
  const [fields, setFields] = useState(initialState)
  const requiredFields = useMemo(() => pick(fields, 'email', 'message', 'name'), [fields])

  type FormErrors<T> = {
    [key in keyof typeof requiredFields]?: T
  }

  const [errors, setErrors] = useState({} as FormErrors<string>)

  interface ResponseData {
    data: { success: true }
  }

  interface ResponseError {
    response: { data: FormErrors<string[]> } | undefined
  }

  const mutation = useMutation<ResponseData, ResponseError, typeof fields>((data) => {
    return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/submit-contact-form/`, data)
  })

  const validateFields = useCallback((fields: typeof requiredFields): FormErrors<string> => {
    return Object.entries(fields).reduce((acc, [key, value]) => {
      if (value.trim().length === 0) {
        return { ...acc, [key]: 'Feltet er påkrevd.' }
      } else if (key === 'email' && !isValidEmailAddress(value)) {
        return { ...acc, [key]: 'Vennligst oppgi en gyldig e-post.' }
      } else {
        return acc
      }
    }, {})
  }, [])

  useEffect(() => {
    if (didAttemptToSubmit) {
      setErrors(validateFields(requiredFields))
    }
  }, [didAttemptToSubmit, requiredFields, validateFields])

  useEffect(() => {
    if (mutation.isSuccess) {
      setFields(initialState)
      setDidAttemptToSubmit(false)
    }

    if (mutation.isError) {
      const data = mutation.error?.response?.data

      setErrors((prevState) => ({
        ...prevState,
        email: data?.email?.[0] ?? 'Noe gikk galt',
        message: data?.message?.[0] ?? 'Noe gikk galt',
        name: data?.name?.[0] ?? 'Noe gikk galt',
      }))
    }
  }, [mutation.error?.response?.data, mutation.isError, mutation.isSuccess])

  const handleOnSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    const validationErrors = validateFields(requiredFields)

    if (!didAttemptToSubmit) {
      setDidAttemptToSubmit(true)
    }

    if (Object.entries(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    if (!mutation.isLoading) {
      mutation.mutate(fields)
    }
  }

  return (
    <form className="w-full space-y-3" noValidate onSubmit={handleOnSubmit}>
      <div className="grid md:grid-cols-7 gap-3">
        <div className="md:col-span-3">
          <Input
            autoComplete="name"
            label="Navn"
            messageError={errors.name}
            name="name"
            onChange={(value) => setFields((prevState) => ({ ...prevState, name: value }))}
            type="text"
            value={fields.name}
          />
        </div>
        <div className="md:col-span-4">
          <Input
            autoComplete="organization"
            label="Firma"
            name="company"
            onChange={(value) => setFields((prevState) => ({ ...prevState, company: value }))}
            type="text"
            value={fields.company}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-7 gap-3">
        <div className="md:col-span-4">
          <Input
            autoComplete="email"
            label="E-post"
            messageError={errors.email}
            name="email"
            onChange={(value) => setFields((prevState) => ({ ...prevState, email: value }))}
            type="email"
            value={fields.email}
          />
        </div>
        <div className="md:col-span-3">
          <Input
            autoComplete="tel"
            label="Telefonnummer"
            name="phone_number"
            onChange={(value) => setFields((prevState) => ({ ...prevState, phone_number: value }))}
            type="text"
            value={fields.phone_number}
          />
        </div>
      </div>

      <Textarea
        autoComplete="off"
        label="Melding"
        messageError={errors.message}
        name="message"
        onChange={(value) => setFields((prevState) => ({ ...prevState, message: value }))}
        value={fields.message}
      />

      {mutation.isSuccess && (
        <MessageSuccess
          header="Takk for meldingen!"
          message="Vi setter pris på forespørselen og vil svare deg så raskt som mulig."
        />
      )}

      <button
        className="px-3 py-2.5 rounded-lg bg-primary-darker text-primary flex items-center justify-center"
        type="submit"
      >
        {mutation.isLoading ? <Spinner className="h-6 w-6" /> : 'Send melding'}
      </button>
    </form>
  )
}
