'use client';

import { useEffect, useState } from 'react';
import BlurText from './BlurText';

export default function TryNowLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    'let\'s get started',
    'try it now'
  ];

  useEffect(() => {
    const quoteDuration = 3000;
    
    const timer = setTimeout(() => {
      if (currentQuoteIndex < quotes.length - 1) {
        setCurrentQuoteIndex(currentQuoteIndex + 1);
      } else {
        setTimeout(() => setIsVisible(false), 1500);
      }
    }, quoteDuration);

    return () => clearTimeout(timer);
  }, [currentQuoteIndex]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-start pl-12 md:pl-24 bg-white dark:bg-gradient-to-br dark:from-[#0a0e27] dark:via-[#1a1f3a] dark:to-[#0f1629] transition-opacity duration-1000`}
    >
      {/* Skip Button - Top Right */}
      <button
        onClick={() => setIsVisible(false)}
        className="fixed top-6 right-6 px-4 py-2 transition-all duration-300 group"
      >
        <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:via-red-500 group-hover:to-pink-500 transition-all duration-300 flex items-center gap-2">
          Skip
          <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
        </span>
      </button>

      <div className="relative z-10">
        <BlurText
          key={currentQuoteIndex}
          text={quotes[currentQuoteIndex]}
          delay={50}
          animateBy="characters"
          direction="top"
          className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent"
        />
      </div>
    </div>
  );
}
