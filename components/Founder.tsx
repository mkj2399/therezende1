import React from 'react';

const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-amber-50/50 border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-sm overflow-hidden">
          
          {/* Image Side */}
          <div className="md:w-5/12 relative min-h-[400px]">
            <img
              src="public/images/founder-miguel.jpg"
              alt="Miguel Rezende - Founder"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
               <span className="text-white font-serif italic text-lg">"O Americano"</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="md:w-7/12 p-10 md:p-14 flex flex-col justify-center">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">The Founder</h2>
            <h3 className="text-3xl font-serif font-bold text-stone-900 mb-1">Miguel Rezende</h3>
            <p className="text-stone-400 font-serif italic mb-8">Est. 2010 &bull; São Paulo</p>

            <div className="space-y-4 text-stone-600 leading-relaxed font-serif text-lg">
              <p>
                Growing up witnessing the passion of his grandfather's students, Miguel's own love for chess reblossomed in 2022. With the support of his teacher, Mrs. Edwards, he established a chess club at his local middle school.
              </p>
              <p>
                Under his leadership, the team earned <span className="text-emerald-700 font-bold bg-emerald-50 px-1">4th place</span> at state team qualifiers.
              </p>
              <p>
                Miguel maintains an average rating above 1500 and continues to volunteer every Friday, helping children master the key positions needed for deep analysis.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-stone-100">
               <p className="text-sm text-stone-500 font-sans tracking-wide">
                 CONTINUING THE LEGACY OF JOSINO REZENDE
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;