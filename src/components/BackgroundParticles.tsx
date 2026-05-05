import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BackgroundParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const particles = gsap.utils.toArray('.bg-particle');
      particles.forEach((p: any) => {
        gsap.to(p, {
          y: 'random(-100, 100)',
          x: 'random(-100, 100)',
          opacity: 'random(0.1, 0.3)',
          duration: 'random(10, 20)',
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 'random(0, 5)'
        });
      });

      const bokeh = gsap.utils.toArray('.bg-bokeh');
      bokeh.forEach((b: any) => {
        gsap.to(b, {
          scale: 'random(1.1, 1.5)',
          opacity: 'random(0.05, 0.15)',
          duration: 'random(15, 25)',
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 'random(0, 10)'
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Bokeh Lights */}
      <div className="bg-bokeh absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[120px]" />
      <div className="bg-bokeh absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-secondary/10 blur-[100px]" />
      <div className="bg-bokeh absolute top-[20%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-accent/5 blur-[80px]" />

      {/* Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div 
          key={i}
          className="bg-particle absolute h-1 w-1 rounded-full bg-primary/20 will-change-transform hidden sm:block"
          style={{ 
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
      {/* Fewer particles on mobile */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div 
          key={`m-${i}`}
          className="bg-particle absolute h-1 w-1 rounded-full bg-primary/20 will-change-transform sm:hidden"
          style={{ 
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
