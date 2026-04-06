import { CORE_CONCEPT } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts(){
return(
         
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
);

}
