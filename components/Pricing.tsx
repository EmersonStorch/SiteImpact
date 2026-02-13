
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="precos" className="py-32 px-6 bg-brand-navy">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <span className="text-brand-accent text-xs font-black uppercase tracking-[0.3em] block mb-4">Investimento & ROI</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white">Planos Transparentes para seu Crescimento.</h2>
          <p className="text-brand-slate text-lg leading-relaxed">Selecione o nível de impacto que seu negócio precisa hoje.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="glass-card p-10 rounded-[2.5rem] flex flex-col hover:bg-white/[0.05] transition-all">
            <div className="text-brand-slate text-sm font-bold uppercase tracking-widest mb-2">Start</div>
            <h3 className="text-2xl font-black mb-6 text-white">Essencial</h3>
            <div className="mb-8">
              <span className="text-4xl font-black text-white">R$1.497</span>
              <span className="text-brand-slate text-xs ml-2">/ projeto</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {['5 Páginas Premium', 'Otimização Mobile', 'SEO Base', 'Integração Zap', 'Formulários'].map(f => (
                <li key={f} className="flex items-center gap-3 text-brand-slate text-sm">
                  <span className="text-brand-emerald">✓</span> {f}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_LINK} className="w-full py-4 rounded-2xl border border-white/10 hover:bg-white hover:text-brand-dark transition-all text-center font-bold text-white hover:text-brand-dark">
              Selecionar Start
            </a>
          </div>

          {/* Plan 2 - Featured */}
          <div className="glass-card p-10 rounded-[2.5rem] flex flex-col relative border-brand-accent/50 bg-brand-accent/5 overflow-hidden">
            <div className="absolute top-6 right-8 bg-brand-accent text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              Recomendado
            </div>
            <div className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-2">Scale</div>
            <h3 className="text-2xl font-black mb-6 text-white">Impacto Máximo</h3>
            <div className="mb-8">
              <span className="text-4xl font-black text-white">R$2.997</span>
              <span className="text-brand-slate text-xs ml-2">/ projeto</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {['Tudo do Essencial', 'LP de Alta Conversão', 'Copywriting Estratégico', 'Google Search Local', 'Analytics & Pixels'].map(f => (
                <li key={f} className="flex items-center gap-3 text-white text-sm font-medium">
                  <span className="text-brand-accent">✦</span> {f}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_LINK} className="w-full py-4 rounded-2xl bg-brand-accent hover:bg-blue-500 transition-all text-center font-black shadow-xl shadow-brand-accent/20 text-white">
              Garantir Escala
            </a>
          </div>

          {/* Plan 3 */}
          <div className="glass-card p-10 rounded-[2.5rem] flex flex-col hover:bg-white/[0.05] transition-all">
            <div className="text-brand-slate text-sm font-bold uppercase tracking-widest mb-2">Master</div>
            <h3 className="text-2xl font-black mb-6 text-white">E-commerce</h3>
            <div className="mb-8">
              <span className="text-4xl font-black text-white">R$4.997+</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {['Loja Virtual Completa', 'Checkout Otimizado', 'Suporte 6 Meses VIP', 'CRM Integrado', 'Velocidade Extrema'].map(f => (
                <li key={f} className="flex items-center gap-3 text-brand-slate text-sm">
                  <span className="text-brand-emerald">✓</span> {f}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_LINK} className="w-full py-4 rounded-2xl border border-white/10 hover:bg-white hover:text-brand-dark transition-all text-center font-bold text-white hover:text-brand-dark">
              Falar com Consultor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
