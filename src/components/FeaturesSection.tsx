'use client';

import { motion } from 'framer-motion';
// import Image from 'next/image';

const features = [
  {
    icon: '🏠',
    title: 'Dual-Room Experience',
    description: 'Switch between Perform Rooms for live jamming and Arrange Rooms for collaborative DAW production and arrangement.'
  },
  {
    icon: '🎼',
    title: 'Music Theory Assistance',
    description: 'Intelligent scale selection, chord triggers, and musical mapping to help you play and produce music even without formal training.'
  },
  {
    icon: '⚡',
    title: 'Real-Time Sync Engine',
    description: 'Powered by an Ephemeral/Commit pattern and per-room mutex to ensure seamless synchronization across all collaborators.'
  },
  {
    icon: '🎸',
    title: 'Professional Virtual Instruments',
    description: 'High-quality sound engines (smplr & Tone.js) with MIDI support for guitar, bass, keyboard, drums, and synthesizers.'
  },
  {
    icon: '🤝',
    title: 'Collaborative Production',
    description: 'Fork public projects, track contributions, and manage project locks to work effectively with your band members.'
  },
  {
    icon: '🎤',
    title: 'Low-Latency Voice Chat',
    description: 'WebRTC-powered voice chat prioritized for timing, perfect for synchronized musical collaboration and communication.'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-800 dark:via-purple-900/20 dark:to-blue-900/20 overflow-hidden bg-image-overlay">
      {/* Background Image Effect */}
      {/* <div className="absolute inset-0" style={{ opacity: 0.15 }}>
        <Image 
          src="/images/app-overview.webp" 
          alt="" 
          fill
          className="object-cover transform scale-150 -translate-x-20 -translate-y-20 blur-md"
        />
      </div> */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Everything You Need to Jam Together
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100 dark:border-purple-800 feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 