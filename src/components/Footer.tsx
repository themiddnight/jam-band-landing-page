'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
            <motion.div
              className="text-gray-400 mb-4 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className='mb-2'>The real-time collaborative production & jamming suite for musicians. Perfect for live jamming, collaborative DAW production, and music brainstorming.</p>
              <p className="text-purple-400">✨ Currently in Alpha testing phase. Join the next generation of musical collaboration.</p>
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
              <li><Link href="/#instruments" className="hover:text-white transition-colors">Virtual Instruments</Link></li>
              <li><Link href="/#features" className="hover:text-white transition-colors">Voice Chat</Link></li>
              <li><Link href="/#features" className="hover:text-white transition-colors">Metronome</Link></li>
              <li><Link href="/#features" className="hover:text-white transition-colors">Sequencer</Link></li>
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
              <li><Link href="/#features" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/#features" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/feedback" className="hover:text-white transition-colors">Feedback</Link></li>
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
              <li><a href="https://github.com/tonaljs/tonal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Tonal.js Library</a></li>
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
          <div className="flex items-center justify-center gap-2">
            <span className="text-white font-bold text-lg">COLLAB</span>
            <span className="text-sm text-white/70">•</span>
            <span className="text-sm text-white/70">
              © {currentYear} by{" "}
              <a
                href="http://themiddnight-resume.vercel.app/resumes/themiddnight-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Pathompong Thitithan
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 