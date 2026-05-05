import { memo } from 'react';

const TechnicalDivider = memo(({ label }: { label: string }) => (
  <div className="w-full h-px bg-border/5 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shimmer" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-background">
      <span className="text-[10px] font-mono text-primary/30 uppercase tracking-[0.4em] whitespace-nowrap">
        {label}
      </span>
    </div>
  </div>
));

TechnicalDivider.displayName = 'TechnicalDivider';

export default TechnicalDivider;
