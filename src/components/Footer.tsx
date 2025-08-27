'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎵</span>
              </div>
              <span className="text-xl font-bold">COLLAB</span>
            </motion.div>
            <motion.p 
              className="text-gray-400 mb-4 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              The ultimate real-time collaborative jamming web application for musicians who want to jam together online, perfect for virtual music brainstorming and fun jamming sessions. 
              <span className="text-amber-400">🚧 Currently in demo phase.</span>
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a 
                href="https://github.com/themiddnight/jam-band-fe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#instruments" className="hover:text-white transition-colors">Virtual Instruments</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Voice Chat</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Metronome</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Sequencer</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Powered By</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://github.com/danigb/smplr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">smplr Audio Library</a></li>
              <li><a href="https://tonejs.github.io/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Tone.js Framework</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 COLLAB - Jam Band. Built with ❤️ for musicians everywhere.</p>
        </motion.div>
      </div>
    </footer>
  );
} 