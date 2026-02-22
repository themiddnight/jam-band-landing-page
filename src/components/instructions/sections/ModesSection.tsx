'use client';
import { Layout, Users, Play, Radio } from 'lucide-react';

export default function ModesSection() {
  return (
    <div className="p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Layout className="w-8 h-8 text-purple-600" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Experience Modes
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Understanding the difference between jamming and production
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Perform Room */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-600 rounded-lg">
              <Play className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Perform Room</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
            The ultimate playground for spontaneous creativity and live collaboration. Join a room as a band member or an audience.
          </p>
          <ul className="space-y-3">
            {[
              'Real-time instrument jamming',
              'Low-latency voice chat',
              'Audience interaction & streaming',
              'Dynamic instrument swapping'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Arrange Room */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Radio className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Arrange Room</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
            A collaborative DAW (Digital Audio Workstation) environment where you can arrange, record, and produce tracks together.
          </p>
          <ul className="space-y-3">
            {[
              'Collaborative multi-track timeline',
              'Project locking & forking',
              'Contributor tracking',
              'Professional mixdown & export'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 flex gap-4">
        <Users className="w-6 h-6 text-amber-600 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-amber-900 dark:text-amber-200">Switching Between Modes</h4>
          <p className="text-sm text-amber-800 dark:text-amber-300 mt-1">
            Projects in Jam Band are deeply integrated. You can start a jam in a Perform Room, and then open that project in an Arrange Room to further refine and arrangement your recorded parts.
          </p>
        </div>
      </div>
    </div>
  );
}
