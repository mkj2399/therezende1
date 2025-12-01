import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" /> {/* File name # */}
          Your browser does not support the video tag.
        </video>

        {/* Opaque Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/90 via-amber-50/70 to-amber-50/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-600/30 bg-emerald-50/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span className="text-emerald-800 font-serif font-medium text-xs tracking-widest uppercase">Est. 2023 &bull; São Paulo, Brazil</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-8 leading-tight">
            Change Lives <br />
            <span className="text-emerald-700 italic">
              A Move at a Time
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-700 mb-10 font-light max-w-2xl leading-relaxed border-l-4 border-emerald-600 pl-6">
            Dedicated to teaching strategy, discipline, and creativity to the youth of Brazil through the timeless game of chess.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#mission"
              className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-serif font-bold rounded shadow-lg hover:shadow-xl transition-all w-full sm:w-auto uppercase tracking-wide text-sm flex items-center justify-center"
            >
              Our Mission
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-200 hover:border-emerald-600/50 font-serif font-bold rounded shadow-md transition-all w-full sm:w-auto uppercase tracking-wide text-sm flex items-center justify-center"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-emerald-800/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;