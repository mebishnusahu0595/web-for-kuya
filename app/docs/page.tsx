'use client';

import SplashCursor from '@/components/SplashCursor';
import Aurora from '@/components/Aurora';
import DecryptedText from '@/components/DecryptedText';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DocsLoader from '@/components/DocsLoader';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#0a0e27] dark:via-[#1a1f3a] dark:to-[#0f1629] transition-colors duration-300">
      <DocsLoader />
      
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
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 mt-20">
        <h1 className="text-5xl font-bold text-black dark:text-white mb-8 text-shadow">
          <DecryptedText 
            text="Kuya Data Documentation" 
            animateOn="view"
            speed={30}
            maxIterations={15}
            characters="▓▒░█▄▀■□▪▫"
            revealDirection="center"
          />
        </h1>

        <div className="space-y-8 text-black dark:text-white">
          <section className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">What is Kuya?</h2>
            <p className="text-lg leading-relaxed">
              <strong>Kuya</strong> is a lightweight and practical Python library built on top of <strong>Pandas</strong>, 
              designed as a <strong>"data analysis assistant."</strong> Its goal is simple: make data cleaning, 
              exploratory analysis, and visualization effortless using just a few lines of code.
            </p>
          </section>

          <section className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Core Components</h2>
            <p className="mb-6 text-lg">
              Kuya revolves around the <strong>KuyaDataFrame</strong> class, which extends Pandas' DataFrame 
              and internally integrates four powerful helper modules:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-6 hover:bg-white/30 dark:hover:bg-white/10 transition-all">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">🧹</span>
                  KuyaCleaner
                </h4>
                <p className="text-sm mb-3 text-gray-700 dark:text-white">Tools for automated and fast data cleaning:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Missing value handling</li>
                  <li>Data type fixes</li>
                  <li>Outlier detection</li>
                  <li>Column name standardization</li>
                </ul>
              </div>

              <div className="glass rounded-xl p-6 hover:bg-white/30 dark:hover:bg-white/10 transition-all">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  KuyaEDA
                </h4>
                <p className="text-sm mb-3 text-gray-700 dark:text-white">A dedicated exploratory data analysis assistant:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Summary statistics</li>
                  <li>Missing/unique value inspection</li>
                  <li>Correlation analysis and reports</li>
                </ul>
              </div>

              <div className="glass rounded-xl p-6 hover:bg-white/30 dark:hover:bg-white/10 transition-all">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  KuyaViz
                </h4>
                <p className="text-sm mb-3 text-gray-700 dark:text-white">Easy and elegant visualization helpers built on Matplotlib/Seaborn:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">quick_plot()</code></li>
                  <li><code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">hist()</code>, <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">heatmap()</code>, <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">pairplot()</code></li>
                  <li>One-line visual diagnostics</li>
                </ul>
              </div>

              <div className="glass rounded-xl p-6 hover:bg-white/30 dark:hover:bg-white/10 transition-all">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  Advanced Features
                </h4>
                <p className="text-sm mb-3 text-gray-700 dark:text-white">High-level smart utilities:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Data quality scoring</li>
                  <li>Smart encoders</li>
                  <li>Normalization utilities</li>
                  <li>Automatic feature creation</li>
                  <li>Insight generation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">I/O Helpers</h2>
            <p className="mb-4">
              Kuya supports intelligent file detection while loading or saving data:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['CSV', 'Excel', 'JSON', 'Parquet'].map(format => (
                <div key={format} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 px-4 py-3 rounded-xl text-center font-mono text-sm font-semibold text-black dark:text-white">
                  {format}
                </div>
              ))}
            </div>
          </section>

          <section className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">CLI Support</h2>
            <p className="mb-4">
              Kuya includes a command-line interface for quick operations:
            </p>
            <div className="bg-black text-green-400 p-6 rounded-xl font-mono text-sm space-y-2">
              <div>$ kuya analyze data.csv</div>
              <div>$ kuya clean data.csv --output cleaned.csv</div>
            </div>
          </section>

          <section className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Quick Start Example</h2>
            <div className="bg-black text-white p-6 rounded-xl font-mono text-sm space-y-2">
              <div className="text-gray-400"># Load data</div>
              <div>df = kuya.load(<span className="text-yellow-300">&quot;data.csv&quot;</span>)</div>
              <br/>
              <div className="text-gray-400"># Clean missing values</div>
              <div>df.clean_missing(<span className="text-yellow-300">strategy=&quot;auto&quot;</span>)</div>
              <br/>
              <div className="text-gray-400"># Fix data types</div>
              <div>df.fix_dtypes()</div>
              <br/>
              <div className="text-gray-400"># Generate summary report</div>
              <div>df.summary()</div>
              <br/>
              <div className="text-gray-400"># Quick visualization</div>
              <div>df.quick_plot(<span className="text-yellow-300">kind=&quot;scatter&quot;</span>, <span className="text-yellow-300">x=&quot;column1&quot;</span>, <span className="text-yellow-300">y=&quot;column2&quot;</span>)</div>
              <br/>
              <div className="text-gray-400"># Automated analysis</div>
              <div>df.magic_analyze()</div>
            </div>
          </section>

          <section className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Dependencies</h2>
            <p className="mb-6 text-lg">
              Kuya is designed to work seamlessly with the scientific Python ecosystem. Required libraries:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pandas Card */}
              <div className="group relative glass rounded-xl p-6 hover:bg-white/40 dark:hover:bg-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out">
                      <span className="text-white font-bold text-xl">🐼</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500">pandas</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 transition-all duration-500">Data manipulation & analysis</p>
                  
                  {/* Hover Details */}
                  <div className="max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-700 ease-in-out">
                    <div className="pt-3 mt-3 border-t border-black/10 dark:border-white/10 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <p className="text-sm text-gray-800 dark:text-white"><strong>Purpose:</strong> Core data structure (DataFrame)</p>
                      <p className="text-sm text-gray-800 dark:text-white"><strong>Features:</strong> Data cleaning, transformation, aggregation</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-mono">pip install pandas</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
              </div>

              {/* NumPy Card */}
              <div className="group relative glass rounded-xl p-6 hover:bg-white/40 dark:hover:bg-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out">
                      <span className="text-white font-bold text-xl">🔢</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-500">numpy</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 transition-all duration-500">Numerical computing</p>
                  
                  <div className="max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-700 ease-in-out">
                    <div className="pt-3 mt-3 border-t border-black/10 dark:border-white/10 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <p className="text-sm text-gray-800 dark:text-white"><strong>Purpose:</strong> Fast array operations</p>
                      <p className="text-sm text-gray-800 dark:text-white"><strong>Features:</strong> Mathematical functions, linear algebra</p>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 font-mono">pip install numpy</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/50 dark:to-indigo-900/50 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
              </div>

              {/* SciPy Card */}
              <div className="group relative glass rounded-xl p-6 hover:bg-white/40 dark:hover:bg-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out">
                      <span className="text-white font-bold text-xl">🔬</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-500">scipy</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 transition-all duration-500">Scientific computing</p>
                  
                  <div className="max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-700 ease-in-out">
                    <div className="pt-3 mt-3 border-t border-black/10 dark:border-white/10 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <p className="text-sm text-gray-800 dark:text-white"><strong>Purpose:</strong> Advanced statistics & optimization</p>
                      <p className="text-sm text-gray-800 dark:text-white"><strong>Features:</strong> Statistical tests, signal processing</p>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-mono">pip install scipy</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
              </div>

              {/* Matplotlib Card */}
              <div className="group relative glass rounded-xl p-6 hover:bg-white/40 dark:hover:bg-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out">
                      <span className="text-white font-bold text-xl">📊</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-500">matplotlib</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 transition-all duration-500">Data visualization</p>
                  
                  <div className="max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-700 ease-in-out">
                    <div className="pt-3 mt-3 border-t border-black/10 dark:border-white/10 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <p className="text-sm text-gray-800 dark:text-white"><strong>Purpose:</strong> Creating static, interactive plots</p>
                      <p className="text-sm text-gray-800 dark:text-white"><strong>Features:</strong> Charts, graphs, customizable figures</p>
                      <p className="text-sm text-green-600 dark:text-green-400 font-mono">pip install matplotlib</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
              </div>

              {/* Seaborn Card */}
              <div className="group relative glass rounded-xl p-6 hover:bg-white/40 dark:hover:bg-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out">
                      <span className="text-white font-bold text-xl">🎨</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-500">seaborn</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 transition-all duration-500">Statistical visualization</p>
                  
                  <div className="max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-700 ease-in-out">
                    <div className="pt-3 mt-3 border-t border-black/10 dark:border-white/10 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <p className="text-sm text-gray-800 dark:text-white"><strong>Purpose:</strong> Beautiful statistical graphics</p>
                      <p className="text-sm text-gray-800 dark:text-white"><strong>Features:</strong> Heatmaps, distribution plots, themes</p>
                      <p className="text-sm text-teal-600 dark:text-teal-400 font-mono">pip install seaborn</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/50 dark:to-teal-900/50 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
              </div>

              {/* Scikit-learn Card */}
              <div className="group relative glass rounded-xl p-6 hover:bg-white/40 dark:hover:bg-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out">
                      <span className="text-white font-bold text-xl">🤖</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-500">scikit-learn</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 transition-all duration-500">Machine learning</p>
                  
                  <div className="max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-700 ease-in-out">
                    <div className="pt-3 mt-3 border-t border-black/10 dark:border-white/10 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <p className="text-sm text-gray-800 dark:text-white"><strong>Purpose:</strong> ML algorithms & preprocessing</p>
                      <p className="text-sm text-gray-800 dark:text-white"><strong>Features:</strong> Encoding, scaling, feature engineering</p>
                      <p className="text-sm text-orange-600 dark:text-orange-400 font-mono">pip install scikit-learn</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/50 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                💡 <strong>Tip:</strong> Hover over each card to see detailed information about the library and its role in Kuya!
              </p>
            </div>
          </section>

          <section className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Feature Highlights</h2>
            <p className="text-center text-gray-600 mb-10 text-lg">Discover what makes Kuya your perfect data analysis companion</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1: Easy Data Cleaning */}
              <div className="group relative glass rounded-2xl p-8 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                <div className="relative z-10">
                  {/* Icon with animated ring */}
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-5xl">✨</span>
                    </div>
                    {/* Animated particles */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-3 group-hover:text-blue-600 transition-colors duration-500">
                    Easy Data Cleaning
                  </h3>
                  
                  <p className="text-center text-gray-700 leading-relaxed mb-4">
                    Automated missing value handling, outlier detection, and column standardization
                  </p>
                  
                  {/* Code example on hover */}
                  <div className="max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-700 ease-in-out">
                    <div className="bg-black/90 rounded-lg p-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <code className="text-green-400 text-xs font-mono">
                        df.clean_missing()<br/>
                        df.remove_outliers()
                      </code>
                    </div>
                  </div>
                </div>
                
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              </div>

              {/* Feature 2: Fast EDA */}
              <div className="group relative glass rounded-2xl p-8 hover:bg-gradient-to-br hover:from-green-50 hover:to-teal-50 hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                <div className="relative z-10">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-5xl">📊</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-3 group-hover:text-green-600 transition-colors duration-500">
                    Fast EDA
                  </h3>
                  
                  <p className="text-center text-gray-700 leading-relaxed mb-4">
                    One-line commands for summary statistics, correlation checks, and distributions
                  </p>
                  
                  <div className="max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-700 ease-in-out">
                    <div className="bg-black/90 rounded-lg p-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <code className="text-green-400 text-xs font-mono">
                        df.summary()<br/>
                        df.correlation_matrix()
                      </code>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              </div>

              {/* Feature 3: Smooth Visualization */}
              <div className="group relative glass rounded-2xl p-8 hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                <div className="relative z-10">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-5xl">🎨</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-rose-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-3 group-hover:text-pink-600 transition-colors duration-500">
                    Smooth Visualization
                  </h3>
                  
                  <p className="text-center text-gray-700 leading-relaxed mb-4">
                    Beautiful built-in wrappers around Matplotlib and Seaborn
                  </p>
                  
                  <div className="max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-700 ease-in-out">
                    <div className="bg-black/90 rounded-lg p-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <code className="text-green-400 text-xs font-mono">
                        df.quick_plot()<br/>
                        df.heatmap()
                      </code>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              </div>

              {/* Feature 4: Method Chaining */}
              <div className="group relative glass rounded-2xl p-8 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-blue-50 hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                <div className="relative z-10">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-5xl">⚡</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-3 group-hover:text-indigo-600 transition-colors duration-500">
                    Method Chaining
                  </h3>
                  
                  <p className="text-center text-gray-700 leading-relaxed mb-4">
                    Write clean, fluid data processing pipelines
                  </p>
                  
                  <div className="max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-700 ease-in-out">
                    <div className="bg-black/90 rounded-lg p-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <code className="text-green-400 text-xs font-mono">
                        df.clean().fix()<br/>
                        .analyze().plot()
                      </code>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              </div>

              {/* Feature 5: Automated Insights */}
              <div className="group relative glass rounded-2xl p-8 hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50 hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                <div className="relative z-10">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-5xl">🔍</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-3 group-hover:text-amber-600 transition-colors duration-500">
                    Automated Insights
                  </h3>
                  
                  <p className="text-center text-gray-700 leading-relaxed mb-4">
                    AI-powered suggestions and data quality scoring
                  </p>
                  
                  <div className="max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-700 ease-in-out">
                    <div className="bg-black/90 rounded-lg p-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <code className="text-green-400 text-xs font-mono">
                        df.magic_analyze()<br/>
                        df.quality_score()
                      </code>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              </div>

              {/* Bonus Feature: Speed & Performance */}
              <div className="group relative glass rounded-2xl p-8 hover:bg-gradient-to-br hover:from-violet-50 hover:to-purple-50 hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                <div className="relative z-10">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-5xl">🚀</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-3 group-hover:text-violet-600 transition-colors duration-500">
                    Lightning Fast
                  </h3>
                  
                  <p className="text-center text-gray-700 leading-relaxed mb-4">
                    Optimized performance with smart caching and parallel processing
                  </p>
                  
                  <div className="max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-700 ease-in-out">
                    <div className="bg-black/90 rounded-lg p-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <code className="text-green-400 text-xs font-mono">
                        # Powered by<br/>
                        # NumPy & Pandas
                      </code>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              </div>
            </div>

            {/* Bottom tip */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
              <p className="text-center text-gray-700">
                <span className="text-2xl mr-2">💡</span>
                <strong>Pro Tip:</strong> Hover over each feature card to see quick code examples and unlock gradient magic!
              </p>
            </div>
          </section>
{/* 
          <section className="glass rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-purple-50">
            <h2 className="text-3xl font-bold mb-4">Example Workflow</h2>
            <p className="text-lg">
              A complete end-to-end example script is provided in the <code className="bg-white px-3 py-1 rounded-lg font-mono text-sm">examples/</code> directory, 
              including synthetic e-commerce data generation and full feature demonstrations.
            </p>
          </section> */}
        </div>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
