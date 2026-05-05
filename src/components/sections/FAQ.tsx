import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQ = memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Qual o prazo médio para ver resultados em SEO Local?", a: "Diferente do SEO tradicional, o SEO Local (Google Meu Negócio) pode apresentar as primeiras melhorias de posicionamento e volume de chamadas em 30 a 60 dias, dependendo da concorrência local." },
    { q: "Como vocês garantem a redução das taxas das OTAs/iFood?", a: "Nossa estratégia foca na criação de canais diretos (Websites Premium e Landing Pages) e campanhas de anúncios que direcionam o público para esses canais, reduzindo a dependência de intermediários." },
    { q: "Preciso de um alto investimento em tráfego pago?", a: "Não. Começamos com orçamentos otimizados para validar sua oferta e escalamos à medida que o ROI (Retorno sobre Investimento) for comprovado." },
    { q: "O site será otimizado para celulares?", a: "Sim, 100%. Utilizamos a abordagem mobile-first, garantindo que a experiência de reserva ou compra seja fluida e rápida em qualquer dispositivo móvel." },
    { q: "Vocês fazem apenas o design ou cuidam de tudo?", a: "Oferecemos uma solução ponta a ponta: do design editorial focado em conversão até a gestão estratégica de anúncios e SEO." }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground mb-4">Dúvidas Frequentes</h2>
          <p className="text-muted text-base md:text-lg">Transparência total sobre nosso processo e entrega.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-border/50 rounded-2xl overflow-hidden bg-background shadow-sm hover:border-primary/20 transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-muted/5 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-bold text-foreground text-base md:text-lg pr-4">{f.q}</span>
                <ChevronDown className={`shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-primary' : 'text-muted'}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-muted text-sm md:text-base leading-relaxed border-t border-border/5">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

FAQ.displayName = 'FAQ';

export default FAQ;
