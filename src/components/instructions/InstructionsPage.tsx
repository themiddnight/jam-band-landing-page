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
  ChevronRight,
  Layout,
  Sparkles,
  FileMusic,
  ChevronDown
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
import ModesSection from './sections/ModesSection';
import MusicTheoryAssistSection from './sections/MusicTheoryAssistSection';
import ArrangeRoomSection from './sections/ArrangeRoomSection';

interface Tab {
  id: string;
  title: string;
  icon: React.ElementType;
  component: React.ComponentType;
  description: string;
}

interface Category {
  id: string;
  title: string;
  tabs: Tab[];
}

const categories: Category[] = [
  {
    id: 'getting-started',
    title: 'GETTING STARTED',
    tabs: [
      {
        id: 'overview',
        title: 'Overview',
        icon: Music,
        component: OverviewSection,
        description: 'App overview and mission'
      },
      {
        id: 'interface',
        title: 'Interface',
        icon: Settings,
        component: TopSectionGuide,
        description: 'Understanding the main UI'
      },
      {
        id: 'modes',
        title: 'Experience Modes',
        icon: Layout,
        component: ModesSection,
        description: 'Perform vs Arrange Rooms'
      }
    ]
  },
  {
    id: 'musical-core',
    title: 'MUSICAL CORE',
    tabs: [
      {
        id: 'music-theory',
        title: 'Music Theory',
        icon: Sparkles,
        component: MusicTheoryAssistSection,
        description: 'Scales and harmony helpers'
      },
      {
        id: 'keyboard',
        title: 'Keyboard',
        icon: Piano,
        component: KeyboardSection,
        description: 'Virtual keyboard & chord matrix'
      },
      {
        id: 'guitar',
        title: 'Guitar/Bass',
        icon: Guitar,
        component: GuitarSection,
        description: 'Stringed instruments guide'
      },
      {
        id: 'drums',
        title: 'Drums',
        icon: Drum,
        component: DrumSection,
        description: 'Drum pads and percussion'
      },
      {
        id: 'synth',
        title: 'Synthesizer',
        icon: Music,
        component: SynthSection,
        description: 'Analog and FM synthesizers'
      }
    ]
  },
  {
    id: 'workflows',
    title: 'WORKFLOWS',
    tabs: [
      {
        id: 'sequencer',
        title: 'Sequencer',
        icon: Layers,
        component: SequencerSection,
        description: 'Step sequencer and patterns'
      },
      {
        id: 'effects',
        title: 'Audio Effects',
        icon: Volume2,
        component: EffectsSection,
        description: 'FX chains and processing'
      },
      {
        id: 'room-mix',
        title: 'Room Mix',
        icon: Users,
        component: RoomMixSection,
        description: 'Managing roles and audio'
      },
      {
        id: 'arrange-daw',
        title: 'Arrange Room',
        icon: FileMusic,
        component: ArrangeRoomSection,
        description: 'Collaborative DAW production'
      }
    ]
  }
];

// Flatten tabs for navigation
const allTabs = categories.flatMap(cat => cat.tabs);

export default function InstructionsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['getting-started', 'musical-core', 'workflows']);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeTabData = allTabs.find(tab => tab.id === activeTab) || allTabs[0];
  const ActiveComponent = activeTabData.component;

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activeTab]);

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const currentIndex = allTabs.findIndex(tab => tab.id === activeTab);
  const prevTab = currentIndex > 0 ? allTabs[currentIndex - 1] : null;
  const nextTab = currentIndex < allTabs.length - 1 ? allTabs[currentIndex + 1] : null;

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-xl flex flex-col max-h-[calc(100vh-8rem)]">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6 px-2 flex-shrink-0">
                  Knowledge Base
                </h2>
                <nav className="space-y-6 overflow-y-auto scrollbar-hide px-2">
                  {categories.map((category) => (
                    <div key={category.id} className="space-y-2">
                      <button 
                        onClick={() => toggleCategory(category.id)}
                        className="w-full flex items-center justify-between px-2 py-1 text-[11px] font-black tracking-widest text-gray-400 dark:text-gray-500 uppercase transition-colors hover:text-purple-500"
                      >
                        {category.title}
                        <ChevronDown className={`w-3 h-3 transition-transform ${expandedCategories.includes(category.id) ? '' : '-rotate-90'}`} />
                      </button>
                      
                      {expandedCategories.includes(category.id) && (
                        <div className="space-y-1">
                          {category.tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                              <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all text-left group ${
                                  activeTab === tab.id
                                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-200 dark:shadow-none translate-x-1'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:shadow-sm'
                                }`}
                              >
                                <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${activeTab === tab.id ? 'text-white' : 'text-purple-500 group-hover:scale-110 transition-transform'}`} />
                                <div className="min-w-0">
                                  <div className="font-semibold text-sm">{tab.title}</div>
                                  <div className={`text-[10px] opacity-75 mt-1 truncate ${activeTab === tab.id ? 'text-purple-100' : ''}`}>
                                    {tab.description}
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
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
                  <activeTabData.icon className="w-5 h-5 text-purple-600" />
                  <span className="font-bold">{activeTabData.title}</span>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`} />
              </button>
              
              {isMobileMenuOpen && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 max-h-[60vh] overflow-y-auto">
                    {categories.map((category) => (
                      <div key={category.id} className="mb-4">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-2">
                          {category.title}
                        </div>
                        <div className="space-y-1">
                          {category.tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                              <button
                                key={tab.id}
                                onClick={() => {
                                  setActiveTab(tab.id);
                                  setIsMobileMenuOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-left ${
                                  activeTab === tab.id
                                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                              >
                                <Icon className="w-4 h-4 flex-shrink-0" />
                                <span className="text-sm font-medium">{tab.title}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0" ref={contentRef}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden min-h-[600px]">
              <ActiveComponent />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 px-2">
              {prevTab ? (
                <button
                  onClick={() => setActiveTab(prevTab.id)}
                  className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-x-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Previous</div>
                    <div className="text-sm font-bold">{prevTab.title}</div>
                  </div>
                </button>
              ) : (
                <div />
              )}

              {nextTab ? (
                <button
                  onClick={() => setActiveTab(nextTab.id)}
                  className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all hover:translate-x-1"
                >
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Next</div>
                    <div className="text-sm font-bold">{nextTab.title}</div>
                  </div>
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