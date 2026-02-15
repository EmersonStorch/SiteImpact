
import React, { useEffect } from 'react';
import { BRAND_NAME, CONTACT_EMAIL, OWNER_NAME, WHATSAPP_NUMBER } from '../constants';
import { LogoSVG } from '../App';

const Footer: React.FC = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Criação de Sites Profissionais e Marketing Digital",
      "provider": {
        "@type": "LocalBusiness",
        "name": "SITEIMPACT",
        "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rio de Janeiro",
          "addressRegion": "RJ",
          "addressCountry": "BR"
        },
        "telephone": WHATSAPP_NUMBER,
        "priceRange": "R$1997 - R$9997"
      },
      "areaServed": [
        { "@type": "City", "name": "Rio de Janeiro" },
        { "@type": "Country", "name": "Brasil" }
      ],
      "description": "Design e performance para líderes de mercado. SITEIMPACT transforma sua presença digital.",
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
        <div className="flex flex-col items-start">
          <LogoSVG className="h-14 mb-8 -ml-4" />
          <p className="text-brand-slate mb-8 leading-relaxed max-w-xs text-sm">
            Especialistas em presença digital de alta performance. Redefinindo o padrão de sites para empresas brasileiras.
          </p>
          <div className="flex gap-4">
             <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-brand-dark cursor-pointer transition-all border border-white/5 font-bold">in</div>
             <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-brand-dark cursor-pointer transition-all border border-white/5 font-bold">ig</div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Agência Rio de Janeiro</h4>
          <ul className="space-y-4 text-brand-slate">
            <li><strong className="text-white">WhatsApp:</strong> <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-white transition-colors">{formatPhone(WHATSAPP_NUMBER)}</a></li>
            <li><strong className="text-white">Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a></li>
            <li><strong className="text-white">Especialista:</strong> {OWNER_NAME}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-white tracking-tight">Navegação</h4>
          <ul className="space-y-4 text-brand-slate">
            <li><a href="#beneficios" className="hover:text-white transition-colors">Diferenciais</a></li>
            <li><a href="#resultados" className="hover:text-white transition-colors">Portfólio</a></li>
            <li><a href="#precos" className="hover:text-white transition-colors">Planos</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-brand-slate uppercase tracking-widest text-center md:text-left">
        <p>&copy; 2026 {BRAND_NAME}. Todos os direitos reservados.</p>
        <p>Desenvolvido com excelência por {OWNER_NAME}</p>
      </div>
    </footer>
  );
};

export default Footer;
