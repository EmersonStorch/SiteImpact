
import React from 'react';

const faqs = [
  {
    q: 'Quanto custa criar um site profissional que vende?',
    a: 'Nossos projetos começam em R$1.997 para o pacote Essencial e podem chegar a valores sob consulta para sistemas complexos. O investimento é focado em retorno sobre o capital (ROI), pagando-se rapidamente com a nova captura de leads.'
  },
  {
    q: 'Quanto tempo leva para ter meu site pronto?',
    a: 'O prazo padrão é de 15 dias úteis. Trabalhamos com processos ágeis e sprints de design para garantir que sua empresa não perca tempo precioso fora do ar.'
  },
  {
    q: 'Como um site bom aumenta minhas vendas?',
    a: 'Diferente de um site comum, um site da SITEIMPACT foca na jornada do usuário. Utilizamos gatilhos de autoridade, copywriting persuasivo e pontos de conversão estratégicos para transformar visitantes em clientes.'
  },
  {
    q: 'Vocês cuidam da manutenção e hospedagem?',
    a: 'Sim, oferecemos infraestrutura de ponta. Seu site ficará hospedado em servidores de alta performance com suporte técnico dedicado, garantindo 99.9% de uptime.'
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-32 px-6 bg-[#0c0c0c] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-xs font-black uppercase tracking-[0.3em] block mb-4">Suporte</span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-zinc-500 font-medium">Tudo o que você precisa saber para dar o próximo passo.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div 
              key={i} 
              className="glass-card p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all duration-500 group"
            >
              <h3 className="text-xl font-bold text-zinc-100 mb-4 group-hover:text-white transition-colors flex items-start gap-4">
                <span className="text-brand-accent opacity-50">?</span>
                {f.q}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-base pl-7">
                {f.a}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-zinc-500 text-sm mb-6">Ainda tem dúvidas?</p>
          <a 
            href="#home" 
            className="text-white font-black uppercase tracking-widest text-xs border-b-2 border-brand-accent pb-1 hover:text-brand-accent transition-all"
          >
            Falar com um consultor agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
