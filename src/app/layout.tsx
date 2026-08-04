import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { ThemeScript } from "@/components/theme-script";
import { basePath } from "@/lib/base-path";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = `https://phirouz.github.io${basePath}/`;
const title = "Seyed-Parsa Firouzabadi | Portfolio";
const description =
  "Electrical Engineering student at York University's Lassonde School of Engineering, building AI agents and automation systems as an AI Solutions Developer at Aecon Group.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Seyed-Parsa Firouzabadi",
  },
  description,
  icons: {
    icon: `${basePath}/icon.png`,
    apple: `${basePath}/apple-icon.png`,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Seyed-Parsa Firouzabadi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
