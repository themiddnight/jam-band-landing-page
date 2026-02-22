'use client';

import { motion } from 'framer-motion';
import { Music, Zap, Brain, Layout } from 'lucide-react';
import Image from 'next/image';

const theoryFeatures = [
  {
    icon: <Music className="w-6 h-6" />,
    title: 'Scale Synchronization',
    description: 'Set a global key and scale for your room. All instruments automatically adapt, ensuring everyone plays in perfect harmony.'
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Chord Trigger Matrix',
    description: 'One-touch chord generation tailored to your chosen scale. Create complex progressions with ease, regardless of your piano skills.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Intelligent Mapping',
    description: 'Your QWERTY keyboard and MIDI controllers are dynamically remapped to the room\'s musical context for intuitive playability.'
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Visual Scale Guides',
    description: 'See which notes fit the scale on all virtual interfaces, making it the perfect tool for both jamming and music education.'
  }
];

export default function MusicTheorySection() {
  return (
    <section id="music-theory" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/10 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Play Like a Pro with <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Music Theory Assistance
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We believe music should be accessible to everyone. Our built-in intelligence takes care of the complex theory, so you can focus on the feeling and creativity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {theoryFeatures.map((feature) => (
                <div key={feature.title} className="flex flex-col space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 p-2">
               <div className="aspect-[4/3] relative bg-gray-100 dark:bg-gray-700 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
                  <Image 
                    src="/images/music-theory-assist.webp" 
                    alt="Music Theory Assistance"
                    fill
                    className="object-cover"
                  />
               </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob delay-2000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
