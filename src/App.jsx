import { CORE_CONCEPT } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div className="min-h-screen bg-[#0a0514] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-[#0a0514] to-[#0a0514] font-quicksand text-[#ebe7ef] flex flex-col items-center selection:bg-purple-500/30">
      <Header />
      
      <main className="w-[90%] max-w-[55rem] mx-auto pb-20">
        {/* --- Core Concepts Section --- */}
        <section className="bg-slate-900/40 backdrop-blur-md py-16 px-6 rounded-3xl border border-white/5 shadow-2xl">
          <h2 className="text-center font-roboto text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-12">
            Core Concepts
          </h2>
          <ul className="flex flex-nowrap justify-center gap-8 list-none p-0 m-0 overflow-x-auto pb-4 scrollbar-hide">
            {CORE_CONCEPT.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>

        {/* --- Examples/Tabs Section --- */}
        <section className="mt-16 p-1 bg-[#1b1429]/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-purple-500/20 overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-roboto font-bold text-purple-200 mb-8 flex items-center gap-3">
              <span className="h-8 w-1 bg-purple-500 rounded-full"></span>
              Examples
            </h2>

            <menu className="flex flex-wrap gap-3 list-none p-0 m-0 mb-10">
              <TabButton 
                isSelected={selectedTopic === 'components'} 
                label="Components" 
                onSelect={() => handleSelect("components")} 
              />
              <TabButton 
                isSelected={selectedTopic === 'jsx'} 
                label="JSX" 
                onSelect={() => handleSelect("jsx")} 
              />
              <TabButton 
                isSelected={selectedTopic === 'props'} 
                label="Props" 
                onSelect={() => handleSelect("props")} 
              />
              <TabButton 
                isSelected={selectedTopic === 'state'} 
                label="State" 
                onSelect={() => handleSelect("state")} 
              />
            </menu>

            {/* Content Area */}
            {!selectedTopic && (
              <div className="py-20 text-center border-2 border-dashed border-purple-900/30 rounded-2xl">
                <p className="text-purple-300/50 font-medium italic">Select a topic above to explore more</p>
              </div>
            )}

            {selectedTopic && (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                <div className="flex flex-col gap-2 mb-6">
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {EXAMPLES[selectedTopic].title}
                  </h3>
                  <div className="h-1 w-12 bg-pink-500 rounded-full"></div>
                </div>
                
                <p className="text-purple-100/80 mb-8 leading-relaxed text-lg max-w-[90%]">
                  {EXAMPLES[selectedTopic].description}
                </p>

                {/* Styled Code Block */}
                <div className="relative group">
                  {/* Decorative glow background */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  
                  <div className="relative bg-[#05020a] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                    {/* Fake Window Header */}
                    <div className="flex gap-1.5 px-4 py-3 bg-white/5 border-b border-white/5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    
                    <pre className="p-6 overflow-x-auto">
                      <code className="text-pink-400 font-mono text-sm leading-7">
                        {EXAMPLES[selectedTopic].code}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;