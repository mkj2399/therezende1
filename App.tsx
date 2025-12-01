import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Founder from './components/Founder';
import Impact from './components/Impact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-50/30 text-stone-800 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
        <Founder />
        <Impact />
      </main>
      <Footer />
    </div>
  );
};

export default App;