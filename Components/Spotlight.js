import Image from "next/image";
import React from "react";

export default function Spotlight({ data }) {
  const randomIndex = Math.floor(Math.random() * data.length);
  const spotlightPiece = data[randomIndex];

  return (
    <div>
      <Image
        src={spotlightPiece.imageSource}
        alt={spotlightPiece.artist}
        height={500}
        width={400}
      />
      <p>Artist: {spotlightPiece.artist}</p>
    </div>
  );
}
