import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="nb">
        <Head>
          <meta
            content="Skiltmakeren leverer skilt, skilter, buss og bil dekor med personlig service og med høyeste kvalitet."
            name="description"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
