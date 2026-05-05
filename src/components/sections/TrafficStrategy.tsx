import { memo } from 'react';
import { motion } from 'motion/react';
import { Network, Target, Cpu, Layers, BarChart3, Database, TrendingUp, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../lib/navigation';

const TrafficStrategy = memo(() => {
  const steps = [
    {
      icon: <Network className="text-primary" size={32} />,
      title: "Inteligência Estratégica",
      subtitle: "Modelagem de Negócio",
      items: ["Hotéis & Resorts", "Gastronomia Premium", "Agências de Receptivo", "E-commerce de Viagens"],
      bg: "bg-primary/5"
    },
    {
      icon: <Target className="text-secondary" size={32} />,
      title: "Geração de Receita",
      subtitle: "Direto ou Indireto",
      items: ["Vendas Diretas & Reservas", "Captação de Leads Qualificados", "Booking Engine Sync", "ROI Tracking de Ponta a Ponta"],
      bg: "bg-secondary/5"
    },
    {
      icon: <Cpu className="text-accent" size={32} />,
      title: "Infraestrutura Tech",
      subtitle: "Gestão & Setup",
      items: ["Meta Ads (BM Config)", "Google Ads Search/PMax", "Google Tag Manager (GTM)", "TikTok & Bing Ads"],
      bg: "bg-accent/5"
    }
  ];

  return (
    <section id="trafego" className="py-24 md:py-32 px-6 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground mb-4 md:mb-6 leading-tight text-balance">
              Blueprint de Tráfego: <br />
              <span className="text-primary">Engenharia de Atração</span>
            </h2>
            <p className="text-muted text-base md:text-lg text-balance">
              Dominamos as ferramentas que controlam o fluxo de atenção global. Nossa estrutura é desenhada para converter curiosidade em receita.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="text-right">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted border-b border-primary/30 pb-2">Status do Sistema: Ativo</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className={`p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-border/50 ${s.bg} backdrop-blur-sm relative group hover:border-primary/30 transition-all duration-500`}
            >
              <div className="mb-6 md:mb-8 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">{s.subtitle}</span>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs md:text-sm text-muted font-medium">
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-primary/30 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="absolute top-1/2 -right-4 w-8 h-px bg-border/50 hidden lg:block last:hidden" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-border/50 flex flex-wrap justify-center gap-6 md:gap-12 text-muted">
          <div className="flex items-center gap-2">
            <Layers size={12} className="text-primary" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Meta Business Suite</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 size={12} className="text-secondary" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Google Ads Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <Database size={12} className="text-accent" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">GTM Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp size={12} />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">TikTok Ads Manager</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu size={12} />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Microsoft Advertising</span>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center px-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="magnetic-btn group relative w-full sm:w-auto px-8 md:px-12 py-5 md:py-6 bg-foreground text-background rounded-full font-black text-lg md:text-xl italic uppercase tracking-tighter overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 flex items-center justify-center gap-4">
              Dominar Canais de Aquisição <ArrowRight size={24} />
            </span>
          </motion.button>
          <p className="mt-6 text-muted font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-center">Atenção: Vagas limitadas por setor/região.</p>
        </div>
      </div>
    </section>
  );
});

TrafficStrategy.displayName = 'TrafficStrategy';

export default TrafficStrategy;
