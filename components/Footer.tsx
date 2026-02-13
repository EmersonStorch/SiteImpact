
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
        <div>
          {/* Logo Impactante (Mesmo padrão do Header) */}
          <div className="flex items-center gap-4 group mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-white blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-white to-brand-silver rounded-xl flex items-center justify-center transform transition-all duration-500 shadow-xl border border-white/20">
                <svg 
                  className="w-7 h-7 text-brand-dark" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z" 
                    fill="currentColor" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M12 10H21L11 22" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    className="opacity-50"
                  />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="text-2xl font-black tracking-[-0.05em] uppercase leading-none text-white">
                SITE<span className="text-brand-accent">IMPACT</span>
              </div>
              <div className="text-[8px] font-bold uppercase tracking-[0.4em] text-brand-slate mt-1 opacity-70">
                Digital Excellence
              </div>
            </div>
          </div>

          <p className="text-brand-slate mb-8 leading-relaxed max-w-xs">
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
