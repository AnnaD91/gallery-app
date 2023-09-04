import GlobalStyle from "../styles";
import useSWR from "swr";
import React from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} data={data} />
    </>
  );
}
