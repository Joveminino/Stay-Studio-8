import { memo } from 'react';

const Logo = memo(({ light = false }: { light?: boolean }) => (
  <div className="flex items-center gap-3 group">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className={`absolute inset-0 border-[1.5px] ${light ? 'border-on-primary' : 'border-foreground'} rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-700 ease-in-out`} />
      
      <div className="relative flex flex-col items-center -space-y-1">
        <div className={`w-2.5 h-2.5 border-[2px] ${light ? 'border-secondary' : 'border-primary'} rounded-full`} />
        <div className={`w-3.5 h-3.5 border-[2px] ${light ? 'border-secondary' : 'border-primary'} rounded-full`} />
      </div>

      <div className={`absolute top-0 right-0 w-1.5 h-1.5 ${light ? 'bg-secondary' : 'bg-primary'} rounded-full animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]`} />
    </div>
    
    <div className="flex flex-col -space-y-1.5 flex-1">
      <span className={`text-xl md:text-2xl font-black tracking-tighter uppercase ${light ? 'text-on-primary' : 'text-foreground'}`}>
        Stay<span className={light ? 'text-secondary' : 'text-primary'}>8</span>
      </span>
      <span className={`text-[8px] md:text-[9px] font-bold uppercase tracking-[0.4em] translate-x-0.5 ${light ? 'text-on-primary/50' : 'text-muted'}`}>
        Studio
      </span>
    </div>
  </div>
));

Logo.displayName = 'Logo';

export default Logo;
