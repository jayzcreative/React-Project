import reactCoreImg from './assets/react-core-concepts.png';

const reactDescription=['Fundamental','Crucial','Core'];

function genRandom(max){
  return Math.floor(Math.random()* (max+1));
}

function Header(){
  const description=reactDescription[genRandom(2)]
   return(<header className="text-center my-12">
        <img 
          src={reactCoreImg} 
          alt="Stylized atom" 
          className="h-20 w-40 object-cover mx-auto mb-4" 
        />
        <h1 className="m-0 font-roboto text-6xl md:text-8xl bg-gradient-to-r from-[#ea00ff] via-[#ea00ff] to-[#03d5ff] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          React Essentials
        </h1>
        <p className="mt-4 text-xl text-purple-accent font-roboto max-w-lg mx-auto">
           {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>);
}



function App() {
  return (
    <div className="min-h-screen bg-purple-radial font-quicksand text-[#ebe7ef] flex flex-col items-center">
  <Header/>
      <main className="w-[90%] max-w-[50rem] mx-auto pb-20">
        
          <h2 className="text-center font-roboto text-3xl text-purple-light">
            Time to get started!
          </h2>
        
      </main>
    </div>
  );
}

export default App;