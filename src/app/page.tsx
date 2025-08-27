'use client';

import { useState, useEffect } from 'react';
import {
  Navigation,
  HeroSection,
  FeaturesSection,
  InstrumentsSection,
  UseCasesSection,
  DetailSection,
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
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "COLLAB - Jam Band",
      "description": "Real-time collaborative jamming web application with virtual instruments, ultra-low latency voice chat, and synchronized metronome.",
      "url": "https://jam-band-fe.vercel.app/",
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
        "@type": "Organization",
        "name": "COLLAB Team"
      },
      "creator": {
        "@type": "Organization",
        "name": "COLLAB Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "COLLAB"
      },
      "featureList": [
        "Real-time collaborative jamming",
        "Virtual instruments",
        "Ultra-low latency voice chat",
        "Synchronized metronome",
        "Cross-platform compatibility",
        "No installation required"
      ],
      "screenshot": "https://jam-band-fe.vercel.app/images/app-overview.webp",
      "softwareVersion": "1.0.0",
      "datePublished": "2025-08-27",
      "dateModified": "2025-08-27",
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Music Producer"
          },
          "reviewBody": "Amazing tool for remote collaboration. The low latency makes it feel like we're in the same room."
        }
      ]
    };

    // Add structured data to the page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navigation 
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={toggleMobileMenu}
      />
      
      <HeroSection />
      <FeaturesSection />
      <InstrumentsSection />
      <UseCasesSection />
      <DetailSection />
      <CTASection />
      <Footer />
    </div>
  );
}
