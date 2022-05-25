import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex font-sans text-white justify-center mt-4">
      <div className="flex text-xs">
        <Link href="/movies">
          <a className="mx-10">MOVIES</a>
        </Link>
        <Link href="/tv">
          <a className="mx-10">TV SHOWS</a>
        </Link>
        <Link href="/animations">
          <a className="mx-10">ANIMATIONS</a>
        </Link>
        <Link href="/dramas">
          <a className="mx-10">DRAMAS</a>
        </Link>
        <Link href="/reviews">
          <a className="mx-10">REVIEWS</a>
        </Link>
      </div>
    </nav>
  )
}