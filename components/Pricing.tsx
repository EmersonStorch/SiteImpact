
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="precos" className="py-32 px-6 bg-brand-navy">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <span className="text-brand-slate text-xs font-black uppercase tracking-[0.3em] block mb-4">Investimento & ROI</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white">Planos Transparentes.</h2>
          <p className="text-brand-slate text-lg leading-relaxed">Design de elite acessível para empresas que não aceitam o comum.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="glass-card p-10 rounded-[2.5rem] flex flex-col hover:bg-white/[0.04] transition-all border-white/5">
            <div className="text-brand-slate text-[10px] font-black uppercase tracking-widest mb-2">Essencial</div>
            <h3 className="text-2xl font-black mb-6 text-white">Start</h3>
            <div className="mb-8">
              <span className="text-4xl font-black text-white">R$1.997</span>
              <span className="text-brand-slate text-xs ml-2">/ projeto</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {['Design Minimalista', 'Otimização Mobile', 'SEO Local Base', 'WhatsApp Direct', 'Hospedagem inclusa'].map(f => (
                <li key={f} className="flex items-center gap-3 text-brand-slate text-sm">
                  <span className="text-brand-emerald">✓</span> {f}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_LINK} className="w-full py-4 rounded-2xl border border-white/10 hover:bg-white hover:text-brand-dark transition-all text-center font-bold text-white">
              Selecionar Start
            </a>
          </div>

          {/* Plan 2 - Featured */}
          <div className="glass-card p-10 rounded-[2.5rem] flex flex-col relative border-brand-accent/30 bg-white/[0.02] overflow-hidden scale-105 z-10 shadow-2xl shadow-black/50">
            <div className="absolute top-6 right-8 bg-white text-brand-dark text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              Most Popular
            </div>
            <div className="text-brand-accent text-[10px] font-black uppercase tracking-widest mb-2">Estratégico</div>
            <h3 className="text-2xl font-black mb-6 text-white">Scale Pro</h3>
            <div className="mb-8">
              <span className="text-4xl font-black text-white">R$3.497</span>
              <span className="text-brand-slate text-xs ml-2">/ projeto</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {['Tudo do Start', 'Landing Page de Vendas', 'Copywriting Profissional', 'Analytics & Pixel Meta', 'Suporte Prioritário'].map(f => (
                <li key={f} className="flex items-center gap-3 text-white text-sm font-medium">
                  <span className="text-brand-accent">✦</span> {f}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_LINK} className="w-full py-4 rounded-2xl bg-white hover:bg-brand-accent transition-all text-center font-black text-brand-dark hover:text-white shadow-xl">
              Garantir Escala
            </a>
          </div>

          {/* Plan 3 */}
          <div className="glass-card p-10 rounded-[2.5rem] flex flex-col hover:bg-white/[0.04] transition-all border-white/5">
            <div className="text-brand-slate text-[10px] font-black uppercase tracking-widest mb-2">Premium</div>
            <h3 className="text-2xl font-black mb-6 text-white">Custom</h3>
            <div className="mb-8">
              <span className="text-4xl font-black text-white text-balance">Sob Consulta</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {['Sistemas Customizados', 'E-commerce de Luxo', 'Identidade Visual', 'SEO Avançado', 'Consultoria de Tráfego'].map(f => (
                <li key={f} className="flex items-center gap-3 text-brand-slate text-sm">
                  <span className="text-brand-emerald">✓</span> {f}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_LINK} className="w-full py-4 rounded-2xl border border-white/10 hover:bg-white hover:text-brand-dark transition-all text-center font-bold text-white">
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
