import Head from 'next/head'

export default function SEO({
  canonicalUrl,
  description,
  descriptionFacebook,
  descriptionTwitter,
  imageSource,
  title,
}: {
  canonicalUrl?: string
  description: string
  descriptionFacebook: string
  descriptionTwitter: string
  imageSource: string
  title: string
}): JSX.Element {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta content={description} name="description" />
      <link href={canonicalUrl} rel="canonical" />

      {/* Open Graph / Facebook */}
      <meta content="website" property="og:type" />
      <meta content={canonicalUrl} property="og:url" />
      <meta content={title} property="og:title" />
      <meta content={descriptionFacebook} property="og:description" />
      <meta content={imageSource} property="og:image" />

      {/* Twitter */}
      <meta content="summary_large_image" property="twitter:card" />
      <meta content={canonicalUrl} property="twitter:url" />
      <meta content={title} property="twitter:title" />
      <meta content={descriptionTwitter} property="twitter:description" />
      <meta content={imageSource} property="twitter:image" />
    </Head>
  )
}
