import Link from "next/link";

export default function Header() {
  return (
    <header className="navbar bg-base-100 shadow-lg px-2 md:px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-square lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 p-2 shadow-xl border"
          >
            <li><Link href="/about" className="text-base py-3">📋 概要</Link></li>
            <li><Link href="/last-year" className="text-base py-3">📸 昨年の様子</Link></li>
            <li><Link href="/faq" className="text-base py-3">❓ FAQ</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-lg md:text-xl font-bold">
          🏫 <span className="hidden xs:inline">ガッコウレイヴ</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li><Link href="/about" className="px-4">概要</Link></li>
          <li><Link href="/last-year" className="px-4">昨年の様子</Link></li>
          <li><Link href="/faq" className="px-4">FAQ</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSesYwQXXWNX90l2bt0NdJZjcf1kyhF4QQneQpIcjQR1gqWsYQ/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm md:btn-md"
        >
          <span className="">参加登録</span>
        </a>
      </div>
    </header>
  );
}
