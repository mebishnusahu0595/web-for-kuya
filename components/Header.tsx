'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 sm:py-4">
      <nav className="max-w-7xl mx-auto glass dark:bg-gray-900/80 dark:backdrop-blur-xl rounded-2xl sm:rounded-full px-3 sm:px-8 py-3 sm:py-4 flex items-center justify-between shadow-2xl dark:border dark:border-gray-700">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-lg sm:text-xl">K</span>
          </div>
          <span className="text-base sm:text-xl font-bold text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors hidden xs:inline">
            Kuya Data
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className={`px-3 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
              pathname === '/'
                ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                : 'text-black dark:text-white hover:bg-white/50 dark:hover:bg-gray-700/50'
            }`}
          >
            <span className="hidden sm:inline">Home</span>
            <span className="sm:hidden">🏠</span>
          </Link>
          <Link
            href="/try-once"
            className={`px-3 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
              pathname === '/try-once'
                ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                : 'text-black dark:text-white hover:bg-white/50 dark:hover:bg-gray-700/50'
            }`}
          >
            <span className="hidden sm:inline">Try Once</span>
            <span className="sm:hidden">▶️</span>
          </Link>
          <Link
            href="/docs"
            className={`px-3 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
              pathname === '/docs'
                ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                : 'text-black dark:text-white hover:bg-white/50 dark:hover:bg-gray-700/50'
            }`}
          >
            <span className="hidden sm:inline">Docs</span>
            <span className="sm:hidden">📖</span>
          </Link>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-1 sm:ml-2 p-2 sm:p-3 rounded-full bg-white/50 dark:bg-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-600/70 transition-all duration-300 hover:scale-110"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon size={18} className="text-black dark:text-white" />
            ) : (
              <Sun size={18} className="text-black dark:text-white" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
