'use client';
import Image from 'next/image';
import { Volume2, Users, Mic, Settings, Shuffle } from 'lucide-react'

export default function RoomMixSection() {
  return (
    <div className="p-6 sm:p-8">
      <div
      >
        <div className="flex items-center gap-3 ">
          <Users className="w-8 h-8 text-purple-600" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Room Member Mix (Live Jamming)
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Control audio levels during live performances in Perform Rooms
            </p>
          </div>
        </div>

        {/* Room Mix Overview */}
        <div className="mb-8 mt-6">
          <div className="bg-purple-100 dark:bg-purple-900/30 border-l-4 border-purple-600 p-4 mb-6">
            <p className="text-sm text-purple-800 dark:text-purple-300">
              <strong>Note:</strong> These advanced mixing controls are exclusive to <strong>Perform Rooms</strong>. In Arrange Rooms, the focus is on the DAW timeline, and the member section acts as a participant list.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg mb-4">
            <Image
              src="/images/instructions/7-room-member-mix.png"
              alt="Room Member Mix Interface"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center ">
            Individual volume controls and member management for Perform Room participants
          </p>
        </div>

        {/* What is Room Mix */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Understanding Room Mix
          </h3>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              In a **Perform Room**, the Room Member Mix is your personal control center for managing how you hear everyone 
              else in the jam session. Each member has their own volume slider that only affects what 
              you hear - it doesn&apos;t change what others hear.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              This allows you to create your perfect personal mix where you can hear the drummer clearly, 
              turn down an overpowering guitar, or boost a quiet keyboard player - all without affecting 
              anyone else&apos;s experience.
            </p>
          </div>
        </div>

        {/* Mix Controls */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Mix Controls Explained
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-green-800 dark:text-green-300">Volume Sliders</h4>
              </div>
              <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                <li>• <strong>Individual Control:</strong> Each member has their own volume slider</li>
                <li>• <strong>Personal Mix:</strong> Only affects what you hear, not others</li>
                <li>• <strong>Real-time Adjustment:</strong> Change levels during performance</li>
                <li>• <strong>Zero to Max:</strong> Complete control from silence to full volume</li>
              </ul>
            </div>

            <div
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-blue-800 dark:text-blue-300">Voice & Instruments</h4>
              </div>
              <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                <li>• <strong>Separate Controls:</strong> Voice chat and instruments have independent levels</li>
                <li>• <strong>Voice Priority:</strong> Boost voice for better communication</li>
                <li>• <strong>Instrument Focus:</strong> Adjust instrument levels for musical balance</li>
                <li>• <strong>Mute Options:</strong> Temporarily silence any member</li>
              </ul>
            </div>

            <div
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-purple-800 dark:text-purple-300">Member Info & Swapping</h4>
              </div>
              <ul className="space-y-2 text-sm text-purple-600 dark:text-purple-400">
                <li>• <strong>Member Names:</strong> See who&apos;s playing what instrument</li>
                <li>• <strong>Instrument Icons:</strong> Visual indicators for each player&apos;s instrument</li>
                <li>• <strong>Connection Status:</strong> See who&apos;s connected and active</li>
                <li>• <strong>Role Indicators:</strong> Room owner and member roles displayed</li>
                <li>• <strong>Instrument Swapping:</strong> Use dropdown menus to swap instruments with other members</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400">
                  <Shuffle className="w-3 h-3" />
                  <span><strong>Tip:</strong> Click the swap dropdown next to any member to exchange instruments instantly</span>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-700 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-orange-800 dark:text-orange-300">Advanced Options</h4>
              </div>
              <ul className="space-y-2 text-sm text-orange-600 dark:text-orange-400">
                <li>• <strong>Solo Mode:</strong> Listen to only one member at a time</li>
                <li>• <strong>Group Muting:</strong> Mute multiple members together</li>
                <li>• <strong>Save Presets:</strong> Remember your preferred mix settings</li>
                <li>• <strong>Reset Options:</strong> Quickly return to default levels</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Creating Your Perfect Mix */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Creating Your Perfect Mix
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <div
              className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4 text-center"
            >
              <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Listen First</h4>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Start with everyone at equal levels and listen to the overall balance
              </p>
            </div>

            <div
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-4 text-center"
            >
              <div className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Set Foundation</h4>
              <p className="text-sm text-green-600 dark:text-green-400">
                Adjust drums and bass first - they&apos;re the rhythmic foundation
              </p>
            </div>

            <div
              className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-4 text-center"
            >
              <div className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Layer Harmony</h4>
              <p className="text-sm text-purple-600 dark:text-purple-400">
                Balance keyboards, guitars, and other harmonic instruments
              </p>
            </div>

            <div
              className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4 text-center"
            >
              <div className="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                4
              </div>
              <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Fine-tune</h4>
              <p className="text-sm text-amber-600 dark:text-amber-400">
                Make final adjustments based on the music style and your role
              </p>
            </div>
          </div>
        </div>

        {/* Mix Strategies */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Mix Strategies by Role
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-700 rounded-xl p-6">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">🥁 If You&apos;re the Drummer</h4>
              <ul className="space-y-2 text-sm text-red-600 dark:text-red-400">
                <li>• <strong>Bass focus:</strong> Keep bass guitar prominent to lock the groove</li>
                <li>• <strong>Metronome priority:</strong> Make sure you can hear the click clearly</li>
                <li>• <strong>Reduce clutter:</strong> Lower busy instruments during your fills</li>
                <li>• <strong>Communication:</strong> Keep voice levels up for tempo changes</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">🎸 If You&apos;re Playing Guitar</h4>
              <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                <li>• <strong>Rhythm section:</strong> Keep drums and bass clear for timing</li>
                <li>• <strong>Frequency space:</strong> Lower other guitars in your frequency range</li>
                <li>• <strong>Solo preparation:</strong> Practice quick mix adjustments for solos</li>
                <li>• <strong>Harmonic awareness:</strong> Monitor keyboards for chord conflicts</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">🎹 If You&apos;re Playing Keys</h4>
              <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                <li>• <strong>Full spectrum:</strong> Balanced mix to hear all harmonic content</li>
                <li>• <strong>Chord awareness:</strong> Monitor guitars for harmonic coordination</li>
                <li>• <strong>Melody support:</strong> Boost lead instruments when they solo</li>
                <li>• <strong>Bass relationship:</strong> Keep bass audible for chord root clarity</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-6">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">🎤 If You&apos;re Singing</h4>
              <ul className="space-y-2 text-sm text-purple-600 dark:text-purple-400">
                <li>• <strong>Pitch reference:</strong> Keep keyboards/guitars audible for tuning</li>
                <li>• <strong>Rhythm clarity:</strong> Make sure you can feel the beat clearly</li>
                <li>• <strong>Dynamic range:</strong> Leave room to hear yourself sing</li>
                <li>• <strong>Harmony support:</strong> Balance other voices for group vocals</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Mix Issues */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Common Mix Issues & Solutions
          </h3>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  ⚠️
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem: Can&apos;t hear myself playing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Your instrument is getting buried in the mix by louder players.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded p-3">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      <strong>Solution:</strong> Lower the volume of instruments in your frequency range, 
                      or use the solo function to isolate yourself temporarily.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  ⚠️
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem: Everything sounds muddy</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Too many instruments competing in the same frequency range.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded p-3">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      <strong>Solution:</strong> Focus on the rhythm section first (drums/bass), 
                      then gradually add other instruments. Use EQ to separate frequency ranges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  ⚠️
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem: Can&apos;t stay in time</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    The rhythm section is unclear or conflicting rhythmic information.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded p-3">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      <strong>Solution:</strong> Boost the drummer and make sure the metronome is audible. 
                      Lower instruments that are rushing or dragging.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center gap-2">
            💡 Professional Mix Tips
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Start with everything low:</strong> Build your mix from the ground up</li>
              <li>• <strong>Use reference levels:</strong> Compare to professional recordings</li>
              <li>• <strong>Take breaks:</strong> Your ears get tired - fresh ears make better decisions</li>
              <li>• <strong>Focus on the music:</strong> Serve the song, not individual instruments</li>
            </ul>
            <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
              <li>• <strong>Communication is key:</strong> Talk about levels with your bandmates</li>
              <li>• <strong>Save your settings:</strong> Create presets for different songs or setups</li>
              <li>• <strong>Practice mixing:</strong> Good mixing is a skill that improves with practice</li>
              <li>• <strong>Trust your ears:</strong> If it sounds good, it is good</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}