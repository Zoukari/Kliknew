import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Globe,
  Sparkles,
  Users,
  Rocket,
  Code,
  TrendingUp,
  Zap,
  Play,
  FileText,
  GraduationCap,
  Target,
  Heart,
} from 'lucide-react';

type Props = {
  language: 'fr' | 'en' | 'ar' | 'is';
};

export default function HomeOverviewCards({ language }: Props) {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative z-10 w-full">
      {/* ==================== SECTION 1: Services - Clean Modern Cards ==================== */}
      <section
        ref={(el) => { sectionsRef.current[0] = el; }}
        className="scroll-reveal py-16 md:py-24 lamp-section"
      >
        <div className="px-4 md:px-6 lg:px-10">
          <NavLink
            to="/services"
            className="group flex flex-col md:flex-row relative overflow-hidden rounded-[2rem] border border-white/10 hover:border-violet-400/30 transition-all duration-500 min-h-[280px] md:min-h-[320px]"
            style={{ background: 'linear-gradient(135deg, rgba(20,20,35,0.9) 0%, rgba(30,25,50,0.8) 100%)' }}
          >
            {/* Content left 75% */}
            <div className="flex-[3] p-6 md:p-8 lg:p-12 relative z-10 min-w-0">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-6 md:mb-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/15 border border-violet-400/20 text-violet-400 text-xs font-bold mb-3 md:mb-4">
                      <Rocket size={14} />
                      <span>01. SERVICES</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-white">
                      {language === 'en' ? 'What we' : 'Ce qu\'on'}{' '}
                      <span className="text-violet-400">{language === 'en' ? 'build' : 'construit'}</span>
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-violet-400 font-bold text-sm md:text-base group-hover:gap-4 transition-all">
                    {language === 'en' ? 'All services' : 'Tous les services'}
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {[
                    { icon: Code, title: language === 'en' ? 'Web & Apps' : 'Web & Apps', desc: language === 'en' ? 'Sites that convert & apps that scale' : 'Sites qui convertissent & apps qui scalent' },
                    { icon: TrendingUp, title: 'Marketing', desc: language === 'en' ? 'Strategy, ads & growth' : 'Stratégie, pubs & croissance' },
                    { icon: Zap, title: language === 'en' ? 'Automation' : 'Automatisation', desc: language === 'en' ? 'Scale smarter, deliver faster' : 'Scaler mieux, livrer plus vite' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-violet-400/20 transition-all group/card"
                    >
                      <item.icon className="w-8 h-8 text-violet-400 mb-3 group-hover/card:scale-110 transition-transform" />
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Image right 25% - white fade on left edge */}
            <div className="w-full md:w-1/4 h-[200px] md:h-auto min-w-[100px] flex-shrink-0 self-stretch overflow-hidden relative rounded-b-[2rem] md:rounded-l-none md:rounded-r-[2rem]">
              <img
                src="services.png"
                alt="Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-white/45 via-white/20 to-transparent pointer-events-none" />
            </div>
          </NavLink>
        </div>
      </section>

      {/* ==================== SECTION 2: About - Simple with Image ==================== */}
      <section
        ref={(el) => { sectionsRef.current[1] = el; }}
        className="scroll-reveal-right scroll-delay-1 py-16 md:py-24 lamp-section"
      >
        <div className="px-4 md:px-6 lg:px-10">
          <NavLink
            to="/about"
            className="group flex flex-col md:flex-row relative overflow-hidden rounded-[2rem] border border-white/10 hover:border-white/20 transition-all duration-500 min-h-[280px] md:min-h-[320px]"
            style={{ background: 'linear-gradient(180deg, rgba(25,25,40,0.95) 0%, rgba(20,20,35,0.9) 100%)' }}
          >
            {/* Content left 75% */}
            <div className="flex-[3] p-6 md:p-8 lg:p-12 flex flex-col justify-center min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/70 text-xs font-bold w-fit mb-3 md:mb-4">
                <Users size={14} />
                <span>02. ABOUT</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-white mb-3 md:mb-4">
                {language === 'en' ? 'The' : 'L\'équipe'}{' '}
                <span className="text-gradient-anim">{language === 'en' ? 'KLIK Team' : 'KLIK'}</span>
              </h2>
              <p className="text-base md:text-lg text-white/60 mb-4 md:mb-6 leading-relaxed">
                {language === 'en'
                  ? 'Vision, ambition, impact. We design, build and ship — product mindset, premium execution.'
                  : 'Vision, ambition, impact. On conçoit, construit et livre — mentalité produit, exécution premium.'}
              </p>
              <div className="flex items-center text-white font-bold text-sm md:text-base group-hover:gap-4 transition-all">
                {language === 'en' ? 'Discover our story' : 'Découvrir notre histoire'}
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
              </div>
            </div>
            {/* Image right 25% - white fade on left edge */}
            <div className="w-full md:w-1/4 h-[200px] md:h-auto min-w-[100px] flex-shrink-0 self-stretch overflow-hidden relative rounded-b-[2rem] md:rounded-l-none md:rounded-r-[2rem]">
              <img
                src="about us.png"
                alt="KLIK Team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
                loading="lazy"
              />
              <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-white/45 via-white/20 to-transparent pointer-events-none" />
            </div>
          </NavLink>
        </div>
      </section>

      {/* ==================== SECTION 3: Learn - Blue/Purple Theme ==================== */}
      <section
        ref={(el) => { sectionsRef.current[2] = el; }}
        className="scroll-reveal-left scroll-delay-2 py-16 md:py-24 lamp-section"
      >
        <div className="px-4 md:px-6 lg:px-10">
          <NavLink
            to="/learn"
            className="group flex flex-col md:flex-row relative overflow-hidden rounded-[2rem] border border-white/10 hover:border-blue-400/30 transition-all duration-500 min-h-[280px] md:min-h-[320px]"
            style={{ background: 'linear-gradient(135deg, rgba(20,25,50,0.9) 0%, rgba(30,35,70,0.8) 100%)' }}
          >
            {/* Content left 75% */}
            <div className="flex-[3] p-6 md:p-8 lg:p-12 relative z-10 min-w-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/15 blur-[120px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <div className="text-center mb-6 md:mb-10">
                  <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-400 text-xs md:text-sm font-bold mb-3 md:mb-4">
                    <GraduationCap size={14} />
                    <span>03. LEARN</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-white mb-3 md:mb-4">
                    {language === 'en' ? 'Knowledge' : 'Ressources'}{' '}
                    <span className="text-blue-400">Hub</span>
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg text-white/60 max-w-2xl mx-auto px-2">
                    {language === 'en'
                      ? 'Market studies, training & tools — grow faster with actionable know-how.'
                      : 'Études de marché, formations et outils — progressez plus vite avec du concret.'}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
                  {[
                    { icon: FileText, title: language === 'en' ? 'Market Studies' : 'Études de marché', color: 'blue' },
                    { icon: Play, title: language === 'en' ? 'Video Training' : 'Vidéos formation', color: 'indigo' },
                    { icon: BookOpen, title: language === 'en' ? 'Resources' : 'Ressources', color: 'violet' },
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/card text-center">
                      <div className={`w-14 h-14 mx-auto rounded-xl bg-${item.color}-500/20 border border-${item.color}-400/20 flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform`}>
                        <item.icon className={`w-7 h-7 text-${item.color}-400`} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-white/40 text-sm">{language === 'en' ? 'Explore' : 'Explorer'}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6 md:mt-10">
                  <span className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm md:text-base group-hover:gap-4 transition-all">
                    {language === 'en' ? 'Explore resources' : 'Explorer les ressources'}
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
                  </span>
                </div>
              </div>
            </div>
            {/* Image right 25% - white fade on left edge */}
            <div className="w-full md:w-1/4 h-[200px] md:h-auto min-w-[100px] flex-shrink-0 self-stretch overflow-hidden relative rounded-b-[2rem] md:rounded-l-none md:rounded-r-[2rem]">
              <img
                src="learn.png"
                alt="Learn"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-white/45 via-white/20 to-transparent pointer-events-none" />
            </div>
          </NavLink>
        </div>
      </section>

      {/* ==================== SECTION 4: Entertainment - Dark Immersive ==================== */}
      <section
        ref={(el) => { sectionsRef.current[3] = el; }}
        className="scroll-reveal-right scroll-delay-1 py-16 md:py-24 lamp-section"
      >
        <div className="px-4 md:px-6 lg:px-10">
          <NavLink
            to="/entertainment-events"
            className="group flex flex-col md:flex-row relative overflow-hidden rounded-[2rem] border border-white/10 hover:border-pink-500/30 transition-all duration-500 min-h-[280px] md:min-h-[380px]"
          >
            {/* Content left 75% */}
            <div className="flex-[3] relative z-10 min-w-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 via-transparent to-transparent" />
              <div className="relative z-10 p-6 md:p-8 lg:p-16 h-full flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-400 text-xs md:text-sm font-bold w-fit mb-3 md:mb-4">
                <Sparkles size={14} />
                <span>04. EXPERIENCES</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-6xl font-black text-white mb-3 md:mb-4">
                {language === 'en' ? 'Entertainment' : 'Divertissement'}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  & Events
                </span>
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-white/60 mb-4 md:mb-6 max-w-xl">
                {language === 'en'
                  ? 'Immersive experiences and exclusive events — we make moments unforgettable.'
                  : 'Expériences immersives et événements exclusifs — on rend chaque moment inoubliable.'}
              </p>
              <div className="flex items-center text-pink-400 font-bold text-sm md:text-base group-hover:gap-4 transition-all">
                {language === 'en' ? 'Discover' : 'Découvrir'}
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
              </div>
              </div>
            </div>
            {/* Image right 25% - white fade on left edge */}
            <div className="w-full md:w-1/4 h-[200px] md:h-auto min-w-[100px] flex-shrink-0 self-stretch overflow-hidden relative rounded-b-[2rem] md:rounded-l-none md:rounded-r-[2rem]">
              <img
                src="entertainement.png"
                alt="Entertainment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-white/45 via-white/20 to-transparent pointer-events-none" />
            </div>
          </NavLink>
        </div>
      </section>

      {/* ==================== SECTION 5: Blog - Emerald Theme (commenté) ==================== */}
      {/* <section
        ref={(el) => { sectionsRef.current[4] = el; }}
        className="scroll-reveal-zoom scroll-delay-2 py-16 md:py-24 lamp-section"
      >
        <div className="px-4 md:px-6 lg:px-10">
          <NavLink
            to="/blog"
            className="group flex flex-col md:flex-row relative overflow-hidden rounded-[2rem] border border-white/10 hover:border-emerald-400/30 transition-all duration-500 min-h-[280px] md:min-h-[320px]"
            style={{ background: 'linear-gradient(135deg, rgba(20,35,30,0.9) 0%, rgba(25,40,35,0.8) 100%)' }}
          >
            <div className="flex-[3] p-6 md:p-8 lg:p-12 relative z-10 min-w-0">
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
              <div className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-2xl bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <BookOpen className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 text-emerald-400" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold mb-3 md:mb-4">
                  <FileText size={14} />
                  <span>05. BLOG</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-white mb-2 md:mb-3">
                  {language === 'en' ? 'Insights &' : 'Insights &'}{' '}
                  <span className="text-emerald-400">{language === 'en' ? 'Ideas' : 'Idées'}</span>
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-white/60 mb-4 md:mb-5">
                  {language === 'en'
? 'Strategy, tech, and growth — sharp reads that move the needle.'
                : 'Stratégie, tech et croissance — des articles qui font avancer.'}
                </p>
                <div className="flex items-center justify-center md:justify-start text-emerald-400 font-bold text-sm md:text-base group-hover:gap-4 transition-all">
                  {language === 'en' ? 'Read articles' : 'Lire les articles'}
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                </div>
              </div>
            </div>
            </div>
            <div className="w-full md:w-1/4 h-[200px] md:h-auto min-w-[100px] flex-shrink-0 self-stretch overflow-hidden relative rounded-b-[2rem] md:rounded-l-none md:rounded-r-[2rem]">
              <img
                src="blog.png"
                alt="Blog"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-white/45 via-white/20 to-transparent pointer-events-none" />
            </div>
          </NavLink>
        </div>
      </section> */}

      {/* ==================== SECTION 6: Careers - Clean Dark Style ==================== */}
      <section
        ref={(el) => { sectionsRef.current[4] = el; }}
        className="scroll-reveal scroll-delay-1 py-16 md:py-24 lamp-section"
      >
        <div className="px-4 md:px-6 lg:px-10">
          <NavLink
            to="/careers"
            className="group flex flex-col md:flex-row relative overflow-hidden rounded-[2rem] border border-white/15 hover:border-violet-400/30 transition-all duration-500 min-h-[280px] md:min-h-[320px]"
            style={{ background: 'linear-gradient(180deg, rgba(30,25,45,0.95) 0%, rgba(25,20,40,0.9) 100%)' }}
          >
            {/* Content left 75% */}
            <div className="flex-[3] p-6 md:p-8 lg:p-12 relative z-10 min-w-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500" />
            <div className="relative z-10 pt-4 md:pt-6">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
                {/* Icon */}
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 border border-violet-400/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Heart className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-violet-400" />
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/20 text-violet-400 text-xs font-bold mb-3 md:mb-4">
                    <Briefcase size={14} />
                    <span>06. CAREERS</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-white mb-2 md:mb-3">
                    {language === 'en' ? 'Join the' : 'Rejoins l\''}{' '}
                    <span className="text-violet-400">{language === 'en' ? 'adventure' : 'aventure'}</span>
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg text-white/60 mb-4 md:mb-6 max-w-xl">
                    {language === 'en'
                      ? 'Join a team that ships. Fast, direct, human — build something that matters.'
                      : 'Rejoins une équipe qui livre. Rapide, direct, humain — construis quelque chose qui compte.'}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-violet-500/20 border border-violet-400/30 text-violet-300 font-bold text-sm md:text-base group-hover:bg-violet-500/30 transition-colors">
                    {language === 'en' ? 'See opportunities' : 'Voir les opportunités'}
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
                  </div>
                </div>
              </div>
            </div>
            </div>
            {/* Image right 25% - white fade on left edge */}
            <div className="w-full md:w-1/4 h-[200px] md:h-auto min-w-[100px] flex-shrink-0 self-stretch overflow-hidden relative rounded-b-[2rem] md:rounded-l-none md:rounded-r-[2rem]">
              <img
                src="careers.png"
                alt="Careers"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-white/45 via-white/20 to-transparent pointer-events-none" />
            </div>
          </NavLink>
        </div>
      </section>
      
    </div>
  );
}
