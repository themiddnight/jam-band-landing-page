'use client';
import Image from 'next/image';
import { Drum, Target, Zap, Volume2 } from 'lucide-react';

export default function DrumSection() {
  return (
    <div className="p-6 sm:p-8">
      <div
      >
        <div className="flex items-center gap-3 ">
          <Drum className="w-8 h-8 text-purple-600" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Virtual Drums
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Create beats with drum pads and full drum kits
            </p>
          </div>
        </div>

        {/* Drum Pad Overview */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-red-600" />
            Drum Pad Interface
          </h3>
          
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
            <Image
              src="/images/instructions/5-drumpad.png"
              alt="Drum Pad Interface"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center ">
            Responsive drum pads with velocity sensitivity and visual feedback
          </p>
        </div>

        {/* What Makes Great Drums */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            The Heart of the Band
          </h3>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-700 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Drums are the foundation of any great jam session. They provide the pulse, energy, and groove 
              that everything else builds upon. Whether you&apos;re laying down a simple beat or creating complex 
              rhythmic patterns, the drums are what keep everyone together and dancing.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our virtual drum system gives you everything from basic kick-snare patterns to intricate 
              percussion arrangements, all with the responsiveness and feel of real drums.
            </p>
          </div>
        </div>

        {/* Drum Kit Layout */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Virtual Drum Kit Components
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div
              className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-4 text-center"
            >
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Drum className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Kick Drum</h4>
              <p className="text-sm text-red-600 dark:text-red-400">
                The foundation beat on 1 and 3, providing the low-end punch
              </p>
            </div>

            <div
              className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4 text-center"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Snare Drum</h4>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                The sharp crack on 2 and 4, driving the backbeat forward
              </p>
            </div>

            <div
              className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-4 text-center"
            >
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Hi-Hats</h4>
              <p className="text-sm text-yellow-600 dark:text-yellow-400">
                Crisp metallic sounds for rhythm and texture, open and closed
              </p>
            </div>

            <div
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-4 text-center"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Volume2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Toms</h4>
              <p className="text-sm text-green-600 dark:text-green-400">
                High, mid, and low toms for fills and melodic drumming
              </p>
            </div>

            <div
              className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-4 text-center"
            >
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Cymbals</h4>
              <p className="text-sm text-purple-600 dark:text-purple-400">
                Crash and ride cymbals for accents and sustained rhythm
              </p>
            </div>

            <div
              className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-xl p-4 text-center"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Drum className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Percussion</h4>
              <p className="text-sm text-orange-600 dark:text-orange-400">
                Shakers, cowbells, and other percussion for added flavor
              </p>
            </div>
          </div>
        </div>

        {/* Basic Drum Patterns */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Essential Drum Patterns
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                🥁 Basic Rock Beat
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 dark:bg-gray-600 p-3 rounded">
                  <strong>1</strong> Kick + Hi-hat | <strong>2</strong> Snare + Hi-hat | 
                  <strong>3</strong> Kick + Hi-hat | <strong>4</strong> Snare + Hi-hat
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  The foundation of rock music. Kick on 1 and 3, snare on 2 and 4, 
                  with hi-hats keeping steady eighth notes.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                🎵 Four-on-the-Floor
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 dark:bg-gray-600 p-3 rounded">
                  <strong>1</strong> Kick + Hi-hat | <strong>2</strong> Hi-hat | 
                  <strong>3</strong> Kick + Hi-hat | <strong>4</strong> Hi-hat
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Perfect for pop and dance music. Kick drum on every beat 
                  creates a driving, danceable groove.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                🎸 Shuffle Beat
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 dark:bg-gray-600 p-3 rounded">
                  <strong>1</strong> Kick + Ride | <strong>&</strong> Ride | <strong>2</strong> Snare | 
                  <strong>&</strong> Ride | <strong>3</strong> Kick + Ride | <strong>4</strong> Snare
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Swinging triplet feel common in blues and jazz. 
                  Creates a laid-back, grooving rhythm.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                🎼 Ballad Pattern
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 dark:bg-gray-600 p-3 rounded">
                  <strong>1</strong> Kick + Crash | <strong>2</strong> - | 
                  <strong>3</strong> Snare | <strong>4</strong> -
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Gentle, spacious pattern for slow songs. 
                  Less is more - focus on feel and dynamics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Playing Techniques */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Drum Playing Techniques
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-700 rounded-xl p-6">
                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">🎯 Velocity & Dynamics</h4>
                <ul className="space-y-2 text-sm text-red-600 dark:text-red-400">
                  <li>• <strong>Soft hits:</strong> Subtle groove and ghost notes</li>
                  <li>• <strong>Medium hits:</strong> Standard playing dynamics</li>
                  <li>• <strong>Hard hits:</strong> Accents and powerful moments</li>
                  <li>• <strong>Vary intensity:</strong> Create musical phrases</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">🥁 Fill Techniques</h4>
                <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                  <li>• <strong>Tom fills:</strong> Roll around the toms melodically</li>
                  <li>• <strong>Snare rolls:</strong> Build tension and excitement</li>
                  <li>• <strong>Cymbal crashes:</strong> Mark important musical moments</li>
                  <li>• <strong>Timing:</strong> End fills cleanly on beat 1</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">⏱️ Timing & Groove</h4>
                <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                  <li>• <strong>Lock with metronome:</strong> Stay in perfect time</li>
                  <li>• <strong>Feel the pocket:</strong> Slightly ahead or behind for groove</li>
                  <li>• <strong>Listen to bass:</strong> Create tight rhythm section</li>
                  <li>• <strong>Consistent tempo:</strong> Be the band&apos;s timekeeper</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-6">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">🎵 Musical Awareness</h4>
                <ul className="space-y-2 text-sm text-purple-600 dark:text-purple-400">
                  <li>• <strong>Song structure:</strong> Support verses, choruses, bridges</li>
                  <li>• <strong>Energy levels:</strong> Match the song&apos;s intensity</li>
                  <li>• <strong>Space for others:</strong> Don&apos;t overplay during solos</li>
                  <li>• <strong>Communication:</strong> Use fills to signal changes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard Shortcuts */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Drum Controls & Shortcuts
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Basic Controls</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Kick Drum</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">Space</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Snare Drum</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">D</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Hi-Hat Closed</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">F</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Hi-Hat Open</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">G</kbd>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Toms & Cymbals</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">High Tom</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">Y</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Mid Tom</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">H</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Floor Tom</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">N</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Crash Cymbal</span>
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs">J</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Tips */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center gap-2">
            🤝 Drummer Collaboration Tips
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Be the foundation:</strong> Everyone relies on your timing</li>
              <li>• <strong>Lock with bass:</strong> Create a tight rhythm section</li>
              <li>• <strong>Support the song:</strong> Match the energy and feel</li>
              <li>• <strong>Signal changes:</strong> Use fills to lead transitions</li>
            </ul>
            <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Less is more:</strong> Simple, solid beats often work best</li>
              <li>• <strong>Listen actively:</strong> Respond to what others are playing</li>
              <li>• <strong>Use dynamics:</strong> Build and release tension</li>
              <li>• <strong>Stay connected:</strong> Use voice chat to coordinate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}