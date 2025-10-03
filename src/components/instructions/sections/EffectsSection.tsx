'use client';
import Image from 'next/image';
import { Volume2, Waves, Zap, Sparkles } from 'lucide-react';

export default function EffectsSection() {
  return (
    <div className="p-6 sm:p-8">
      <div
      >
        <div className="flex items-center gap-3 ">
          <Volume2 className="w-8 h-8 text-purple-600" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Audio Effects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Transform your sound with professional audio effects
            </p>
          </div>
        </div>

        {/* Effects Overview */}
        <div className="mb-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
            <Image
              src="/images/instructions/6-audio-effects.png"
              alt="Audio Effects Interface"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center ">
            Professional audio effects chain with real-time parameter control
          </p>
        </div>

        {/* What Are Audio Effects */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            What Are Audio Effects?
          </h3>
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Audio effects are digital processors that modify your instrument&apos;s sound in real-time. 
              They can add depth, space, distortion, modulation, and countless other sonic characteristics 
              to transform your playing from basic to extraordinary.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              In COLLAB - Jam Band, effects are applied to your virtual instruments and can be heard 
              by all room members in real-time, making them perfect for collaborative performances 
              and creative sound design.
            </p>
          </div>
        </div>

        {/* Effect Categories */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Types of Effects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Waves className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-blue-800 dark:text-blue-300">Time-Based Effects</h4>
              </div>
              <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                <li>• <strong>Reverb:</strong> Adds space and ambience, like playing in different rooms</li>
                <li>• <strong>Delay:</strong> Creates echoes and repeats of your sound</li>
                <li>• <strong>Chorus:</strong> Thickens your sound by adding slightly detuned copies</li>
                <li>• <strong>Flanger:</strong> Sweeping whoosh effect with jet-like sound</li>
              </ul>
            </div>

            <div
              className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-700 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-orange-800 dark:text-orange-300">Distortion Effects</h4>
              </div>
              <ul className="space-y-2 text-sm text-orange-600 dark:text-orange-400">
                <li>• <strong>Overdrive:</strong> Warm, tube-like saturation for blues and rock</li>
                <li>• <strong>Distortion:</strong> Heavy, aggressive sound for metal and hard rock</li>
                <li>• <strong>Fuzz:</strong> Vintage, wooly distortion from the 60s</li>
                <li>• <strong>Bitcrusher:</strong> Digital lo-fi distortion for electronic sounds</li>
              </ul>
            </div>

            <div
              className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-green-800 dark:text-green-300">Dynamic Effects</h4>
              </div>
              <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                <li>• <strong>Compressor:</strong> Evens out volume levels for consistent sound</li>
                <li>• <strong>Limiter:</strong> Prevents clipping and controls peaks</li>
                <li>• <strong>Gate:</strong> Cuts off sound below a certain volume threshold</li>
                <li>• <strong>EQ:</strong> Adjusts frequency content (bass, mids, treble)</li>
              </ul>
            </div>

            <div
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-purple-800 dark:text-purple-300">Modulation Effects</h4>
              </div>
              <ul className="space-y-2 text-sm text-purple-600 dark:text-purple-400">
                <li>• <strong>Phaser:</strong> Sweeping filter effect that creates movement</li>
                <li>• <strong>Tremolo:</strong> Rhythmic volume modulation</li>
                <li>• <strong>Vibrato:</strong> Pitch modulation for expressive playing</li>
                <li>• <strong>Ring Modulator:</strong> Metallic, bell-like tones</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Use Effects */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            How to Use Effects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <div
              className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4 text-center"
            >
              <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Select Effect</h4>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Choose from available effects in the effects panel
              </p>
            </div>

            <div
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-4 text-center"
            >
              <div className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Add to Chain</h4>
              <p className="text-sm text-green-600 dark:text-green-400">
                Add the effect to your instrument&apos;s effects chain
              </p>
            </div>

            <div
              className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-4 text-center"
            >
              <div className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Adjust Params</h4>
              <p className="text-sm text-purple-600 dark:text-purple-400">
                Tweak parameters to get the perfect sound
              </p>
            </div>

            <div
              className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-xl p-4 text-center"
            >
              <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                4
              </div>
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Play & Adjust</h4>
              <p className="text-sm text-orange-600 dark:text-orange-400">
                Play your instrument and fine-tune in real-time
              </p>
            </div>
          </div>
        </div>

        {/* Effect Parameters */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Common Effect Parameters
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Universal Controls</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Wet/Dry Mix</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    Balance between original and processed signal
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Input Gain</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    Amount of signal going into the effect
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Output Level</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    Final volume after processing
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Bypass</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    Turn effect on/off without removing it
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Reverb Parameters</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Room Size</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    From small room to large cathedral
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Decay Time</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    How long the reverb tail lasts
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Damping</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    High frequency absorption
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Pre-delay</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    Gap before reverb starts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Effect Combinations */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Popular Effect Combinations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">🎸 Classic Rock Guitar</h4>
              <div className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                <div className="bg-blue-100 dark:bg-blue-800/30 p-2 rounded">
                  Overdrive → EQ (mid boost) → Delay → Reverb
                </div>
                <p>Warm overdrive drives into a midrange boost, with subtle delay and room reverb for classic rock tone.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-6">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">🎹 Ambient Keyboard</h4>
              <div className="space-y-2 text-sm text-purple-600 dark:text-purple-400">
                <div className="bg-purple-100 dark:bg-purple-800/30 p-2 rounded">
                  Chorus → Delay (long) → Reverb (large hall)
                </div>
                <p>Lush chorus adds width, long delay creates echoes, and hall reverb adds ethereal space.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">🎸 Funk Guitar</h4>
              <div className="space-y-2 text-sm text-green-600 dark:text-green-400">
                <div className="bg-green-100 dark:bg-green-800/30 p-2 rounded">
                  Compressor → Phaser → Light Overdrive
                </div>
                <p>Tight compressor for punch, phaser for movement, and light overdrive for grit.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-700 rounded-xl p-6">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">🥁 Electronic Drums</h4>
              <div className="space-y-2 text-sm text-orange-600 dark:text-orange-400">
                <div className="bg-orange-100 dark:bg-orange-800/30 p-2 rounded">
                  Gate → Bitcrusher → Delay (short) → Reverb
                </div>
                <p>Gate tightens hits, bitcrusher adds digital grit, short delay for rhythm, reverb for space.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips and Best Practices */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Effects Tips & Best Practices
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3">💡 Creative Tips</h4>
              <ul className="space-y-2 text-sm text-yellow-600 dark:text-yellow-400">
                <li>• <strong>Start subtle:</strong> Less is often more with effects</li>
                <li>• <strong>Order matters:</strong> Try different effect chain arrangements</li>
                <li>• <strong>Use automation:</strong> Change parameters during performance</li>
                <li>• <strong>Match the song:</strong> Choose effects that fit the style</li>
                <li>• <strong>Experiment:</strong> Don&apos;t be afraid to try unusual combinations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-700 rounded-xl p-6">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">⚠️ Common Mistakes</h4>
              <ul className="space-y-2 text-sm text-red-600 dark:text-red-400">
                <li>• <strong>Too much reverb:</strong> Can make mix muddy</li>
                <li>• <strong>Over-distortion:</strong> Loses musical clarity</li>
                <li>• <strong>Ignoring mix:</strong> Effects should complement others</li>
                <li>• <strong>Set and forget:</strong> Adjust during different song parts</li>
                <li>• <strong>CPU overload:</strong> Too many effects can cause latency</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Collaboration with Effects */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl p-6">
          <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3 flex items-center gap-2">
            🤝 Effects in Collaboration
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-indigo-600 dark:text-indigo-400">
              <li>• <strong>Frequency space:</strong> Use EQ to avoid instrument conflicts</li>
              <li>• <strong>Shared reverb:</strong> Use similar reverb settings for cohesion</li>
              <li>• <strong>Dynamic range:</strong> Leave room for others in the mix</li>
            </ul>
            <ul className="space-y-2 text-sm text-indigo-600 dark:text-indigo-400">
              <li>• <strong>Communicate changes:</strong> Let others know when switching effects</li>
              <li>• <strong>Complementary tones:</strong> Choose effects that work well together</li>
              <li>• <strong>Performance effects:</strong> Use effects as part of the show</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}