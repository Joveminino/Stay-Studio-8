import { lazy, Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useMagneticButton } from '../hooks/useMagneticButton';
import BackgroundParticles from '../components/BackgroundParticles';
import Navbar from '../components/sections/Navbar';
import CinematicHero from '../components/sections/CinematicHero';
import TechnicalDivider from '../components/TechnicalDivider';

// Lazy loaded components
const Problems = lazy(() => import('../components/sections/Problems'));
const Solutions = lazy(() => import('../components/sections/Solutions'));
const ClientExperience = lazy(() => import('../components/sections/ClientExperience'));
const TrafficStrategy = lazy(() => import('../components/sections/TrafficStrategy'));
const About = lazy(() => import('../components/sections/About'));
const Stats = lazy(() => import('../components/sections/Stats'));
const Process = lazy(() => import('../components/sections/Process'));
const Deliverables = lazy(() => import('../components/sections/Deliverables'));
const ScaleStrategy = lazy(() => import('../components/sections/ScaleStrategy'));
const FAQ = lazy(() => import('../components/sections/FAQ'));
const Blog = lazy(() => import('../components/sections/Blog'));
const Footer = lazy(() => import('../components/sections/Footer'));
const ContactForm = lazy(() => import('../components/sections/ContactForm'));

gsap.registerPlugin(ScrollTrigger);

const LoadingFallback = () => (
  <div className="w-full h-32 flex items-center justify-center opacity-20">
    <div className="w-6 h-6 border-[1.5px] border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

export default function LandingPage() {
  useMagneticButton('.magnetic-btn');

  useEffect(() => {
    // Refresh ScrollTrigger on lazy load content arrival
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-accent/30 relative bg-background">
      <Helmet>
        <title>Stay Studio 8 | Design de Luxo & Tráfego de Alta Performance</title>
        <meta name="description" content="A Stay Studio 8 é um laboratório de escala para hotéis, agências e gastronomia. Web design editorial, tráfego pago focado em ROI e SEO de dominação local." />
        <meta name="keywords" content="web design hotel, marketing para turismo, trafego pago hotelaria, seo para agencias de turismo, design de luxo gastronomia, stay studio 8" />
        <link rel="canonical" href="https://staystudio8.com.br" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://staystudio8.com.br" />
        <meta property="og:title" content="Stay Studio 8 | Design de Luxo & Tráfego de Alta Performance" />
        <meta property="og:description" content="Laboratório de escala para hospitalidade e turismo. Design editorial, Tráfego Pago e SEO." />
        <meta property="og:image" content="https://staystudio8.com.br/og-image.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://staystudio8.com.br" />
        <meta property="twitter:title" content="Stay Studio 8 | Design de Luxo & Tráfego de Alta Performance" />
        <meta property="twitter:description" content="Laboratório de escala para hospitalidade e turismo. Design editorial, Tráfego Pago e SEO." />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Stay Studio 8",
              "image": "https://staystudio8.com.br/logo.png",
              "@id": "https://staystudio8.com.br",
              "url": "https://staystudio8.com.br",
              "telephone": "+5511945315213",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Caldas Novas",
                "addressRegion": "GO",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -17.7441,
                "longitude": -48.6253
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.instagram.com/staystudio8"
              ],
              "priceRange": "$$$"
            }
          `}
        </script>
      </Helmet>
      
      <BackgroundParticles />
      <Navbar />
      <main>
        <CinematicHero />
        
        <Suspense fallback={<LoadingFallback />}>
          <TechnicalDivider label="SYS-HEALTH" />
          <Problems />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <TechnicalDivider label="STRAT-SOL" />
          <Solutions />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <TechnicalDivider label="CX-METRICS" />
          <ClientExperience />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <TechnicalDivider label="TRAF-ENG" />
          <TrafficStrategy />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <TechnicalDivider label="ABOUT-HQ" />
          <About />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <TechnicalDivider label="GROWTH-DATA" />
          <Stats />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <TechnicalDivider label="PROC-PHASE" />
          <Process />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <TechnicalDivider label="SHIP-ASSETS" />
          <Deliverables />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <TechnicalDivider label="SCALE-UNIT" />
          <ScaleStrategy />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <TechnicalDivider label="FAQ-SUPPORT" />
          <FAQ />
          <Blog />
        </Suspense>
          
        <Suspense fallback={<LoadingFallback />}>
          <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="bg-surface rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-24 text-center relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-border/10">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/20 rounded-tl-[2.5rem] md:rounded-tl-[3rem]" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-[2.5rem] md:rounded-tr-[3rem]" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary/20 rounded-bl-[2.5rem] md:rounded-bl-[3rem]" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/20 rounded-br-[2.5rem] md:rounded-br-[3rem]" />

                <div className="relative z-10">
                  <div className="flex flex-col items-center mb-10 md:mb-12">
                    <span className="text-[10px] font-mono font-black text-primary uppercase tracking-[0.5em] mb-4 bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
                      Ligar Unidade de Tração
                    </span>
                    <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground mb-6 text-balance">Sua escala começa aqui.</h2>
                    <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-balance font-medium">
                      Agende uma consultoria estratégica de 15 minutos. Diagnosticamos seus gargalos e traçamos o plano de soberania digital.
                    </p>
                  </div>
                  
                  <ContactForm />
                  
                  <div className="mt-12 flex items-center justify-center gap-4 text-[10px] font-mono text-muted/40 uppercase tracking-widest">
                    <span>Security verified</span>
                    <div className="w-1 h-1 bg-primary/20 rounded-full" />
                    <span>SP-HUB Connection</span>
                  </div>
                </div>
                
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none text-foreground" 
                     style={{ 
                       backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                       backgroundSize: '40px 40px' 
                     }} 
                />
              </div>
            </div>
          </section>

          <TechnicalDivider label="STAY8-LABS" />
          <Footer />
        </Suspense>
      </main>

      {/* Floating WhatsApp Button */}
      <AnimatePresence>
        <motion.a
          href="https://wa.me/5511945315213"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-shadow group"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle size={32} fill="currentColor" className="group-hover:scale-110 transition-transform" />
          <span className="absolute right-full mr-4 bg-white text-primary px-4 py-2 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-primary/10 uppercase tracking-widest">
            Falar com Especialista
          </span>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce shadow-sm" />
        </motion.a>
      </AnimatePresence>
    </div>
  );
}
