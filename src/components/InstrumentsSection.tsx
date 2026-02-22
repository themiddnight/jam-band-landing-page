'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function InstrumentsSection() {
  return (
    <section id="instruments" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 overflow-hidden">
      {/* Background Image Effect */}
      <div className="absolute inset-0" style={{ opacity: 0.1 }}>
        <Image 
          src="/images/various-instruments-selection.webp" 
          alt="" 
          fill
          className="object-cover transform scale-150 -translate-x-16 -translate-y-16 blur-md"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          High-Quality Virtual Instruments
        </motion.h2>
        
        {/* Sound Engine Info */}
        <motion.div 
          className="text-center mb-16 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Powered by Professional Audio Libraries</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Our instruments use industry-standard audio libraries for the highest quality sound and performance
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-700/80 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">🎵 Melodic & Drum Instruments</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Powered by <strong>smplr</strong> - Professional soundfont engine with hundreds of standard instruments and high-quality drum samples</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-700/80 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">🔊 Synthesizers</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Powered by <strong>Tone.js</strong> - Advanced Web Audio framework with analog and FM synthesis capabilities</p>
            </div>
          </div>
        </motion.div>
        
        {/* Guitar & Bass */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎸</span>
                </span>
                Guitar & Bass
              </h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  Multiple playing modes with built-in music theory assistance. Powered by smplr&apos;s extensive soundfont library for authentic instrument sounds.
                </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="font-medium">Melody Mode with Scale Assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="font-medium">Chord Mode with Progressions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span className="font-medium">Basic Mode for Free Playing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                  <span className="font-medium">smplr Soundfont Engine</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image 
                src="/images/guitar-chord-trigger.webp" 
                alt="Guitar Chord Trigger Interface" 
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>

        {/* Keyboard & Synthesizer */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image 
                src="/images/keyboard-chord-trigger.webp" 
                alt="Keyboard Chord Trigger Interface" 
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎹</span>
                </span>
                Keyboard & Synthesizer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                QWERTY-based musical mapping with intuitive key combinations. Advanced synthesizer with analog and FM synthesis powered by Tone.js.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="font-medium">QWERTY Musical Mapping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
                  <span className="font-medium">Analog & FM Synthesis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span className="font-medium">Chord Trigger System</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="font-medium">Tone.js Audio Engine</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Drum Machine */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🥁</span>
                </span>
                Drum Machine & Drumpad
              </h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                Color-coded pads with customizable sounds and responsive touch controls. Professional drum samples powered by smplr&apos;s extensive library.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="font-medium">Color-Coded Pads</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                  <span className="font-medium">Customizable Sounds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="font-medium">Responsive Touch Controls</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span className="font-medium">Professional Drum Samples</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image 
                src="/images/drumpad.webp" 
                alt="Drumpad Interface" 
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>

        {/* Step Sequencer */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image 
                src="/images/sequencer.webp" 
                alt="Step Sequencer Interface" 
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎼</span>
                </span>
                Step Sequencer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                16-step grid with pattern creation and real-time editing. Create complex musical arrangements and collaborate on sequences together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                  <span className="font-medium">16-Step Grid</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span className="font-medium">Pattern Creation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="font-medium">Real-Time Editing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="font-medium">Collaborative Sequencing</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image Gallery */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            <Image 
              src="/images/drumpad.webp" 
              alt="Drumpad Interface" 
              width={400}
              height={300}
              className="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
          
          <div className="relative group">
            <Image 
              src="/images/scale-pre-setup.webp" 
              alt="Scale Setup" 
              width={400}
              height={300}
              className="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
          
          <div className="relative group">
            <Image 
              src="/images/tools-section.webp" 
              alt="Tools Section" 
              width={400}
              height={300}
              className="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 