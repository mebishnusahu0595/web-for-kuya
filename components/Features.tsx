'use client';

export default function Features() {
  const features = [
    {
      icon: '🧹',
      title: 'Easy Data Cleaning',
      description: 'Automatic missing value handling, outlier detection, and column standardization',
      code: 'df.clean_missing(strategy="auto")'
    },
    {
      icon: '📊',
      title: 'Quick EDA',
      description: 'One-line commands for summary statistics, correlation analysis, and distribution checks',
      code: 'df.summary()'
    },
    {
      icon: '🎨',
      title: 'Beautiful Visualizations',
      description: 'Built-in plotting functions with matplotlib and seaborn integration',
      code: 'df.quick_plot(kind="scatter")'
    },
    {
      icon: '⚡',
      title: 'Method Chaining',
      description: 'Fluent API for streamlined data analysis workflows',
      code: 'df.clean().fix_dtypes().analyze()'
    },
    {
      icon: '🔍',
      title: 'Smart Encoding',
      description: 'Automatic feature encoding and normalization with quality scoring',
      code: 'df.smart_encode()'
    },
    {
      icon: '✨',
      title: 'Magic Analysis',
      description: 'AI-powered automated insights and data quality recommendations',
      code: 'df.magic_analyze()'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black dark:text-white mb-8 sm:mb-12 md:mb-16 text-shadow">
          Powerful Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                {feature.description}
              </p>
              <code className="block bg-black/10 dark:bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-sm text-black dark:text-green-400 font-mono border border-black/20 dark:border-white/20">
                {feature.code}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
