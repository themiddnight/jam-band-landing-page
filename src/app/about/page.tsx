import type { Metadata } from "next";
import Script from 'next/script';
import { APP_URL } from "@/components/constants/navigation";

export const metadata: Metadata = {
  title: "About COLLAB - Real-time Collaborative Music Platform",
  description: "Learn about COLLAB, a Proof of Concept for real-time collaborative music creation. Built with modern web technologies including React, Next.js, Tone.js, and WebRTC to explore the possibilities of virtual jamming and collaborative music production.",
  openGraph: {
    title: "About COLLAB - Real-time Collaborative Music Platform",
    description: "Learn about COLLAB, a Proof of Concept for real-time collaborative music creation. Built with modern web technologies including React, Next.js, Tone.js, and WebRTC to explore the possibilities of virtual jamming and collaborative music production.",
    images: ["/images/og/cover-index.webp"],
  },
  keywords: [
    "COLLAB about",
    "collaborative music platform",
    "real-time music creation",
    "virtual jamming technology",
    "music collaboration POC",
    "web audio development",
    "React music app",
    "Tone.js application",
    "WebRTC music",
    "music technology innovation"
  ],
};

export default function AboutPage() {
  // Structured Data for About page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About COLLAB - Real-time Collaborative Music Platform",
    "description": "Learn about COLLAB, a Proof of Concept for real-time collaborative music creation. Built with modern web technologies to explore the possibilities of virtual jamming.",
    "url": "https://jam-band-landing-page.vercel.app/about",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "COLLAB - Jam Band",
      "description": "A Proof of Concept for real-time collaborative music creation platform",
      "applicationCategory": "MusicApplication",
      "author": {
        "@type": "Person",
        "name": "Pathompong Thitithan",
        "url": "http://themiddnight-resume.vercel.app/resumes/themiddnight-dev"
      },
      "programmingLanguage": [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js"
      ],
      "runtimePlatform": "Web Browser",
      "softwareRequirements": "Modern web browser with Web Audio API support"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://jam-band-landing-page.vercel.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://jam-band-landing-page.vercel.app/about"
        }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <Script
        id="about-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            About COLLAB
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A Proof of Concept for real-time collaborative music creation
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What is COLLAB?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              COLLAB began as a Proof of Concept (POC)—a simple idea to explore real-time musical collaboration over the web. What started as an experiment to see if users could play instruments together simultaneously has evolved into a high-performance music production ecosystem.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Today, it bridges the gap between spontaneous jamming in <strong>Perform Rooms</strong> and granular, professional arrangement in <strong>Arrange Rooms</strong>, providing a seamless flow from live inspiration to recorded reality.
            </p>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <p className="text-sm text-purple-700 dark:text-purple-300 leading-relaxed italic">
                🚀 <span className="font-bold">COLLAB</span> is a high-fidelity Proof of Concept (POC) for a next-generation music platform developed through <span className="font-bold">&quot;vibe-coding&quot;</span>—a synergy between advanced AI agents and creative musical vision. What began as a passion project has evolved into a showcase of real-time synchronization and collaborative DAW capabilities, built at high velocity to bridge the gap between imagination and production-ready software.
              </p>
            </div>
          </section>

          {/* Objectives / Targeting */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Objectives & Targeting
            </h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-purple-500 rounded-full mr-3"></span>
                <span><strong>Real-time Synchronized Jamming:</strong> Play high-quality virtual instruments together with ultra-low latency and integrated voice chat.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-purple-500 rounded-full mr-3"></span>
                <span><strong>Collaborative DAW Production:</strong> A full-featured, browser-based workstation for arranging, editing, and producing multitrack projects.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-purple-500 rounded-full mr-3"></span>
                <span><strong>Musical Intelligence:</strong> Integrated music theory assistance and scale synchronization for harmonized brainstorming sessions.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-purple-500 rounded-full mr-3"></span>
                <span><strong>Open Evolution:</strong> A community-driven engine featuring project forking, intelligent contributor tracking, and collaborative versioning.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-purple-500 rounded-full mr-3"></span>
                <span><strong>Hardware-Software Synergy:</strong> Seamless MIDI controller integration and multi-device connectivity for flexible performance setups.</span>
              </li>
            </ul>
          </section>

          {/* Roadmap */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Roadmap
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-green-500 from-[33%] via-purple-500 via-[66%] to-blue-500"></div>

              {/* PoC Phase - Combined Current + Improvements */}
              <div className="relative flex items-start mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
                      PoC Phase - Real-time Jamming Platform
                    </h3>
                    <span className="ml-3 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                      LIVE
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Full-featured collaborative music platform with advanced real-time capabilities.
                  </p>
                  
                  <div className="space-y-4">
                    {/* Core Jamming Experience */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        🎸 Core Jamming & Interaction
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          5 Virtual Instruments (Guitar, Bass, Keys, Drums, Synth)
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Ultra-low latency WebRTC Voice Chat
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Real-time Collaborative Step Sequencer
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Music Theory Assistance (Scale Sync, Chord Triggers)
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          MIDI Controller & Keyboard mapping support
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Per-user Mixer with Individual effect chains
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 mt-4">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      ✨ <strong>Ready for Live Action!</strong> Experience real-time jamming with friends. All core jamming features are live and battle-tested.
                    </p>
                  </div> */}
                </div>
              </div>

              {/* Phase 1 */}
              <div className="relative flex items-start mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
                      Phase 1: Arrange Room (Collaborative DAW)
                    </h3>
                    <span className="ml-3 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                      LIVE
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Professional-grade collaborative digital audio workstation for production & arrangement.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        🎹 Production & DAW Engine
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Multi-track Arrangement Grid with Region Management
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Advanced Ephemeral/Commit Sync Pattern
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Real-time Collaborative Project Locking (Mutex)
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          High-quality Audio Export & Mixdown (.wav)
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Project Forking & Versioning System
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Intelligent Contributor Tracking & Credits
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        🌐 Ecosystem & Security
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Session Persistence & Reconnection Windows
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          Granular Project Privacy & Sharing Settings
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative flex items-start mb-12">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">🚀</span>
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Phase 2: Scale & Community
                    </h3>
                    <span className="ml-3 px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium">
                      FUNDING NEEDED
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Professional development with specialized team and funding
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        🎼 Enhanced Music Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></span>
                          More music scales (beyond major/minor)
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></span>
                          More (custom) instruments
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></span>
                          Custom / recorded sample sounds
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></span>
                          Advanced modular synthesizer
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        🌐 Infrastructure & Community
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></span>
                          Broader servers for low latency
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></span>
                          100+ audience streaming capability
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></span>
                          Accounts, band party, virtual avatars
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></span>
                          Band-audience interactivity
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></span>
                          AI pattern generation assist
                        </div>
                        <div className="flex items-center">
                          <span className="ml-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></span>
                          Monetization features
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">📱</span>
                </div>
                <div className="ml-6 flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                      Phase 3: Native Apps
                    </h3>
                    <span className="ml-3 px-3 py-1 bg-gradient-to-r from-blue-100 to-pink-100 dark:from-blue-900/30 dark:to-pink-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                      FUTURE
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Professional-grade native application development
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-pink-50 dark:from-blue-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center text-sm text-blue-700 dark:text-blue-300">
                      <span className="ml-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full mr-3"></span>
                      VST / Audio Unit plugin support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Knowledge Requirements */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Team Knowledge Requirements
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Some knowledge of music theory</li>
              <li>
                Some knowledge of music production technology (MIDI standards, synthesizer, audio bus / FX chaining, etc.)
              </li>
              <li>Real-time communication networking (WebSocket, UDP / WebRTC, etc.)</li>
              <li>JavaScript Audio API</li>
              <li>
                Strong knowledge about the tech stack and project architecture for scaling
              </li>
              <li>VST / Audio Unit API (future mobile app)</li>
            </ul>
          </section>

          {/* Features */}
          {/* <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Multiple virtual instruments (Guitar, Bass, Keyboard, Drums, Synthesizer)</li>
                <li>• Real-time collaborative jamming sessions</li>
                <li>• Synchronized metronome with tap tempo and personal controls</li>
                <li>• Step sequencer for pattern-based music creation</li>
                <li>• WebRTC voice chat with connection health monitoring</li>
                <li>• MIDI controller support and device management</li>
              </ul>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Preset management for instruments</li>
                <li>• Room-based collaboration with role management</li>
                <li>• Chat system for band communication</li>
                <li>• Scale and chord selection with music theory helpers</li>
                <li>• Network diagnostics and performance monitoring</li>
                <li>• PWA support</li>
              </ul>
            </div>
          </section> */}

          {/* Coming Soon */}
          {/* <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Coming Soon
            </h2>
            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <p className="text-sm text-purple-700 dark:text-purple-300 leading-relaxed mb-3">
                🚧 <span className="font-bold">Next on the roadmap:</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-xs text-purple-700 dark:text-purple-300">
                  <li>• Audio effects (reverb, delay, distortion, etc.)</li>
                  <li>• Mixer controls in the user list for individual volume management</li>
                  <li>• Advanced audio recording and export capabilities</li>
                </ul>
                <ul className="space-y-1 text-xs text-purple-700 dark:text-purple-300">
                  <li>• More advanced synthesizers (FM, wavetable, granular synthesis)</li>
                  <li>• Advanced modulation and LFO controls</li>
                  <li>• Custom wavetable editor and import</li>
                </ul>
              </div>
            </div>
          </section> */}

          {/* Server Information */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Server Information
            </h2>
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                <span className="font-medium">🌏 Server Location:</span>{" "}
                Southeast Asia
                <br />
                <span className="font-medium">⚡ Latency Note:</span> Connection
                latency may vary depending on your geographical location. Users
                closer to Southeast Asia will experience lower latency for
                optimal real-time jamming experience.
              </p>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tech Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div>
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Frontend
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• React 19 + TypeScript</li>
                  <li>• Vite 7 (Build tool)</li>
                  <li>• Tailwind CSS 4</li>
                  <li>• DaisyUI 5 (Component library)</li>
                  <li>• Zustand 5 (State management)</li>
                  <li>• React Router DOM 7</li>
                  <li>• TanStack Query 5 (Data fetching)</li>
                </ul>
              </div>

              {/* Audio & Music */}
              <div>
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Audio & Music
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Tone.js 15 (Audio framework)</li>
                  <li>• Smplr 0.16 (Sample player)</li>
                  <li>• Web Audio API</li>
                  <li>• MIDI support</li>
                  <li>• WebRTC (Voice communication)</li>
                </ul>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Backend
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Node.js + Express 4</li>
                  <li>• TypeScript 5</li>
                  <li>• Socket.IO 4.8 (Real-time communication)</li>
                  {/* <li>• Winston 3 (Logging)</li> */}
                  <li>• Joi 17 (Validation)</li>
                  <li>• Express Rate Limit (Security)</li>
                </ul>
              </div>

              {/* Landing Page */}
              <div>
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Landing Page
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Next.js 15.5 + React 19</li>
                  <li>• Tailwind CSS 4</li>
                  <li>• Framer Motion 11 (Animations)</li>
                  <li>• Prisma 6 (Database ORM)</li>
                  <li>• Zod 4 (Schema validation)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Additional Features */}
          {/* <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Additional Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Development & Testing
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Comprehensive test suites with Jest 30</li>
                  <li>• Vitest 2 for frontend testing</li>
                  <li>• Testing Library for React components</li>
                  <li>• Load testing and performance monitoring</li>
                  <li>• HTTPS WebRTC testing capabilities</li>
                  <li>• Code coverage reporting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Infrastructure & Deployment
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Docker containerization support</li>
                  <li>• Railway deployment integration</li>
                  <li>• Vercel hosting for frontend</li>
                  <li>• SSL/TLS encryption for secure connections</li>
                  <li>• Environment-based configuration</li>
                  <li>• Automated build and deployment pipelines</li>
                </ul>
              </div>
            </div>
          </section> */}

          {/* Footer */}
          <section className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
              This is a personal project by{" "}
              <a
                href="http://themiddnight-resume.vercel.app/resumes/themiddnight-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                Pathompong Thitithan
              </a>
              . Built with modern web technologies to explore the possibilities of
              collaborative music creation online.
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Try COLLAB Now
              </a>
              {/* <a
                href="https://github.com/themiddnight/jam-band-fe"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                View on GitHub
              </a> */}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 