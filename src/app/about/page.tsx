import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About COLLAB - Real-time Collaborative Music Platform",
  description: "Learn about COLLAB, a Proof of Concept for real-time collaborative music creation. Built with modern web technologies to explore the possibilities of virtual jamming.",
  openGraph: {
    title: "About COLLAB - Real-time Collaborative Music Platform",
    description: "Learn about COLLAB, a Proof of Concept for real-time collaborative music creation. Built with modern web technologies to explore the possibilities of virtual jamming.",
    images: ["/images/og/cover-index.webp"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
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
              COLLAB is a Proof of Concept (POC) for my idea to create an
              application where users can jam together in real-time. This
              collaborative music platform allows multiple users to play
              different instruments simultaneously, creating a virtual band
              experience through the web.
            </p>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <p className="text-sm text-purple-700 dark:text-purple-300 leading-relaxed">
                🎵 This is a <span className="font-bold">vibe-coding</span>{" "}
                project (Even this content was generated with a little help
                from AI! 🤓📝) - built while jamming to music and exploring the
                creative intersection of coding and music production! 🤖✨
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
          <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
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
          </section>

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
                href="https://jam-band-fe.vercel.app/"
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