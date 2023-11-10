import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '@/lib/client'
import { SessionProvider } from 'next-auth/react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import { DefaultTheme, ThemeProvider } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}
export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Head>
          <title>Movie Search</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  )
}
