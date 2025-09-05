import React from 'react';
// import Image from 'next/image';

const SwapFeatureSection = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          Swap Instruments & Step Sequencer
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300">
          Seamlessly swap instruments with band members and enjoy a synchronized step sequencer for a better brainstorming experience.
        </p>
        {/* <div className="flex justify-center">
          <Image src="/assets/images/swap-feature.png" alt="Swap Feature" width={500} height={300} className="rounded-lg shadow-lg" />
        </div> */}
      </div>
    </section>
  );
};

export default SwapFeatureSection; 