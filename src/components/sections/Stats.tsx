import { memo, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollToSection } from '../../lib/navigation';

gsap.registerPlugin(ScrollTrigger);

const Stats = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stats-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%"
        }
      });

      gsap.to(".circular-text", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white py-24 md:py-36 px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-12 lg:gap-20 items-center">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-12">
            <div className="stats-card">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none text-balance">Tração <br /> Absoluta</div>
              <p className="text-xs md:text-sm lg:text-base text-muted font-bold leading-tight uppercase tracking-wider">
                Audiência Própria <br /> & Vendas Diretas
              </p>
            </div>
            <div className="stats-card">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none text-balance">ROI <br /> Cirúrgico</div>
              <p className="text-xs md:text-sm lg:text-base text-muted font-bold leading-tight uppercase tracking-wider">
                Otimização Radical <br /> de Custos (CPA)
              </p>
            </div>
            <div className="stats-card">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-6 uppercase tracking-tighter leading-none text-balance">Velocity <br /> Score</div>
              <p className="text-xs md:text-sm lg:text-base text-muted font-bold leading-tight uppercase tracking-wider">
                Performance LCP <br /> & Milissegundos
              </p>
            </div>
            <div className="stats-card">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 uppercase tracking-tighter leading-none text-balance">Soberania</div>
              <p className="text-xs md:text-sm lg:text-base text-muted font-bold leading-tight uppercase tracking-wider">
                Liberdade Total <br /> de Taxas
              </p>
            </div>
            <div className="stats-card">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none text-balance">SEO <br /> Elite</div>
              <p className="text-xs md:text-sm lg:text-base text-muted font-bold leading-tight uppercase tracking-wider">
                Dominação <br /> Orgânica
              </p>
            </div>
            <div className="stats-card">
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none text-balance">Maps <br /> #1</div>
              <p className="text-xs md:text-sm lg:text-base text-muted font-bold leading-tight uppercase tracking-wider">
                Liderança <br /> Local
              </p>
            </div>
          </div>

          <div className="flex justify-center relative">
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="circular-text w-full h-full">
                <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" fill="transparent" />
                <text className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] fill-foreground">
                  <textPath xlinkHref="#circlePath">
                    Stay Studio 8 • Design de Alta Performance • Foco em Conversão • 
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <ArrowRight size={32} className="md:size-40 text-foreground -rotate-45" />
              </div>
            </div>
          </div>

          <div className="stats-card">
            <div className="bg-background rounded-[3rem] p-10 border border-border/50 relative overflow-hidden group">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" 
                  alt="Design Abstrato" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6 leading-tight text-balance">
                Liberte-se da intermediação abusiva. Construa sua própria audiência e retome o controle absoluto sobre sua margem de lucro.
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-primary transition-all shadow-lg"
                >
                  Análise de Performance <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

Stats.displayName = 'Stats';

export default Stats;
