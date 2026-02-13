
import React from 'react';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="relative selection:bg-brand-accent selection:text-white">
      {/* High-end Header */}
      <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="glass-card rounded-2xl px-6 py-4 flex justify-between items-center shadow-2xl">
            <a href="#home" className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div className="text-xl font-black tracking-tighter uppercase">
                Site<span className="text-brand-accent">Impacto</span>
              </div>
            </a>
            
            <nav className="hidden md:flex items-center gap-10">
              <a href="#beneficios" className="text-xs font-black uppercase tracking-[0.2em] text-brand-slate hover:text-white transition-colors">Vantagens</a>
              <a href="#resultados" className="text-xs font-black uppercase tracking-[0.2em] text-brand-slate hover:text-white transition-colors">Resultados</a>
              <a href="#precos" className="text-xs font-black uppercase tracking-[0.2em] text-brand-slate hover:text-white transition-colors">Planos</a>
              <a 
                href="#precos" 
                className="bg-white text-brand-dark px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-accent hover:text-white transition-all shadow-lg"
              >
                Orçamento
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Benefits />
        <SocialProof />
        <Pricing />
        <FAQ />
        <Guarantee />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
