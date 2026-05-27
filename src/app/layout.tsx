import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "BrightSmile Dental Clinic | Your Trusted Dentist",
  description: "BrightSmile Dental Clinic offers top-quality dental care with modern technology and a caring team. Book your appointment today!",
  openGraph: {
    title: "BrightSmile Dental Clinic",
    description: "BrightSmile Dental Clinic offers top-quality dental care with modern technology and a caring team. Book your appointment today!",
    url: "https://brightsmile.example.com",
    images: [
      {
        url: "/sample-dental-team.jpg",
        width: 1200,
        height: 630,
        alt: "BrightSmile Dental Clinic Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    "geo.region": "PH",
    "geo.placename": "Manila",
    "geo.position": "14.5995;120.9842",
    "ICBM": "14.5995, 120.9842",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="geo.region" content="PH" />
        <meta name="geo.placename" content="Manila" />
        <meta name="geo.position" content="14.5995;120.9842" />
        <meta name="ICBM" content="14.5995, 120.9842" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BrightSmile Dental Clinic" />
        <meta property="og:description" content="BrightSmile Dental Clinic offers top-quality dental care with modern technology and a caring team. Book your appointment today!" />
        <meta property="og:image" content="/sample-dental-team.jpg" />
        <meta property="og:url" content="https://brightsmile.example.com" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
