import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Feedback - COLLAB | Help Us Improve",
  description: "Share your feedback, report bugs, or request new features for COLLAB. Your input helps us create a better music collaboration experience for all musicians.",
  openGraph: {
    title: "Feedback - COLLAB | Help Us Improve",
    description: "Share your feedback, report bugs, or request new features for COLLAB. Your input helps us create a better music collaboration experience for all musicians.",
    type: "website",
    url: "https://jam-band-landing-page.vercel.app/feedback",
    siteName: "COLLAB - Jam Band",
    locale: "en_US",
    images: [
      {
        url: "/images/og/cover-feedback.webp",
        width: 1200,
        height: 630,
        alt: "Feedback - COLLAB | Help Us Improve",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feedback - COLLAB | Help Us Improve",
    description: "Share your feedback, report bugs, or request new features for COLLAB. Your input helps us create a better music collaboration experience for all musicians.",
    images: ["/images/og/cover-feedback.webp"],
    creator: "@jam_band",
    site: "@jam_band",
  },
};

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 