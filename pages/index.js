import useSWR from "swr";
import { useState, useEffect } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  /* const { data, isLoading } = useSWR(
    page ? `https://example-apis.vercel.app/api/art` : null,
    { revalidateIfStale: false }
  ); */
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  /*   if (isLoading || !data) {
    return "Loading...";
  } */

  const pieces = data;
  console.log(data);

  return (
    <>
      <h1>Gallery App</h1>
      <div></div>
    </>
  );
}

function Artpieces({ pieces }) {
  return (
    <>
      <ul key={pieces.slug}>
        <li>
          image={pieces.image}
          title={pieces.name}
          artist={pieces.artist}
        </li>
      </ul>
    </>
  );
}
