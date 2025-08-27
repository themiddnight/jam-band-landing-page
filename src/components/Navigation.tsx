'use client';

import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

export default function Navigation({ 
  mobileMenuOpen, 
  onMobileMenuToggle 
}: NavigationProps) {

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation Links */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎵</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                COLLAB
              </span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#features"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
              >
                Features
              </a>
              <a 
                href="#instruments"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
              >
                Instruments
              </a>
              <a 
                href="#how-it-works"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
              >
                How It Works
              </a>
            </div>
          </div>
          
          {/* CTA Button and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* CTA Button (Hidden on Mobile) */}
            <a 
              href="https://jam-band-fe.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
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
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <a 
                  href="#features"
                  className="block w-full text-left py-3 px-4 text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={onMobileMenuToggle}
                >
                  Features
                </a>
                <a 
                  href="#instruments"
                  className="block w-full text-left py-3 px-4 text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={onMobileMenuToggle}
                >
                  Instruments
                </a>
                <a 
                  href="#how-it-works"
                  className="block w-full text-left py-3 px-4 text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={onMobileMenuToggle}
                >
                  How It Works
                </a>
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
  );
} 