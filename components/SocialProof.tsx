
import React from 'react';

const testimonials = [
  {
    name: 'Ana Paula',
    role: 'Advocacia Especializada',
    quote: 'O site passou uma autoridade instantânea para o escritório. O número de consultas agendadas via WhatsApp triplicou em 30 dias.',
    img: 'https://i.pravatar.cc/150?u=ana'
  },
  {
    name: 'Dr. Roberto',
    role: 'Medicina e Saúde',
    quote: 'Design limpo e carregamento extremamente rápido. Meus pacientes agora me encontram no Google com facilidade.',
    img: 'https://i.pravatar.cc/150?u=rob'
  },
  {
    name: 'Marcos Silva',
    role: 'PME Industrial',
    quote: 'A SITEIMPACT não apenas fez o site, eles criaram a estratégia que trouxe novos parceiros comerciais para nossa indústria.',
    img: 'https://i.pravatar.cc/150?u=marc'
  }
];

const SocialProof: React.FC = () => {
  return (
    <section id="resultados" className="py-32 bg-brand-navy border-y border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-brand-accent text-xs font-black uppercase tracking-[0.3em] block mb-4">Resultados</span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
            Casos que geram Impacto Real.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-[2rem] glass-card hover:bg-white/[0.05] transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-accent blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img src={t.img} alt={t.name} className="relative w-14 h-14 rounded-2xl grayscale group-hover:grayscale-0 transition-all border border-white/10" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-[10px] text-brand-slate uppercase font-black tracking-widest">{t.role}</p>
                </div>
              </div>
              <p className="text-brand-slate text-sm leading-relaxed italic">"{t.quote}"</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center bg-white/[0.02] border border-white/5 p-12 rounded-[3rem]">
          <div className="md:col-span-5">
            <div className="text-6xl font-black text-white mb-2">+47</div>
            <div className="text-brand-emerald font-black uppercase tracking-[0.2em] text-xs">Sites de Alta Performance</div>
            <p className="text-brand-slate mt-4 text-sm">Entregues nos últimos 12 meses com foco total em ROI para o cliente final.</p>
          </div>
          <div className="md:col-span-7 flex flex-wrap justify-center md:justify-end gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-white font-black italic text-xl">LUMINA</div>
            <div className="text-white font-black italic text-xl">NEXUS</div>
            <div className="text-white font-black italic text-xl">VERTICE</div>
            <div className="text-white font-black italic text-xl">PRISMA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
