import { memo } from 'react';
import { motion } from 'motion/react';
import { Search, Sun, TrendingUp } from 'lucide-react';

const Process = memo(() => (
  <section id="sucesso" className="py-20 md:py-32 px-6 bg-background relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" aria-hidden="true">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary blur-[120px] rounded-full animate-pulse font-sans" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent blur-[120px] rounded-full" />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 border-b border-border/10 pb-8 md:pb-12 text-balance">
        <div className="max-w-2xl">
          <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Metodologia Stay8</span>
          <h2 className="text-4xl md:text-8xl font-black text-foreground leading-[0.95] tracking-tighter uppercase italic">
            A Jornada <br /> do <span className="text-primary">Sucesso</span>.
          </h2>
        </div>
        <div className="flex flex-col items-start md:items-end">
          <p className="text-muted text-lg md:text-xl max-w-sm mb-6 font-medium text-left md:text-right">
            Três estágios matemáticos para dominar seu setor e escalar sua receita.
          </p>
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-10 md:w-12 h-1 bg-border/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '0%' }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="h-full bg-primary" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {[
          { 
            step: "01", 
            title: "O Despertar", 
            desc: "Mapeamos o DNA da sua marca e as falhas da concorrência para criar um posicionamento único e magnético.",
            icon: <Search className="text-primary" size={40} />,
            color: "border-primary/20",
            path: "M0,50 Q25,0 50,50 T100,50"
          },
          { 
            step: "02", 
            title: "A Construção", 
            desc: "Engenharia digital onde estética de luxo e psicologia de vendas se fundem em um canal de reservas implacável.",
            icon: <Sun className="text-secondary" size={40} />,
            color: "border-secondary/20",
            path: "M0,50 C20,20 40,20 50,50 C60,80 80,80 100,50"
          },
          { 
            step: "03", 
            title: "A Conquista", 
            desc: "Turbo-performance e tráfego massivo. Dominamos os algoritmos para garantir ROI real e sustentabilidade infinita.",
            icon: <TrendingUp className="text-accent" size={40} />,
            color: "border-accent/20",
            path: "M0,80 L20,60 L40,70 L60,30 L80,40 L100,10"
          }
        ].map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
            className={`group relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-surface border-2 ${s.color} hover:border-primary transition-all duration-700 overflow-hidden flex flex-col justify-between min-h-[400px] md:min-h-[550px] shadow-sm hover:shadow-2xl hover:-translate-y-4 text-balance`}
          >
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none" aria-hidden="true">
               <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d={s.path} stroke="currentColor" fill="none" strokeWidth="0.2" />
               </svg>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-10 md:mb-12">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-background flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {s.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-foreground/10 group-hover:text-primary transition-colors">
                  {s.step}
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-headline font-black text-foreground mb-6 md:mb-8 leading-[0.9] uppercase tracking-tighter">
                {s.title}
              </h3>
              <p className="text-muted text-base md:text-xl leading-relaxed font-medium">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
));

Process.displayName = 'Process';

export default Process;
