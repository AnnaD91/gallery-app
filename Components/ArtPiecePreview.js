import React from "react";
//import styled  from "styled-components"
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <Image src={image} alt={title} height={500} width={400} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
    </div>
  );
}
