import ArtPieces from "@/Components/ArtPieces";

export default function ArtPiecesPage({ data }) {
  return (
    <>
      <h1>Gallery App</h1>
      <ArtPieces data={data} />
    </>
  );
}
