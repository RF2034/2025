import { SITE_2026 } from "@/constants/2026-site";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-2026-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_2026.meta.title,
  description: SITE_2026.meta.description,
  openGraph: {
    title: SITE_2026.meta.title,
    description: SITE_2026.meta.description,
    locale: "ja_JP",
    type: "website",
  },
};

export default function Layout2026({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* next/font に未収録のため link で読み込み（globals の @import は Tailwind 展開後に順序違反になる） */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font -- LINE Seed JP は Google Fonts のみ提供 */}
      <link
        href="https://fonts.googleapis.com/css2?family=LINE+Seed+JP:wght@400;700&family=Stick&display=swap"
        rel="stylesheet"
      />
      <div className={`site-2026 ${display.variable}`}>{children}</div>
    </>
  );
}
