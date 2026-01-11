'use client';

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-1 sm:mb-2">Kuya Data</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Your friendly data analysis assistant</p>
          </div>

          <div className="flex gap-3 sm:gap-6">
            <a
              href="#"
              className="glass px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base text-black dark:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
              GitHub
            </a>
            <a
              href="https://pypi.org/project/kuya-data/"
              className="glass px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base text-black dark:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
              PyPI
            </a>
            <a
              href="/docs"
              className="glass px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base text-black dark:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
              Docs
            </a>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
          <p>Built with ❤️ for data scientists and analysts</p>
          <p className="mt-1 sm:mt-2">© 2025 Kuya Data. Making data analysis easier.</p>
        </div>
      </div>
    </footer>
  );
}
