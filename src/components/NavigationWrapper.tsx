'use client';

import { useState, useEffect } from 'react';
import Navigation from './Navigation';

export default function NavigationWrapper() {
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

  return (
    <Navigation 
      mobileMenuOpen={mobileMenuOpen}
      onMobileMenuToggle={toggleMobileMenu}
    />
  );
} 