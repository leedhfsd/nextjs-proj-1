import Link from "next/link"
export default function Header() {
  return (
    <div className="flex font-sans text-xs text-white justify-between items-center py-4">
      <div className="flex ml-6">
        <Link href="">
          <a className="mx-2">United States</a>
        </Link>
          <h1 className="mx-2">English</h1>
        <Link href="">
          <a className="mx-2">Client Services</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a className=" text-white text-6xl my-4">WATCHA</a>
        </Link>
      </div>
      <div className="flex">
        <Link href="">
          <a className="mr-8">Sign in</a>
        </Link>
        <Link href="">
          <a className="mr-24">Login</a>
        </Link>
      </div>
    </div>
  )
}
