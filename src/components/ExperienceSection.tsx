'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const experienceModes = [
  {
    title: 'Perform Room',
    subtitle: 'Live Jamming & Interaction',
    description: 'The place for spontaneous creativity. Join a room as a band member or audience, use virtual instruments, and jam in real-time with ultra-low latency voice chat.',
    features: [
      'Real-time instrument synchronization',
      'Low-latency voice chat mesh',
      'Interactive drumpad and sequencers',
      'Audience interaction mode'
    ],
    image: '/images/perform-room.webp',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Arrange Room',
    subtitle: 'Collaborative DAW & Production',
    description: 'Take your ideas further. A collaborative digital audio workstation where you can arrange, record, and produce tracks together with advanced version control.',
    features: [
      'Multi-track arrangement grid',
      'Project forking and versioning',
      'Collaborative lock management',
      'High-quality audio export'
    ],
    image: '/images/arrange-room.webp',
    color: 'from-pink-500 to-orange-500'
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            One App, Two Unique Experiences
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Whether you want to jam live or produce a masterpiece, we have the perfect environment for your musical journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {experienceModes.map((mode, index) => (
            <motion.div 
              key={mode.title}
              className="relative overflow-hidden rounded-3xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 p-8 flex flex-col h-full"
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${mode.color} text-white text-sm font-semibold mb-6 w-fit`}>
                {mode.subtitle}
              </div>
              <h3 className="text-3xl font-bold mb-4">{mode.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                {mode.description}
              </p>
              
              <div className="mb-8 flex-grow">
                <ul className="space-y-3">
                  {mode.features.map(feature => (
                    <li key={feature} className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${mode.color} flex items-center justify-center text-white text-[10px]`}>
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mt-auto">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 font-medium">
                  {/* Placeholder for actual screenshot */}
                  [Screenshot: {mode.title} Interface]
                </div>
                <Image 
                  src={mode.image} 
                  alt={mode.title}
                  fill
                  className="object-cover"
                /> 
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
