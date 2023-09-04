import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import React from "react";

/* const fetcher = (url) => fetch(url).then((response) => response.json()); */

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <SWRConfig value={{ fetcher }}> */}
      <GlobalStyle />
      <Component {...pageProps} />
      {/*    </SWRConfig> */}
    </>
  );
}
