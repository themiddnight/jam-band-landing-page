'use client';

import Script from 'next/script';
import {
  HeroSection,
  FeaturesSection,
  InstrumentsSection,
  UseCasesSection,
  DetailSection,
  TechnicalRequirementsSection,
  CTASection,
  SwapFeatureSection,
} from '@/components';

export default function HomePage() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "COLLAB - Jam Band - Real-time Collaborative Music Platform",
    "description": "Create music together in real-time with virtual instruments, ultra-low latency voice chat, and synchronized metronome. Perfect for remote jam sessions, virtual music brainstorming, and collaborative music production.",
    "url": "https://jam-band-landing-page.vercel.app/",
    "mainEntity": {
      "@type": "WebApplication",
      "name": "COLLAB - Jam Band",
      "description": "Real-time collaborative music platform with virtual instruments, ultra-low latency voice chat, synchronized metronome, and step sequencer. Create music together in your browser without any installation required.",
      "applicationCategory": "MusicApplication",
      "operatingSystem": "Web Browser",
      "browserRequirements": "Requires JavaScript. Requires HTML5. Requires Web Audio API support.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "author": {
        "@type": "Person",
        "name": "Pathompong Thitithan",
        "url": "http://themiddnight-resume.vercel.app/resumes/themiddnight-dev"
      },
      "creator": {
        "@type": "Person",
        "name": "Pathompong Thitithan",
        "url": "http://themiddnight-resume.vercel.app/resumes/themiddnight-dev"
      },
      "publisher": {
        "@type": "Organization",
        "name": "COLLAB Team"
      },
      "featureList": [
        "Real-time collaborative jamming",
        "Virtual instruments (Guitar, Bass, Keyboard, Drums, Synthesizer)",
        "Ultra-low latency voice chat with WebRTC",
        "Synchronized metronome with tap tempo",
        "16-step sequencer for pattern creation",
        "Cross-platform browser compatibility",
        "No installation required",
        "Instrument swapping and role management",
        "MIDI controller support",
        "Scale and chord selection tools",
        "Room-based collaboration",
        "Real-time chat system",
        "Network diagnostics and performance monitoring"
      ],
      "screenshot": "https://jam-band-landing-page.vercel.app/images/og/cover-index.webp",
      "softwareVersion": "1.0.0",
      "datePublished": "2024-08-27",
      "dateModified": "2025-01-17",
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "ratingCount": "1"
      }
    },
    "author": {
      "@type": "Person",
      "name": "Pathompong Thitithan",
      "url": "http://themiddnight-resume.vercel.app/resumes/themiddnight-dev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "COLLAB Team"
    },
    "datePublished": "2024-08-27",
    "dateModified": "2025-01-17",
    "inLanguage": "en-US",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://jam-band-landing-page.vercel.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://jam-band-landing-page.vercel.app/about"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Demo",
          "item": "https://jam-band-landing-page.vercel.app/demo"
        }
      ]
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <HeroSection />
      <FeaturesSection />
      <SwapFeatureSection />
      <InstrumentsSection />
      <UseCasesSection />
      <DetailSection />
      <TechnicalRequirementsSection />
      <CTASection />
    </div>
  );
}
