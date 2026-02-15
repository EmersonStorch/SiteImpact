
import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920",
    label: "Briefing Estratégico",
    tagline: "Planejamento Rio de Janeiro"
  },
  {
    image: "https://images.unsplash.com/photo-1522071823991-b515852307ad?auto=format&fit=crop&q=80&w=1920",
    label: "Agência de Marketing Digital",
    tagline: "Expertise em Escala"
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1920",
    label: "Desenvolvimento Fullstack",
    tagline: "Código de Alta Performance"
  }
];

const Hero: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <div 
            key={i}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${active === i ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
          >
            <img 
              src={slide.image} 
              className="w-full h-full object-cover brightness-[0.7]" 
              alt={slide.label} 
            />
          </div>
        ))}
        {/* Overlays de gradiente ajustados para manter a nitidez enquanto protege o texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-brand-dark/40 z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-xl backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            Performance Digital Rio de Janeiro
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-10 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] text-balance">
            Sua Nova <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">Máquina de <br/>Vendas Digital.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white drop-shadow-md max-w-2xl mb-14 leading-relaxed font-medium">
            Desenvolvemos sites com estética premium e performance extrema. 
            Do Rio para o Brasil, a <strong>SITEIMPACT</strong> redefine sua presença online.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-20">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-white text-brand-dark font-black rounded-2xl hover:bg-brand-accent hover:text-white transition-all duration-500 shadow-2xl flex items-center justify-center gap-4 text-xl group"
            >
              Consultoria Grátis
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            
            <div className="flex items-center gap-5 border-l border-white/40 pl-8">
              <div className="text-3xl font-black text-white drop-shadow-lg">15 Dias</div>
              <div className="text-[11px] font-bold text-white uppercase tracking-widest leading-none drop-shadow-md">Entrega no<br/>Rio e Brasil</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-12 -translate-y-1/2 z-30 hidden xl:block">
        <div className="glass-card p-8 rounded-[2.5rem] shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-700 animate-float backdrop-blur-xl bg-black/20">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div>
                <div className="text-2xl font-black text-white">+300%</div>
                <div className="text-[10px] font-bold text-white uppercase tracking-widest">ROI em Leads</div>
              </div>
            </div>
            
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="text-2xl font-black text-white">24/7</div>
                <div className="text-[10px] font-bold text-white uppercase tracking-widest">Vendas Ativas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
