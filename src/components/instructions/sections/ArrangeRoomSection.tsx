'use client';
import { FileMusic, Layers, Lock, GitFork, Save, Download, Users } from 'lucide-react';

export default function ArrangeRoomSection() {
  return (
    <div className="p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <FileMusic className="w-8 h-8 text-blue-600" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Arrange Room (Collaborative DAW)
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Advanced production workflows and project management
          </p>
        </div>
      </div>

      <div className="space-y-10">
        {/* The Timeline */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">The Multi-Track Timeline</h3>
          </div>
          <div className="prose dark:prose-invert text-sm text-gray-600 dark:text-gray-300 max-w-none">
            <p>
              The Arrange Room is built around a powerful multi-track timeline where you can arrange recordings from jam sessions or create new musical ideas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-1">Regions</h4>
                <p className="text-xs">Audio parts can be moved, split, and duplicated across the timeline.</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-1">Track Lanes</h4>
                <p className="text-xs">Each instrument or performer has a dedicated lane for clear arrangement.</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-1">Live Waveforms</h4>
                <p className="text-xs">Visualise your audio assets directly on the grid for precision editing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Governance & Locking */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Collaborative Locking</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              To prevent sync conflicts, Arrange Rooms use a <strong>Project Locking</strong> system. When someone is making significant changes to the timeline, the project is locked to their session, ensuring data integrity across the band.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GitFork className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Project Forking</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Found a public project you love? You can <strong>Fork</strong> it to create your own personal copy. This allows you to remix, re-arrange, and build upon other musicians&apos; work while keeping the original project intact.
            </p>
          </div>
        </section>

        {/* Saving & Export */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Save className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Saving & Contributor Credits</h3>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <p className="text-sm opacity-90 leading-relaxed mb-4">
                  Jam Band automatically tracks every musician who contributes to a project. When you save your changes, your name is added to the <strong>Contributor List</strong>, which is displayed publicly on the project&apos;s detail page.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    <span className="text-xs font-medium">Export to .WAV</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Save className="w-5 h-5" />
                    <span className="text-xs font-medium">Real-time sync</span>
                  </div>
                </div>
              </div>
              <div className="w-48 h-32 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                <p className="text-[10px] text-white/50">[Diagram: Save Flow]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Member List Note */}
        <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-gray-500" />
            <h4 className="font-bold text-gray-900 dark:text-white">Member List</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            In an Arrange Room, look at the participants list to see who is currently in the session. Unlike Perform Rooms, there are no individual volume sliders here, as the focus is on a single, shared production mix on the DAW timeline.
          </p>
        </div>
      </div>
    </div>
  );
}
