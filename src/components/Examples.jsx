import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';   

export default function Examples(){
 const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }


    return(
         <Section title="Examples" className='mt-16'>
            
             
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
         
        </Section>
    );
}