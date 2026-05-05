import { memo } from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import Logo from '../Logo';
import { scrollToSection } from '../../lib/navigation';

const Footer = memo(() => (
  <footer className="bg-primary text-on-primary pt-16 md:pt-24 pb-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <div className="mb-8 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo light />
          </div>
          <p className="text-sm md:text-base text-on-primary/90 leading-relaxed max-w-xs mb-8">
            Stay Studio 8 é um laboratório de escala para o ecossistema de turismo e hospitalidade. Transformando tráfego em soberania digital.
          </p>
          <div className="flex gap-4">
            <button aria-label="Siga-nos no Instagram" className="w-10 h-10 rounded-full bg-on-primary/10 flex items-center justify-center hover:bg-on-primary/20 hover:scale-110 transition-all">
              <Instagram className="text-white" size={18} />
            </button>
            <button aria-label="Siga-nos no LinkedIn" className="w-10 h-10 rounded-full bg-on-primary/10 flex items-center justify-center hover:bg-on-primary/20 hover:scale-110 transition-all">
              <Linkedin className="text-white" size={18} />
            </button>
            <button aria-label="Siga-nos no Facebook" className="w-10 h-10 rounded-full bg-on-primary/10 flex items-center justify-center hover:bg-on-primary/20 hover:scale-110 transition-all">
              <Facebook className="text-white" size={18} />
            </button>
          </div>
        </div>
        
        <div className="px-2">
          <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-[11px]">Ecossistema</h5>
          <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-on-primary/80 font-medium">
            <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Início</button></li>
            <li><button onClick={() => scrollToSection('experience')} className="hover:text-white transition-colors">Vantagens</button></li>
            <li><button onClick={() => scrollToSection('sobre')} className="hover:text-white transition-colors">Laboratório</button></li>
            <li><button onClick={() => scrollToSection('sucesso')} className="hover:text-white transition-colors text-secondary font-bold">Método Stay8</button></li>
          </ul>
        </div>
        
        <div className="px-2">
          <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-[11px]">Estratégia</h5>
          <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-on-primary/80 font-medium">
            <li><button onClick={() => scrollToSection('categorias')} className="hover:text-white transition-colors">Design de Luxo</button></li>
            <li><button onClick={() => scrollToSection('categorias')} className="hover:text-white transition-colors">Tráfego Pago</button></li>
            <li><button onClick={() => scrollToSection('blog')} className="hover:text-white transition-colors font-bold text-primary">Insights Blog</button></li>
            <li><button onClick={() => scrollToSection('modelos')} className="hover:text-white transition-colors">Entregáveis</button></li>
            <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors italic">Consultoria FAQ</button></li>
          </ul>
        </div>
        
        <div className="px-2">
          <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-[11px]">Governança</h5>
          <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-on-primary/80 font-medium">
            <li>
              <a 
                href="https://wa.me/5511945315213" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors flex items-center gap-2 font-mono font-bold"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                WhatsApp Direct
              </a>
            </li>
            <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
            <li className="pt-4 border-t border-on-primary/20">
              <span className="text-[10px] text-on-primary/60 uppercase tracking-[0.3em] block mb-1 font-bold">Base SP Hub</span>
              <span className="text-white font-mono text-[11px]">São Paulo, Brasil</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 md:pt-10 border-t border-on-primary/20 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-on-primary/70">
        <p className="font-mono uppercase tracking-[0.2em] text-center md:text-left">© 2024 STAY STUDIO 8. Todos os direitos reservados.</p>
        <div className="flex gap-6 font-bold uppercase tracking-widest text-on-primary/80">
          <span>Soberania Digital em São Paulo</span>
        </div>
      </div>
    </div>
  </footer>
));

Footer.displayName = 'Footer';

export default Footer;
