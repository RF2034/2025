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
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%' y='50%' style='dominant-baseline:central;text-anchor:middle;font-size:90px;'>🏫</text></svg>",
        width: 100,
        height: 100,
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
