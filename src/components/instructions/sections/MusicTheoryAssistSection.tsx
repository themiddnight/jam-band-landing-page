'use client';
import { Sparkles, Music, Grid, Activity } from 'lucide-react';

export default function MusicTheoryAssistSection() {
  return (
    <div className="p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-8 h-8 text-purple-600" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Music Theory Assistance
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Produce professional-sounding music regardless of skill level
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Scale Synchronization */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Music className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Scale Synchronization</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="prose dark:prose-invert text-sm text-gray-600 dark:text-gray-300">
              <p>
                In a collaborative room, the Room Owner can set a global key and scale. Jam Band then intelligently synchronizes all instruments to this scale.
              </p>
              <ul>
                <li><strong>Visual Guides:</strong> Keys outside the scale are dimmed or color-coded.</li>
                <li><strong>Auto-Mapping:</strong> Triggered notes are automatically shifted to the nearest valid note in the selected scale.</li>
                <li><strong>Universal Sync:</strong> All collaborators play in harmony instantly.</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg aspect-video flex items-center justify-center border border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500">[Screenshot: Scale Selection Panel]</p>
            </div>
          </div>
        </section>

        {/* Chord Trigger Matrix */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Grid className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Chord Trigger Matrix</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg aspect-video flex items-center justify-center border border-gray-200 dark:border-gray-700 order-2 lg:order-1">
              <p className="text-xs text-gray-500">[Screenshot: Keyboard Chord Helper]</p>
            </div>
            <div className="prose dark:prose-invert text-sm text-gray-600 dark:text-gray-300 order-1 lg:order-2">
              <p>
                Available in Keyboard and Synth modes, our Chord Helpers allow you to play complex chord progressions with just one finger.
              </p>
              <ul>
                <li><strong>Diatonic Harmony:</strong> Automatically generates I, IV, V, and other common chords in your current key.</li>
                <li><strong>Custom Extensions:</strong> Add 7ths, 9ths, or suspensions with simple toggle switches.</li>
                <li><strong>Visual Feedback:</strong> Watch the notes of the chord light up as you trigger them.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Intelligent Mapping */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Intelligent Mapping</h3>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-xl border border-blue-100 dark:border-blue-900">
            <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
              When playing on a virtual guitar or keyboard, the system &quot;locks&quot; your input to musical intervals that sound good together. This is powered by our real-time music theory engine that calculates intervals on the fly based on the room&apos;s root key.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
