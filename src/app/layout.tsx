import type { Metadata } from "next";
import { BIZ_UDPGothic } from "next/font/google";
import "./globals.css";

const bizUDPGothic = BIZ_UDPGothic({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-biz-udp-gothic',
});

export const metadata: Metadata = {
  title: "ガッコウレイヴ2025",
  icons:
    "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🏫</text></svg>",

  description: "廃校を舞台にした音楽イベント、ガッコウレイヴの公式サイトです。",
  openGraph: {
    title: "ガッコウレイヴ2025",
    description: "廃校を舞台にした音楽イベント、ガッコウレイヴの公式サイトです。",
    url: "https://gakkou-rave.com",
    siteName: "ガッコウレイヴ",
    locale: "ja_JP",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={bizUDPGothic.variable}>
      <body className={bizUDPGothic.className}>
        {children}
      </body>
    </html>
  );
}
