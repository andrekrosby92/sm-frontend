import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import NextApp from 'next/app'
import { QueryClientProvider } from 'react-query'

import 'styles/globals.css'

import Layout from 'components/Layout/Layout'
import QueryClient from 'services/ReactQuery'
import Sanity from 'services/Sanity'
import type { CompanyServiceMinimal } from 'types/company-service'

interface ExtendedAppProps extends AppProps {
  links: CompanyServiceMinimal[]
}

function App({ Component, pageProps, links }: ExtendedAppProps): JSX.Element {
  return (
    <QueryClientProvider client={QueryClient}>
      <Layout links={links}>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

App.getInitialProps = async (
  context: AppContext,
): Promise<{ pageProps: AppInitialProps['pageProps']; links: CompanyServiceMinimal[] }> => {
  const appProps = await NextApp.getInitialProps(context)

  return {
    ...appProps,
    links: await Sanity.getCompanyServicesMinimalList(),
  }
}

export default App
