import React from 'react';
import { Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-100 pt-16 pb-8 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-serif font-bold tracking-tight text-stone-900 block mb-4">
              The <span className="text-emerald-700">Rezende</span> Project
            </span>
            <p className="text-stone-600 max-w-sm mb-6">
              Empowering Brazil's youth through the strategic mastery of chess. Honoring a legacy, building a future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-500 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-500 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-500 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-stone-900 font-bold mb-4 uppercase text-sm tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-stone-600 hover:text-emerald-700 transition-colors">About Us</a></li>
              <li><a href="#mission" className="text-stone-600 hover:text-emerald-700 transition-colors">Mission & Vision</a></li>
              <li><a href="#founder" className="text-stone-600 hover:text-emerald-700 transition-colors">The Founder</a></li>
              <li><a href="#impact" className="text-stone-600 hover:text-emerald-700 transition-colors">Impact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-stone-900 font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-stone-600">São Paulo, Brazil</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-emerald-600 mr-3 flex-shrink-0" size={18} />
                <a href="mailto:contact@therezende.org" className="text-stone-600 hover:text-stone-900 transition-colors">
                  contact@therezende.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} The Rezende Project. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-stone-800">Privacy Policy</a>
            <a href="#" className="hover:text-stone-800">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;