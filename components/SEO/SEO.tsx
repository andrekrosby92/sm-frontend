import Head from 'next/head'

export default function SEO({
  description,
  descriptionFacebook,
  descriptionTwitter,
  metaImage,
  title,
  url,
}: {
  description: string
  descriptionFacebook: string
  descriptionTwitter: string
  metaImage: string
  title: string
  url: string
}): JSX.Element {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta content={description} name="description" />
      <link href={url} rel="canonical" />

      {/* Open Graph / Facebook */}
      <meta content="website" property="og:type" />
      <meta content={url} property="og:url" />
      <meta content={title} property="og:title" />
      <meta content={descriptionFacebook} property="og:description" />
      <meta content={metaImage} property="og:image" />

      {/* Twitter */}
      <meta content="summary_large_image" property="twitter:card" />
      <meta content={url} property="twitter:url" />
      <meta content={title} property="twitter:title" />
      <meta content={descriptionTwitter} property="twitter:description" />
      <meta content={metaImage} property="twitter:image" />
    </Head>
  )
}
