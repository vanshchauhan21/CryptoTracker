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
  title: "Crypto Tracker",
  description: "Track cryptocurrency prices and opportunities with our comprehensive crypto tracking platform",
  keywords: "cryptocurrency, crypto tracker, bitcoin, ethereum, crypto prices, trading opportunities",
  authors: [{ name: "Crypto Tracker Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Crypto Tracker",
    description: "Track cryptocurrency prices and opportunities with our comprehensive crypto tracking platform",
    url: "https://crypto-tracker-kappa-ebon.vercel.app/",
    siteName: "Crypto Tracker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Tracker",
    description: "Track cryptocurrency prices and opportunities with our comprehensive crypto tracking platform",
  },
  alternates: {
    canonical: "https://crypto-tracker-kappa-ebon.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
