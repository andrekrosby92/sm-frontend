import type { NextApiRequest, NextApiResponse } from 'next'
import { ServerClient } from 'postmark'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (!req.body.name) {
    res.status(404).json({ error: 'No name' })
  }

  if (!req.body.email) {
    res.status(404).json({ error: 'No email' })
  }

  if (!req.body.message) {
    res.status(404).json({ error: 'No message' })
  }

  const client = new ServerClient(process.env.POSTMARK_SERVER_TOKEN)

  try {
    await client.sendEmailWithTemplate({
      From: 'tech@skiltmakeren.no',
      To: 'tech@skiltmakeren.no',
      TemplateId: 25640733,
      TemplateModel: {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        company: req.body.company,
        phone_number: req.body.company,
      },
    })

    res.status(200).json({ success: true })
  } catch (error) {
    res.status(404).json({ error: 'Failed to send email', message: error })
  }
}
