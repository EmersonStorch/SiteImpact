
import React, { useState } from 'react';
import { WHATSAPP_LINK } from '../constants';

const faqs = [
  {
    q: 'O que é o CriaLead e para quem é indicado?',
    a: 'O CriaLead é um CRM desenvolvido especialmente para agências digitais que precisam organizar leads, gerenciar pipelines de vendas e fechar mais negócios. É ideal para freelancers, pequenas e médias agências que querem profissionalizar sua gestão comercial.'
  },
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
  },
  {
    q: 'O CRM possui alertas e notificações automáticas?',
    a: 'Sim! O painel CRM do CriaLead conta com alertas sonoros para vencimento próximo de leads, mudanças de status no pipeline e celebração ao bater a meta mensal. Tudo em tempo real, sem precisar ficar monitorando manualmente.'
  },
  {
    q: 'Posso cancelar a qualquer momento?',
    a: 'Absolutamente. Não há fidelidade mínima. Você pode cancelar sua assinatura a qualquer momento sem burocracia. Além disso, oferecemos garantia de 30 dias: se não ficar satisfeito, devolvemos 100% do seu investimento.'
  },
  {
    q: 'Quantos usuários posso ter na minha conta?',
    a: 'No plano Starter você tem acesso para 1 usuário. No plano Pro, até 5 usuários podem colaborar na mesma conta. No plano Elite, o número de usuários é ilimitado, ideal para equipes maiores.'
  },
];

const FAQ: React.FC = () => {
  const [aberto, setAberto] = useState<number | null>(0);

  const toggle = (i: number) => setAberto(prev => prev === i ? null : i);

  return (
    <section id="faq" className="py-32 px-6 bg-brand-dark border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-xs font-black uppercase tracking-[0.3em] block mb-4">Dúvidas Frequentes</span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            Tudo o que você precisa saber
          </h2>
          <p className="text-brand-slate font-medium max-w-xl mx-auto">
            Respondemos as perguntas mais comuns para você dar o próximo passo com confiança.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`glass-card rounded-[1.5rem] border transition-all duration-300 overflow-hidden
                ${aberto === i ? 'border-brand-accent/30 bg-white/[0.04]' : 'border-white/5 hover:border-white/10'}`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left group"
              >
                <span className={`text-base font-bold transition-colors duration-200 ${aberto === i ? 'text-white' : 'text-zinc-200 group-hover:text-white'}`}>
                  {f.q}
                </span>
                <span className={`shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-300
                  ${aberto === i
                    ? 'bg-brand-accent border-brand-accent text-white rotate-45'
                    : 'border-white/10 text-brand-slate group-hover:border-brand-accent/40 group-hover:text-brand-accent'}`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${aberto === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-8 pb-6 text-brand-slate leading-relaxed text-base">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center glass-card p-10 rounded-[2rem] border border-white/5">
          <p className="text-white font-bold text-lg mb-2">Ainda tem dúvidas?</p>
          <p className="text-brand-slate text-sm mb-8">Nossa equipe está pronta para responder qualquer pergunta.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-accent text-white font-black py-4 px-10 rounded-2xl hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-lg text-sm uppercase tracking-widest border border-brand-accent/50"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar com Consultor no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
