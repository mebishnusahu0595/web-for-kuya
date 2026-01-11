'use client';

import { useState } from 'react';
import { Play, Copy, RotateCcw, Download, Settings, Terminal as TerminalIcon } from 'lucide-react';
import Header from '@/components/Header';
import TryOnceLoader from '@/components/TryOnceLoader';

interface CodeExample {
  id: string;
  title: string;
  code: string;
  sampleData: string;
}

const quickExamples: CodeExample[] = [
  {
    id: 'quick-start',
    title: 'Quick Start',
    code: `import kuya

# Load data
df = kuya.load("sample_data.csv")

# Display first rows
print(df.head())

# Get summary
print(df.summary())`,
    sampleData: `name,age,salary,department
Alice,28,75000,Engineering
Bob,34,82000,Engineering
Charlie,29,68000,Marketing
Diana,42,95000,Sales
Eve,31,71000,Marketing
Frank,38,88000,Sales`
  },
  {
    id: 'data-cleaning',
    title: 'Data Cleaning',
    code: `import kuya

# Load messy data
df = kuya.load("data.csv")

# Clean missing values
df.clean_missing(strategy="auto")

# Fix data types
df.fix_dtypes()

# Standardize columns
df.standardize_columns()

print("✓ Data cleaned!")
print(df.info())`,
    sampleData: `Product,Price,Stock,Category
Widget A,29.99,150,Electronics
Widget B,,200,
Widget C,45.50,0,Electronics
,39.99,75,Home
Widget E,25.00,,Electronics`
  },
  {
    id: 'visualization',
    title: 'Visualization',
    code: `import kuya

# Load data
df = kuya.load("data.csv")

# Quick scatter plot
df.quick_plot(kind="scatter", x="age", y="salary")

# Histogram
df.hist(column="salary", bins=10)

# Correlation heatmap
df.heatmap()

print("✓ Visualizations created!")`,
    sampleData: `age,salary,experience
25,45000,2
30,55000,5
35,75000,10
28,50000,3
42,95000,18
38,80000,12`
  }
];

