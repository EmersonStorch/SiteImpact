
import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-32 px-6 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white text-balance">Excelência em cada Pixel.</h2>
          <p className="text-brand-slate max-w-2xl mx-auto text-lg">Unimos design de nível mundial com estratégias de marketing agressivas para destacar seu negócio da concorrência no Rio de Janeiro.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Big Bento Card com imagem de agência */}
          <div className="md:col-span-2 md:row-span-2 glass-card rounded-[3rem] p-12 flex flex-col justify-between group hover:border-brand-accent/50 transition-all duration-500 overflow-hidden relative">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-brand-accent rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-brand-accent/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-3xl font-black mb-6 text-white">Briefing Estratégico</h3>
              <p className="text-brand-slate text-lg leading-relaxed">Entendemos seu modelo de negócio no detalhe antes de desenhar qualquer linha de código. Cada projeto na SiteImpacto nasce de uma análise profunda de mercado.</p>
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/5 flex items-center gap-6 relative z-10">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=${i+20}`} className="w-10 h-10 rounded-full border-2 border-brand-dark" alt="User" />)}
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Equipe Especializada</span>
            </div>
            
            {/* Imagem de fundo sutil para o card */}
            <div className="absolute inset-0 opacity-10 grayscale group-hover:opacity-20 transition-opacity duration-700">
               <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Briefing meeting" />
            </div>
          </div>

          {/* Small Bento Card 1 */}
          <div className="md:col-span-2 glass-card rounded-[3rem] p-10 group hover:border-brand-emerald/50 transition-all duration-500">
            <div className="flex gap-8 items-start">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-emerald shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">SEO para Busca Local</h3>
                <p className="text-brand-slate text-sm">Domine as buscas no Rio de Janeiro e Brasil. Seu site pronto para aparecer para quem realmente quer comprar.</p>
              </div>
            </div>
          </div>

          {/* Small Bento Card 2 */}
          <div className="glass-card rounded-[3rem] p-10 hover:border-white/20 transition-all">
            <div className="text-brand-accent mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="font-bold mb-2 text-white">Performance</h3>
            <p className="text-brand-slate text-xs">Otimização máxima de carregamento para retenção total de usuários.</p>
          </div>

          {/* Small Bento Card 3 */}
          <div className="glass-card rounded-[3rem] p-10 hover:border-white/20 transition-all">
            <div className="text-brand-emerald mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="font-bold mb-2 text-white">Suporte VIP</h3>
            <p className="text-brand-slate text-xs">Atendimento humano e rápido para garantir que seu site nunca pare.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
