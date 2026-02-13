
import React from 'react';

const faqs = [
  {
    q: 'Quanto custa criar um site profissional que vende?',
    a: 'Nossos projetos começam em R$1.497 para o pacote Essencial e podem chegar a R$7.997 para e-commerces complexos. O investimento se paga rapidamente com o aumento na captura de novos clientes.'
  },
  {
    q: 'Quanto tempo leva para ter meu site pronto?',
    a: 'O prazo padrão é de 15 dias úteis, dependendo do envio de materiais pelo cliente. Trabalhamos com processos ágeis para garantir que você não perca nem um dia a mais sem presença digital.'
  },
  {
    q: 'Como um site bom aumenta minhas vendas?',
    a: 'Diferente de um site "bonitinho", um site conversivo foca na dor do seu cliente e na solução. Usamos gatilhos mentais, provas sociais e CTAs estratégicos para guiar o visitante até o contato final.'
  },
  {
    q: 'Vocês cuidam da manutenção e hospedagem?',
    a: 'Sim, oferecemos suporte completo para que você se preocupe apenas com seu negócio. Garantimos que seu site esteja sempre seguro, rápido e atualizado.'
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 px-6 bg-slate-50 border-t border-slate-100 text-brand-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-brand-navy text-center mb-12 tracking-tight">
          Dúvidas Frequentes sobre Sites que Vendem
        </h2>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-brand-navy mb-3">{f.q}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
