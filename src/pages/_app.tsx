import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "src/theme";
import Layout from "src/components/layout/Layout";
import { useCreateStore, StoreProvider } from "src/store";

function MyApp({ Component, pageProps }: AppProps) {
  const createStore = useCreateStore(pageProps.initialZustandState);

  return (
    <StoreProvider createStore={createStore}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default MyApp;
