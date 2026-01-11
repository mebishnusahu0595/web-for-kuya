'use client';

export default function Installation() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-black dark:text-white mb-16 text-shadow">
          Quick Start
        </h2>

        <div className="space-y-8">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Installation</h3>
            <div className="bg-black dark:bg-gray-950 text-green-400 p-6 rounded-lg font-mono">
              $ pip install kuya-data
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://pypi.org/project/kuya-data/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold"
              >
                📦 View on PyPI - Python Package Documentation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Basic Usage</h3>
            <div className="bg-black dark:bg-gray-950 text-white p-6 rounded-lg font-mono text-sm space-y-2">
              <div className="text-gray-400"># Import and load data</div>
              <div><span className="text-purple-400">import</span> kuya</div>
              <div>df = kuya.load(<span className="text-yellow-300">&quot;data.csv&quot;</span>)</div>
              <br/>
              <div className="text-gray-400"># Clean and analyze</div>
              <div>df.clean_missing(<span className="text-yellow-300">strategy=&quot;auto&quot;</span>)</div>
              <div>df.fix_dtypes()</div>
              <div>df.summary()</div>
              <br/>
              <div className="text-gray-400"># Visualize</div>
              <div>df.quick_plot(<span className="text-yellow-300">kind=&quot;scatter&quot;</span>, <span className="text-yellow-300">x=&quot;col1&quot;</span>, <span className="text-yellow-300">y=&quot;col2&quot;</span>)</div>
              <br/>
              <div className="text-gray-400"># Get automated insights</div>
              <div>df.magic_analyze()</div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">CLI Support</h3>
            <div className="bg-black dark:bg-gray-950 text-green-400 p-6 rounded-lg font-mono text-sm space-y-2">
              <div>$ kuya analyze data.csv</div>
              <div>$ kuya clean data.csv --output cleaned.csv</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-black dark:text-white mb-2">4</div>
              <div className="text-gray-700 dark:text-gray-300">Core Modules</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-black dark:text-white mb-2">20+</div>
              <div className="text-gray-700 dark:text-gray-300">Helper Functions</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-black dark:text-white mb-2">∞</div>
              <div className="text-gray-700 dark:text-gray-300">Time Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
