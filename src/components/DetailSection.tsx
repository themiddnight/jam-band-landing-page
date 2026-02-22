'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const detailCards = [
  {
    title: 'Guitar Interface',
    description: 'Advanced chord triggering with customizable voicings and root note selection for perfect harmony.',
    image: '/images/guitar-chord-trigger.webp',
    tags: ['Chords', 'Voicing'],
    gradient: 'from-purple-500/10 to-blue-500/10'
  },
  {
    title: 'Keyboard Layout',
    description: 'QWERTY-based musical mapping with intuitive key combinations for seamless performance.',
    image: '/images/keyboard-chord-trigger.webp',
    tags: ['QWERTY', 'Mapping'],
    gradient: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    title: 'Drum Machine',
    description: 'Color-coded pads with customizable sounds and responsive touch controls for dynamic beats.',
    image: '/images/drumpad.webp',
    tags: ['Pads', 'Touch'],
    gradient: 'from-green-500/10 to-emerald-500/10'
  },
  {
    title: 'Step Sequencer',
    description: '1-32 variable step grid with pattern creation and real-time editing for complex musical arrangements.',
    image: '/images/sequencer.webp',
    tags: ['Variable Steps', 'Grid'],
    gradient: 'from-indigo-500/10 to-purple-500/10'
  }
];

export default function DetailSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20 overflow-hidden">
      {/* Background Image Effect */}
      <div className="absolute inset-0" style={{ opacity: 0.1 }}>
        <Image 
          src="/images/synth-sequencer.webp" 
          alt="" 
          fill
          className="object-cover transform scale-150 -translate-x-24 -translate-y-24 blur-md"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Every Detail Matters
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Precision engineering meets creative expression. Every interface element is crafted with musicians in mind.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {detailCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group relative h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                <div className="relative mb-6">
                  <div className={`w-full h-36 rounded-xl overflow-hidden bg-gradient-to-br ${card.gradient}`}>
                    <Image 
                      src={card.image} 
                      alt={card.title} 
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                  {card.description}
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  {card.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        tagIndex === 0 
                          ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 