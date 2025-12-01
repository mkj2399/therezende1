import React from 'react';
import { Crown, GraduationCap, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-3 font-sans">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                Honoring a Legacy of Excellence
              </h3>
              <div className="w-24 h-1 bg-emerald-600 mb-8 rounded-full"></div>
            </div>

            <div className="prose prose-lg text-stone-600 font-serif">
              <p>
                The Rezende Project began in the fall of 2023 after the passing of nationally renowned Brazilian chess player 
                <strong className="text-stone-900"> Josino Fernando Mello Rezende</strong>.
              </p>
              <p>
                Josino represented Brazil on the national team in 1970 and was not only a strong player but also an exceptional teacher who guided countless Brazilian talents.
              </p>
              <p>
                He taught chess at the prestigious <em className="text-stone-800">Instituto Tecnológico de Aeronáutica (ITA)</em> and consulted with prominent players, including Grandmaster Darcy Lima and Brazilian National Champion Juninho Medeiros.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-100">
              <div className="flex flex-col items-center text-center p-2">
                <Crown className="w-8 h-8 text-emerald-600 mb-2" />
                <h4 className="font-bold text-stone-900 text-sm font-sans uppercase">National Team</h4>
              </div>
              <div className="flex flex-col items-center text-center p-2">
                <GraduationCap className="w-8 h-8 text-emerald-600 mb-2" />
                <h4 className="font-bold text-stone-900 text-sm font-sans uppercase">Expert Coach</h4>
              </div>
              <div className="flex flex-col items-center text-center p-2">
                <Users className="w-8 h-8 text-emerald-600 mb-2" />
                <h4 className="font-bold text-stone-900 text-sm font-sans uppercase">Community</h4>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative order-1 lg:order-2 px-4 lg:px-0">
            <div className="aspect-[4/5] md:aspect-square rounded-sm overflow-hidden relative shadow-2xl border-[12px] border-white transform rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=2658&auto=format&fit=crop" 
                alt="Classic Chess Set" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-amber-500/10 mix-blend-multiply"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-8 -right-4 w-full h-full border-2 border-emerald-600/10 rounded-sm"></div>
            <div className="absolute -z-10 -bottom-8 -left-4 w-full h-full bg-stone-100 rounded-sm"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;