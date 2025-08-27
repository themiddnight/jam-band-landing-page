'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Start Making Music Together?
        </motion.h2>
        <motion.p 
          className="text-xl text-purple-100 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join thousands of musicians who are already jamming together online
        </motion.p>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://jam-band-fe.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 music-btn"
          >
            🎵 Start Jamming Now
          </a>
        </motion.div>
      </div>
    </section>
  );
} 