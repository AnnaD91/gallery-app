import React from "react";
import Spotlight from "@/Components/Spotlight";

export default function SpotlightPage({ data }) {
  console.log(data);
  return (
    <>
      <h2>Random Piece</h2>
      <Spotlight data={data} />
    </>
  );
}
