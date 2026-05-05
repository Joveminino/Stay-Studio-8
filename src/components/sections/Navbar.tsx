import { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Logo from '../Logo';
import { scrollToSection } from '../../lib/navigation';

export const navItems = [
  { name: 'Soluções', id: 'categorias' },
  { name: 'Vantagens', id: 'experience' },
  { name: 'Método', id: 'sucesso' },
  { name: 'Blog', id: 'blog' },
  { name: 'Suporte', id: 'faq' }
];

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-[101] flex max-w-7xl items-center justify-between px-8 py-6 mx-auto w-full bg-background/80 backdrop-blur-md border-b border-border/5">
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo />
        </div>
        
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)} 
                className="nav-link text-sm font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

        <button 
          onClick={() => scrollToSection('contact')}
          className="nav-link hidden md:block bg-foreground text-background px-8 py-3 rounded-full text-sm font-black uppercase tracking-tight hover:bg-primary transition-all shadow-lg hover:scale-105 active:scale-95 border border-primary/10"
        >
          Diagnóstico Grátis
        </button>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-foreground relative z-[102] p-2"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden p-8"
          >
            <div className="flex flex-col items-center space-y-6 w-full">
              {navItems.map((item, i) => (
                <motion.button 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => handleNavClick(item.id)}
                  className="text-4xl font-black text-foreground hover:text-primary transition-colors tracking-tighter"
                >
                  {item.name}
                </motion.button>
              ))}
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * navItems.length }}
                onClick={() => handleNavClick('contact')}
                className="mt-8 w-full bg-primary text-on-primary py-6 rounded-2xl text-xl font-bold shadow-xl"
              >
                Escalar Reservas
              </motion.button>
            </div>

            {/* Decorative background text or element */}
            <div className="absolute inset-x-0 bottom-20 flex justify-center opacity-5 pointer-events-none">
              <span className="text-8xl font-black italic">STAY8</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
