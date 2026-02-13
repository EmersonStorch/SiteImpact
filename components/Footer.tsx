
import React, { useEffect } from 'react';
import { BRAND_NAME, CONTACT_EMAIL, OWNER_NAME, WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Criação de Sites Profissionais e Marketing Digital",
      "provider": {
        "@type": "LocalBusiness",
        "name": BRAND_NAME,
        "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rio de Janeiro",
          "addressRegion": "RJ",
          "addressCountry": "BR"
        },
        "telephone": WHATSAPP_NUMBER,
        "priceRange": "R$1497 - R$7997"
      },
      "areaServed": [
        { "@type": "City", "name": "Rio de Janeiro" },
        { "@type": "Country", "name": "Brasil" }
      ],
      "description": "Criação de sites profissionais e de alta conversão no Rio de Janeiro. Especialistas em transformar tráfego em faturamento real.",
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.querySelector('script[type="application/ld+json"]');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  const formatPhone = (num: string) => {
    return `(21) 98108-9356`;
  };

  return (
    <footer className="bg-brand-navy text-white py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        <div>
          <div className="text-2xl font-black mb-6 tracking-tighter">SITE<span className="text-brand-accent">IMPACTO</span></div>
          <p className="text-brand-slate mb-6 leading-relaxed">
            Especialistas em presença digital de alta performance. Transformamos o posicionamento de empresas brasileiras com tecnologia e design de elite.
          </p>
          <div className="flex gap-4">
             <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-accent cursor-pointer transition-all border border-white/5">in</div>
             <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-accent cursor-pointer transition-all border border-white/5">ig</div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Agência Rio de Janeiro</h4>
          <ul className="space-y-4 text-brand-slate">
            <li><strong className="text-white">WhatsApp:</strong> <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-brand-accent transition-colors">{formatPhone(WHATSAPP_NUMBER)}</a></li>
            <li><strong className="text-white">Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand-accent transition-colors">{CONTACT_EMAIL}</a></li>
            <li><strong className="text-white">Especialista:</strong> {OWNER_NAME}</li>
            <li className="text-xs mt-4 opacity-50 uppercase tracking-widest">Atendimento em todo o Brasil</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Navegação</h4>
          <ul className="space-y-4 text-brand-slate">
            <li><a href="#beneficios" className="hover:text-white transition-colors">Diferenciais</a></li>
            <li><a href="#precos" className="hover:text-white transition-colors">Planos e Preços</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-slate">
        <p>&copy; 2026 {BRAND_NAME}. CNPJ sob consulta. Rio de Janeiro - Brasil.</p>
        <p>Expertise digital por {OWNER_NAME}</p>
      </div>
    </footer>
  );
};

export default Footer;
