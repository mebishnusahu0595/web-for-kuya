'use client';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Kuya Data</h3>
            <p className="text-gray-600 dark:text-gray-400">Your friendly data analysis assistant</p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="glass px-6 py-3 rounded-lg text-black dark:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="https://pypi.org/project/kuya-data/"
              className="glass px-6 py-3 rounded-lg text-black dark:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
            >
              PyPI
            </a>
            <a
              href="/docs"
              className="glass px-6 py-3 rounded-lg text-black dark:text-white hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
            >
              Docs
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>Built with ❤️ for data scientists and analysts</p>
          <p className="mt-2">© 2025 Kuya Data. Making data analysis easier.</p>
        </div>
      </div>
    </footer>
  );
}
