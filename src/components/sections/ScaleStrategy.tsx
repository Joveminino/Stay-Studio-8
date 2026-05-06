import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Smartphone, Search, Target } from 'lucide-react';
import Logo from '../Logo';
import { scrollToSection } from '../../lib/navigation';

const ScaleStrategy = memo(() => {
  const [activeTab, setActiveTab] = useState('trafego');

  const strategies = {
    trafego: {
      title: "Tráfego Pago",
      subtitle: "Gestão Dinâmica de Canais",
      icon: <TrendingUp className="text-secondary" size={24} />,
      items: [
        { title: "Meta Ads Local", detail: "Configuração de BM, API de Conversões e Pixel para tracking absoluto em Hotelaria e Gastronomia." },
        { title: "Google Search Elite", detail: "Campanhas de intenção de compra para capturar viajantes no momento exato da decisão." },
        { title: "Remarketing Multi-Canal", detail: "Estratégias de perseguição ética no TikTok e Display para recuperar reservas perdidas." }
      ]
    },
    web: {
      title: "Websites & LPs",
      subtitle: "Engenharia de Conversão",
      icon: <Smartphone className="text-primary" size={24} />,
      items: [
        { title: "Landing Pages de Alta Conversão", detail: "Páginas mobile-first focadas em um único objetivo: transformar clique em reserva." },
        { title: "Websites Editoriais", detail: "Design que respira luxo e autoridade, otimizado para PageSpeed 95+ e Core Web Vitals." },
        { title: "Otimização de Checkout", detail: "Redução de fricção no funil de vendas para maximizar o ticket médio do negócio." }
      ]
    },
    seo: {
      title: "SEO & Conteúdo",
      subtitle: "Dominação Orgânica Local",
      icon: <Search className="text-accent" size={24} />,
      items: [
        { title: "SEO Local & Maps", detail: "Otimização massiva do Google Business para dominar as buscas locais em sua região." },
        { title: "Soberania Técnica", detail: "Estrutura de Schema Markup e Sitemaps para que o Google te enxergue como líder do nicho." },
        { title: "Laboratório de Conteúdo", detail: "Artigos de destino e roteiros estratégicos que geram tráfego orgânico qualificado e gratuito." }
      ]
    }
  };

  return (
    <section id="strategy" className="py-24 md:py-32 px-6 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-balance">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">Matriz Técnica</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-8 leading-tight">Mapa de <br /> Escala Stay8</h3>
            <p className="text-muted text-lg mb-12 font-medium leading-relaxed">Nossa metodologia unifica tráfego, design e SEO em uma única engine de faturamento.</p>
            
            <div className="space-y-4">
              {Object.entries(strategies).map(([id, s]) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`w-full p-6 rounded-[2rem] border transition-all flex items-center gap-5 text-left group ${activeTab === id ? 'bg-white border-primary/20 shadow-2xl scale-[1.03]' : 'bg-transparent border-transparent opacity-80 hover:opacity-100 hover:bg-white/5'}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${activeTab === id ? 'bg-primary text-white' : 'bg-background text-foreground/60 group-hover:text-primary'}`}>
                    {s.icon}
                  </div>
                  <div>
                    <h4 className={`font-black text-sm uppercase tracking-tight transition-colors ${activeTab === id ? 'text-foreground' : 'text-foreground/80'}`}>{s.title}</h4>
                    <span className={`text-[8px] uppercase font-bold tracking-[0.2em] ${activeTab === id ? 'text-primary' : 'text-foreground/60'}`}>{s.subtitle}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
             <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-border/50 shadow-2xl relative overflow-hidden min-h-[650px] flex flex-col">
                <div className="absolute top-0 right-0 p-12 opacity-80 pointer-events-none">
                   <Logo />
                </div>
                
                <AnimatePresence mode="wait">
                   <motion.div
                     key={activeTab}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.5, ease: "circOut" }}
                     className="relative z-10 flex-1 flex flex-col"
                   >
                     <div className="flex items-center gap-4 mb-16">
                        <div className="h-0.5 w-16 bg-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">{strategies[activeTab as keyof typeof strategies].title}</span>
                     </div>
                     
                     <div className="space-y-12 flex-1">
                        {strategies[activeTab as keyof typeof strategies].items.map((item, i) => (
                          <div key={i} className="group relative pl-8 border-l border-border/20 hover:border-primary transition-colors">
                             <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors" />
                             <h4 className="text-2xl md:text-3xl font-black text-foreground mb-4 italic group-hover:translate-x-2 transition-transform duration-500">{item.title}</h4>
                             <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl font-medium">{item.detail}</p>
                          </div>
                        ))}
                     </div>

                     <div className="mt-20 pt-10 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-8 bg-surface/30 -mx-8 -mb-8 md:-mx-16 md:-mb-16 p-8 md:p-16">
                        <div className="flex items-center gap-5">
                           <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center shadow-xl">
                              <Target size={28} />
                           </div>
                           <div>
                              <p className="text-sm font-black text-foreground uppercase tracking-tight">Foco em Resultado Direto</p>
                              <p className="text-xs text-muted font-medium">Cada ação é medida pelo ROI e faturamento gerado.</p>
                           </div>
                        </div>
                        <button 
                          onClick={() => scrollToSection('contact')}
                          className="magnetic-btn relative overflow-hidden bg-primary text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-primary/20 group/btn"
                        >
                          <span className="relative z-10 group-hover/btn:text-foreground transition-colors duration-500">Agendar Diagnóstico</span>
                          <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
                        </button>
                     </div>
                   </motion.div>
                </AnimatePresence>
                
                <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ScaleStrategy.displayName = 'ScaleStrategy';

export default ScaleStrategy;
