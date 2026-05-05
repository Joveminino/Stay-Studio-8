import { memo } from 'react';

const BackgroundParticles = memo(() => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Bokeh Lights - Now using pure CSS for better performance */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-secondary/10 blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute top-[20%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-accent/5 blur-[80px] animate-pulse" style={{ animationDuration: '10s' }} />

      {/* Particles - Minimal set for ambiance without heavy JS load */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div 
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/20 hidden sm:block animate-float"
          style={{ 
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
      {Array.from({ length: 2 }).map((_, i) => (
        <div 
          key={`m-${i}`}
          className="absolute h-1 w-1 rounded-full bg-primary/20 sm:hidden animate-float"
          style={{ 
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${12 + Math.random() * 8}s`
          }}
        />
      ))}
    </div>
  );
});

BackgroundParticles.displayName = 'BackgroundParticles';

export default BackgroundParticles;
