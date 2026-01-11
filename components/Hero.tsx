'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-6xl w-full text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-black dark:text-white tracking-tight animate-float">
            Kuya Data
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light">
            Smart Python Data Analysis Library
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A practical Python library built on top of Pandas — making data cleaning, 
            exploratory analysis, and visualization as easy as 1-2 lines of code
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <InstallCommand />
          
          <Link 
            href="/docs"
            className="glass px-8 py-4 rounded-xl text-black dark:text-white font-semibold hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-glow"
          >
            View Documentation →
          </Link>
        </div>

        {/* Floating 3D elements */}
        <div className="hidden lg:block absolute top-20 left-10 animate-float" style={{animationDelay: '0s'}}>
          <div className="glass rounded-2xl p-6 rotate-12 shadow-2xl">
            <code className="text-sm text-black dark:text-green-400">df.clean_missing()</code>
          </div>
        </div>
        
        <div className="hidden lg:block absolute top-40 right-20 animate-float" style={{animationDelay: '1s'}}>
          <div className="glass rounded-2xl p-6 -rotate-6 shadow-2xl">
            <code className="text-sm text-black dark:text-green-400">df.magic_analyze()</code>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-40 left-20 animate-float" style={{animationDelay: '2s'}}>
          <div className="glass rounded-2xl p-6 rotate-6 shadow-2xl">
            <code className="text-sm text-black dark:text-green-400">df.quick_plot()</code>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const command = "pip install kuya-data";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass rounded-xl px-6 py-4 flex items-center gap-4 group hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 animate-glow">
      <code className="text-black dark:text-white font-mono text-lg">{command}</code>
      <button
        onClick={copyToClipboard}
        className="glass px-4 py-2 rounded-lg text-black dark:text-white hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-200 transform hover:scale-110"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
