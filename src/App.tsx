import React, { useState } from 'react';
import { SkinForm } from './components/SkinForm';
import { RecommendationCard } from './components/RecommendationCard';
import { RecommendationResponse } from './services/ai';
import { ArrowLeft, Sparkles } from 'lucide-react';

function App() {
  const [results, setResults] = useState<RecommendationResponse | null>(null);
  // This key forces the SkinForm to re-render from scratch when reset
  const [formResetKey, setFormResetKey] = useState(0);

  const handleStartOver = () => {
    setResults(null);
    setFormResetKey(prev => prev + 1); // Increment key to destroy old form instance
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'foundation': return '🧴';
      case 'concealer': return '✨';
      case 'blush': return '🌸';
      case 'lipstick': return '💋';
      default: return '💄';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'foundation': return '#ff9a9e';
      case 'concealer': return '#a8edea';
      case 'blush': return '#ffecd2';
      case 'lipstick': return '#667eea';
      default: return '#f5f7fa';
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full font-sans text-gray-900">
      {/* Background Image - Fixed Full Screen */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          // Using the local image from public folder
          backgroundImage: `url('/bg.jpg')`,
        }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Main Content Area - Centered */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-6 overflow-hidden">

        {/* Glass Card Container */}
        <div
          className={`relative bg-white/75 backdrop-blur-xl border border-white/50 shadow-2xl rounded-[2rem] overflow-hidden transition-all duration-700 ease-in-out flex flex-col md:flex-row ${results ? 'w-full max-w-6xl h-[85vh]' : 'w-full max-w-3xl min-h-[550px]'
            }`}
        >

          {/* Left Panel - Branding & Form */}
          <div
            className={`flex flex-col transition-all duration-700 ease-in-out bg-white/40 border-r border-white/20 ${results ? 'md:w-1/3 lg:w-3/12 h-full overflow-y-auto' : 'w-full h-full items-center justify-center p-8'
              }`}
          >
            <div className={`w-full ${results ? 'p-6' : 'max-w-sm'}`}>
              {/* Header */}
              <div className={`flex items-center gap-3 mb-8 ${!results ? 'justify-center mb-10 flex-col' : ''}`}>
                <span className="text-4xl drop-shadow-sm filter">💄</span>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 tracking-tight drop-shadow-sm">
                  BeautyMatch
                </h1>
              </div>

              {/* Form - Key prop ensures complete reset */}
              <SkinForm
                key={formResetKey}
                onResults={setResults}
                isCompact={!!results}
              />
            </div>
          </div>

          {/* Right Panel - Results */}
          {results && (
            <div className="flex-1 h-full overflow-y-auto bg-white/30 p-6 md:p-8 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="max-w-5xl mx-auto flex flex-col h-full">

                <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                  <div className="bg-white/60 p-5 rounded-2xl border border-white/50 backdrop-blur-sm flex-1 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-pink-600" />
                      <h2 className="text-xl font-semibold text-gray-800">Your Beauty Audit</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {results.advice}
                    </p>
                  </div>

                  <button
                    onClick={handleStartOver}
                    className="group flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors px-5 py-2.5 rounded-full bg-white/50 hover:bg-white/80 shadow-sm backdrop-blur-sm whitespace-nowrap cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Start Over
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 pb-8">
                  {results.recommendations.map((rec, idx) => (
                    <RecommendationCard
                      key={idx}
                      {...rec}
                      icon={getCategoryIcon(rec.category)}
                      color={getCategoryColor(rec.category)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
