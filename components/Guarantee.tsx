
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Guarantee: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-brand-dark text-white text-center relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">
          Seu Sucesso Garantido.
        </h2>
        
        <div className="mb-16 inline-flex items-center gap-3 px-6 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-black uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          Últimas Vagas de Março com Preço Promocional
        </div>

        <div className="glass-card p-10 md:p-16 rounded-[3rem] border border-white/10 mb-16 shadow-2xl">
          <div className="flex flex-col items-center gap-10">
            <div className="w-24 h-24 bg-gradient-to-br from-brand-accent to-brand-emerald rounded-[2rem] flex items-center justify-center text-5xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              🛡️
            </div>
            <div className="max-w-2xl">
              <h3 className="text-3xl font-black mb-6 text-white">Garantia Blindada de 30 Dias</h3>
              <p className="text-brand-slate leading-relaxed text-lg font-medium">
                Na <strong>SITEIMPACT</strong>, o risco é nosso. Se após 30 dias você não sentir que sua nova presença digital reflete a qualidade do seu negócio, <strong>devolvemos 100% do seu investimento</strong>. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>

        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-white text-brand-dark font-black py-6 px-14 rounded-3xl shadow-2xl hover:bg-brand-accent hover:text-white transition-all transform hover:-translate-y-1 text-xl group"
        >
          Garantir Minha Vaga
          <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </section>
  );
};

export default Guarantee;
