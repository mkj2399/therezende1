import React from 'react';
import { Clock, Users, Trophy, Heart } from 'lucide-react';

const Impact: React.FC = () => {
  const stats = [
    { icon: <Clock size={28} />, value: "100+", label: "Volunteer Hours" },
    { icon: <Users size={28} />, value: "30+", label: "Students per Club" },
    { icon: <Trophy size={28} />, value: "1500", label: "Avg. Member ELO" },
    { icon: <Heart size={28} />, value: "∞", label: "Smiles Created" },
  ];

  const galleryImages = [
    "/images/impact-1.jpg",
    "/images/impact-2.jpg",
    "/images/impact-3.jpg",
    "/images/impact-4.jpg"
  ];

  return (
    <section id="impact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
          Real Impact, Real Stories
        </h2>
        <p className="text-stone-600 max-w-2xl mx-auto mb-16 text-xl font-serif leading-relaxed">
          We are committed to transforming lives through chess. Our programs provide a safe, inspiring space for children to grow, learn, and master their potential.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-8 bg-amber-50 rounded-sm border border-amber-100 shadow-sm">
              <div className="text-emerald-700 mb-4 bg-white p-3 rounded-full shadow-sm">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-stone-800 mb-2 font-serif">{stat.value}</div>
              <div className="text-xs text-stone-500 uppercase tracking-widest font-sans">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryImages.map((src, idx) => (
                <div key={idx} className="overflow-hidden rounded-sm shadow-md group h-64 bg-stone-100">
                  <img 
                    src={src} 
                    alt={`Impact Moment ${idx + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale hover:grayscale-0" 
                  />
                </div>
              ))}
           </div>
        </div>

        {/* Volunteer Statement */}
        <div className="max-w-4xl mx-auto border-y-2 border-emerald-600/20 py-10">
          <p className="text-2xl font-serif italic text-stone-700 mb-4">
            "We are a 100% volunteer-run initiative."
          </p>
          <p className="text-stone-500 font-sans">
            Every mentor, every organizer, and every coach dedicates their time freely to preserve the legacy of Josino Rezende and uplift the next generation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Impact;