import { memo } from 'react';
import { motion } from 'motion/react';
import { Sun, TrendingUp, Search, Clock, MessageCircle, Compass, Building2, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../lib/navigation';

const Deliverables = memo(() => {
  const deliverables = [
    { item: "Design de Audiência", detail: "Interfaces editoriais que transformam atenção em desejo visceral.", icon: <Sun size={32} className="text-primary" /> },
    { item: "Tráfego Magnético", detail: "Engenharia de anúncios em Google e Meta com foco cirúrgico em ROI.", icon: <TrendingUp size={32} className="text-primary" /> },
    { item: "Autoridade Orgânica", detail: "Dominação do Google para ser a primeira escolha do seu cliente.", icon: <Search size={32} className="text-primary" /> },
    { item: "Speed-of-Thought", detail: "Carregamento em milissegundos para eliminar qualquer barreira de compra.", icon: <Clock size={32} className="text-primary" /> },
    { item: "Copy que Conecta", detail: "Storytelling estratégico que gera urgência e vende experiências reais.", icon: <MessageCircle size={32} className="text-primary" /> },
    { item: "Independência Digital", detail: "Canais próprios de faturamento para você se libertar das taxas abusivas.", icon: <Compass size={32} className="text-primary" /> },
    { item: "Radar de Faturamento", detail: "Dashboards em tempo real com transparência total sobre seus números.", icon: <Building2 size={32} className="text-primary" /> },
    { item: "Inteligência de Dados", detail: "GA4 avançado e Pixel para otimização contínua baseada em fatos.", icon: <Smartphone size={32} className="text-primary" /> },
    { item: "Sessões de Escala", detail: "Consultoria periódica para ajustar a estratégia e acelerar o crescimento.", icon: <CheckCircle2 size={32} className="text-primary" /> }
  ];

  return (
    <section id="modelos" className="py-24 md:py-36 px-6 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-accent/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-8xl font-black text-foreground mb-8 md:mb-12 leading-[0.95] tracking-tighter uppercase italic text-balance">
            O Arsenal da <br />
            <span className="text-primary">Soberania Digital</span>.
          </h2>
          <p className="text-lg md:text-2xl text-muted font-medium mb-12 text-balance">
            Não entregamos apenas código e design. Forjamos ferramentas de dominação de mercado, unindo tecnologia de ponta com a ciência da conversão.
          </p>
          <div className="flex justify-center flex-wrap gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm" aria-hidden="true">
                <CheckCircle2 size={24} />
              </div>
              <span className="text-sm md:text-xl font-black uppercase tracking-tight">Performance</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shadow-sm" aria-hidden="true">
                <CheckCircle2 size={24} />
              </div>
              <span className="text-sm md:text-xl font-black uppercase tracking-tight">Autoridade</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-accent/10 flex items-center justify-center text-accent shadow-sm" aria-hidden="true">
                <CheckCircle2 size={24} />
              </div>
              <span className="text-sm md:text-xl font-black uppercase tracking-tight">Resultado</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {deliverables.map((d, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-surface p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-border/50 hover:border-primary transition-all duration-500 group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-background flex items-center justify-center mb-6 md:mb-8 shadow-inner group-hover:scale-110 group-hover:bg-primary/5 transition-all">
                {d.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{d.item}</h3>
              <p className="text-muted text-sm md:text-base leading-relaxed font-medium">{d.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 text-center text-balance">
          <div className="inline-block p-8 md:p-12 bg-foreground text-background rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-700 w-full sm:w-auto shadow-2xl">
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-bold mb-8 uppercase tracking-tighter">Pronto para a Soberania Digital?</h3>
              <button 
                onClick={() => scrollToSection('contact')}
                className="magnetic-btn relative overflow-hidden bg-white text-foreground px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-base md:text-lg transition-all uppercase italic w-full sm:w-auto shadow-lg group/btn"
              >
                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-500">Agendar Consultoria</span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Deliverables.displayName = 'Deliverables';

export default Deliverables;
