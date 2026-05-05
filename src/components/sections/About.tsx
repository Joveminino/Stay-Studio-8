import { memo } from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = memo(() => (
  <section id="sobre" className="py-24 md:py-32 px-6 bg-surface relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      <div className="relative">
        <div className="story-block p-8 md:p-12 bg-background rounded-[2.5rem] md:rounded-[3rem] border border-accent/20 relative z-10 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-6 md:mb-8 text-balance leading-tight">Engenharia de <br /> Audiência & Conversão</h2>
          <p className="text-foreground/80 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 text-balance font-medium">
            A staystudio8 nasceu para resolver um problema crônico do setor de lazer: a dependência de algoritmos e taxas abusivas. 
          </p>
          <p className="text-foreground/80 text-sm md:text-lg leading-relaxed text-balance font-medium">
            Não somos apenas uma agência de design. Somos um laboratório de performance que une a estética do luxo com a precisão do tráfego pago e a autoridade do SEO para garantir que seu negócio seja visto por quem realmente importa.
          </p>
        </div>
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-10 hidden sm:block" viewBox="0 0 100 100" aria-hidden="true">
          <path 
            className="story-path text-secondary"
            d="M10,50 Q25,25 50,50 T90,50" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
          />
        </svg>
      </div>
      <div className="story-block space-y-8 md:space-y-12">
        <div className="flex gap-4 md:gap-6 items-start">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0" aria-hidden="true">
            <CheckCircle2 className="text-primary" size={20} />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Web Design Editorial</h3>
            <p className="text-sm md:text-base text-foreground/70 font-medium">Interfaces que evocam desejo e autoridade, transformando visitantes em clientes.</p>
          </div>
        </div>
        <div className="flex gap-4 md:gap-6 items-start">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0" aria-hidden="true">
            <CheckCircle2 className="text-primary" size={20} />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Tráfego Pago de Alta Performance</h3>
            <p className="text-sm md:text-base text-foreground/70 font-medium">Gestão de anúncios focada em ROI real, alcançando o público certo no momento certo.</p>
          </div>
        </div>
        <div className="flex gap-4 md:gap-6 items-start">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0" aria-hidden="true">
            <CheckCircle2 className="text-primary" size={20} />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">SEO de Dominação</h3>
            <p className="text-sm md:text-base text-foreground/70 font-medium">Estratégias para colocar seu negócio no topo das buscas orgânicas e locais.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
));

About.displayName = 'About';

export default About;