export default function TryOncePage() {
  const [code, setCode] = useState(quickExamples[0].code);
  const [sampleData, setSampleData] = useState(quickExamples[0].sampleData);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'data' | 'output'>('code');

  const handleQuickExample = (example: CodeExample) => {
    setCode(example.code);
    setSampleData(example.sampleData);
    setOutput('');
    setActiveTab('code');
  };

  const handleRun = () => {
    setIsRunning(true);
    setActiveTab('output');
    
    setTimeout(() => {
      const dynamicOutput = generateOutput(code);
      setOutput(dynamicOutput);
      setIsRunning(false);
    }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleReset = () => {
    setCode(quickExamples[0].code);
    setSampleData(quickExamples[0].sampleData);
    setOutput('');
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'kuya_script.py';
    a.click();
  };

  const generateOutput = (code: string): string => {
    const lowerCode = code.toLowerCase();
    let output = '';

    if (code.trim().length === 0) {
      return '⚠️ Error: No code to execute\n\nPlease write some code first.';
    }

    // Header
    output += '╔════════════════════════════════════════════════╗\n';
    output += '║      KUYA DATA - EXECUTION RESULTS            ║\n';
    output += '╚════════════════════════════════════════════════╝\n\n';

    // Detect operations
    if (lowerCode.includes('kuya.load') || lowerCode.includes('df =')) {
      output += '✓ Data loaded successfully from sample_data.csv\n\n';
    }

    if (lowerCode.includes('.head()')) {
      output += 'DataFrame Head (5 rows):\n';
      output += '─────────────────────────────────────────────────\n';
      output += '      name  age  salary   department\n';
      output += '0    Alice   28   75000  Engineering\n';
      output += '1      Bob   34   82000  Engineering\n';
      output += '2  Charlie   29   68000    Marketing\n';
      output += '3    Diana   42   95000        Sales\n';
      output += '4      Eve   31   71000    Marketing\n\n';
    }

    if (lowerCode.includes('.summary()')) {
      output += '📊 Summary Statistics:\n';
      output += '─────────────────────────────────────────────────\n';
      output += '  Total rows: 6\n';
      output += '  Total columns: 4\n';
      output += '  Numeric columns: 2 (age, salary)\n';
      output += '  Categorical columns: 2 (name, department)\n';
      output += '  Missing values: 0\n';
      output += '  Memory usage: 0.5 KB\n\n';
    }

    if (lowerCode.includes('.clean_missing') || lowerCode.includes('.fix_dtypes')) {
      output += '🧹 Data Cleaning Results:\n';
      output += '─────────────────────────────────────────────────\n';
      output += '  ✓ Missing values handled (3 filled)\n';
      output += '  ✓ Data types corrected (2 columns)\n';
      output += '  ✓ Outliers detected and flagged (1 found)\n';
      output += '  ✓ Column names standardized\n\n';
    }

    if (lowerCode.includes('.quick_plot') || lowerCode.includes('.hist') || lowerCode.includes('.heatmap')) {
      output += '📈 Visualizations Generated:\n';
      output += '─────────────────────────────────────────────────\n';
      if (lowerCode.includes('scatter')) output += '  ✓ Scatter plot created\n';
      if (lowerCode.includes('hist')) output += '  ✓ Histogram generated\n';
      if (lowerCode.includes('heatmap')) output += '  ✓ Correlation heatmap created\n';
      output += '\n  Files saved to: ./output/visualizations/\n\n';
    }

    if (lowerCode.includes('.magic_analyze') || lowerCode.includes('.quality_score')) {
      output += '🔍 Automated Analysis:\n';
      output += '─────────────────────────────────────────────────\n';
      output += '  Data Quality Score: 87/100\n\n';
      output += '  Key Insights:\n';
      output += '  • Average salary: $75,167\n';
      output += '  • Age range: 28-42 years\n';
      output += '  • Most common dept: Engineering (33%)\n';
      output += '  • Strong correlation: age vs salary (r=0.72)\n\n';
    }

    if (lowerCode.includes('.info()')) {
      output += '<class \'kuya.KuyaDataFrame\'>\n';
      output += 'RangeIndex: 6 entries, 0 to 5\n';
      output += 'Data columns (total 4 columns):\n';
      output += ' #   Column      Non-Null Count  Dtype  \n';
      output += '---  ------      --------------  -----  \n';
      output += ' 0   name        6 non-null      object \n';
      output += ' 1   age         6 non-null      int64  \n';
      output += ' 2   salary      6 non-null      int64  \n';
      output += ' 3   department  6 non-null      object \n';
      output += 'dtypes: int64(2), object(2)\n\n';
    }

    // Footer
    output += '─────────────────────────────────────────────────\n';
    output += `✅ Execution completed successfully!\n`;
    output += `⏱️  Runtime: ${(Math.random() * 1.5 + 0.3).toFixed(2)}s\n`;
    output += `📦 Memory used: ${(Math.random() * 5 + 2).toFixed(1)} MB\n`;

    return output;
  };

  return (
    <main className="relative min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#0a0e27] dark:via-[#1a1f3a] dark:to-[#0f1629] text-black dark:text-white transition-colors duration-300">
      <TryOnceLoader />
      <Header />
      
      {/* Editor Container */}
      <div className="relative z-10 pt-28 px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Try Kuya Data
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Interactive Python playground - Write, Run, and Explore
            </p>
          </div>

          {/* Quick Examples */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">QUICK START:</span>
              <div className="flex gap-2">
                {quickExamples.map((example) => (
                  <button
                    key={example.id}
                    onClick={() => handleQuickExample(example)}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-all border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
                  >
                    {example.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Editor Area */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Left Panel - Code Editor */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-2xl">
              {/* Editor Header */}
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-3 text-sm font-mono text-gray-600 dark:text-gray-400">script.py</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all"
                    title="Copy code"
                  >
                    <Copy size={16} className="text-gray-600 dark:text-gray-400" />
                  </button>
                  <button
                    onClick={handleDownload}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all"
                    title="Download"
                  >
                    <Download size={16} className="text-gray-600 dark:text-gray-400" />
                  </button>
                  <button
                    onClick={handleReset}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all"
                    title="Reset"
                  >
                    <RotateCcw size={16} className="text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Code Editor */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-50 dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col items-center pt-4 text-gray-400 dark:text-gray-600 font-mono text-xs">
                  {code.split('\n').map((_, i) => (
                    <div key={i} className="leading-6 h-6">{i + 1}</div>
                  ))}
                </div>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-96 bg-white dark:bg-gray-900 text-gray-900 dark:text-green-400 pl-16 pr-4 py-4 font-mono text-sm resize-none focus:outline-none leading-6"
                  spellCheck={false}
                  style={{ tabSize: 4 }}
                />
              </div>

              {/* Run Button */}
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className={`w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-green-500/50 ${
                    isRunning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  {isRunning ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Running...
                    </>
                  ) : (
                    <>
                      <Play size={20} fill="currentColor" />
                      Run Code
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Panel - Tabs */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-2xl">
              {/* Tabs */}
              <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex">
                <button
                  onClick={() => setActiveTab('data')}
                  className={`flex-1 px-4 py-3 text-sm font-semibold transition-all ${
                    activeTab === 'data'
                      ? 'bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
                  }`}
                >
                  📊 Sample Data
                </button>
                <button
                  onClick={() => setActiveTab('output')}
                  className={`flex-1 px-4 py-3 text-sm font-semibold transition-all ${
                    activeTab === 'output'
                      ? 'bg-white dark:bg-gray-900 text-green-600 dark:text-green-400 border-b-2 border-green-600 dark:border-green-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
                  }`}
                >
                  <TerminalIcon size={14} className="inline mr-2" />
                  Output
                </button>
              </div>

              {/* Tab Content */}
              <div className="h-[500px] overflow-auto">
                {activeTab === 'data' && (
                  <div className="p-4">
                    <div className="mb-3">
                      <span className="text-xs font-mono text-gray-500 dark:text-gray-500">sample_data.csv</span>
                    </div>
                    <textarea
                      value={sampleData}
                      onChange={(e) => setSampleData(e.target.value)}
                      className="w-full h-96 bg-gray-50 dark:bg-black text-gray-900 dark:text-yellow-400 p-4 rounded-lg font-mono text-xs resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                      spellCheck={false}
                    />
                  </div>
                )}

                {activeTab === 'output' && (
                  <div className="p-4">
                    {isRunning ? (
                      <div className="flex items-center gap-3 text-blue-600 dark:text-green-400">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 dark:border-green-400"></div>
                        <span>Executing code...</span>
                      </div>
                    ) : output ? (
                      <pre className="font-mono text-sm text-gray-900 dark:text-green-400 whitespace-pre-wrap break-words">
                        {output}
                      </pre>
                    ) : (
                      <div className="text-gray-500 dark:text-gray-500 italic text-center mt-20">
                        <TerminalIcon size={48} className="mx-auto mb-4 opacity-50" />
                        <p>Click "Run Code" to see the output here</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Info Footer */}
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800/50 rounded-xl p-4">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <strong>💡 Tip:</strong> This is a simulated environment for demonstration. 
              To run actual code, install Kuya Data: 
              <code className="bg-black/50 px-2 py-1 rounded ml-2 text-green-400">pip install kuya-data</code>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
