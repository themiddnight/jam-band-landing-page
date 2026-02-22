'use client';

import { motion } from 'framer-motion';
// import Image from 'next/image';

const useCases = [
  {
    icon: '🤝',
    title: 'Collaborative Groups',
    description: 'Work together in private or public bands with real-time state sync and project locks.'
  },
  {
    icon: '🍴',
    title: 'Creative Forking',
    description: 'Fork interesting public projects to build upon others\' ideas while maintaining original attribution.'
  },
  {
    icon: '🎨',
    title: 'Music Producers',
    description: 'Use the Arrange Room as a lightweight, cloud-based DAW for production and brainstorming.'
  },
  {
    icon: '🏆',
    title: 'Contributors',
    description: 'Auto-track contributions to projects. See your impact on the community through your profile.'
  },
];

export default function UseCasesSection() {
  return (
    <section id="perfect-for" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-800 dark:via-purple-900/20 dark:to-blue-900/20 overflow-hidden">
      {/* Background Image Effect */}
      {/* <div className="absolute inset-0" style={{ opacity: 0.15 }}>
        <Image 
          src="/images/mobile-view.webp" 
          alt="" 
          fill
          className="object-cover transform scale-150 -translate-x-12 -translate-y-12 blur-md"
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
          Perfect For
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className="text-center p-6 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 dark:border-purple-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">{useCase.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 