'use client';

import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import DropdownMenu from './DropdownMenu';
import { NAVIGATION_MENU_ITEMS } from './constants/navigation';

// Define proper types for navigation items
type NavigationItem = typeof NAVIGATION_MENU_ITEMS[number];
type DropdownItem = NonNullable<Extract<NavigationItem, { hasDropdown: true }>['dropdownItems']>[number];

interface NavigationProps {
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

export default function Navigation({ 
  mobileMenuOpen, 
  onMobileMenuToggle 
}: NavigationProps) {
  const router = useRouter();
  const [sectionsDropdownOpen, setSectionsDropdownOpen] = useState(false);

  // Reusable function to handle hash navigation
  const handleHashNavigation = (href: string, closeMenu: boolean = false) => {
    if (href.startsWith('/#')) {
      // Navigate to homepage first, then scroll to section
      router.push(href);
      if (closeMenu) {
        setTimeout(() => onMobileMenuToggle(), 100);
      }
    } else if (href.startsWith('#')) {
      // Already on homepage, just scroll to section
      const hash = href.substring(1);
      const targetElement = document.querySelector(`#${hash}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        if (closeMenu) {
          setTimeout(() => onMobileMenuToggle(), 300);
        }
      }
    }
  };

  // Reusable function to render navigation item
  const renderNavigationItem = (item: NavigationItem, isMobile: boolean = false) => {
    if (item.hasDropdown) {
      return (
        <DropdownMenu
          key={item.label}
          trigger={item.label}
          items={(item as Extract<NavigationItem, { hasDropdown: true }>).dropdownItems || []}
          isOpen={sectionsDropdownOpen}
          onToggle={() => setSectionsDropdownOpen(!sectionsDropdownOpen)}
          onClose={() => setSectionsDropdownOpen(false)}
          className="text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer whitespace-nowrap flex-shrink-0"
          anchorPosition="bottom-left"
          offset={{ x: 0, y: 8 }}
          usePortal={true}
        />
      );
    }

    if (item.href.startsWith('#') || item.href.startsWith('/#')) {
      const commonClasses = isMobile 
        ? "block w-full text-left py-3 px-4 text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
        : "text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer whitespace-nowrap flex-shrink-0";

      return (
        <a 
          key={item.href}
          href={item.href}
          className={commonClasses}
          onClick={(e) => {
            e.preventDefault();
            handleHashNavigation(item.href, isMobile);
          }}
        >
          {item.label}
        </a>
      );
    }

    const commonClasses = isMobile 
      ? "block w-full text-left py-3 px-4 text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
      : "text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer whitespace-nowrap flex-shrink-0";

    return (
      <Link 
        key={item.href}
        href={item.href}
        className={commonClasses}
        onClick={isMobile ? () => onMobileMenuToggle() : undefined}
      >
        {item.label}
      </Link>
    );
  };

  // Reusable function to render dropdown section items for mobile
  const renderDropdownSectionItems = (item: NavigationItem) => {
    if (!item.hasDropdown || !item.dropdownItems) return null;
    
    return (
      <div key={item.label} className="space-y-2">
        {/* Section Header */}
        <div className="py-2 px-4 text-lg font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">
          {item.label}
        </div>
        {/* Section Items */}
        <div className="pl-4 space-y-1">
          {item.dropdownItems.map((subItem: DropdownItem) => (
          <a 
            key={subItem.href}
            href={subItem.href}
            className="block w-full text-left py-2 px-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleHashNavigation(subItem.href, true);
            }}
          >
            {subItem.label}
          </a>
        ))}
      </div>
    </div>
    );
  };

  return (
    <>
      {/* Backdrop Overlay - Blur and Dim Effect */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={onMobileMenuToggle}
          />
        )}
      </AnimatePresence>

      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex justify-between items-center h-16 gap-8">
            {/* Logo and Navigation Links */}
            <div className="flex items-center space-x-8 flex-1 min-w-0">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  COLLAB
                </span>
              </Link>
              
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-8 overflow-x-auto scrollbar-hide flex-1 min-w-0">
                {NAVIGATION_MENU_ITEMS.map((item) => renderNavigationItem(item))}
              </div>
            </div>
            
            {/* CTA Button and Theme Toggle */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* CTA Button (Hidden on Mobile) */}
              <a 
                href="https://jam-band-fe.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hidden md:inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Start Jamming
              </a>
              
              {/* Mobile Menu Button (Hamburger) */}
              <button 
                onClick={onMobileMenuToggle}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" 
                aria-label="Toggle mobile menu" 
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900 dark:text-gray-100" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900 dark:text-gray-100" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden relative z-50"
              >
                <div className="py-4 space-y-4">
                  {NAVIGATION_MENU_ITEMS.map((item) => 
                    item.hasDropdown 
                      ? renderDropdownSectionItems(item)
                      : renderNavigationItem(item, true)
                  )}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a 
                      href="https://jam-band-fe.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full text-center py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Start Jamming
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
} 