'use client';

import { motion } from 'framer-motion';

export default function DemoPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Demo & Tutorial
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Learn how to use COLLAB - Jam Band with our comprehensive demo and tutorial guide
          </motion.p>
        </div>
      </section>

      {/* Demo Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 p-8 rounded-2xl mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-amber-800 dark:text-amber-200">
              🚧 Demo Version - Currently in Development
            </h2>
            <p className="text-amber-700 dark:text-amber-300">
              This demo is designed to test concepts and gather input from musicians. 
              Try it out and let us know what you think could be improved.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Getting Started */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🚀</span>
                </span>
                Getting Started
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>1. <strong>Create or Join a Room:</strong> Start by creating a new jam session or joining an existing one using an invite link.</p>
                <p>2. <strong>Choose Your Instrument:</strong> Select from Guitar, Bass, Keyboard, Drums, or Synthesizer based on your preference.</p>
                <p>3. <strong>Set Up Audio:</strong> Allow microphone access for voice chat and ensure your speakers/headphones are working.</p>
                <p>4. <strong>Start Jamming:</strong> Use your keyboard or mouse to play your chosen instrument and collaborate with others.</p>
              </div>
            </div>

            {/* Features Demo */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎵</span>
                </span>
                Key Features to Try
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-600 dark:text-purple-400">🎸 Virtual Instruments</h4>
                  <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Try different playing modes (Melody, Chord, Basic)</li>
                    <li>• Experiment with scales and chord progressions</li>
                    <li>• Test the responsive touch controls</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">🎤 Voice Chat</h4>
                  <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Test ultra-low latency voice communication</li>
                    <li>• Adjust gain and input levels</li>
                    <li>• Experience real-time collaboration</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-600 dark:text-green-400">🥁 Metronome</h4>
                  <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Set different BPM and time signatures</li>
                    <li>• Test synchronization across users</li>
                    <li>• Use visual and audio cues</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">🎼 Sequencer</h4>
                  <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Create 16-step patterns</li>
                    <li>• Experiment with different instruments</li>
                    <li>• Collaborate on sequences</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tips & Tricks */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">💡</span>
                </span>
                Tips & Tricks
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <p><strong>Use Headphones:</strong> For the best experience, use headphones to avoid audio feedback and hear other musicians clearly.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <p><strong>Start Simple:</strong> Begin with basic patterns and gradually build complexity as you get comfortable with the interface.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <p><strong>Communicate:</strong> Use voice chat to coordinate with other musicians and discuss musical ideas.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <p><strong>Experiment:</strong> Don&apos;t be afraid to try different instruments and sounds to discover new musical possibilities.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Ready to Try It Out?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://jam-band-fe.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                🎵 Try the Demo
              </a>
              <a 
                href="https://github.com/themiddnight/jam-band-fe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-2 border-amber-600 text-amber-600 dark:text-amber-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 hover:text-white transition-all duration-300"
              >
                📝 View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 