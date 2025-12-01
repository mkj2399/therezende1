import React from 'react';
import { Target, Globe, Heart } from 'lucide-react';

const Values: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Our Core Values</h2>
          <p className="text-stone-600 text-lg">
            Building a future where every child has the opportunity to master their own destiny through strategy and intellect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div className="bg-stone-50 p-8 rounded-xl border border-stone-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg group">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
              <Target className="w-7 h-7 text-emerald-700 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Our Mission</h3>
            <p className="text-stone-600 leading-relaxed">
              To teach the youth of Brazil chess while supporting and uplifting local communities in São Paulo. Through the power of strategy, discipline, and creativity, we provide opportunities for growth on and off the board.
            </p>
          </div>

          {/* Motto Card */}
          <div className="bg-emerald-800 p-8 rounded-xl border border-emerald-700 transform md:-translate-y-4 shadow-xl text-white">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Motto</h3>
            <div className="flex flex-col h-40 justify-center">
              <blockquote className="text-2xl font-serif font-light text-emerald-50 italic text-center">
                "Change lives a move at a time."
              </blockquote>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-stone-50 p-8 rounded-xl border border-stone-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg group">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
              <Globe className="w-7 h-7 text-emerald-700 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Our Vision</h3>
            <p className="text-stone-600 leading-relaxed">
              We strive to expand the Rezende Project across all of Brazil, empowering young minds in every region, and eventually sharing Josino Rezende’s legacy with international communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;