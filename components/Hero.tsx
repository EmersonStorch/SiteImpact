
import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920",
    label: "CRM para Agências Digitais",
    tagline: "Gestão Inteligente de Leads"
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1920",
    label: "Pipeline de Vendas",
    tagline: "Feche Mais Negócios"
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1920",
    label: "Dashboard Inteligente",
    tagline: "Decisões Baseadas em Dados"
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
      
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <div 
            key={i}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${active === i ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={slide.image} 
              className="w-full h-full object-cover brightness-[0.45]" 
              alt={slide.label} 
            />
          </div>
        ))}
        {/* Gradientes suaves para proteger legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/50 to-brand-dark/20 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-brand-dark/30 z-10"></div>
      </div>

      {/* Indicadores de slide */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all duration-500 ${active === i ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-xl backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
            O CRM #1 Para Agências Digitais
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-10 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] text-balance">
            Sua agência <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-silver to-brand-accent">organizada,<br/>vendas no topo.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 drop-shadow-md max-w-2xl mb-14 leading-relaxed font-medium">
            Pare de perder leads em planilhas. Gerencie clientes, pipeline e orçamentos em uma plataforma moderna feita por quem entende de agências.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-20">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-brand-accent text-white font-black rounded-2xl hover:bg-white hover:text-brand-dark transition-all duration-500 shadow-2xl flex items-center justify-center gap-4 text-lg group border border-brand-accent/50"
            >
              Começar Agora — É Grátis
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            
            <button className="px-10 py-5 border border-white/20 text-white font-bold rounded-2xl hover:border-brand-accent hover:text-brand-accent transition-all duration-300 text-lg backdrop-blur-sm bg-white/5">
              ▶ Ver Demonstração
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10">
            {[
              { value: '500+', label: 'Agências Ativas' },
              { value: 'R$ 2M+', label: 'Em Deals Fechados' },
              { value: '98%', label: 'Satisfação' },
              { value: '24/7', label: 'Suporte Especializado' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl font-black text-white">{stat.value}</span>
                <span className="text-xs font-bold text-brand-slate uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card flutuante lateral */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 z-30 hidden xl:block">
        <div className="glass-card p-8 rounded-[2.5rem] shadow-2xl border border-white/10 hover:border-brand-accent/30 transition-all duration-700 animate-float backdrop-blur-xl bg-black/30">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-brand-accent/20 rounded-2xl flex items-center justify-center text-brand-accent shadow-inner border border-brand-accent/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div>
                <div className="text-2xl font-black text-white">+300%</div>
                <div className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">ROI em Leads</div>
              </div>
            </div>
            
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-brand-accent/20 rounded-2xl flex items-center justify-center text-brand-accent shadow-inner border border-brand-accent/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="text-2xl font-black text-white">24/7</div>
                <div className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">Vendas Ativas</div>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-brand-emerald/20 rounded-2xl flex items-center justify-center text-brand-emerald shadow-inner border border-brand-emerald/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <div className="text-2xl font-black text-white">500+</div>
                <div className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">Agências Ativas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
