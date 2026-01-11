'use client';

import SplashCursor from '@/components/SplashCursor';
import Aurora from '@/components/Aurora';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Installation from '@/components/Installation';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#0a0e27] dark:via-[#1a1f3a] dark:to-[#0f1629] overflow-hidden transition-colors duration-300">
      <Loader />
      
      {/* Aurora Background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <SplashCursor />
      <Header />
      
      {/* Floating background particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 150}, ${Math.random() * 100 + 200}, 0.3)`,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 8 + 's',
              animationDuration: Math.random() * 10 + 8 + 's',
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Hero />
        <Features />
        <Installation />
        <Footer />
      </div>
    </main>
  );
}
