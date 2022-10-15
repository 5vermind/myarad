import type { AppProps } from "next/app"
import { NextUIProvider } from "@nextui-org/react"
import { Layout } from "src/components/layout/Layout"
import { SWRConfig } from "swr"
import { get } from "src/lib/fetcher"
import { StoreProvider, useCreateStore } from "src/store/zustandProvider"
import "src/style/global.css"
import { theme } from "src/style/theme"
import { DefaultSeo } from "next-seo"
import { DEFAULT_SEO } from "src/lib/seo"
import { Store } from "src/types/store"

const MyApp = ({
  Component,
  pageProps,
}: AppProps<{ initialZustandState: Store }>) => {
  const createStore = useCreateStore(pageProps.initialZustandState)

  return (
    <StoreProvider createStore={createStore}>
      <NextUIProvider theme={theme}>
        <SWRConfig
          value={{
            fetcher: get,
            revalidateOnFocus: false,
            suspense: true,
          }}
        >
          <DefaultSeo {...DEFAULT_SEO} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </NextUIProvider>
    </StoreProvider>
  )
}

export default MyApp

export const getServerSideProps = async () => ({
  props: {
    initialZustandState: {
      mabu: {
        selectedId: "",
      },
    },
  },
})
