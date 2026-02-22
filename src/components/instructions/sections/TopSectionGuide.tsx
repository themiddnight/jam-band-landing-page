'use client';
import Image from 'next/image';
import { Settings, Mic, Music, Volume2, Clock, Keyboard } from 'lucide-react';

export default function TopSectionGuide() {
  return (
    <div className="p-6 sm:p-8">
      <div>
        <div className="flex items-center gap-3 ">
          <Settings className="w-8 h-8 text-purple-600" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Interface Guide
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Understanding the main interface and controls
            </p>
          </div>
        </div>

        {/* Top Section Overview */}
        <div className="mb-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
            <Image
              src="/images/instructions/1-1-top-section.png"
              alt="Top Section Overview"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            The main control panel with all essential features
          </p>
        </div>

        {/* Voice Input Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Mic className="w-6 h-6 text-green-600" />
            Voice Input & Settings
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-3">
                <Image
                  src="/images/instructions/1-2-voice-input-info.png"
                  alt="Voice Input Information"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Voice input status and connection information
              </p>
            </div>
            
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-3">
                <Image
                  src="/images/instructions/1-3-voice-input-settings.png"
                  alt="Voice Input Settings"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Microphone settings and audio controls
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6">
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Voice Chat Features:</h4>
            <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
              <li>• <strong>Ultra-low latency:</strong> Optimized for musical timing and real-time performance</li>
              <li>• <strong>WebRTC technology:</strong> Direct peer-to-peer connection for minimal delay</li>
              <li>• <strong>Clean Mode:</strong> Advanced noise reduction and echo cancellation for cleaner audio</li>
              <li>• <strong>Quality vs Latency:</strong> Prioritizes speed over audio quality for better sync</li>
              <li>• <strong>Device selection:</strong> Choose your preferred microphone and speakers</li>
              <li>• <strong>Real-time monitoring:</strong> See connection status and audio levels</li>
              <li>• <strong>Automatic gain control:</strong> Prevents audio clipping and maintains consistent levels</li>
            </ul>
          </div>
        </div>

        {/* Instrument & Room Controls */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Music className="w-6 h-6 text-purple-600" />
            Room & Recording Controls
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-3">
                <Image
                  src="/images/instructions/1-4-instrument-live.png"
                  alt="Perform Room Controls"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Perform Room: Focused on real-time jamming
              </p>
            </div>
            
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-3 bg-gray-100 dark:bg-gray-800 flex items-center justify-center aspect-[3/2]">
                <p className="text-xs text-gray-400">[Screenshot: Arrange Room Toolbar]</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Arrange Room: Focused on production & recording
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-6">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">Jamming (Perform):</h4>
              <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                <li>• <strong>Live/Practice Toggle:</strong> Control who hears your performance.</li>
                <li>• <strong>Swap Instrument:</strong> Instantly switch roles with other members.</li>
                <li>• <strong>Voice Priority:</strong> Prioritize chat for better coordination.</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Production (Arrange):</h4>
              <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <li>• <strong>Record Engine:</strong> Captures audio regions with high fidelity.</li>
                <li>• <strong>Split/Trim:</strong> Basic editing tools for audio regions.</li>
                <li>• <strong>Mixdown:</strong> Export your final arrangement to .WAV.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* MIDI Device Connection */}
        <div className="mb-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-4 flex items-center gap-2">
            <Keyboard className="w-6 h-6" />
            MIDI Device Connection
          </h3>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Connect external MIDI controllers, keyboards, and devices for full tactile control over virtual instruments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Setup Process</h4>
                <ol className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-decimal list-inside">
                  <li>Connect your MIDI device via USB or MIDI interface</li>
                  <li>Grant browser MIDI permissions when prompted</li>
                  <li>Select your device from the MIDI input menu</li>
                  <li>Choose your virtual instrument</li>
                  <li>Play directly from your controller</li>
                </ol>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Compatible Devices</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• MIDI keyboards and controllers</li>
                  <li>• Drum pads and electronic kits</li>
                  <li>• Wind controllers and breath sensors</li>
                  <li>• Guitar MIDI pickups</li>
                  <li>• Any standard MIDI-compatible device</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>Pro Tip:</strong> Use MIDI learn mode to map controller knobs and faders to instrument parameters and effects for real-time performance control.
              </p>
            </div>
          </div>
          </div>        {/* Additional Controls */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Additional Controls
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-3">
                <Image
                  src="/images/instructions/1-6-metronome.png"
                  alt="Metronome Controls"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Synchronized metronome with BPM control
              </p>
            </div>
            
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-3">
                <Image
                  src="/images/instructions/1-7-scale-selector.png"
                  alt="Scale Selector"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Scale selector for music theory assistance
              </p>
            </div>
            
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-3">
                <Image
                  src="/images/instructions/1-8-instrument-select.png"
                  alt="Instrument Selection"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Quick instrument switching and categories
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800 dark:text-blue-300">Metronome</h4>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                Synchronized timing reference shared across all room members for perfect coordination.
              </p>
              <div className="text-xs text-blue-600 dark:text-blue-400">
                <strong>Tempo Setting:</strong> Click BPM number to type, use +/- buttons, or tap tempo by clicking the beat indicator multiple times
              </div>
            </div>
            
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Music className="w-5 h-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800 dark:text-amber-300">Scale Helper & Quick Switch</h4>
              </div>
              <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
                Music theory assistance with scale highlighting and chord suggestions for better playing.
              </p>
              <div className="text-xs text-amber-600 dark:text-amber-400">
                <strong>Quick Switch:</strong> Use keyboard shortcuts (1-9) to instantly change instruments during performance
              </div>
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Volume2 className="w-5 h-5 text-indigo-600" />
                <h4 className="font-semibold text-indigo-800 dark:text-indigo-300">MIDI Integration</h4>
              </div>
              <p className="text-sm text-indigo-700 dark:text-indigo-300">
                Connect external MIDI controllers and keyboards for full tactile control over virtual instruments.
              </p>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center gap-2">
            💡 Pro Tips
          </h4>
          <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
            <li>• <strong>Start with Practice Mode:</strong> Get familiar with instruments before going live</li>
            <li>• <strong>Test Voice Chat:</strong> Make sure your microphone works before starting a session</li>
            <li>• <strong>Use Scale Helper:</strong> Enable scale highlighting to play in harmony with others</li>
            <li>• <strong>Sync with Metronome:</strong> Keep everyone in time by following the shared beat</li>
            <li>• <strong>Quick Switching:</strong> Use keyboard shortcuts to change instruments during performance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}