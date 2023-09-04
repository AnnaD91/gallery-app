import Link from "next/link";

export default function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link href="/art-pieces">Art-Pieces</Link>
        </li>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
      </ul>
    </>
  );
}
