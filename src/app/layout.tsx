
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import siteMeta from "../site-meta";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <title>{siteMeta.title}</title>
        <meta name="description" content={siteMeta.description} />
        <meta name="geo.region" content={siteMeta.geo.region} />
        <meta name="geo.placename" content={siteMeta.geo.placename} />
        <meta name="geo.position" content={siteMeta.geo.position} />
        <meta name="ICBM" content={siteMeta.geo.icbm} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteMeta.openGraph.title} />
        <meta property="og:description" content={siteMeta.openGraph.description} />
        <meta property="og:image" content={siteMeta.openGraph.image} />
        <meta property="og:url" content={siteMeta.openGraph.url} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
