'use client';

import { motion } from 'framer-motion';

const technicalRequirements = [
  {
    icon: '⚡',
    title: 'Socket.IO & WebRTC',
    description: 'We use a hybrid approach of Socket.IO for state sync and WebRTC mesh for real-time voice, ensuring low latency and high reliability.',
    status: 'High Performance'
  },
  {
    icon: '🧬',
    title: 'Ephemeral/Commit Sync',
    description: 'Advanced sync strategy that broadcasts rapid changes instantly while committing final states to Redis, optimized for high-capacity rooms.',
    status: 'Custom Engine'
  },
  {
    icon: '🛠️',
    title: 'Bun Runtime',
    description: 'Built on Bun for ultra-fast performance, improved developer experience, and modern TypeScript support.',
    status: 'Modern Stack'
  },
  {
    icon: '🌍',
    title: 'Low-Latency Infrastructure',
    description: 'Currently optimized for Southeast Asia with remote DB and Redis architecture on Railway.',
    status: 'Regional Optimized'
  },
  {
    icon: '🔌',
    title: 'Full MIDI Support',
    description: 'Connect your physical MIDI controllers directly via the Web MIDI API. Optimized for Chromium-based browsers.',
    status: 'Pro Ready'
  }
];

export default function TechnicalRequirementsSection() {
  return (
    <section id="technical-requirements" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-orange-50 to-red-50 dark:from-gray-800 dark:via-orange-900/20 dark:to-red-900/20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            *Technical Requirements & Notes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Important information to help you get the best jamming experience. These details ensure smooth performance and set realistic expectations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalRequirements.map((requirement, index) => (
            <motion.div
              key={requirement.title}
              className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-orange-100 dark:border-orange-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">{requirement.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {requirement.title}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium rounded-md bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300">
                      {requirement.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {requirement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Box */}
        <motion.div 
          className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">💡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Pro Tips for Best Performance
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">•</span>
              <span>Use a Chromium-based browser (Chrome, Edge, Brave) for full MIDI and Audio support</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">•</span>
              <span>Connect via Ethernet/LAN for the most stable real-time synchronization</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">•</span>
              <span>Use wired headphones to minimize audio latency and prevent feedback loops</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">•</span>
              <span>Start with a &quot;Perform Room&quot; for quick jamming, or &quot;Arrange Room&quot; for production</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 