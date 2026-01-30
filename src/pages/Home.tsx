import React, { lazy, Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Cloud,
  ExternalLink,
  Lightbulb,
  Package,
  Plane,
  Rocket,
  Shield,
  ShoppingBag,
  Sparkles,
  Target,
  Truck,
  Utensils,
  X,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { KlikTranslations, Language, Theme } from '../types/klik';
import HomeOverviewCards from '../components/HomeOverviewCards';
import SplineWrapper from '../components/SplineWrapper';

const WorldMap = lazy(() => import('../components/WorldMap'));

type OutletCtx = {
  t: KlikTranslations;
  language: Language;
  theme: Theme;
};

type ClientItem = {
  id: string;
  name: string;
  description: string;
  website: string | null;
  visitSite: string | null;
  image: string;
  imageClassName?: string;
  color: string;
  icon: LucideIcon;
};

export default function Home() {
  const { t, language } = useOutletContext<OutletCtx>();
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [splineInView, setSplineInView] = useState(false);
  const [mapInView, setMapInView] = useState(false);
  const splineRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const splineOb = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSplineInView(true); }, { rootMargin: '100px', threshold: 0.1 });
    splineRef.current && splineOb.observe(splineRef.current);
    return () => splineOb.disconnect();
  }, []);
  useEffect(() => {
    const mapOb = new IntersectionObserver(([e]) => { if (e.isIntersecting) setMapInView(true); }, { rootMargin: '80px', threshold: 0.1 });
    mapRef.current && mapOb.observe(mapRef.current);
    return () => mapOb.disconnect();
  }, []);

  const clients: ClientItem[] = useMemo(
    () => [
      {
        id: 'shakpot',
        name: t.clients.shakpot.name,
        description: t.clients.shakpot.description,
        website: t.clients.shakpot.website,
        visitSite: t.clients.shakpot.visitSite,
        image: '2.png',
        color: 'from-orange-500 to-red-600',
        icon: Utensils,
      },
      {
        id: 'vagabox',
        name: t.clients.vagabox.name,
        description: t.clients.vagabox.description,
        website: t.clients.vagabox.website,
        visitSite: t.clients.vagabox.visitSite,
        image: '1.png',
        color: 'from-blue-500 to-cyan-500',
        icon: Package,
      },
      {
        id: 'salesforce',
        name: 'Salesforce',
        description:
          language === 'en'
            ? 'Salesforce - world leader in CRM and cloud solutions. We worked on custom integrations and digital transformation projects, leveraging their powerful platform to deliver exceptional customer experiences and streamline business processes.'
            : 'Salesforce - leader mondial du CRM et des solutions cloud. Nous avons travaillé sur des intégrations sur-mesure et des projets de transformation digitale, exploitant leur plateforme puissante pour offrir des expériences client exceptionnelles et optimiser les processus métier.',
        website: null,
        visitSite: null,
        image: 'salesforce.png',
        color: 'from-blue-400 to-cyan-400',
        icon: Cloud,
      },
      {
        id: 'deeqsan',
        name: t.clients.deeqsan.name,
        description: t.clients.deeqsan.description,
        website: t.clients.deeqsan.website,
        visitSite: t.clients.deeqsan.visitSite,
        image: 'Deeqsanlogo.png',
        color: 'from-green-500 to-emerald-600',
        icon: BookOpen,
      },
      {
        id: 'byLouli',
        name: t.clients.byLouli.name,
        description: t.clients.byLouli.description,
        website: t.clients.byLouli.website,
        visitSite: t.clients.byLouli.visitSite,
        image: 'logoglamourvoile.png',
        color: 'from-amber-700 to-amber-900',
        icon: ShoppingBag,
      },
      {
        id: 'marketStudyCena',
        name: t.clients.marketStudyCena.name,
        description: t.clients.marketStudyCena.description,
        website: t.clients.marketStudyCena.website,
        visitSite: t.clients.marketStudyCena.visitSite,
        image: 'Logo MS CENA.webp',
        color: 'from-indigo-500 to-blue-600',
        icon: BarChart3,
      },
      {
        id: 'continentalTransit',
        name: 'Continental Transit',
        description:
          language === 'en'
            ? 'Continental Transit is a premium logistics partner specializing in international freight and transportation solutions. We collaborated on their digital transformation, creating a modern platform that streamlines operations and enhances customer experience across borders.'
            : 'Continental Transit est un partenaire logistique premium spécialisé dans le fret international et les solutions de transport. Nous avons collaboré à leur transformation digitale, créant une plateforme moderne qui optimise les opérations et améliore l\'expérience client à travers les frontières.',
        website: 'https://continental-transit.com',
        visitSite: language === 'en' ? 'Visit site' : 'Visiter le site',
        image: 'continental.png',
        color: 'from-slate-500 to-gray-600',
        icon: Truck,
      },
      {
        id: 'confidential',
        name: language === 'en' ? 'Confidential Client' : 'Client Confidentiel',
        description:
          language === 'en'
            ? 'We cannot show the logo due to confidentiality, but this partnership is a source of pride for our agency.'
            : 'Nous ne pouvons pas montrer le logo par souci de confidentialité, mais ce partenariat est une fierté pour notre agence.',
        website: null,
        visitSite: null,
        image: 'mofalogo.png',
        imageClassName: 'blur-[20px] grayscale brightness-100 opacity-90',
        color: 'from-zinc-500 to-zinc-700',
        icon: Shield,
      },
      // Must be last
      {
        id: 'voyageVoyage',
        name: t.clients.voyageVoyage.name,
        description: t.clients.voyageVoyage.description,
        website: t.clients.voyageVoyage.website,
        visitSite: t.clients.voyageVoyage.visitSite,
        image: 'voyagevoyagelogo.png',
        color: 'from-[#fc8172] to-[#408398]',
        icon: Plane,
      },
    ],
    [language, t]
  );

  return (
    <div className="relative z-10">
      {/* HERO avec CUBE 3D */}
      <section
        id="accueil"
        className="min-h-[calc(100vh-70px)] flex items-center relative z-10 overflow-hidden py-16 md:py-24 px-6 md:px-10 lg:px-16 lamp-section"
      >
        {/* Background simple - pas d'animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-violet-600/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/10 blur-[80px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-10 relative max-w-6xl">
          <div className="flex flex-col items-center text-center gap-16">
            {/* Spline 3D - load only when in view */}
            <div ref={splineRef} className="relative w-full max-w-[500px] h-[400px] md:h-[500px] mx-auto rounded-3xl overflow-hidden bg-black/20 border border-violet-500/30 shadow-[0_0_60px_rgba(139,92,246,0.3)]">
              {splineInView ? (
                <div className="w-full h-full spline-violet">
                  <SplineWrapper scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-violet-900/15 to-purple-900/10" aria-hidden="true" />
              )}
              {/* Violet Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 via-transparent to-violet-900/10 pointer-events-none" />
              <div className="absolute inset-0 bg-violet-500/5 mix-blend-overlay pointer-events-none" />
              
              {/* Texte sur le Spline */}
              <div className="absolute bottom-0 left-0 right-0 pb-[12%] flex items-end justify-center z-20 pointer-events-none">
                <h2 className="text-xl md:text-3xl font-bold text-white drop-shadow-2xl text-center px-4">
                  KLIK <br />
                  <span className="text-violet-400">{language === 'en' ? 'Your digital partner' : 'Votre partenaire digital'}</span>
                </h2>
              </div>
            </div>

            {/* Texte + icônes sous le carré 3D */}
            <div className="w-full max-w-4xl mx-auto mt-8 md:mt-12 px-4">
              <div className="flex flex-col items-center gap-6 md:gap-8">
                <p className="text-lg md:text-2xl text-center font-bold leading-relaxed text-theme-secondary">
                  {language === 'en' 
                    ? 'We transform your ideas into digital success with creativity and expertise.'
                    : 'Nous transformons vos idées en succès digitaux avec créativité et expertise.'}
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-violet-400">
                    <Lightbulb className="w-5 h-5" />
                    <span className="text-sm font-medium">{language === 'en' ? 'Innovation' : 'Innovation'}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-violet-400">
                    <Target className="w-5 h-5" />
                    <span className="text-sm font-medium">{language === 'en' ? 'Precision' : 'Précision'}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-violet-400">
                    <Rocket className="w-5 h-5" />
                    <span className="text-sm font-medium">{language === 'en' ? 'Performance' : 'Performance'}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-violet-400">
                    <Zap className="w-5 h-5" />
                    <span className="text-sm font-medium">{language === 'en' ? 'Speed' : 'Rapidité'}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-violet-400">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm font-medium">{language === 'en' ? 'Impact' : 'Impact'}</span>
                  </div>
                </div>
                
                {/* Boutons */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <NavLink
                    to="/about"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-lg font-bold rounded-2xl hover:opacity-90 transition-opacity"
                  >
                    {language === 'en' ? 'About' : 'À propos'}
                    <ArrowRight className="w-5 h-5" />
                  </NavLink>
                  
                  <NavLink
                    to="/services"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white text-lg font-bold rounded-2xl border border-violet-500/30 hover:bg-white/15 transition-colors"
                  >
                    {language === 'en' ? 'Our Services' : 'Nos Services'}
                    <ArrowRight className="w-5 h-5" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 overview sections - Apple Cards */}
      <HomeOverviewCards language={language} />
      {/* Map / Globe section - lazy when in view */}
      <section ref={mapRef} id="map" className="py-16 md:py-24 relative z-10 lamp-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-theme mb-4 pb-4 border-b-2 border-violet-500/30 inline-block">
              {language === 'en' ? 'Present here and' : 'Présents ici et'} <br />
              <span className="text-gradient-anim">{language === 'en' ? 'beyond' : 'ailleurs'}</span>
            </h2>
            <p className="text-theme-secondary text-base md:text-lg max-w-2xl mx-auto">
              {language === 'en'
                ? 'We work at a global scale, delivering premium experiences across continents.'
                : "Nous travaillons à l'échelle mondiale, livrant des expériences premium à travers les continents."}
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden klik-card p-6 md:p-8 border border-white/10 min-h-[200px]">
            {mapInView && (
              <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center"><div className="w-10 h-10 border-2 border-violet-500/30 border-t-violet-400 rounded-full animate-spin" /></div>}>
                <WorldMap />
              </Suspense>
            )}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-16 md:py-24 relative z-10 lamp-section overflow-visible">
        <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-full">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-5xl font-black text-theme mb-5 pb-4 border-b-2 border-violet-500/30 inline-block">
              {language === 'en' ? 'Some of our' : 'Une partie de nos'} <br />
              <span className="text-gradient-anim">{language === 'en' ? 'Clients' : 'Clients'}</span>
            </h2>
          </div>

          <div className="flex flex-row gap-4 md:gap-6 overflow-x-auto overflow-y-visible pb-4 scroll-smooth snap-x snap-mandatory -mx-4 md:-mx-6 lg:-mx-10 px-4 md:px-6 lg:px-10" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(139,92,246,0.3) transparent', WebkitOverflowScrolling: 'touch' }}>
            {clients.map((client) => (
              <div
                key={client.id}
                className={`relative group cursor-pointer transition-all duration-300 ease-in-out flex-shrink-0 snap-center ${
                  selectedClient === client.id
                    ? 'w-[75vw] max-w-[400px] md:w-[450px] h-[400px] md:h-[65vh]'
                    : 'w-[100px] md:w-[120px] h-[280px] md:h-[70vh]'
                }`}
                onClick={() => setSelectedClient(selectedClient === client.id ? null : client.id)}
              >
                <div className="h-full relative overflow-hidden rounded-[32px] klik-card border-white/10 group-hover:border-white/20 transition-colors">
                  <img
                    src={client.image}
                    alt={client.name}
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${
                      selectedClient === client.id ? 'scale-105' : 'scale-110'
                    } ${client.imageClassName || ''}`}
                  />
                  
                  {/* Overlay default */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      selectedClient === client.id ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-b ${client.color} opacity-70 transition-opacity`} />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-6 transition-transform duration-500">
                        <client.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-white md:vertical-text tracking-widest uppercase">
                        {client.name}
                      </h3>
                      {client.website && client.visitSite && (
                        <a
                          href={client.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 border border-white/20 text-white text-xs font-bold transition-all whitespace-nowrap"
                        >
                          {language === 'en' ? 'Visit' : 'Visiter'}
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {selectedClient === client.id && (
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl p-8 md:p-12 overflow-y-auto hide-scrollbar fade-in">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedClient(null);
                        }}
                        className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
                        aria-label="Close"
                      >
                        <X size={24} />
                      </button>

                      <div className="flex flex-col items-center justify-center min-h-full text-center max-w-xl mx-auto px-4">
                        <div className="flex flex-col items-center gap-4 mb-6">
                          <div className="relative p-1 rounded-[24px] bg-gradient-to-r from-violet-500 to-purple-500 shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                            <div className="bg-black rounded-[23px] p-4">
                              <img
                                src={client.image}
                                alt={client.name}
                                decoding="async"
                                className={`w-16 h-16 md:w-20 md:h-20 object-contain ${client.id === 'confidential' ? 'blur-[12px] grayscale brightness-100 opacity-95' : client.imageClassName || ''}`}
                              />
                            </div>
                          </div>
                          <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter">
                            {client.name}
                          </h3>
                        </div>
                        
                        <p className="text-white/70 text-sm md:text-base mb-6 leading-relaxed font-medium">
                          {client.description}
                        </p>

                        {client.website && client.visitSite && (
                          <a
                            href={client.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl hover:bg-violet-500 hover:text-white transition-all text-base md:text-lg font-bold shadow-xl"
                          >
                            <span>{client.visitSite}</span>
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anchor target for HERO CTA */}
      <div id="contact" className="h-0 w-0 overflow-hidden" />
    </div>
  );
}
