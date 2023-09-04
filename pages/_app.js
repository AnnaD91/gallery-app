import GlobalStyle from "../styles";
import useSWR from "swr";
import React, { Children } from "react";
import Layout from "@/Components/Layout";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} data={data} />
      <Layout />
    </>
  );
}
