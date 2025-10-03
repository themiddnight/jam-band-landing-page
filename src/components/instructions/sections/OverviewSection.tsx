'use client';
import Image from 'next/image';
import { Play, Users, Music, Headphones, Heart } from 'lucide-react';

export default function OverviewSection() {
  return (
    <div className="p-6 sm:p-8">
      <div
      >
        <div className="flex items-center gap-3 ">
          <Music className="w-8 h-8 text-purple-600" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Welcome to COLLAB - Jam Band
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Your gateway to real-time collaborative music making
            </p>
          </div>
        </div>

        {/* App Overview Image */}
        <div className="mb-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/instructions/0-overall.png"
              alt="COLLAB - Jam Band App Overview"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
            Complete app interface showing all instruments and collaboration features
          </p>
        </div>

        {/* What is COLLAB - Jam Band */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            What is COLLAB - Jam Band?
          </h3>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              COLLAB - Jam Band is a revolutionary web-based platform that enables musicians to create music together in real-time, 
              regardless of their physical location. Whether you&apos;re a beginner or an experienced musician, our platform provides 
              the tools you need to jam, create, and collaborate.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Perfect for remote jam sessions, music lessons, skill development, or just having fun making music with friends. 
              No installation required - everything runs directly in your browser with professional-quality audio.
            </p>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white ">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <Music className="w-6 h-6 text-purple-600" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Virtual Instruments</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Guitar, Bass, Keyboard, Drums, and Synthesizer with built-in music theory assistance for all skill levels.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <Headphones className="w-6 h-6 text-green-600" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Ultra-Low Latency Voice</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Voice chat optimized for musical timing, perfect for singing and real instrument input during jamming.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <Play className="w-6 h-6 text-amber-600" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Step Sequencer</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Create complex patterns and sequences together in real-time collaboration for jamming and music brainstorming.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-pink-600" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Real-time Collaboration</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Play together synchronized with room management, member roles, and instant audio/visual feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Getting Started
          </h3>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Create or Join a Room</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Start by creating a new room or joining an existing one with a room code.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Choose Your Instrument</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Select from Keyboard, Guitar, Bass, Drums, or Synthesizer based on your preference.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Start Jamming!</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Use the virtual instruments, enable voice chat, and start making music together in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Perfect For Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Perfect For
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Music Enthusiasts</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Anyone who loves music and wants to create with others
              </p>
            </div>
            
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Remote Bands</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Musicians separated by distance who want to jam together
              </p>
            </div>
            
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <Music className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Music Education</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Teachers and students for interactive music lessons
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}