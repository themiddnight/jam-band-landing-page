'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '🎸',
    title: 'Virtual Instruments',
    description: 'Guitar, Bass, Keyboard, Drums, and Synthesizer powered by professional audio libraries (smplr & Tone.js) with built-in music theory assistance for all skill levels.'
  },
  {
    icon: '🎤',
    title: 'Ultra-Low Latency Voice',
    description: 'Voice chat prioritized for low latency over quality, perfect for singing and physical instrument input during jamming.'
  },
  {
    icon: '🥁',
    title: 'Synchronized Metronome',
    description: 'Keep perfect time together across all users with our synchronized metronome system.'
  },
  {
    icon: '🎼',
    title: 'Step Sequencer',
    description: 'Create complex patterns and sequences together in real-time collaboration for jamming and music brainstorming.'
  },
  {
    icon: '🎹',
    title: 'MIDI Controller Support',
    description: 'Use your external MIDI devices and physical instruments for enhanced jamming experience.'
  },
  {
    icon: '📱',
    title: 'PWA Support',
    description: 'Install as a native app on any device for the best experience.'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-800 dark:via-purple-900/20 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto">
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
              className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-800 feature-card"
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