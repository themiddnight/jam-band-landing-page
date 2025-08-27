import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://jam-band-landing-page.vercel.app'),
  title: "COLLAB - Jam Band | Real-time Collaborative Jamming",
  description: "Create music together in real-time with virtual instruments, ultra-low latency voice chat, and synchronized metronome. Perfect for remote jam sessions and virtual music brainstorming.",
  keywords: "music collaboration, virtual instruments, real-time music, jam session, online music, web audio, virtual jamming, music production, collaborative music, remote music, digital audio workstation, DAW, music software, online collaboration, music technology, web-based music, browser music, real-time audio, music streaming, virtual band, online rehearsal, music education, music learning, interactive music, social music, creative collaboration, music innovation, cross-platform music, accessible music, inclusive music, music democratization",
  authors: [{ name: "COLLAB Team" }],
  creator: "COLLAB Team",
  publisher: "COLLAB",
  category: "Music Application",
  classification: "Music Software",
  other: {
    "application-name": "COLLAB - Jam Band",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "COLLAB",
    "msapplication-TileColor": "#667eea",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#667eea",
  },
  openGraph: {
    title: "COLLAB - Jam Band | Real-time Collaborative Jamming",
    description: "Create music together in real-time with virtual instruments, ultra-low latency voice chat, and synchronized metronome. Perfect for remote jam sessions and virtual music brainstorming.",
    type: "website",
    url: "https://jam-band-landing-page.vercel.app/",
    siteName: "COLLAB - Jam Band",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "COLLAB - Jam Band | Real-time Collaborative Jamming",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COLLAB - Jam Band | Real-time Collaborative Jamming",
    description: "Create music together in real-time with virtual instruments, ultra-low latency voice chat, and synchronized metronome.",
    images: ["/twitter-image.webp"],
    creator: "@jam_band",
    site: "@jam_band",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon-32x32.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://jam-band-landing-page.vercel.app/",
    languages: {
      "en-US": "https://jam-band-landing-page.vercel.app/",
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "COLLAB",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
