'use client';
import Image from 'next/image';
import { Music, Waves, Zap, Settings } from 'lucide-react';

export default function SynthSection() {
  return (
    <div className="p-6 sm:p-8">
      <div
      >
        <div className="flex items-center gap-3 ">
          <Music className="w-8 h-8 text-purple-600" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Synthesizers
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Create electronic sounds with analog and FM synthesizers
            </p>
          </div>
        </div>

        {/* Analog Synthesizer */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Waves className="w-6 h-6 text-blue-600" />
            Analog Synthesizer
          </h3>
          
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
            <Image
              src="/images/instructions/8-1-analog-synth.png"
              alt="Analog Synthesizer Interface"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center ">
            Classic analog-style synthesizer with oscillators, filters, and envelopes
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Analog Synth Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-blue-600 dark:text-blue-400">
                <li>• <strong>Multiple Oscillators:</strong> Layer different waveforms (sine, square, sawtooth)</li>
                <li>• <strong>Low-Pass Filter:</strong> Shape the brightness and character</li>
                <li>• <strong>ADSR Envelope:</strong> Control attack, decay, sustain, and release</li>
                <li>• <strong>LFO Modulation:</strong> Add movement with low-frequency oscillation</li>
              </ul>
              <ul className="space-y-2 text-blue-600 dark:text-blue-400">
                <li>• <strong>Filter Envelope:</strong> Dynamic filter sweeps and movements</li>
                <li>• <strong>Resonance Control:</strong> Add emphasis to the filter frequency</li>
                <li>• <strong>Sub Oscillator:</strong> Add deep bass foundation</li>
                <li>• <strong>Real-time Control:</strong> Tweak parameters while playing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FM Synthesizer */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-purple-600" />
            FM Synthesizer
          </h3>
          
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
            <Image
              src="/images/instructions/8-2-fm-synth.png"
              alt="FM Synthesizer Interface"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center ">
            Frequency modulation synthesizer for complex, evolving textures
          </p>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-6">
            <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">FM Synth Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-purple-600 dark:text-purple-400">
                <li>• <strong>Operator System:</strong> Complex frequency modulation routing</li>
                <li>• <strong>Algorithm Selection:</strong> Different modulation topologies</li>
                <li>• <strong>Carrier/Modulator:</strong> Operators that create and modify sound</li>
                <li>• <strong>Harmonic Complexity:</strong> Create rich, metallic, bell-like tones</li>
              </ul>
              <ul className="space-y-2 text-purple-600 dark:text-purple-400">
                <li>• <strong>Multiple Envelopes:</strong> Independent amplitude and frequency envelopes</li>
                <li>• <strong>Feedback Control:</strong> Self-modulation for added complexity</li>
                <li>• <strong>Ratio Tuning:</strong> Precise frequency relationships</li>
                <li>• <strong>DX7-inspired:</strong> Classic FM synthesis workflow</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Synthesizer Basics */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Synthesizer Fundamentals
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <div
              className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-4 text-center"
            >
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Oscillators</h4>
              <p className="text-sm text-red-600 dark:text-red-400">
                Generate the basic waveforms that create the fundamental tone
              </p>
            </div>

            <div
              className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4 text-center"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Filters</h4>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Shape the tone by removing or emphasizing certain frequencies
              </p>
            </div>

            <div
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-4 text-center"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Envelopes</h4>
              <p className="text-sm text-green-600 dark:text-green-400">
                Control how parameters change over time when you play a note
              </p>
            </div>

            <div
              className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-4 text-center"
            >
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">LFOs</h4>
              <p className="text-sm text-purple-600 dark:text-purple-400">
                Low-frequency oscillators add movement and modulation effects
              </p>
            </div>
          </div>
        </div>

        {/* Sound Design Techniques */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Sound Design Techniques
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">🎹 Classic Analog Sounds</h4>
                <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                  <li>• <strong>Bass:</strong> Sawtooth wave, low-pass filter, short decay</li>
                  <li>• <strong>Lead:</strong> Square wave, filter envelope, resonance</li>
                  <li>• <strong>Pad:</strong> Multiple oscillators, slow attack, chorus</li>
                  <li>• <strong>Arp:</strong> Short envelope, filter modulation, tempo sync</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-6">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">⚡ FM Synthesis Tips</h4>
                <ul className="space-y-2 text-sm text-purple-600 dark:text-purple-400">
                  <li>• <strong>Bell tones:</strong> High modulation index, harmonic ratios</li>
                  <li>• <strong>Bass:</strong> Low carrier frequency, sub-harmonic modulation</li>
                  <li>• <strong>Brass:</strong> Multiple operators, envelope modulation</li>
                  <li>• <strong>Digital:</strong> Integer ratios, feedback, complex algorithms</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">🎛️ Modulation Ideas</h4>
                <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                  <li>• <strong>Filter sweeps:</strong> LFO to filter cutoff frequency</li>
                  <li>• <strong>Vibrato:</strong> LFO to oscillator pitch</li>
                  <li>• <strong>Tremolo:</strong> LFO to amplitude</li>
                  <li>• <strong>PWM:</strong> LFO to pulse width for movement</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-700 rounded-xl p-6">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">🎵 Performance Tips</h4>
                <ul className="space-y-2 text-sm text-orange-600 dark:text-orange-400">
                  <li>• <strong>Real-time tweaking:</strong> Adjust filters and envelopes live</li>
                  <li>• <strong>Preset morphing:</strong> Gradually change between sounds</li>
                  <li>• <strong>Velocity sensitivity:</strong> Use velocity to control brightness</li>
                  <li>• <strong>Keyboard tracking:</strong> Make filters respond to note pitch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Synthesis Parameters */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Key Synthesis Parameters
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Oscillator Controls</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Waveform</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    Basic tone color (sine, square, saw, triangle)
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Pitch/Tune</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    Fine-tune oscillator frequency
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Pulse Width</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    Shape of square/pulse waves
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Sync</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    Hard sync between oscillators
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Filter Controls</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Cutoff Frequency</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    Where the filter starts affecting sound
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Resonance</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    Emphasis at the cutoff frequency
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Envelope Amount</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    How much envelope affects filter
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Key Tracking</span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs text-right max-w-32">
                    Filter follows keyboard pitch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Synthesizer Genres */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Synth Sounds by Genre
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 border border-pink-200 dark:border-pink-700 rounded-xl p-6">
              <h4 className="font-semibold text-pink-800 dark:text-pink-300 mb-3">🎛️ Electronic/EDM</h4>
              <ul className="space-y-2 text-sm text-pink-600 dark:text-pink-400">
                <li>• <strong>Supersaw leads:</strong> Multiple detuned sawtooth waves</li>
                <li>• <strong>Wobble bass:</strong> LFO modulating filter cutoff</li>
                <li>• <strong>Pluck synths:</strong> Fast filter envelope, short decay</li>
                <li>• <strong>Ambient pads:</strong> Slow attack, lush reverb</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">🌟 Synthwave/Retro</h4>
              <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                <li>• <strong>Analog bass:</strong> Moog-style sub oscillator</li>
                <li>• <strong>Arpeggiated sequences:</strong> Classic analog patterns</li>
                <li>• <strong>Brass stabs:</strong> PWM, filter sweep, punchy envelopes</li>
                <li>• <strong>String pads:</strong> Sawtooth waves, ensemble chorus</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">🎹 Progressive Rock</h4>
              <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                <li>• <strong>Lead lines:</strong> Moog-style monophonic leads</li>
                <li>• <strong>Orchestral pads:</strong> Multi-oscillator string sounds</li>
                <li>• <strong>Organ-style:</strong> Multiple harmonics, percussion</li>
                <li>• <strong>Modular textures:</strong> Complex modulation routing</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-6">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">🔊 Hip-Hop/Trap</h4>
              <ul className="space-y-2 text-sm text-purple-600 dark:text-purple-400">
                <li>• <strong>808 bass:</strong> Sine wave sub bass, pitch envelope</li>
                <li>• <strong>Bell leads:</strong> FM synthesis, metallic tones</li>
                <li>• <strong>Atmospheric pads:</strong> Filtered noise, ambient textures</li>
                <li>• <strong>Vocal chops:</strong> Pitched vocal samples, granular</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Collaboration with Synths */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center gap-2">
            🤝 Synthesizer Collaboration Tips
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Frequency awareness:</strong> Use different octaves and frequency ranges</li>
              <li>• <strong>Complementary timbres:</strong> Bright leads with warm pads</li>
              <li>• <strong>Dynamic playing:</strong> Use envelopes and filters expressively</li>
              <li>• <strong>Preset switching:</strong> Change sounds to match song sections</li>
            </ul>
            <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Layer with others:</strong> Synth bass with electric bass</li>
              <li>• <strong>Textural elements:</strong> Add atmosphere and ambience</li>
              <li>• <strong>Rhythmic elements:</strong> Arpeggios and sequences</li>
              <li>• <strong>Real-time performance:</strong> Tweak parameters live for expression</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}