import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/about" className="link link-hover">概要</Link>
        <Link href="/last-year" className="link link-hover">昨年の様子</Link>
        <Link href="/faq" className="link link-hover">FAQ</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="#" className="link link-hover">Twitter</a>
          <a href="#" className="link link-hover">Instagram</a>
          <a href="#" className="link link-hover">Facebook</a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - ガッコウレイヴ実行委員会</p>
      </aside>
    </footer>
  );
}
