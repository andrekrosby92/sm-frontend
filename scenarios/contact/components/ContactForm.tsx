import React, { useCallback, useEffect, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import { useMutation } from 'react-query'

import ErrorMessage from 'components/Inputs/Messages/ErrorMessage'
import Input from 'components/Inputs/Input'
import Spinner from 'components/Loaders/Spinner'
import SuccessMessage from 'components/Messages/SuccessMessage'
import Textarea from 'components/Inputs/Textarea'
import { isValidEmailAddress } from 'utils/helpers'

interface FormFields {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name: string | null
  email: string | null
  message: string | null
}

interface TData {
  data: {
    success: true
  }
}

interface TError {
  response?: {
    data: {
      error: string
    }
  }
}

interface TVariables {
  fields: FormFields
  reCaptchaToken: string
}

const initialFields: FormFields = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}

const initialErrors: FormErrors = {
  name: null,
  email: null,
  message: null,
}

export default function ContactForm(): JSX.Element {
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState(initialErrors)

  const recaptchaRef = React.createRef<ReCAPTCHA>()
  const [reCaptchaToken, setReCaptchaToken] = useState<string | null>(null)
  const [reCaptchaError, setReCaptchaError] = useState<string | null>(null)
  const [didAttemptSubmit, setDidAttemptSubmit] = useState(false)

  const apiCall = useMutation<TData, TError, TVariables>((data) => {
    return axios.post('/api/contact', data)
  })

  const resetForm = useCallback(() => {
    setFields(initialFields)
    setDidAttemptSubmit(false)
    recaptchaRef.current?.reset()
  }, [recaptchaRef])

  const resetApiCall = useCallback(() => {
    setTimeout(() => apiCall.reset(), 4000)
  }, [apiCall])

  useEffect(() => {
    if (apiCall.isSuccess) {
      resetForm()
      resetApiCall()
    }
  }, [apiCall.isSuccess, resetForm, resetApiCall])

  const validateFields = useCallback((fields: FormFields): FormErrors => {
    const errors: FormErrors = {
      name: null,
      email: null,
      message: null,
    }

    if (fields.name.trim().length === 0) {
      errors.name = 'Feltet er påkrevd.'
    }

    if (fields.email.trim().length === 0 || !isValidEmailAddress(fields.email)) {
      errors.email = 'Oppgi en gyldig e-post.'
    }

    if (fields.message.trim().length === 0) {
      errors.message = 'Feltet er påkrevd.'
    }

    return errors
  }, [])

  useEffect(() => {
    if (didAttemptSubmit) {
      // Continually validate the fields
      const formErrors = validateFields(fields)
      
      setErrors(formErrors)
    }
  }, [didAttemptSubmit, validateFields, fields])

  const setField = (key: keyof typeof fields, value: string): void => {
    setFields((prevState) => ({ ...prevState, [key]: value }))
  }

  const onReCaptchaChange = (token: string | null): void => {
    if (token === null) {
      setReCaptchaToken(null)
    }

    if (typeof token === 'string') {
      setReCaptchaToken(token)
      setReCaptchaError(null)
    }
  }

  const handleOnSubmit = (event: React.FormEvent): void => {
    event.preventDefault()

    if (!didAttemptSubmit) {
      setDidAttemptSubmit(true)
    }

    const formErrors = validateFields(fields)

    if (Object.values(formErrors).some((v) => typeof v === 'string')) {
      return void (() => {
        setErrors(formErrors)
      })()
    }

    if (reCaptchaToken === null) {
      return void (() => {
        setReCaptchaError('reCAPTCHA må fullføres.')
      })()
    }

    if (!apiCall.isLoading) {
      apiCall.mutate({
        fields,
        reCaptchaToken,
      })
    }
  }

  return (
    <form className="w-full space-y-3" noValidate onSubmit={handleOnSubmit}>
      <div className="grid md:grid-cols-7 gap-3">
        <div className="md:col-span-3">
          <Input
            autoComplete="name"
            disabled={apiCall.isSuccess}
            label="Navn"
            messageError={errors.name}
            name="name"
            onChange={(value) => setField('name', value)}
            type="text"
            value={fields.name}
          />
        </div>

        <div className="md:col-span-4">
          <Input
            autoComplete="organization"
            disabled={apiCall.isSuccess}
            label="Firma"
            name="company"
            onChange={(value) => setField('company', value)}
            type="text"
            value={fields.company}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-7 gap-3">
        <div className="md:col-span-4">
          <Input
            autoComplete="email"
            disabled={apiCall.isSuccess}
            label="E-post"
            messageError={errors.email}
            name="email"
            onChange={(value) => setField('email', value)}
            type="email"
            value={fields.email}
          />
        </div>

        <div className="md:col-span-3">
          <Input
            autoComplete="tel"
            disabled={apiCall.isSuccess}
            label="Telefonnummer"
            name="phone"
            onChange={(value) => setField('phone', value)}
            type="text"
            value={fields.phone}
          />
        </div>
      </div>

      <Textarea
        autoComplete="off"
        disabled={apiCall.isSuccess}
        label="Melding"
        messageError={errors.message}
        name="message"
        onChange={(value) => setField('message', value)}
        value={fields.message}
      />

      {apiCall.isSuccess && (
        <SuccessMessage header="Takk for meldingen!" message="Vi vil svare deg så raskt som mulig." />
      )}

      {apiCall.isError && typeof apiCall.error?.response?.data !== 'undefined' && (
        <div className="mt-0.5">
          <ErrorMessage message={apiCall.error?.response?.data.error} />
        </div>
      )}

      <div>
        <ReCAPTCHA
          onChange={onReCaptchaChange}
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
        />

        {typeof reCaptchaError === 'string' && (
          <div className="mt-0.5">
            <ErrorMessage message={reCaptchaError} />
          </div>
        )}
      </div>

      <button className="rounded-lg bg-primary-darker text-primary" disabled={apiCall.isSuccess} type="submit">
        <span className="px-3 py-2.5 flex items-center justify-center">
          {apiCall.isLoading ? <Spinner className="h-6 w-6" /> : 'Send melding'}
        </span>
      </button>
    </form>
  )
}
