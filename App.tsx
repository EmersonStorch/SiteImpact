
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
    <div className="relative">
      <header className="fixed top-0 left-0 w-full z-[100]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="glass-card rounded-2xl px-6 py-4 flex justify-between items-center shadow-2xl border-white/5">
            <a href="#home" className="flex items-center gap-4 group cursor-pointer">
              {/* Novo Ícone de Alto Impacto */}
              <div className="relative">
                <div className="absolute inset-0 bg-white blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-white to-brand-silver rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white/20">
                  <svg 
                    className="w-7 h-7 text-brand-dark" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M13 2L3 14H12L11 22L21 10H12L13 2Z" 
                      fill="currentColor" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M12 10H21L11 22" 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      className="opacity-50"
                    />
                  </svg>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="text-2xl font-black tracking-[ -0.05em] uppercase leading-none">
                  SITE<span className="text-brand-accent">IMPACT</span>
                </div>
                <div className="text-[8px] font-bold uppercase tracking-[0.4em] text-brand-slate mt-1 opacity-70">
                  Digital Excellence
                </div>
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
