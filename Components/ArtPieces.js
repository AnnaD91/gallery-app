import React from "react";
import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

export default function ArtPieces({ data }) {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {data.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
