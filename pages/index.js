import useSWR from "swr";
//import { useState, useEffect } from "react";
import ArtPieces from "@/Components/ArtPieces";
import React from "react";
import Spotlight from "@/Components/Spotlight";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  console.log(data);
  return (
    <>
      <h1>Gallery App</h1>
      <ArtPieces data={data} />
      <h2>Random Piece</h2>
      <Spotlight data={data} />
    </>
  );
}
