'use client';

import { useState } from 'react';
import { Play, Copy, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';

interface CodeExample {
  id: string;
  title: string;
  description: string;
  code: string;
  sampleData?: string;
}

const codeExamples: CodeExample[] = [
  {
    id: 'basic-load',
    title: 'Load and Inspect Data',
    description: 'Load a CSV file and get basic information',
    code: `import kuya

# Load data
df = kuya.load("sample_data.csv")

# Display first 5 rows
print(df.head())

# Get summary statistics
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
    title: 'Clean Missing Data',
    description: 'Handle missing values and fix data types automatically',
    code: `import kuya

# Load data with missing values
df = kuya.load("messy_data.csv")

# Clean missing values automatically
df.clean_missing(strategy="auto")

# Fix data types
df.fix_dtypes()

# Standardize column names
df.standardize_columns()

print("Data cleaned successfully!")
print(df.info())`,
    sampleData: `Product Name,Price,Stock,Category
Widget A,29.99,150,Electronics
Widget B,,200,
Widget C,45.50,0,Electronics
,39.99,75,Home
Widget E,25.00,,Electronics`
  },
  {
    id: 'visualization',
    title: 'Quick Visualization',
    description: 'Create visualizations with a single line of code',
    code: `import kuya

# Load data
df = kuya.load("sales_data.csv")

# Create scatter plot
df.quick_plot(
    kind="scatter",
    x="age",
    y="salary"
)

# Create histogram
df.hist(column="salary", bins=10)

# Create correlation heatmap
df.heatmap()`,
    sampleData: `age,salary,years_experience
25,45000,2
30,55000,5
35,75000,10
28,50000,3
42,95000,18
38,80000,12
31,62000,6`
  },
  {
    id: 'eda-analysis',
    title: 'Exploratory Data Analysis',
    description: 'Perform automated exploratory analysis',
    code: `import kuya

# Load data
df = kuya.load("customer_data.csv")

# Generate comprehensive EDA report
df.magic_analyze()

# Check data quality score
quality_score = df.quality_score()
print(f"Data Quality: {quality_score}/100")

# Detect outliers
outliers = df.detect_outliers()
print(f"Outliers found: {len(outliers)}")

# Get insights
insights = df.generate_insights()
for insight in insights:
    print(f"- {insight}")`,
    sampleData: `customer_id,age,purchase_amount,satisfaction
C001,28,299.99,4.5
C002,45,1250.00,5.0
C003,32,89.99,3.8
C004,56,450.00,4.2
C005,29,199.99,4.7`
  },
  {
    id: 'encoding',
    title: 'Smart Encoding',
    description: 'Encode categorical variables intelligently',
    code: `import kuya

# Load data
df = kuya.load("data.csv")

# Smart encoding for categorical columns
df.smart_encode(
    columns=["category", "department"],
    method="auto"
)

# Normalize numerical columns
df.normalize(
    columns=["salary", "age"],
    method="minmax"
)

print("Encoding completed!")
print(df.head())`,
    sampleData: `name,category,department,salary
Alice,Premium,Tech,75000
Bob,Standard,Sales,55000
Charlie,Premium,Tech,82000
Diana,Basic,Marketing,48000
Eve,Standard,Sales,61000`
  }
];

export default function CodePlayground() {
  const [selectedExample, setSelectedExample] = useState<CodeExample>(codeExamples[0]);
  const [code, setCode] = useState(selectedExample.code);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showData, setShowData] = useState(true);
  const [showOutput, setShowOutput] = useState(false);

  const handleExampleChange = (example: CodeExample) => {
    setSelectedExample(example);
    setCode(example.code);
    setOutput('');
    setShowOutput(false);
  };

  const handleRun = async () => {
    setIsRunning(true);
    setShowOutput(true);
    
    // Simulate code execution with detection of code changes
    setTimeout(() => {
      const hasCodeChanged = code !== selectedExample.code;
      const mockOutput = hasCodeChanged 
        ? generateDynamicOutput(code, selectedExample.id)
        : generateMockOutput(selectedExample.id);
      setOutput(mockOutput);
      setIsRunning(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleReset = () => {
    setCode(selectedExample.code);
    setOutput('');
    setShowOutput(false);
  };

  const generateMockOutput = (exampleId: string): string => {
    switch (exampleId) {
      case 'basic-load':
        return `      name  age  salary   department
0    Alice   28   75000  Engineering
1      Bob   34   82000  Engineering
2  Charlie   29   68000    Marketing
3    Diana   42   95000        Sales
4      Eve   31   71000    Marketing

Summary Statistics:
- Total rows: 6
- Total columns: 4
- Numeric columns: 2
- Categorical columns: 2
- Missing values: 0`;

      case 'data-cleaning':
        return `Data cleaned successfully!
<class 'kuya.KuyaDataFrame'>
RangeIndex: 5 entries, 0 to 4
Data columns (total 4 columns):
 #   Column        Non-Null Count  Dtype  
---  ------        --------------  -----  
 0   product_name  5 non-null      object 
 1   price         5 non-null      float64
 2   stock         5 non-null      int64  
 3   category      5 non-null      object 
dtypes: float64(1), int64(1), object(2)

✓ Missing values filled
✓ Data types corrected
✓ Column names standardized`;

      case 'visualization':
        return `Scatter plot created successfully!
Histogram created with 10 bins
Correlation heatmap generated

Plot saved to: output/visualizations/
- scatter_age_vs_salary.png
- salary_histogram.png
- correlation_heatmap.png`;

      case 'eda-analysis':
        return `🔍 Automated EDA Report Generated

Data Quality: 87/100

Outliers found: 1 (Row 1: purchase_amount = 1250.00)

Key Insights:
- Average age of customers: 38 years
- Purchase amounts range from $89.99 to $1,250.00
- Customer satisfaction averages 4.44/5.0
- Strong positive correlation between age and purchase amount (r=0.68)
- 80% of customers have satisfaction scores above 4.0

Recommendations:
- Consider investigating outlier transactions
- Age group 45+ shows highest purchase amounts
- Overall data quality is good with minimal missing values`;

      case 'encoding':
        return `Encoding completed!
       name category_encoded  department_encoded  salary_normalized  age_normalized
0     Alice               2                   2           0.703704        0.000000
1       Bob               1                   1           0.259259        0.461538
2   Charlie               2                   2           0.925926        0.153846
3     Diana               0                   0           0.000000        0.769231
4       Eve               1                   1           0.481481        0.230769

Encoding Summary:
- 2 categorical columns encoded
- 2 numerical columns normalized
- Method: Auto-detection (One-Hot + MinMax)`;

      default:
        return 'Code executed successfully!';
    }
  };

  const generateDynamicOutput = (modifiedCode: string, originalExampleId: string): string => {
    const lowerCode = modifiedCode.toLowerCase();
    
    // Detect what operations are in the code
    const hasLoad = lowerCode.includes('kuya.load') || lowerCode.includes('df =');
    const hasHead = lowerCode.includes('.head()');
    const hasSummary = lowerCode.includes('.summary()');
    const hasClean = lowerCode.includes('.clean_missing') || lowerCode.includes('.fix_dtypes');
    const hasPlot = lowerCode.includes('.quick_plot') || lowerCode.includes('.hist') || lowerCode.includes('.heatmap');
    const hasAnalyze = lowerCode.includes('.magic_analyze') || lowerCode.includes('.quality_score');
    const hasEncode = lowerCode.includes('.smart_encode') || lowerCode.includes('.normalize');
    const hasPrint = lowerCode.includes('print(');
    const hasError = lowerCode.includes('syntax error') || lowerCode.match(/^\s*[^\s#]/m) === null;

    // Build dynamic output based on detected operations
    let output = '🔄 Custom Code Executed\n\n';

    // Check for syntax-like issues
    if (modifiedCode.trim().length === 0) {
      return '⚠️ Error: No code to execute\n\nPlease write some code first.';
    }

    if (!lowerCode.includes('import') && !lowerCode.includes('#')) {
      output += '⚠️ Warning: No import statement detected\n\n';
    }

    if (hasLoad) {
      output += '✓ Data loaded successfully\n';
    }

    if (hasHead) {
      output += `\nDataFrame Head (5 rows):\n`;
      output += `      name  age  salary   department\n`;
      output += `0    Alice   28   75000  Engineering\n`;
      output += `1      Bob   34   82000  Engineering\n`;
      output += `2  Charlie   29   68000    Marketing\n`;
      output += `3    Diana   42   95000        Sales\n`;
      output += `4      Eve   31   71000    Marketing\n`;
    }

    if (hasSummary) {
      output += `\n📊 Summary Statistics:\n`;
      output += `- Total rows: 6\n`;
      output += `- Total columns: 4\n`;
      output += `- Numeric columns: 2 (age, salary)\n`;
      output += `- Categorical columns: 2 (name, department)\n`;
      output += `- Missing values: 0\n`;
      output += `- Memory usage: 0.5 KB\n`;
    }

    if (hasClean) {
      output += `\n🧹 Data Cleaning Operations:\n`;
      output += `✓ Missing values handled\n`;
      output += `✓ Data types corrected\n`;
      output += `✓ Outliers detected and flagged\n`;
      output += `✓ Column names standardized\n`;
    }

    if (hasPlot) {
      output += `\n📈 Visualizations Created:\n`;
      if (lowerCode.includes('scatter')) {
        output += `✓ Scatter plot generated\n`;
      }
      if (lowerCode.includes('hist')) {
        output += `✓ Histogram created\n`;
      }
      if (lowerCode.includes('heatmap')) {
        output += `✓ Correlation heatmap generated\n`;
      }
      output += `\nPlots saved to: output/visualizations/\n`;
    }

    if (hasAnalyze) {
      output += `\n🔍 Analysis Results:\n`;
      output += `Data Quality Score: 87/100\n\n`;
      output += `Key Insights:\n`;
      output += `- Dataset contains 6 rows across 4 columns\n`;
      output += `- Average salary: $75,167\n`;
      output += `- Age range: 28-42 years\n`;
      output += `- Most common department: Engineering (33%)\n\n`;
      output += `Recommendations:\n`;
      output += `- Data quality is good, minimal cleaning needed\n`;
      output += `- Consider collecting more samples for better analysis\n`;
    }

    if (hasEncode) {
      output += `\n🔧 Encoding Operations:\n`;
      output += `✓ Categorical variables encoded\n`;
      output += `✓ Numerical features normalized\n`;
      output += `✓ Applied auto-detection for optimal encoding\n\n`;
      output += `Transformations:\n`;
      output += `- department: One-Hot Encoded (3 categories)\n`;
      output += `- salary: MinMax Normalized [0, 1]\n`;
      output += `- age: MinMax Normalized [0, 1]\n`;
    }

    // Check for print statements with specific content
    const printMatches = modifiedCode.match(/print\((.*?)\)/g);
    if (printMatches && printMatches.length > 0 && !hasHead && !hasSummary) {
      output += `\nOutput from print statements:\n`;
      printMatches.forEach((match, index) => {
        output += `>>> ${match}\n`;
      });
    }

    // Add execution summary
    output += `\n${'─'.repeat(50)}\n`;
    output += `✅ Execution completed successfully!\n`;
    output += `⏱️  Runtime: ${(Math.random() * 2 + 0.5).toFixed(2)}s\n`;
    
    // Add note about modified code
    output += `\n💡 Note: You've modified the original example.\n`;
    output += `   Output is simulated based on detected operations.\n`;

    return output;
  };

  return (
    <section className="glass rounded-2xl p-8 mt-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">🚀 Interactive Code Playground</h2>
        <p className="text-gray-700">
          Try out Kuya Data features with live code examples. Edit the code and run it to see results!
        </p>
      </div>

      {/* Example Selector */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3">Select an Example:</label>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {codeExamples.map((example) => (
            <button
              key={example.id}
              onClick={() => handleExampleChange(example)}
              className={`text-left p-4 rounded-xl transition-all duration-300 ${
                selectedExample.id === example.id
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white/50 hover:bg-white/70 text-black'
              }`}
            >
              <div className="font-semibold mb-1">{example.title}</div>
              <div className={`text-xs ${selectedExample.id === example.id ? 'text-white/90' : 'text-gray-600'}`}>
                {example.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">Code Editor</h3>
              {code !== selectedExample.code && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full border border-yellow-300 animate-pulse">
                  ✏️ Modified
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="px-3 py-2 bg-white/50 hover:bg-white/70 rounded-lg transition-all flex items-center gap-2 text-sm"
                title="Copy code"
              >
                <Copy size={16} />
                Copy
              </button>
              <button
                onClick={handleReset}
                className="px-3 py-2 bg-white/50 hover:bg-white/70 rounded-lg transition-all flex items-center gap-2 text-sm"
                title="Reset code"
              >
                <RotateCcw size={16} />
                Reset
              </button>
              <button
                onClick={handleRun}
                disabled={isRunning}
                className={`px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg transition-all flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl hover:scale-105 ${
                  isRunning ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Play size={16} fill="currentColor" />
                {isRunning ? 'Running...' : 'Run Code'}
              </button>
            </div>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-80 bg-black text-green-400 p-4 rounded-xl font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            spellCheck={false}
          />
        </div>

        {/* Sample Data & Output */}
        <div className="space-y-4">
          {/* Sample Data Sheet */}
          {selectedExample.sampleData && (
            <div>
              <button
                onClick={() => setShowData(!showData)}
                className="flex items-center justify-between w-full text-lg font-semibold mb-2 hover:text-blue-600 transition-colors"
              >
                <span>📊 Sample Data (sample_data.csv)</span>
                {showData ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {showData && (
                <div className="bg-white/70 p-4 rounded-xl border border-gray-200 max-h-60 overflow-auto">
                  <pre className="font-mono text-xs whitespace-pre-wrap break-words">
                    {selectedExample.sampleData}
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* Output Console */}
          <div>
            <button
              onClick={() => setShowOutput(!showOutput)}
              className="flex items-center justify-between w-full text-lg font-semibold mb-2 hover:text-blue-600 transition-colors"
            >
              <span>💻 Output Console</span>
              {showOutput ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {showOutput && (
              <div className="bg-black text-white p-4 rounded-xl min-h-60 max-h-96 overflow-auto">
                {isRunning ? (
                  <div className="flex items-center gap-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-400"></div>
                    <span className="text-green-400">Executing code...</span>
                  </div>
                ) : output ? (
                  <pre className="font-mono text-sm whitespace-pre-wrap break-words text-green-400">
                    {output}
                  </pre>
                ) : (
                  <div className="text-gray-500 italic">
                    Click "Run Code" to see the output here...
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-sm text-blue-900">
          <strong>💡 Note:</strong> This is a simulated playground for demonstration purposes. 
          To run actual Kuya code, install the library with <code className="bg-blue-100 px-2 py-1 rounded">pip install kuya-data</code> 
          {' '}and use it in your Python environment.
        </p>
      </div>
    </section>
  );
}
