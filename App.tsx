
import React from 'react';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export const LogoSVG: React.FC<{ className?: string }> = ({ className = "h-14" }) => (
  <div className={`flex flex-col items-center group cursor-pointer ${className}`}>
    <div className="relative select-none">
      <svg 
        viewBox="0 0 240 65" 
        className="h-full w-auto"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ minWidth: '180px' }}
      >
        <defs>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
              .logo-text { font-family: 'Inter', sans-serif; font-weight: 900; font-size: 38px; letter-spacing: -0.04em; }
              .logo-subtext { font-family: 'Inter', sans-serif; font-weight: 900; font-size: 10px; fill: #94A3B8; text-transform: uppercase; }
              .fill-white { fill: #FFFFFF; }
              .fill-slate { fill: #94A3B8; }
            `}
          </style>
        </defs>
        
        {/* Linha Principal: SITEIMPACT */}
        <text x="0" y="36" className="logo-text">
          <tspan className="fill-white">SITE</tspan>
          <tspan className="fill-slate">IMPACT</tspan>
        </text>

        {/* Linha Inferior: DIGITAL EXCELLENCE - Alinhamento Perfeito */}
        <text 
          x="0" 
          y="58" 
          className="logo-subtext group-hover:fill-white transition-colors duration-300" 
          textLength="236" 
          lengthAdjust="spacing"
        >
          DIGITAL EXCELLENCE
        </text>
      </svg>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="relative">
      <header className="fixed top-0 left-0 w-full z-[100]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="glass-card rounded-2xl px-8 py-4 flex justify-between items-center shadow-2xl border-white/5">
            <a href="#home" className="flex items-center">
              <LogoSVG className="h-12 md:h-14" />
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
