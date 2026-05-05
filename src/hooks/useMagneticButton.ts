import { useEffect } from 'react';
import gsap from 'gsap';

export const useMagneticButton = (selector: string = '.magnetic-btn') => {
  useEffect(() => {
    const btns = document.querySelectorAll(selector);
    
    btns.forEach((btn: any) => {
      let rect: DOMRect;
      
      const updateRect = () => {
        rect = btn.getBoundingClientRect();
      };
      
      const handleMouseMove = (e: MouseEvent) => {
        if (!rect) updateRect();
        
        const btnX = rect.left + rect.width / 2;
        const btnY = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - btnX, e.clientY - btnY);
        
        if (dist < 100) {
          const x = (e.clientX - btnX) * 0.4;
          const y = (e.clientY - btnY) * 0.4;
          gsap.to(btn, { 
            x, 
            y, 
            duration: 0.15, 
            ease: "none",
            overwrite: "auto"
          });
        } else {
          gsap.to(btn, { 
            x: 0, 
            y: 0, 
            duration: 0.4, 
            ease: "power2.out",
            overwrite: "auto"
          });
          // Reset rect after interaction to avoid stale values if layout changes
          (rect as any) = null;
        }
      };

      btn.addEventListener('mousemove', handleMouseMove);
      btn.addEventListener('mouseenter', updateRect);
      
      return () => {
        btn.removeEventListener('mousemove', handleMouseMove);
        btn.removeEventListener('mouseenter', updateRect);
      };
    });
  }, [selector]);
};
