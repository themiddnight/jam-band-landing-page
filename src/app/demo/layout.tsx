import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Demo & Tutorial - COLLAB | Learn How to Jam",
  description: "Learn how to use COLLAB - Jam Band with our comprehensive demo and tutorial guide. Try virtual instruments, voice chat, and collaborative features.",
  openGraph: {
    title: "Demo & Tutorial - COLLAB | Learn How to Jam",
    description: "Learn how to use COLLAB - Jam Band with our comprehensive demo and tutorial guide. Try virtual instruments, voice chat, and collaborative features.",
    type: "website",
    url: "https://jam-band-landing-page.vercel.app/demo",
    siteName: "COLLAB - Jam Band",
    locale: "en_US",
    images: [
      {
        url: "/images/og/cover-index.webp",
        width: 1200,
        height: 630,
        alt: "Demo & Tutorial - COLLAB | Learn How to Jam",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demo & Tutorial - COLLAB | Learn How to Jam",
    description: "Learn how to use COLLAB - Jam Band with our comprehensive demo and tutorial guide. Try virtual instruments, voice chat, and collaborative features.",
    images: ["/images/og/cover-index.webp"],
    creator: "@jam_band",
    site: "@jam_band",
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 