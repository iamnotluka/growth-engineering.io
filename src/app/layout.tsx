import type { Metadata } from "next";
import { Inter, Spectral, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-mono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const SITE_URL = "https://growth-engineering.io";
const TITLE = "Growth Engineering - Advisory for eCommerce founders";
const DESCRIPTION =
  "Most founders don't have a growth problem. They have a clarity problem. We read the numbers behind your business, find what's limiting profitable scale, and give you a plan you can actually run.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "growth-engineering.io",
  authors: [{ name: "Luka" }, { name: "James" }],
  creator: "growth-engineering.io",
  publisher: "growth-engineering.io",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "growth-engineering.io",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spectral.variable} ${plexMono.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
