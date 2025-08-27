'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import {
  Navigation,
  HeroSection,
  FeaturesSection,
  InstrumentsSection,
  UseCasesSection,
  DetailSection,
  TechnicalRequirementsSection,
  CTASection,
  Footer
} from '@/components';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
        "No installation required"
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
      
      <Navigation 
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={toggleMobileMenu}
      />
      
      <HeroSection />
      <FeaturesSection />
      <InstrumentsSection />
      <UseCasesSection />
      <DetailSection />
      <TechnicalRequirementsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
