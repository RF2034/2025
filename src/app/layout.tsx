import type { Metadata } from "next";
import "./globals.css";


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
    images: [
      {
        url: "https://twemoji.maxcdn.com/v/latest/svg/1f3eb.svg",
        width: 1200,
        height: 630,
        alt: "ガッコウレイヴのOG画像",
      },
    ],
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
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
