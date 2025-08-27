'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="how-it-works" className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 overflow-hidden">
      {/* Background Image Effect */}
      <div className="absolute inset-0" style={{ opacity: 0.1 }}>
        <Image 
          src="/assets/images/app-overview.webp" 
          alt="" 
          fill
          className="object-cover transform scale-150 -translate-x-20 -translate-y-20 blur-md"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Jam Together
              <span className="block text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-extrabold">
                In Real-Time
              </span>
            </h1>
            
            {/* Demo Banner */}
            <div className="mb-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border border-amber-200 dark:border-amber-700 rounded-full">
              <span className="text-amber-800 dark:text-amber-200 text-sm font-medium">🚧 Demo Version - Currently in Development</span>
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              COLLAB - Jam Band is the ultimate real-time collaborative jamming web application. 
              Jam with friends anywhere in the world with virtual instruments and ultra-low latency voice chat for music performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://jam-band-fe.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg music-btn"
              >
                🎵 Start Jamming Now
              </a>
              <a 
                href="/demo" 
                className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                🎬 Watch Demo
              </a>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative z-10">
              <Image 
                src="/assets/images/app-overview.webp" 
                alt="COLLAB - Jam Band App Interface" 
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
            {/* Large background image for depth */}
            <div className="absolute inset-0 overflow-hidden" style={{ opacity: 0.15 }}>
              <Image 
                src="/assets/images/app-overview.webp" 
                alt="" 
                width={800}
                height={600}
                className="w-[140%] h-[140%] object-cover transform scale-150 -translate-x-10 -translate-y-10 blur-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 