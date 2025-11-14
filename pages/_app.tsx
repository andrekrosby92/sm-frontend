import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'

import 'styles/globals.css'

import Layout from 'components/Layout/Layout'
import QueryClient from 'services/ReactQuery'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={QueryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default App
