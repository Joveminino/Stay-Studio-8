import { memo, useState, useRef, useEffect, ReactElement, cloneElement } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Database, Sun, Cpu, Layers, TrendingUp, X, Building2, UtensilsCrossed, Plane, Compass, ShieldCheck, BarChart3 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../Logo';

gsap.registerPlugin(ScrollTrigger);

const ClientExperience = memo(() => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedPillars, setSelectedPillars] = useState<number[]>([]);
  
  const strategyMolecules = [
    { 
      name: "Psicologia", 
      icon: <Target className="w-4 h-4" />, 
      impact: { conversion: 1.2, authority: 8, ltv: 5 },
      insight: "Gatilhos mentais de escassez e pertencimento aceleram a tomada de decisão.",
      color: "bg-primary" 
    },
    { 
      name: "Dados", 
      icon: <Database className="w-4 h-4" />, 
      impact: { ltv: 15, conversion: 0.5, authority: 2 },
      insight: "Personalização baseada em histórico de reserva aumenta o valor vitalício do hóspede.",
      color: "bg-secondary" 
    },
    { 
      name: "Design", 
      icon: <Sun className="w-4 h-4" />, 
      impact: { authority: 15, conversion: 0.8, ltv: 5 },
      insight: "Interface editorial premium justifica tickets 40% superiores à média do mercado.",
      color: "bg-accent" 
    },
    { 
      name: "Tech", 
      icon: <Cpu className="w-4 h-4" />, 
      impact: { conversion: 1.5, ltv: 10, authority: 5 },
      insight: "Cada 1s a menos no checkout recupera até 12% de vendas perdidas por latência.",
      color: "bg-foreground" 
    },
  ];

  const calculateMetrics = () => {
    let base = { ltv: 100, conversion: 2.4, authority: 45 };
    
    selectedPillars.forEach(idx => {
      const p = strategyMolecules[idx];
      base.ltv += p.impact.ltv;
      base.conversion += p.impact.conversion;
      base.authority += p.impact.authority;
    });

    const has = (name: string) => selectedPillars.some(idx => strategyMolecules[idx].name === name);

    if (has("Psicologia") && has("Design")) base.conversion += 1.5; 
    if (has("Dados") && has("Tech")) base.ltv += 25; 
    if (has("Psicologia") && has("Tech")) base.conversion += 0.7; 
    if (selectedPillars.length === 4) {
      base.authority = 100;
      base.conversion += 2.0;
    }

    return {
      ltv: base.ltv,
      conversion: Number(base.conversion.toFixed(1)),
      authority: Math.min(base.authority, 100)
    };
  };

  const metrics = calculateMetrics();

  const getAIAnalysis = () => {
    if (selectedPillars.length === 0) return "Aguardando ativação dos pilares para diagnóstico...";
    if (selectedPillars.length === 1) return strategyMolecules[selectedPillars[0]].insight;
    if (selectedPillars.length === 4) return "CONFIGURAÇÃO DEFINITIVA: Sinergia total detectada. Seu ecossistema está operando em nível de dominação de mercado.";
    
    const names = selectedPillars.map(idx => strategyMolecules[idx].name);
    if (names.includes("Psicologia") && names.includes("Design")) 
      return "SINERGIA: Arquitetura de Desejo Máxima. A união de psicologia e design editorial cria um ambiente onde o hóspede se sente compelido a reservar imediatamente.";
    if (names.includes("Dados") && names.includes("Tech"))
      return "SINERGIA: Ecossistema Preditivo. Inteligência de dados integrada à infraestrutura de ponta permite antecipar demandas e maximizar o retorno por cliente.";
    
    return "OTIMIZANDO: A combinação atual fortalece sua autoridade e melhora a experiência de conversão significativamente.";
  };

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".workflow-card", {
        opacity: 0,
        x: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const togglePillar = (index: number) => {
    const isSelected = selectedPillars.includes(index);
    if (isSelected) {
      setSelectedPillars(prev => prev.filter(i => i !== index));
    } else {
      setSelectedPillars(prev => [...prev, index]);
    }
  };

  const workflow = [
    {
      title: "Exploração de Ecossistema",
      detail: "Diagnóstico profundo do DNA do seu negócio para traçar o Blueprint de Atração Inevitável.",
      icon: <Layers size={24} />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Arquitetura de Desejo",
      detail: "Design editorial de alta conversão que evoca autoridade, exclusividade e antecipação.",
      icon: <Sun size={24} />,
      color: "from-amber-400 to-orange-600"
    },
    {
      title: "Motores de Escala",
      detail: "Configuração de checkout otimizado, tracking de precisão e integração de sistemas inteligentes.",
      icon: <Cpu size={24} />,
      color: "from-emerald-400 to-teal-600"
    },
    {
      title: "Soberania & ROI",
      detail: "Lançamento oficial com tráfego massivo e monitoramento cirúrgico de retorno sobre investimento.",
      icon: <TrendingUp size={24} />,
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-primary/40" />
              <span className="text-primary text-[10px] md:text-sm font-black uppercase tracking-[0.4em]">Gestão & Transparência Elite</span>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-bold text-foreground mb-6 md:mb-8 leading-[0.9] tracking-tighter text-balance text-center lg:text-left">
              Sua jornada para a <br className="hidden sm:block" />
              <span className="text-accent italic relative">
                independência
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" />
                </svg>
              </span>.
            </h2>
            
            <p className="text-muted text-lg md:text-2xl leading-relaxed mb-10 md:mb-12 max-w-xl text-balance font-medium text-center lg:text-left mx-auto lg:mx-0">
              Eliminamos a caixa-preta da publicidade digital. Você acompanha a construção do seu <span className="text-foreground font-bold">novo império digital</span> através de um processo linear, auditável e focado em converter tráfego em reservas reais.
            </p>

            <div className="mb-12 md:mb-16 p-8 md:p-12 bg-surface/30 backdrop-blur-xl border border-border/20 rounded-[3rem] relative shadow-2xl shadow-primary/5 mx-auto lg:mx-0">
              <div className="relative z-10">
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-12">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Configuração de Escala</span>
                    <h3 className="text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">Estratégia <span className="text-primary font-serif italic lowercase font-normal">Stay8</span></h3>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full xl:w-auto">
                    <div className="grid grid-cols-3 gap-2 md:gap-4 w-full sm:w-auto">
                      {[
                        { label: 'CONV.', val: `${metrics.conversion}%`, color: 'text-primary' },
                        { label: 'AUTORID.', val: `${metrics.authority}`, color: 'text-secondary' },
                        { label: 'LUCRO', val: `+${metrics.ltv}%`, color: 'text-accent' }
                      ].map((m, idx) => (
                        <div key={idx} className="flex flex-col items-center bg-white/90 p-2 md:p-3 rounded-xl md:rounded-2xl border border-border/20 shadow-sm min-w-[70px] md:min-w-[80px]">
                          <span className="text-[8px] md:text-[9px] font-black uppercase text-foreground/80 tracking-widest mb-1 md:mb-1.5">{m.label}</span>
                          <div className={`font-mono text-[10px] md:text-sm lg:text-base font-black ${m.color}`}>
                            {m.val}
                          </div>
                        </div>
                      ))}
                    </div>

                    {selectedPillars.length > 0 && (
                      <button 
                        onClick={() => setSelectedPillars([])}
                        className="text-[10px] font-black uppercase tracking-widest text-muted hover:text-destructive transition-colors flex items-center gap-2"
                      >
                        <X size={12} /> Limpar
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start">
                  {strategyMolecules.map((m, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => togglePillar(i)}
                      className="relative"
                    >
                      <div className={`px-5 md:px-7 py-3 md:py-4 rounded-2xl flex items-center gap-3 border transition-all duration-500 shadow-sm ${selectedPillars.includes(i) ? 'bg-primary text-white border-primary shadow-xl shadow-primary/30' : 'bg-white/60 border-border/40 text-foreground hover:bg-white hover:border-primary/40 hover:shadow-md'}`}>
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${selectedPillars.includes(i) ? 'bg-white/20' : m.color + ' text-white'}`}>
                          {cloneElement(m.icon as ReactElement<any>, { size: 16 })}
                        </div>
                        <span className="text-[11px] md:text-xs font-black uppercase tracking-wider">{m.name}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPillars.join(',')}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="p-6 md:p-8 bg-foreground text-background rounded-[2rem] shadow-2xl relative overflow-hidden"
                  >
                    <div className="flex items-start gap-5 relative z-10 text-balance">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg">
                        <Cpu size={20} className="animate-pulse" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-2 block">Motor de Escala Ativo</span>
                        <p className="text-sm md:text-xl font-medium leading-relaxed italic font-serif">
                          "{getAIAnalysis()}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 md:mt-16">
              {workflow.map((w, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setActiveStep(i)}
                  className={`workflow-card p-8 rounded-[2.5rem] border transition-all cursor-pointer relative overflow-hidden group ${activeStep === i ? 'bg-surface border-primary/30 shadow-2xl scale-[1.02]' : 'bg-surface/30 border-border/20 opacity-60 hover:opacity-100'}`}
                >
                  {activeStep === i && (
                    <motion.div 
                      layoutId="active-bg"
                      className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-secondary/[0.05] -z-10" 
                    />
                  )}
                  <div className="flex flex-col gap-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${w.color} flex items-center justify-center text-white shrink-0 shadow-xl transition-transform group-hover:rotate-12`}>
                      {cloneElement(w.icon as ReactElement<any>, { size: 24 })}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-foreground mb-2 uppercase tracking-tight italic group-hover:text-primary transition-colors">{w.title}</h3>
                      <p className="text-sm text-muted leading-relaxed font-medium">{w.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border/10 flex items-center justify-between opacity-60 hover:opacity-100 transition-opacity">
               <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">Auditoria em Tempo Real</span>
               </div>
               
               <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                     {[1,2,3].map(i => (
                       <div key={i} className="w-7 h-7 rounded-full border border-background bg-muted overflow-hidden">
                          <img 
                             src={`https://picsum.photos/seed/elite${i}/64?fm=webp`} 
                             alt="Parceiro" 
                             className="w-full h-full object-cover grayscale" 
                             width="28" 
                             height="28" 
                             referrerPolicy="no-referrer" 
                             loading="lazy" 
                           />
                       </div>
                     ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">Elite Club</span>
               </div>
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center h-full min-h-[700px]">
            <div className="absolute inset-0 bg-background rounded-[4rem] overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/5 blur-3xl opacity-30" />
            </div>

            <div className="relative w-full h-full max-w-[600px] flex items-center justify-center group perspective-2000">
              <motion.div 
                initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02, transition: { duration: 0.5 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative w-full aspect-[3/4] bg-white/[0.02] backdrop-blur-[120px] rounded-[4rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-12 justify-between group-hover:shadow-primary/30 transition-all duration-1000"
              >
                <div className="flex justify-between items-start relative z-10">
                   <div className="space-y-4">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 120 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-1 bg-primary/40 rounded-full" 
                      />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary/80 mb-1">Motor de Crescimento</span>
                      <span className="text-4xl font-black text-foreground tracking-tighter italic uppercase">Gestão de Impacto</span>
                    </div>
                 </div>
                 <Logo light={false} />
              </div>

                <div className="relative flex-1 flex items-center justify-center my-12">
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                     className="absolute w-80 h-80 rounded-full border border-dashed border-primary/20 flex items-center justify-center"
                   >
                     {[
                       { icon: <Building2 size={24} />, label: 'HOTEL', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' },
                       { icon: <UtensilsCrossed size={24} />, label: 'RESTAURANTE', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' },
                       { icon: <Plane size={24} />, label: 'VIAGEM', pos: 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2' },
                       { icon: <Compass size={24} />, label: 'AGÊNCIA', pos: 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2' }
                     ].map((item, idx) => (
                       <div key={idx} className={`absolute ${item.pos}`}>
                         <motion.div 
                           animate={{ rotate: -360 }}
                           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                           className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex flex-col items-center justify-center shadow-xl group/icon hover:bg-primary/20 transition-colors"
                         >
                           <div className="text-primary group-hover/icon:scale-110 transition-transform">
                             {item.icon}
                           </div>
                           <span className="text-[7px] font-black tracking-widest mt-1 text-foreground">{item.label}</span>
                         </motion.div>
                       </div>
                     ))}
                   </motion.div>

                   <div className="relative z-10 w-32 h-32 flex items-center justify-center">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                      <div className="relative w-16 h-16 bg-foreground rounded-full flex items-center justify-center shadow-2xl">
                         <TrendingUp className="text-primary" size={32} />
                      </div>
                   </div>

                   <div className="absolute inset-0 pointer-events-none">
                     {[1,2,3].map(i => (
                       <motion.div 
                         key={i}
                         animate={{ 
                           x: ['-20%', '130%'],
                           opacity: [0, 1, 0]
                         }}
                         transition={{ 
                           duration: 4 + i, 
                           repeat: Infinity, 
                           delay: i * 1.2,
                           ease: "linear"
                         }}
                         className="absolute h-[1px] w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                         style={{ top: `${20 + i * 20}%` }}
                       />
                     ))}
                   </div>
                </div>

                <div className="pt-12 border-t border-black/5 relative z-10">
                   <div className="flex justify-between items-end mb-8">
                      <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted block">Análise de Faturamento</span>
                        <div className="flex items-center gap-3">
                           <motion.div 
                             animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                             transition={{ duration: 2, repeat: Infinity }}
                             className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]" 
                           />
                           <span className="text-xl font-black text-foreground tracking-tighter uppercase italic">Escala em Tempo Real</span>
                        </div>
                      </div>
                      <div className="text-right">
                         <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted block mb-1">Taxa de Sucesso</span>
                            <motion.span 
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
                              className="text-4xl font-mono font-black text-primary leading-none"
                            >
                              99.8%
                            </motion.span>
                         </div>
                      </div>
                   </div>
                   
                   <div className="flex flex-col gap-3 group/matrix cursor-crosshair">
                      <div className="flex justify-between text-[8px] font-black uppercase tracking-[0.2em] text-muted/40 mb-1">
                         <span>Fluxo de Dados: 0x88.24A</span>
                         <span className="animate-pulse">Status: Otimizado</span>
                      </div>
                      
                      <div className="h-4 w-full bg-white/5 rounded-lg overflow-hidden border border-white/10 p-1 flex gap-1 relative">
                         {[...Array(20)].map((_, i) => (
                           <motion.div
                             key={i}
                             initial={{ opacity: 0, scaleY: 0.5 }}
                             whileInView={{ 
                               opacity: i < 19 ? 1 : 0.2, 
                               scaleY: 1,
                               transition: { delay: i * 0.05, duration: 0.5 }
                             }}
                             animate={{ 
                               opacity: i < 19 ? [0.8, 1, 0.8] : 0.2,
                               boxShadow: i < 19 ? ['0 0 5px rgba(37,99,235,0)', '0 0 10px rgba(37,99,235,0.4)', '0 0 5px rgba(37,99,235,0)'] : 'none'
                             }}
                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                             className={`flex-1 rounded-sm ${i < 19 ? 'bg-gradient-to-t from-primary/80 to-primary shadow-lg' : 'bg-white/10'}`}
                           />
                         ))}
                         
                         <motion.div 
                           animate={{ left: ['-20%', '120%'] }}
                           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                           className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                         />
                      </div>

                      <div className="flex justify-between items-center text-balance">
                         <div className="flex gap-1">
                            {[1,2,3,4].map(i => (
                              <motion.div 
                                key={i}
                                animate={{ opacity: [0.2, 1, 0.2] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                                className="w-1 h-1 rounded-full bg-primary/60" 
                              />
                            ))}
                         </div>
                         <span className="text-[9px] font-mono text-muted/60 uppercase group-hover/matrix:text-primary transition-colors">Verificar integridade do sistema →</span>
                      </div>
                   </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-4 p-5 bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl border border-border/20 z-20 hidden xl:block"
              >
                 <div className="flex items-center gap-4">
                   <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                      <Building2 size={24} />
                   </div>
                   <div>
                     <span className="text-[9px] font-black text-muted uppercase tracking-[0.2em] block">Hotéis & Resorts</span>
                     <span className="text-xs font-bold text-foreground">Escala Direta</span>
                   </div>
                 </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 p-5 bg-foreground text-background shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] rounded-3xl z-20 hidden xl:block"
              >
                 <div className="flex items-center gap-4">
                   <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white">
                      <Compass size={24} />
                   </div>
                   <div>
                     <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.2em] block">Turismo & Tours</span>
                     <span className="text-xs font-bold">Dominação Local</span>
                   </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32 pt-16 border-t border-border/10">
           <div className="flex flex-col items-center mb-10 text-center">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                className="h-[1px] bg-primary mb-6" 
              />
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-muted/50">Infraestrutura Técnica de Alta Performance</span>
           </div>

           <div className="bg-surface/30 backdrop-blur-md rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border border-border/10 shadow-inner relative overflow-hidden group/stack-zone">
              <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

              <div className="overflow-hidden">
                <div className="flex items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 animate-marquee md:animate-none md:justify-center">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-12 md:gap-24 shrink-0 md:shrink">
                      {[
                        { icon: <Cpu size={28} />, label: 'Velocidade', sub: 'Otimização Máxima', color: 'text-primary' },
                        { icon: <ShieldCheck size={28} />, label: 'Segurança', sub: 'Dados Blindados', color: 'text-secondary' },
                        { icon: <Target size={28} />, label: 'Alvo Certo', sub: 'Público Qualificado', color: 'text-accent' },
                        { icon: <BarChart3 size={28} />, label: 'Lucro Real', sub: 'Foco em ROI', color: 'text-foreground' }
                      ].map((item, idx) => (
                        <motion.div 
                          key={idx}
                          whileHover={{ scale: 1.1, y: -5 }}
                          className="flex items-center gap-4 md:gap-6 group/item cursor-pointer"
                        >
                          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.5rem] bg-white flex items-center justify-center ${item.color} shadow-xl border border-border/20 group-hover/item:border-primary/20 transition-all`}>
                             {cloneElement(item.icon as ReactElement<any>, { size: 24 })}
                          </div>
                          <div className="text-left text-balance">
                            <span className="font-black italic tracking-tighter text-base md:text-xl block leading-none mb-1 group-hover/item:text-primary transition-colors">{item.label}</span>
                            <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-muted font-bold whitespace-nowrap">{item.sub}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <motion.div 
                animate={{ top: ['0%', '100%'], opacity: [0, 0.5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-px bg-primary/20 pointer-events-none" 
              />
           </div>
        </div>
      </div>
    </section>
  );
});

ClientExperience.displayName = 'ClientExperience';

export default ClientExperience;
