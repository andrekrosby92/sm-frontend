import type { NextApiRequest, NextApiResponse } from 'next'
import { ServerClient } from 'postmark'

import { isObject, isString } from 'utils/helpers';

const client = new ServerClient(process.env.POSTMARK_SERVER_TOKEN)

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const fields = req.body.fields;
  const reCaptchaToken = req.body.reCaptchaToken;

  if (!isObject(fields)) {
    return res.status(400).json({ error: 'Mangler `fields`.' })
  }

  if (!isString(reCaptchaToken)) {
    return res.status(400).json({ error: 'Mangler `reCaptchaToken`.' })
  }

  // Validate form data
  const invalidFields = findInvalidFields(fields)

  if (invalidFields.length > 0) {
    return res.status(400).json({ error: `Mangler påkrevde felt: ${invalidFields.join(', ')}.` })
  }

  // Validate reCAPTCHA
  const reCaptchaRes = await verifyReCaptcha(reCaptchaToken)

  if (!reCaptchaRes.success) {
    return res.status(403).json({ error: 'Utløpt eller ugyldig reCAPTCHA.' })
  }

  try {
    await client.sendEmailWithTemplate({
      From: 'tech@skiltmakeren.no',
      To: 'stian@skiltmakeren.no',
      TemplateId: 25640733,
      TemplateModel: {
        name: req.body.fields.name,
        company: req.body.fields.company,
        email: req.body.fields.email,
        phone_number: req.body.fields.phone,
        message: req.body.fields.message,
      },
    })

    return res.status(200).json({ success: true })
  } catch {
    return res.status(500).json({ error: 'Kunne ikke sende melding' })
  }
}

function findInvalidFields(fields: Record<string, unknown>): string[] {
  const invalidFields: string[] = [];

  function isInvalidField(v: unknown): boolean {
    return typeof v !== "string" || v.trim().length === 0;
  }

  if (isInvalidField(fields.name)) {
    invalidFields.push('name')
  }

  if (isInvalidField(fields.email)) {
    invalidFields.push('email')
  }

  if (isInvalidField(fields.message)) {
    invalidFields.push('message')
  }

  return invalidFields
}


interface ReCaptchaResponse {
  success: boolean
  challenge_ts?: string
  hostname?: string
  'error-codes'?: string[]
}

async function verifyReCaptcha(token: string): Promise<ReCaptchaResponse> {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      secret: process.env.GOOGLE_RECAPTCHA_SECRET_KEY,
      response: token,
    }),
  })

  return response.json()
}
