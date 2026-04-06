 
import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts.jsx';
 
import Examples from './components/Examples.jsx';

function App() {
 
  return (
    <div className="min-h-screen bg-[#0a0514] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-[#0a0514] to-[#0a0514] font-quicksand text-[#ebe7ef] flex flex-col items-center selection:bg-purple-500/30">
      <Header />
      
      <main className="w-[90%] max-w-[55rem] mx-auto pb-20">
    <CoreConcepts />
<Examples />
        {/* --- Examples/Tabs Section --- */}
       
      </main>
    </div>
  );
}

export default App;