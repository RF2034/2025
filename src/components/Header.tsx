import Link from "next/link";
import RegistrationButton from "./RegistrationButton";

export default function Header() {
  const navItems = [
    { href: "/", label: "ホーム", icon: "🏠" },
    { href: "/about", label: "概要", icon: "📋" },
    { href: "/last-year", label: "昨年の様子", icon: "📸" },
    { href: "/faq", label: "FAQ", icon: "❓" }
  ];

  return (
    <header className="navbar bg-base-200 px-2 md:px-4">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 p-2 border"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-base py-3">
                  {item.icon} {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="px-4">{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <RegistrationButton size="sm" />
      </div>
    </header>
  );
}
