import { memo, useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Compass, UtensilsCrossed, CheckCircle2, Info, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../lib/navigation';

const Tooltip = ({ text }: { text: string }) => (
  <div className="relative group inline-block">
    <div className="p-1 -m-1 cursor-help hover:text-primary transition-colors flex items-center justify-center">
      <Info size={16} className="text-muted/60" />
    </div>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-4 bg-surface border border-accent/30 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 group-active:opacity-100 pointer-events-none transition-all duration-300 z-50 text-[10px] text-muted leading-relaxed backdrop-blur-md">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-accent/30" />
    </div>
  </div>
);

const Solutions = memo(() => {
  const [niche, setNiche] = useState<'hotel' | 'agency' | 'restaurant'>('hotel');
  
  // Dynamic state for calculations
  const [qty, setQty] = useState(200);   // Bookings / Orders / Leads
  const [ticket, setTicket] = useState(450); // Daily / Ticket / Sale Value
  const [fee, setFee] = useState(18);    // Commission / App Fee / CPL (if agency)
  const [goal, setGoal] = useState(30);   // Direct conversion goal %

  const calculateTotalRevenue = () => qty * ticket;
  
  const calculateSavings = () => {
    const totalRevenue = calculateTotalRevenue();
    if (niche === 'agency') {
      return totalRevenue * (goal / 100);
    }
    return totalRevenue * (goal / 100) * (fee / 100);
  };

  const getLabels = () => {
    switch (niche) {
      case 'hotel':
        return {
          title: "Calculadora de Expansão (Hotéis)",
          label1: "Reservas Mensais via OTAs",
          label2: "Valor Médio da Reserva (R$)",
          label3: "Comissão Média (%)",
          label4: "Meta de Migração Direta (%)",
          result: "Lucro Recuperado Mensal",
          tip1: "Quantidade de reservas feitas mensalmente através de Booking, Expedia, etc.",
          tip2: "Ticket médio de cada reserva (ex: valor de 3 diárias).",
          tip3: "Porcentagem média que as OTAs cobram sobre cada reserva.",
          tip4: "Porcentagem das vendas atuais que você deseja converter para venda direta (sem comissão)."
        };
      case 'agency':
        return {
          title: "Calculadora de Performance (Agências)",
          label1: "Volume de Leads Mensais",
          label2: "Ticket Médio da Venda (R$)",
          label3: "Custo por Lead (R$)",
          label4: "Aumento de Conversão (%)",
          result: "Faturamento Adicional Estimado",
          tip1: "Total de potenciais clientes que entram em contato por mês.",
          tip2: "Valor médio de cada pacote ou tour vendido.",
          tip3: "Quanto você investe hoje para atrair cada contato qualificado.",
          tip4: "Expectativa de melhoria na taxa de fechamento com nossas Landing Pages."
        };
      case 'restaurant':
        return {
          title: "Calculadora de Margem (Restaurantes)",
          label1: "Pedidos Mensais via Apps",
          label2: "Ticket Médio do Pedido (R$)",
          label3: "Taxa média por pedido (%)",
          label4: "Meta de Pedidos Diretos (%)",
          result: "Margem Recuperada Mensal",
          tip1: "Volume total de pedidos feitos via iFood, Rappi, etc.",
          tip2: "Valor médio gasto por cada cliente no delivery.",
          tip3: "Porcentagem da venda que fica com o marketplace.",
          tip4: "Porcentagem de pedidos que queremos trazer para seu canal próprio via Google Ads."
        };
    }
  };

  const labels = getLabels();

  const solutions = [
    {
      id: 'hotel',
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600",
      icon: <Building2 className="text-foreground" aria-hidden="true" />,
      title: "Hotéis & Resorts",
      features: [
        "Web Design Editorial focado em desejo.",
        "Gestão de Tráfego Pago (Google & Meta).",
        "SEO Local para dominar a região.",
        "Automação de Reservas Diretas.",
        "Estratégias de LTV e Fidelização."
      ],
      bokehColor: "bg-primary/20"
    },
    {
      id: 'agency',
      img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600",
      icon: <Compass className="text-foreground" aria-hidden="true" />,
      title: "Agências & Tours",
      features: [
        "Landing Pages de Alta Conversão.",
        "Tráfego para Captação de Leads.",
        "SEO para Destinos e Experiências.",
        "Funis de Vendas via WhatsApp.",
        "Tracking de ROI em tempo real."
      ],
      bokehColor: "bg-secondary/20"
    },
    {
      id: 'restaurant',
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
      icon: <UtensilsCrossed className="text-foreground" aria-hidden="true" />,
      title: "Gastronomia Premium",
      features: [
        "Cardápio Digital Otimizado.",
        "Anúncios Gealocalizados (Ads).",
        "SEO para Palavras-chave Locais.",
        "Sistemas de Reserva sem Taxas.",
        "Gestão de Base de Dados Própria."
      ],
      bokehColor: "bg-accent/20"
    }
  ];

  return (
    <section id="categorias" className="py-24 md:py-32 px-6 relative overflow-hidden aurora-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-headline font-bold text-foreground mb-4 text-balance">Soluções sob medida</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto text-balance">Entendemos as particularidades de cada operação no ecossistema do turismo.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative z-10 mb-24">
          {solutions.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setNiche(s.id as any)}
              className={`service-card group cursor-pointer bg-surface/40 backdrop-blur-md rounded-3xl overflow-hidden transition-all perspective-1000 transform-gpu relative ${
                s.id === 'agency'
                  ? `border-2 border-secondary shadow-lg shadow-secondary/20 z-10 ${niche === s.id ? 'scale-[1.02]' : ''}`
                  : `border ${niche === s.id ? 'border-accent/60 shadow-2xl scale-[1.02]' : 'border-accent/30 shadow-sm hover:shadow-xl'}`
              }`}
            >
              {s.id === 'agency' && (
                <div className="absolute top-0 left-0 w-full z-20 flex justify-center">
                  <div className="bg-surface border-x-2 border-b-2 border-secondary px-4 py-1.5 rounded-b-xl shadow-md flex items-center gap-2">
                    <TrendingUp className="text-primary w-4 h-4" />
                    <span className="text-[10px] font-black text-foreground uppercase tracking-widest">Destaque SEO Agências</span>
                  </div>
                </div>
              )}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  width="400"
                  height="224"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                  loading="lazy" 
                  decoding="async"
                />
                <div className={`bokeh-light absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl ${s.bokehColor}`} aria-hidden="true" />
              </div>
              <div className="p-8 relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-border/50 rounded-lg" aria-hidden="true">{s.icon}</div>
                  <h3 className="font-headline font-bold text-2xl text-foreground">{s.title}</h3>
                </div>
                <ul className="space-y-4 mb-8" aria-label={`Funcionalidades para ${s.title}`}>
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-muted text-sm">
                      <CheckCircle2 className="text-primary shrink-0" size={18} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center bg-border/10 p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-accent/20">
          <div>
            <h3 className="text-2xl md:text-3xl font-headline font-bold text-foreground mb-6 text-balance">Quanto você está deixando na mesa?</h3>
            <p className="text-muted mb-8 leading-relaxed text-balance text-sm md:text-base">
              Plataformas terceiras abocanham uma fatia enorme do seu lucro. Nossa missão é recuperar essa margem através de canais diretos de alta conversão.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {(['hotel', 'agency', 'restaurant'] as const).map((n) => (
                <button 
                  key={n}
                  onClick={() => setNiche(n)}
                  className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${niche === n ? 'bg-primary text-on-primary shadow-lg' : 'bg-surface/50 text-muted hover:bg-surface'}`}
                >
                  {n === 'hotel' ? 'Hotéis' : n === 'agency' ? 'Agências' : 'Restaurantes'}
                </button>
              ))}
            </div>
            <ul className="space-y-3" aria-label="Benefícios da venda direta">
              <li className="flex items-center gap-3 text-foreground font-bold text-sm md:text-base">
                <TrendingUp className="text-primary" aria-hidden="true" size={18} />
                Recupere margem e aumente o LTV.
              </li>
              <li className="flex items-center gap-3 text-foreground font-bold text-sm md:text-base">
                <ShieldCheck className="text-primary" aria-hidden="true" size={18} />
                Independência total de marketplaces.
              </li>
            </ul>
          </div>

          <div className="bg-surface p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-accent/30 relative z-10 text-balance">
            <div className="mb-8 md:mb-10">
              <h4 className="text-xl md:text-2xl font-bold text-foreground leading-tight">{labels.title}</h4>
            </div>
            
            <div className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="group/field relative">
                  <div className="flex items-center gap-2 mb-2">
                    <label htmlFor="qty-input" className="block text-xs font-bold text-foreground uppercase tracking-wider">{labels.label1}</label>
                    <Tooltip text={labels.tip1} />
                  </div>
                  <input 
                    id="qty-input"
                    type="number" 
                    value={qty}
                    onWheel={(e) => (e.target as HTMLInputElement).blur()}
                    onChange={(e) => setQty(parseInt(e.target.value) || 0)}
                    className="w-full bg-background p-3 md:p-4 rounded-xl text-foreground font-bold text-lg md:text-xl border border-accent/30 outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all shadow-inner"
                  />
                </div>
                <div className="group/field relative">
                  <div className="flex items-center gap-2 mb-2">
                    <label htmlFor="ticket-input" className="block text-xs font-bold text-foreground uppercase tracking-wider">{labels.label2}</label>
                    <Tooltip text={labels.tip2} />
                  </div>
                  <input 
                    id="ticket-input"
                    type="number" 
                    value={ticket}
                    onWheel={(e) => (e.target as HTMLInputElement).blur()}
                    onChange={(e) => setTicket(parseInt(e.target.value) || 0)}
                    className="w-full bg-background p-3 md:p-4 rounded-xl text-foreground font-bold text-lg md:text-xl border border-accent/30 outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="group/field relative">
                  <div className="flex items-center gap-2 mb-2">
                    <label htmlFor="fee-input" className="block text-xs font-bold text-foreground uppercase tracking-wider">{labels.label3}</label>
                    <Tooltip text={labels.tip3} />
                  </div>
                  <input 
                    id="fee-input"
                    type="number"
                    value={fee}
                    onWheel={(e) => (e.target as HTMLInputElement).blur()}
                    onChange={(e) => setFee(parseInt(e.target.value) || 0)}
                    className="w-full bg-background p-3 md:p-4 rounded-xl text-foreground font-bold text-lg md:text-xl border border-accent/30 outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all shadow-inner"
                  />
                </div>
                <div className="group/field relative">
                  <div className="flex items-center gap-2 mb-2">
                    <label htmlFor="goal-input" className="block text-xs font-bold text-foreground uppercase tracking-wider">{labels.label4}</label>
                    <Tooltip text={labels.tip4} />
                  </div>
                  <input 
                    id="goal-input"
                    type="number"
                    value={goal}
                    onWheel={(e) => (e.target as HTMLInputElement).blur()}
                    onChange={(e) => setGoal(parseInt(e.target.value) || 0)}
                    className="w-full bg-background p-3 md:p-4 rounded-xl text-foreground font-bold text-lg md:text-xl border border-accent/30 outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="pt-6 md:pt-8 border-t border-accent/30 space-y-6 md:space-y-8">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-2 gap-1">
                    <p className="text-xs text-foreground/80 font-bold uppercase tracking-widest">{labels.result}</p>
                    <p className="text-[10px] text-foreground/60 font-bold">Análise total: R$ {calculateTotalRevenue().toLocaleString('pt-BR')}</p>
                  </div>
                  <output className="text-3xl md:text-4xl font-black text-primary block leading-none">R$ {calculateSavings().toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</output>
                </div>

                <div className="flex items-center justify-center">
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="magnetic-btn w-full bg-primary text-on-primary py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    Agendar Consultoria <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Solutions.displayName = 'Solutions';

export default Solutions;
