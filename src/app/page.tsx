'use client';

import { useState } from 'react';
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
