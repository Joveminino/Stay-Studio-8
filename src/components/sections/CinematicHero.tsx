import { memo, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
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
      
      tl.from(".hero-title-text", { 
          duration: 0.6, 
          y: 10, 
          opacity: 0, 
          stagger: 0.03,
          ease: "power2.out"
        })
        .from(".hero-description", {
          duration: 0.5,
          opacity: 0,
          ease: "none"
        }, "-=0.4")
        .from(".hero-cta-container", {
          duration: 0.5,
          y: 10,
          opacity: 0,
          ease: "back.out(1.2)"
        }, "-=0.3")
        .from(".hero-pill", { 
          duration: 0.5, 
          scale: 0.9, 
          opacity: 0, 
          stagger: 0.04,
          ease: "back.out(1.2)"
        }, "-=0.2")
        .from(".hero-abstract-icon", {
          duration: 0.5,
          scale: 0.9,
          opacity: 0,
          stagger: 0.04,
          ease: "back.out(1.2)"
        }, "-=0.2");

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
    <div id="hero" ref={containerRef} className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-background flex flex-col pt-16 md:pt-24 lg:pt-32">
      {/* Navbar Integration Glow */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none z-0" />
      
      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative px-6 md:px-8 py-12 md:py-24 will-change-opacity">
        <div className="max-w-6xl w-full relative">
          
          {/* Abstract Elements (Pills and Icons) - Hidden on extra small mobile to focus on text */}
          <div className="absolute -top-16 md:-top-24 -left-4 md:-left-12 hero-pill floating-pill hidden sm:block">
            <div className="w-24 md:w-32 h-10 md:h-12 bg-primary text-[10px] md:text-xs tracking-widest uppercase rounded-full flex items-center justify-center text-white font-black shadow-lg">
              Criativo
            </div>
          </div>

          <div className="absolute top-0 -left-12 md:-left-24 hero-abstract-icon floating-pill hidden md:block">
            <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border border-border/50">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <TrendingUp size={20} className="text-white" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-16 left-12 md:left-32 hero-pill floating-pill hidden lg:block">
            <div className="w-48 h-16 bg-gradient-to-r from-secondary to-destructive rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm">
              Solução de Problemas
            </div>
          </div>

          <div className="absolute -top-12 md:-top-20 -right-4 md:-right-12 hero-pill floating-pill text-sm hidden sm:block">
            <div className="w-32 md:w-40 h-12 md:h-14 bg-accent rounded-full flex items-center justify-center text-white font-bold shadow-lg text-[9px] md:text-[10px] uppercase tracking-widest whitespace-nowrap">
              Alta Conversão
            </div>
          </div>

          <div className="absolute top-12 -right-8 md:-right-20 hero-abstract-icon floating-pill">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-[0_20px_50px_rgba(37,99,235,0.2)] flex items-center justify-center border border-border/50 group/icon hover:scale-110 transition-all duration-700">
               <TrendingUp strokeWidth={2.5} className="w-8 h-8 md:w-12 md:h-12 text-primary" />
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center relative z-10">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-tight text-foreground">
              <span className="hero-title-text block font-headline">Domine suas</span>
              <span className="hero-title-text block mt-4">
                Reservas <br className="sm:hidden" /> <span className="inline-block px-6 md:px-12 py-2 md:py-4 bg-primary text-white rounded-full transform -rotate-2">Diretas</span>.
              </span>
            </h1>
            <p className="hero-description mt-6 md:mt-8 text-lg md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed relative inline-block">
              <span className="relative z-10">
                Design de luxo e tráfego de elite para hotéis e agências que decidiram <span className="text-foreground font-bold">parar de queimar lucro</span> com comissões abusivas.
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </p>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 hero-cta-container">
        <button 
          onClick={() => scrollToSection('contact')}
          className="hero-cta magnetic-btn group relative w-full sm:w-auto bg-foreground text-background px-10 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold shadow-2xl hover:bg-primary transition-all overflow-hidden border border-white/10"
        >
          <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors">
            Agendar Consultoria <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </button>
        
        <button 
          onClick={() => scrollToSection('sobre')}
          className="flex items-center gap-2 text-foreground font-black uppercase tracking-widest text-xs hover:gap-4 transition-all py-4 group"
        >
          Laboratório <ArrowDown size={14} className="group-hover:text-primary animate-bounce" />
        </button>
      </div>
          </div>

          <div className="absolute bottom-10 right-10 md:right-[15%] opacity-40 hidden lg:block">
            <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-[0_0_10px_rgba(37,99,235,0.2)]">
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                d="M10 80 Q 50 10 100 50 T 190 20" 
                stroke="url(#line-gradient)" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeDasharray="4 8"
              />
              <motion.circle 
                animate={{ cx: [10, 100, 190], cy: [80, 50, 20], opacity: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                r="3" 
                fill="var(--color-primary)" 
              />
              <defs>
                <linearGradient id="line-gradient" x1="0" y1="0" x2="200" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--color-primary)" />
                  <stop offset="1" stopColor="var(--color-secondary)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
});

CinematicHero.displayName = 'CinematicHero';

export default CinematicHero;
