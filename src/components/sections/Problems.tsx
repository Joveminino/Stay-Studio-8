import { memo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Search, Smartphone, CreditCard, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../lib/navigation';

const Problems = memo(() => {
  const problems = [
    { icon: <TrendingUp className="text-primary" aria-hidden="true" />, title: "Dependência de Terceiros", desc: "Seja Booking ou iFood, as taxas de 15-30% estão corroendo sua lucratividade e o controle sobre seu cliente." },
    { icon: <Search className="text-primary" aria-hidden="true" />, title: "Invisibilidade Digital", desc: "Não aparecer no topo do Google para buscas locais significa entregar seus clientes de bandeja para a concorrência." },
    { icon: <Smartphone className="text-primary" aria-hidden="true" />, title: "Fricção na Reserva", desc: "Sites lentos ou processos de reserva complexos fazem com que 80% dos usuários abandonem o carrinho antes de concluir." },
    { icon: <CreditCard className="text-primary" aria-hidden="true" />, title: "Tráfego sem Estratégia", desc: "Investir em anúncios sem uma página otimizada para conversão é queimar dinheiro em cliques que não viram vendas." }
  ];

  return (
    <section id="problemas" className="bg-border/20 py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground mb-4 text-balance px-4">O gargalo que impede seu crescimento</h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto px-4 text-balance">Identificamos os pontos críticos que travam a escala de hotéis, restaurantes e agências.</p>
          <div className="mt-6 h-1 w-16 md:h-1.5 md:w-20 bg-primary mx-auto rounded-full" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-surface p-6 md:p-8 rounded-2xl shadow-sm border border-accent/30"
            >
              <div className="mb-4 md:mb-6">{p.icon}</div>
              <h3 className="font-headline font-bold text-lg md:text-xl mb-3 text-foreground">{p.title}</h3>
              <p className="text-muted text-xs md:text-sm leading-relaxed font-medium">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center px-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="magnetic-btn inline-flex items-center justify-center gap-3 md:gap-4 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-base md:text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20 uppercase tracking-tighter italic w-full sm:w-auto"
          >
            Agendar Consultoria <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
});

Problems.displayName = 'Problems';

export default Problems;
