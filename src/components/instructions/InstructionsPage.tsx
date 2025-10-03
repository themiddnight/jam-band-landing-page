'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Music, 
  Piano, 
  Guitar, 
  Drum, 
  Layers, 
  Volume2, 
  Users, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Import instruction sections
import OverviewSection from './sections/OverviewSection';
import TopSectionGuide from './sections/TopSectionGuide';
import SequencerSection from './sections/SequencerSection';
import KeyboardSection from './sections/KeyboardSection';
import GuitarSection from './sections/GuitarSection';
import DrumSection from './sections/DrumSection';
import EffectsSection from './sections/EffectsSection';
import RoomMixSection from './sections/RoomMixSection';
import SynthSection from './sections/SynthSection';

const tabs = [
  {
    id: 'overview',
    title: 'Overview',
    icon: Music,
    component: OverviewSection,
    description: 'App overview and getting started'
  },
  {
    id: 'interface',
    title: 'Interface',
    icon: Settings,
    component: TopSectionGuide,
    description: 'Understanding the main interface'
  },
  {
    id: 'sequencer',
    title: 'Sequencer',
    icon: Layers,
    component: SequencerSection,
    description: 'Step sequencer and patterns'
  },
  {
    id: 'keyboard',
    title: 'Keyboard',
    icon: Piano,
    component: KeyboardSection,
    description: 'Virtual keyboard modes and features'
  },
  {
    id: 'guitar',
    title: 'Guitar',
    icon: Guitar,
    component: GuitarSection,
    description: 'Guitar and bass instruments'
  },
  {
    id: 'drums',
    title: 'Drums',
    icon: Drum,
    component: DrumSection,
    description: 'Drum pads and percussion'
  },
  {
    id: 'effects',
    title: 'Effects',
    icon: Volume2,
    component: EffectsSection,
    description: 'Audio effects and processing'
  },
  {
    id: 'room-mix',
    title: 'Room Mix',
    icon: Users,
    component: RoomMixSection,
    description: 'Managing room members and audio'
  },
  {
    id: 'synth',
    title: 'Synthesizer',
    icon: Music,
    component: SynthSection,
    description: 'Analog and FM synthesizers'
  }
];

export default function InstructionsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];
  const ActiveComponent = activeTabData.component;

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activeTab]);

  const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
  const prevTab = currentIndex > 0 ? tabs[currentIndex - 1] : null;
  const nextTab = currentIndex < tabs.length - 1 ? tabs[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-950 dark:to-blue-950">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-2xl pt-16 pb-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="py-4">
            <div className="text-center">
              <div className="font-bold mb-4 flex flex-col">
                <h2 className="text-3xl sm:text-4xl  bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent py-3">
                  How to Use
                </h2> 
                <h1 className="text-4xl sm:text-5xl block text-gray-900 dark:text-white">
                  COLLAB - Jam Band
                </h1>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Learn how to master our virtual instruments, collaborate with others, and create amazing music together in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-20">
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-2xl">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Sections
                </h2>
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-start gap-3 p-3 rounded-lg transition-colors text-left ${
                          activeTab === tab.id
                            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="font-medium">{tab.title}</div>
                          <div className="text-xs opacity-75 mt-1">
                            {tab.description}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Mobile Tab Selector */}
          <div className="lg:hidden">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 ">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full flex items-center justify-between text-left dark:text-white"
              >
                <div className="flex items-center gap-3">
                  <activeTabData.icon className="w-5 h-5" />
                  <span className="font-medium">{activeTabData.title}</span>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`} />
              </button>
              
              {isMobileMenuOpen && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="space-y-2">
                      {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => {
                              setActiveTab(tab.id);
                              setIsMobileMenuOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left ${
                              activeTab === tab.id
                                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-sm">{tab.title}</span>
                          </button>
                        );
                      })}
                    </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0" ref={contentRef}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <ActiveComponent />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              {prevTab ? (
                <button
                  onClick={() => setActiveTab(prevTab.id)}
                  className="flex items-center gap-2 px-4 py-2 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="text-sm font-medium">{prevTab.title}</span>
                </button>
              ) : (
                <div />
              )}

              {nextTab ? (
                <button
                  onClick={() => setActiveTab(nextTab.id)}
                  className="flex items-center gap-2 px-4 py-2 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors"
                >
                  <span className="text-sm font-medium">{nextTab.title}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}