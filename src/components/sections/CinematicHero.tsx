import { memo, useRef, useEffect } from 'react';
import { ArrowRight, ArrowDown, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { scrollToSection } from '../../lib/navigation';
import { useMagneticButton } from '../../hooks/useMagneticButton';

const CinematicHero = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  useMagneticButton('.hero-cta');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(".nav-logo", { duration: 0.8, y: -20, opacity: 0 })
        .from(".nav-link", { duration: 0.6, y: -15, opacity: 0, stagger: 0.04 }, "-=0.6")
        .from(".hero-pill", { 
          duration: 1, 
          scale: 0.8, 
          opacity: 0, 
          stagger: 0.08,
          ease: "back.out(1.4)"
        }, "-=0.4")
        .from(".hero-title-text", { 
          duration: 0.8, 
          y: 30, 
          opacity: 0, 
          stagger: 0.08 
        }, "-=0.6")
        .from(".hero-abstract-icon", {
          duration: 0.8,
          scale: 0.8,
          opacity: 0,
          stagger: 0.08,
          ease: "back.out(1.4)"
        }, "-=0.4")
        .from(".hero-cta-container", {
          duration: 0.8,
          y: 20,
          opacity: 0,
          ease: "back.out(1.4)"
        }, "-=0.4");

      // Floating animations
      gsap.to(".floating-pill", {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-background flex flex-col pt-10">
      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative px-6 md:px-8 py-10 md:py-20 will-change-opacity">
        <div className="max-w-5xl w-full relative">
          
          {/* Abstract Elements (Pills and Icons) - Hidden on extra small mobile to focus on text */}
          <div className="absolute -top-10 md:-top-20 left-4 md:left-10 hero-pill floating-pill hidden sm:block">
            <div className="w-24 md:w-32 h-10 md:h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
              Criativo
            </div>
          </div>

          <div className="absolute top-10 -left-10 md:-left-20 hero-abstract-icon floating-pill hidden md:block">
            <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border border-border/50">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <TrendingUp size={20} className="text-white" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 left-10 md:left-20 hero-pill floating-pill hidden lg:block">
            <div className="w-48 h-16 bg-gradient-to-r from-secondary to-destructive rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm">
              Solução de Problemas
            </div>
          </div>

          <div className="absolute top-40 right-4 md:right-0 hero-pill floating-pill text-sm hidden sm:block">
            <div className="w-32 md:w-40 h-12 md:h-14 bg-accent rounded-full flex items-center justify-center text-white font-bold shadow-lg text-[9px] md:text-[10px] uppercase tracking-widest whitespace-nowrap">
              Alta Conversão
            </div>
          </div>

          <div className="absolute -top-10 right-10 md:right-20 hero-abstract-icon floating-pill will-change-transform">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-[0_20px_50px_rgba(37,99,235,0.2)] flex items-center justify-center border border-border/50 p-4 group/svg hover:scale-110 transition-transform duration-700">
               <div className="relative w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-primary" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="60" width="15" height="20" fill="currentColor" opacity="0.3">
                      <animate attributeName="height" values="20;40;20" dur="2s" repeatCount="indefinite" />
                    </rect>
                    <rect x="42" y="40" width="15" height="40" fill="currentColor" opacity="0.6">
                      <animate attributeName="height" values="40;60;40" dur="2.5s" repeatCount="indefinite" />
                    </rect>
                    <rect x="65" y="20" width="15" height="60" fill="currentColor">
                      <animate attributeName="height" values="60;80;60" dur="3s" repeatCount="indefinite" />
                    </rect>
                    <circle cx="85" cy="15" r="5" fill="currentColor" className="animate-pulse" />
                    <path d="M20 60 L42 40 L65 20 L85 15" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5" />
                  </svg>
                  <TrendingUp size={24} className="absolute text-primary group-hover/svg:scale-125 transition-transform" />
               </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center relative z-10">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-tight text-foreground">
              <span className="hero-title-text block font-headline">Arquitetura de <br className="sm:hidden" /> Desejo.</span>
              <span className="hero-title-text block mt-4">
                <span className="inline-block px-6 md:px-12 py-2 md:py-4 bg-primary text-white rounded-full transform -rotate-2">Engenharia</span> <br className="sm:hidden" /> de Escala.
              </span>
            </h1>
            <p className="mt-6 md:mt-8 text-lg md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed">
              Escalamos negócios de <span className="text-foreground font-bold">Hospitalidade</span> através de ecossistemas digitais de alta conversão. 
              <span className="text-foreground font-bold hidden md:inline"> Web Design Editorial, Tráfego Pago e SEO.</span>
            </p>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 hero-cta-container">
        <button 
          onClick={() => scrollToSection('contact')}
          className="hero-cta magnetic-btn group relative w-full sm:w-auto bg-foreground text-background px-10 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold shadow-2xl hover:bg-primary transition-all overflow-hidden border border-white/10"
        >
          <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors">
            Ativar Engenharia <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </button>
        
        <button 
          onClick={() => scrollToSection('categorias')}
          className="flex items-center gap-2 text-foreground font-black uppercase tracking-widest text-xs hover:gap-4 transition-all py-4 group"
        >
          Laboratório <ArrowDown size={14} className="group-hover:text-primary animate-bounce" />
        </button>
      </div>
          </div>

          {/* Dotted Arrow Decoration */}
          <div className="absolute bottom-[-100px] right-1/4 opacity-20 hidden lg:block">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
              <path d="M10 50C30 10 90 10 110 50" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M105 45L110 50L105 55" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
});

CinematicHero.displayName = 'CinematicHero';

export default CinematicHero;
