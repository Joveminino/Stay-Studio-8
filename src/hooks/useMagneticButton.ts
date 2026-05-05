import { useEffect } from 'react';
import gsap from 'gsap';

export const useMagneticButton = (selector: string = '.magnetic-btn') => {
  useEffect(() => {
    const btns = document.querySelectorAll(selector);
    
    const handleMouseMove = (e: MouseEvent) => {
      btns.forEach((btn: any) => {
        const rect = btn.getBoundingClientRect();
        const btnX = rect.left + rect.width / 2;
        const btnY = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - btnX, e.clientY - btnY);
        
        if (dist < 150) {
          const x = (e.clientX - btnX) * 0.3;
          const y = (e.clientY - btnY) * 0.3;
          gsap.to(btn, { x, y, duration: 0.3, ease: "power2.out" });
        } else {
          gsap.to(btn, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [selector]);
};
