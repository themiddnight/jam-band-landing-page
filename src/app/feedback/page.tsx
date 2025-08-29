'use client';

import FeedbackForm from '@/components/FeedbackForm';

export default function FeedbackPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex-grow">
      <main className="pt-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-12">
          <div className="container mx-auto px-4">
            {/* Mobile/Tablet Layout - Centered */}
            <div className="lg:hidden text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Help Us Improve Jam Band
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Your feedback is invaluable to us. Whether you&apos;ve found a bug, have a feature request, 
                or just want to share your thoughts, we&apos;d love to hear from you.
              </p>
            </div>
            
            {/* Desktop Layout - Two Columns */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
              {/* Left Column - Header and Text */}
              <div className="flex flex-col justify-center h-full">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Help Us Improve Jam Band
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  Your feedback is invaluable to us. Whether you&apos;ve found a bug, have a feature request, 
                  or just want to share your thoughts, we&apos;d love to hear from you.
                </p>
                <div className="text-gray-500 dark:text-gray-400">
                  <p className="text-sm">
                    Your feedback helps us create a better experience for all musicians.
                  </p>
                </div>
              </div>
              
              {/* Right Column - Form */}
              <div className="">
                <FeedbackForm />
              </div>
            </div>
            
            {/* Mobile/Tablet Form */}
            <div className="lg:hidden">
              <FeedbackForm />
            </div>
            
            {/* Mobile/Tablet Footer Text */}
            <div className="lg:hidden text-center mt-12 text-gray-500 dark:text-gray-400">
              <p className="text-sm">
                Your feedback helps us create a better experience for all musicians.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 