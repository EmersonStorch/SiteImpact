
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Guarantee: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-brand-dark text-white text-center relative overflow-hidden">
      {/* Decoração de fundo sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/3 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-brand-accent text-xs font-black uppercase tracking-[0.3em] block mb-6">Pronto para Escalar</span>
        
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-white">
          Pronto para escalar<br/>sua agência?
        </h2>

        <p className="text-brand-slate text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          Junte-se a centenas de agências que já profissionalizaram sua gestão comercial com o CriaLead.
        </p>
        
        <div className="mb-12 inline-flex items-center gap-3 px-6 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-brand-accent text-xs font-black uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
          Últimas Vagas com Preço Promocional
        </div>

        {/* Card de garantia com borda sutil */}
        <div className="glass-card p-10 md:p-16 rounded-[3rem] border border-white/8 mb-16 shadow-2xl">
          <div className="flex flex-col items-center gap-10">
            <div className="w-24 h-24 bg-brand-accent/10 border border-brand-accent/20 rounded-[2rem] flex items-center justify-center text-5xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              🛡️
            </div>
            <div className="max-w-2xl">
              <h3 className="text-3xl font-black mb-6 text-white">Garantia Blindada de 30 Dias</h3>
              <p className="text-brand-slate leading-relaxed text-lg font-medium">
                Na <strong className="text-white">SITEIMPACT</strong>, o risco é nosso. Se após 30 dias você não sentir que sua nova presença digital reflete a qualidade do seu negócio, <strong className="text-white">devolvemos 100% do seu investimento</strong>. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>

        {/* Benefícios rápidos */}
        <div className="flex flex-wrap justify-center gap-8 mb-14 text-sm text-brand-slate">
          <span className="flex items-center gap-2"><span className="text-brand-accent">✓</span> Sem cartão de crédito</span>
          <span className="flex items-center gap-2"><span className="text-brand-accent">✓</span> Setup instantâneo</span>
          <span className="flex items-center gap-2"><span className="text-brand-accent">✓</span> Cancele quando quiser</span>
        </div>

        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-brand-accent text-white font-black py-6 px-14 rounded-3xl shadow-2xl hover:bg-white hover:text-brand-dark transition-all transform hover:-translate-y-1 text-xl group border border-brand-accent/50"
        >
          Começar Agora — É Grátis
          <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </section>
  );
};

export default Guarantee;
