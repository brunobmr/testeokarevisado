// import "@/styles/globals.css";
import Head from "next/head";
import React, { useState, useEffect } from "react";

import GlobalStyles from "@/styles/GlobalStyles";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { queryClient } from "../services/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Loading from "@/components/Loading/Loading";

const theme = {};

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(true);

  /**
  |--------------------------------------------------
  


  |--------------------------------------------------
  */
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const Content = <Component {...pageProps} />;
  console.log("Site desenvolvido pela empresa SEVEN");
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="description"
            content="Móveis planejados para casa e escritórios."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <GlobalStyles />
        <div id="modal-root">{isLoading && <Loading />}</div>
        {Content}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
