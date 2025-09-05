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
    "name": "COLLAB - Jam Band - Landing Page",
    "description": "Landing page for COLLAB - Jam Band, a real-time collaborative jamming web application with virtual instruments, ultra-low latency voice chat, and synchronized metronome.",
    "url": "https://jam-band-landing-page.vercel.app/",
    "mainEntity": {
      "@type": "WebApplication",
      "name": "COLLAB - Jam Band",
      "description": "Real-time collaborative jamming web application with virtual instruments, ultra-low latency voice chat, and synchronized metronome.",
      "applicationCategory": "MusicApplication",
      "operatingSystem": "Web Browser",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "author": {
        "@type": "Person",
        "name": "Pathompong Thitithan"
      },
      "creator": {
        "@type": "Person",
        "name": "Pathompong Thitithan"
      },
      "publisher": {
        "@type": "Organization",
        "name": "BONIO House"
      },
      "featureList": [
        "Real-time collaborative jamming",
        "Virtual instruments",
        "Ultra-low latency voice chat",
        "Synchronized metronome",
        "Cross-platform compatibility",
        "No installation required",
        "Instrument swapping",
        "Step sequencer"
      ],
      "screenshot": "https://jam-band-landing-page.vercel.app/assets/images/app-overview.webp",
      "softwareVersion": "1.0.0",
      "datePublished": "2025-08-27",
      "dateModified": "2025-08-27",
      "inLanguage": "en-US",
      "isAccessibleForFree": true
    },
    "author": {
      "@type": "Person",
      "name": "Pathompong Thitithan"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BONIO House"
    },
    "datePublished": "2025-08-27",
    "dateModified": "2025-08-27",
    "inLanguage": "en-US"
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
