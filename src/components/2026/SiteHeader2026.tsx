"use client";

import { SITE_2026 } from "@/constants/2026-site";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteHeader2026() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopNavClass = scrolled
    ? "site-header-2026 site-header-2026--scrolled hidden lg:flex fixed top-0 left-0 right-0 z-50"
    : "site-header-2026 hidden lg:flex fixed top-0 left-0 right-0 z-50";

  return (
    <>
      {/* PC: 固定ヘッダー（モバイルでは非表示・レイアウト占有なし） */}
      <header className={desktopNavClass}>
        <div className="site-header-2026__inner">
          <Link href="/2026#top" className="site-header-2026__logo font-display-en">
            {SITE_2026.hero.titleJa}
          </Link>
          <nav className="site-header-2026__nav font-display-en" aria-label="ページ内">
            <ul className="flex flex-wrap items-center justify-end gap-6">
              {SITE_2026.nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.labelEn}</a>
                </li>
              ))}
              <li>
                <Link
                  href={SITE_2026.lastYear.siteHref}
                  title={SITE_2026.lastYear.label}
                >
                  {SITE_2026.lastYear.navLabel}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* モバイル: 非固定・ハンバーガー（design: スマホは非固定ナビ） */}
      <header className="site-header-2026 site-header-2026--mobile lg:hidden relative z-40 w-full border-b border-transparent">
        <div className="site-header-2026__inner site-header-2026__inner--mobile">
          <Link href="/2026#top" className="site-header-2026__logo font-display-en">
            {SITE_2026.hero.titleJa}
          </Link>
          <button
            type="button"
            className="site-header-2026__toggle"
            aria-expanded={open}
            aria-controls="mobile-nav-2026"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">メニュー</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-7 bg-current" />
              <span className="block h-0.5 w-7 bg-current" />
              <span className="block h-0.5 w-7 bg-current" />
            </span>
          </button>
        </div>
        {open && (
          <nav
            id="mobile-nav-2026"
            className="site-header-2026__dropdown font-display-en"
            aria-label="ページ内"
          >
            <ul className="flex flex-col gap-3 px-4 pb-4">
              {SITE_2026.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.labelEn}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href={SITE_2026.lastYear.siteHref}
                  title={SITE_2026.lastYear.label}
                  onClick={() => setOpen(false)}
                >
                  {SITE_2026.lastYear.navLabel}
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
