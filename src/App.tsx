import React, { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Globe, Menu, MessageCircle, X } from 'lucide-react';
import type { KlikTranslations, Language, Theme } from './types/klik';

const translations: Record<Language, KlikTranslations> = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      about: 'À propos',
      learn: 'Learn',
      entertainment: 'Divertissement & Events',
      blog: 'Blog',
      careers: 'Carrières',
      contact: 'Contact',
    },
    hero: {
      title: 'KLIK',
      subtitle: 'Votre partenaire digital',
      description: 'Nous transformons vos idées en succès digitaux avec créativité et expertise.',
      cta: 'Découvrir nos services',
    },
    contact: {
      specialOffer: {
        title: 'Contact',
        description: 'Discutons de votre projet et construisons ensemble.',
        button: 'Nous contacter',
      },
    },
    clients: {
      title: 'Nos Clients',
      shakpot: {
        name: 'SHAKPOT',
        description:
          'Restaurant de folie - Une expérience culinaire unique qui révolutionne la gastronomie locale avec des plats créatifs et une ambiance exceptionnelle.',
        website: 'https://shakpot.com',
        visitSite: 'Visiter le site',
      },
      vagabox: {
        name: 'VAGABOX',
        description:
          "Service de livraison de colis innovant - Une solution logistique moderne qui simplifie l'envoi et la réception de colis avec une technologie de pointe.",
        website: 'https://vagabox.fr',
        visitSite: 'Visiter le site',
      },
      deeqsan: {
        name: 'DEEQSAN',
        description:
          "Maison d'édition - Une plateforme dédiée à la promotion de la littérature et de la culture, offrant une sélection soigneusement choisie d'ouvrages et de contenus éditoriaux.",
        website: 'https://deeqsan.com',
        visitSite: 'Visiter le site',
      },
      voyageVoyage: {
        name: 'VOYAGE VOYAGE',
        description:
          "Agence touristique - Votre partenaire de confiance pour découvrir des expériences uniques avec des circuits personnalisés.",
        website: 'https://voyagevoyagedj.com',
        visitSite: 'Visiter le site',
      },
      byLouli: {
        name: 'BY LOULI',
        description:
          "Mode féminine élégante - Collection exclusive de vêtements pour femme, voiles, abayas et jellabas, alliant tradition et modernité pour une élégance raffinée.",
        website: null,
        visitSite: null,
      },
      marketStudyCena: {
        name: 'MARKET STUDY CENA',
        description:
          "Études de marché et recherche - Société spécialisée dans les études de marché, sondages, phoning, analyse financière et enquêtes face à face pour optimiser vos stratégies business.",
        website: 'https://www.marketstudycena.com/',
        visitSite: 'Visiter le site',
      },
      continentalTransit: {
        name: 'Continental Transit',
        description: "Continental Transit est un partenaire logistique premium spécialisé dans le fret international et les solutions de transport. Nous avons collaboré à leur transformation digitale.",
        website: 'https://continental-transit.com',
        visitSite: 'Visiter le site',
      },
      confidential: {
        name: 'Client Confidentiel',
        description: "Nous ne pouvons pas montrer le logo par souci de confidentialité, mais ce partenariat est une fierté pour notre agence.",
        website: null,
        visitSite: null,
      },
    },
    footer: {
      madeBy: 'Site fait par',
      rights: 'Tous droits réservés.',
    },
    home: {
      valueInnovation: 'Innovation',
      valuePrecision: 'Précision',
      valuePerformance: 'Performance',
      valueSpeed: 'Rapidité',
      valueImpact: 'Impact',
      btnAbout: 'À propos',
      btnOurServices: 'Nos Services',
      mapTitle: 'Présents ici et',
      mapTitleHighlight: 'ailleurs',
      mapDesc: "Nous travaillons à l'échelle mondiale, livrant des expériences premium à travers les continents.",
      clientsHeader: 'Une partie de nos',
      clientsHighlight: 'Clients',
      servicesBadge: '01. SERVICES',
      servicesTitle1: "Ce qu'on",
      servicesTitle2: 'construit',
      servicesAll: 'Tous les services',
      webApps: 'Web & Apps',
      webAppsDesc: 'Sites qui convertissent & apps qui scalent',
      marketing: 'Marketing',
      marketingDesc: 'Stratégie, pubs & croissance',
      automation: 'Automatisation',
      automationDesc: 'Scaler mieux, livrer plus vite',
      aboutBadge: '02. ABOUT',
      aboutTitle: "L'équipe",
      aboutTitle2: 'KLIK',
      aboutDesc: 'Vision, ambition, impact. On conçoit, construit et livre — mentalité produit, exécution premium.',
      aboutCta: 'Découvrir notre histoire',
      learnBadge: '03. LEARN',
      learnTitle: 'Ressources',
      learnSubtitle: 'Hub',
      learnDesc: 'Études de marché, formations et outils — progressez plus vite avec du concret.',
      marketStudies: 'Études de marché',
      videoTraining: 'Vidéos formation',
      resources: 'Ressources',
      explore: 'Explorer',
      exploreResources: 'Explorer les ressources',
      entertainmentBadge: '04. EXPERIENCES',
      entertainmentTitle: 'Divertissement',
      entertainmentTitle2: '& Events',
      entertainmentDesc: 'Expériences immersives et événements exclusifs — on rend chaque moment inoubliable.',
      entertainmentCta: 'Découvrir',
      careersBadge: '06. CAREERS',
      careersTitle: "Rejoins l'",
      careersTitle2: 'aventure',
      careersDesc: 'Rejoins une équipe qui livre. Rapide, direct, humain — construis quelque chose qui compte.',
      careersCta: 'Voir les opportunités',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      learn: 'Learn',
      entertainment: 'Entertainment & Events',
      blog: 'Blog',
      careers: 'Careers',
      contact: 'Contact',
    },
    hero: {
      title: 'KLIK',
      subtitle: 'Your digital partner',
      description: 'We transform your ideas into digital success with creativity and expertise.',
      cta: 'Discover our services',
    },
    contact: {
      specialOffer: {
        title: 'Contact',
        description: 'Let\'s discuss your project and build something great together.',
        button: 'Get in touch',
      },
    },
    clients: {
      title: 'Our Clients',
      shakpot: {
        name: 'SHAKPOT',
        description:
          'Crazy restaurant - A unique culinary experience that revolutionizes local gastronomy with creative dishes and exceptional ambiance.',
        website: 'https://shakpot.com',
        visitSite: 'Visit website',
      },
      vagabox: {
        name: 'VAGABOX',
        description:
          'Innovative package delivery service - A modern logistics solution that simplifies package sending and receiving with cutting-edge technology.',
        website: 'https://vagabox.fr',
        visitSite: 'Visit website',
      },
      deeqsan: {
        name: 'DEEQSAN',
        description:
          'Publishing house - A platform dedicated to promoting literature and culture, offering a carefully selected collection of books and editorial content.',
        website: 'https://deeqsan.com',
        visitSite: 'Visit website',
      },
      voyageVoyage: {
        name: 'VOYAGE VOYAGE',
        description:
          'Tourism agency - Your trusted partner to discover unique experiences with personalized tours.',
        website: 'https://voyagevoyagedj.com',
        visitSite: 'Visit website',
      },
      byLouli: {
        name: 'BY LOULI',
        description:
          "Elegant women's fashion - Exclusive collection combining tradition and modernity for refined elegance.",
        website: null,
        visitSite: null,
      },
      marketStudyCena: {
        name: 'MARKET STUDY CENA',
        description:
          'Market research and studies - Specialized company in research, surveys and analytics to optimize business strategies.',
        website: 'https://www.marketstudycena.com/',
        visitSite: 'Visit website',
      },
      continentalTransit: {
        name: 'Continental Transit',
        description: 'Continental Transit is a premium logistics partner specializing in international freight and transportation solutions. We collaborated on their digital transformation.',
        website: 'https://continental-transit.com',
        visitSite: 'Visit site',
      },
      confidential: {
        name: 'Confidential Client',
        description: "We cannot show the logo due to confidentiality, but this partnership is a source of pride for our agency.",
        website: null,
        visitSite: null,
      },
    },
    footer: {
      madeBy: 'Site made by',
      rights: 'All rights reserved.',
    },
    home: {
      valueInnovation: 'Innovation',
      valuePrecision: 'Precision',
      valuePerformance: 'Performance',
      valueSpeed: 'Speed',
      valueImpact: 'Impact',
      btnAbout: 'About',
      btnOurServices: 'Our Services',
      mapTitle: 'Present here and',
      mapTitleHighlight: 'beyond',
      mapDesc: 'We work at a global scale, delivering premium experiences across continents.',
      clientsHeader: 'Some of our',
      clientsHighlight: 'Clients',
      servicesBadge: '01. SERVICES',
      servicesTitle1: 'What we',
      servicesTitle2: 'build',
      servicesAll: 'All services',
      webApps: 'Web & Apps',
      webAppsDesc: 'Sites that convert & apps that scale',
      marketing: 'Marketing',
      marketingDesc: 'Strategy, ads & growth',
      automation: 'Automation',
      automationDesc: 'Scale smarter, deliver faster',
      aboutBadge: '02. ABOUT',
      aboutTitle: 'The',
      aboutTitle2: 'KLIK Team',
      aboutDesc: 'Vision, ambition, impact. We design, build and ship — product mindset, premium execution.',
      aboutCta: 'Discover our story',
      learnBadge: '03. LEARN',
      learnTitle: 'Knowledge',
      learnSubtitle: 'Hub',
      learnDesc: 'Market studies, training & tools — grow faster with actionable know-how.',
      marketStudies: 'Market Studies',
      videoTraining: 'Video Training',
      resources: 'Resources',
      explore: 'Explore',
      exploreResources: 'Explore resources',
      entertainmentBadge: '04. EXPERIENCES',
      entertainmentTitle: 'Entertainment',
      entertainmentTitle2: '& Events',
      entertainmentDesc: 'Immersive experiences and exclusive events — we make moments unforgettable.',
      entertainmentCta: 'Discover',
      careersBadge: '06. CAREERS',
      careersTitle: 'Join the',
      careersTitle2: 'adventure',
      careersDesc: 'Join a team that ships. Fast, direct, human — build something that matters.',
      careersCta: 'See opportunities',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'من نحن',
      learn: 'تعلم',
      entertainment: 'الترفيه والفعاليات',
      blog: 'المدونة',
      careers: 'الوظائف',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'KLIK',
      subtitle: 'شريكك الرقمي',
      description: 'نحول أفكارك إلى نجاح رقمي بالإبداع والخبرة.',
      cta: 'اكتشف خدماتنا',
    },
    contact: {
      specialOffer: {
        title: 'اتصل',
        description: 'لنتحدث عن مشروعك ونبني معًا.',
        button: 'تواصل معنا',
      },
    },
    clients: {
      title: 'عملاؤنا',
      shakpot: {
        name: 'SHAKPOT',
        description: 'مطعم مميز - تجربة طهي فريدة تُحدث ثورة في فن الطهي المحلي بأطباق إبداعية وأجواء استثنائية.',
        website: 'https://shakpot.com',
        visitSite: 'زيارة الموقع',
      },
      vagabox: {
        name: 'VAGABOX',
        description: 'خدمة توصيل طرود مبتكرة - حل لوجستي حديث يُبسط إرسال واستقبال الطرود بتقنية متطورة.',
        website: 'https://vagabox.fr',
        visitSite: 'زيارة الموقع',
      },
      deeqsan: {
        name: 'DEEQSAN',
        description: 'دار نشر - منصة مخصصة لتعزيز الأدب والثقافة، تقدم مجموعة منتقاة من الكتب والمحتوى التحريري.',
        website: 'https://deeqsan.com',
        visitSite: 'زيارة الموقع',
      },
      voyageVoyage: {
        name: 'VOYAGE VOYAGE',
        description: 'وكالة سياحية - شريكك الموثوق لاكتشاف تجارب فريدة مع جولات مخصصة.',
        website: 'https://voyagevoyagedj.com',
        visitSite: 'زيارة الموقع',
      },
      byLouli: {
        name: 'BY LOULI',
        description: 'أزياء نسائية أنيقة - مجموعة حصرية من الملابس النسائية والحجاب والعباءات والجلابيات، تجمع بين التقليد والحداثة.',
        website: null,
        visitSite: null,
      },
      marketStudyCena: {
        name: 'MARKET STUDY CENA',
        description: 'أبحاث ودراسات السوق - شركة متخصصة في الاستطلاعات والتحليلات لتحسين استراتيجيات الأعمال.',
        website: 'https://www.marketstudycena.com/',
        visitSite: 'زيارة الموقع',
      },
      continentalTransit: {
        name: 'Continental Transit',
        description: 'شريك لوجستي متميز متخصص في الشحن الدولي وحلول النقل. تعاونّا في تحولهم الرقمي.',
        website: 'https://continental-transit.com',
        visitSite: 'زيارة الموقع',
      },
      confidential: {
        name: 'عميل سري',
        description: 'لا يمكننا عرض الشعار لأسباب سرية، لكن هذه الشراكة مصدر فخر لوكالتنا.',
        website: null,
        visitSite: null,
      },
    },
    footer: {
      madeBy: 'الموقع من صنع',
      rights: 'جميع الحقوق محفوظة.',
    },
    home: {
      valueInnovation: 'ابتكار',
      valuePrecision: 'دقة',
      valuePerformance: 'أداء',
      valueSpeed: 'سرعة',
      valueImpact: 'تأثير',
      btnAbout: 'من نحن',
      btnOurServices: 'خدماتنا',
      mapTitle: 'حاضرون هنا و',
      mapTitleHighlight: 'خارج الحدود',
      mapDesc: 'نعمل على نطاق عالمي، نقدم تجارب متميزة عبر القارات.',
      clientsHeader: 'جزء من',
      clientsHighlight: 'عملائنا',
      servicesBadge: '01. الخدمات',
      servicesTitle1: 'ما نبنيه',
      servicesTitle2: '',
      servicesAll: 'جميع الخدمات',
      webApps: 'الويب والتطبيقات',
      webAppsDesc: 'مواقع تحول وتطبيقات تنمو',
      marketing: 'التسويق',
      marketingDesc: 'استراتيجية وإعلانات ونمو',
      automation: 'الأتمتة',
      automationDesc: 'توسع أذكى، توصيل أسرع',
      aboutBadge: '02. من نحن',
      aboutTitle: 'فريق',
      aboutTitle2: 'KLIK',
      aboutDesc: 'رؤية، طموح، تأثير. نصمم ونبني ونُنجز — عقلية منتج، تنفيذ متميز.',
      aboutCta: 'اكتشف قصتنا',
      learnBadge: '03. تعلم',
      learnTitle: 'مركز',
      learnSubtitle: 'المعرفة',
      learnDesc: 'دراسات السوق، التدريب والأدوات — تقدم أسرع بعمل ملموس.',
      marketStudies: 'دراسات السوق',
      videoTraining: 'فيديوهات تدريب',
      resources: 'الموارد',
      explore: 'استكشف',
      exploreResources: 'استكشف الموارد',
      entertainmentBadge: '04. التجارب',
      entertainmentTitle: 'الترفيه',
      entertainmentTitle2: 'والفعاليات',
      entertainmentDesc: 'تجارب غامرة وفعاليات حصرية — نجعَل كل لحظة لا تُنسى.',
      entertainmentCta: 'اكتشف',
      careersBadge: '06. الوظائف',
      careersTitle: 'انضم للمغامرة',
      careersTitle2: '',
      careersDesc: 'انضم لفريق يُنجز. سريع، مباشر، إنساني — ابنِ شيئًا له معنى.',
      careersCta: 'شاهد الفرص',
    },
  },
};

export default function App() {
  const location = useLocation();
  const progressRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [footerFloating, setFooterFloating] = useState(true);
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'fr' || saved === 'en' || saved === 'ar') ? saved : 'fr';
  });
  // Force dark mode uniquement
  const [theme] = useState<Theme>('dark');

  const t = translations[language];

  useEffect(() => {
    // Toujours dark mode
    document.documentElement.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  useEffect(() => {
    // Always start pages from top
    // Some pages scroll in window; some in documentElement/body depending on browser.
    const doScrollTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      document.querySelector('main')?.scrollTo?.(0, 0);
    };
    doScrollTop();
    requestAnimationFrame(doScrollTop);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / scrollHeight) * 100, 100);
      if (progressRef.current) progressRef.current.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    const t = setTimeout(() => setFooterFloating(false), 10000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const closeLangMenu = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    if (langMenuOpen) {
      document.addEventListener('click', closeLangMenu);
      return () => document.removeEventListener('click', closeLangMenu);
    }
  }, [langMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((v) => !v);
    document.body.classList.toggle('no-scroll');
    menuRef.current?.classList.toggle('nav-active');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
    menuRef.current?.classList.remove('nav-active');
  };

  // Plus de toggle theme - dark uniquement

  return (
    <>
      <div ref={progressRef} className="progress-bar" />

      <header className="fixed top-0 left-0 right-0 w-full z-50 px-3 sm:px-4 py-2 sm:py-3">
        <nav className="navbar-glass container mx-auto rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2.5 flex items-center justify-between gap-2">
          <NavLink to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0" onClick={closeMenu}>
            <img
              src="logo.png"
              alt="KLIK - Logo"
              className="h-9 sm:h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105 brightness-0 invert opacity-95"
              loading="eager"
              width="64"
              height="64"
            />
          </NavLink>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop nav pill container */}
            <div className="hidden lg:flex navbar-pill-container">
              {[
                { to: '/', label: t.nav.home },
                { to: '/about', label: t.nav.about },
                { to: '/services', label: t.nav.services },
                { to: '/learn', label: t.nav.learn },
                { to: '/entertainment-events', label: t.nav.entertainment },
                { to: '/careers', label: t.nav.careers },
                { to: '/contact', label: t.nav.contact },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `navbar-item ${isActive ? 'navbar-item-active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile menu */}
            <div
              ref={menuRef}
              className="nav-links nav-links-glass fixed lg:hidden inset-0 h-screen w-full flex flex-col items-center justify-center gap-2 px-4 py-20 transition-all duration-300 ease-out z-50"
            >
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 end-4 p-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Close menu"
              >
                <X size={28} className="sm:w-8 sm:h-8" />
              </button>

              <nav className="flex flex-col items-center gap-1.5 w-full max-w-sm overflow-y-auto">
                {[
                  { to: '/', label: t.nav.home },
                  { to: '/about', label: t.nav.about },
                  { to: '/services', label: t.nav.services },
                  { to: '/learn', label: t.nav.learn },
                  { to: '/entertainment-events', label: t.nav.entertainment },
                  { to: '/careers', label: t.nav.careers },
                  { to: '/contact', label: t.nav.contact },
                ].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `nav-mobile-link min-h-[48px] flex items-center justify-center px-5 py-3.5 rounded-2xl w-full text-base sm:text-lg font-semibold transition-all ${isActive ? 'nav-mobile-link-active' : ''}`
                    }
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative z-[60] flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl text-white/90 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-[72px] sm:pt-[82px] md:pt-[90px]">
        <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center" aria-hidden="true"><div className="w-10 h-10 border-2 border-violet-500/30 border-t-violet-400 rounded-full animate-spin" /></div>}>
          <Outlet context={{ t, language, theme }} />
        </Suspense>
      </main>

      {/* Footer flottant : visible 10 s au chargement, puis descend en bas */}
      <div
        className={`fixed inset-x-0 bottom-0 z-30 pt-6 pb-6 px-4 md:px-6 lg:px-10 transition-transform duration-500 ease-out pointer-events-none ${!footerFloating ? 'translate-y-full' : ''}`}
        aria-hidden={!footerFloating}
      >
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-purple-600 rounded-[1.5rem] relative overflow-hidden min-h-[80px] shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 via-purple-600 to-violet-700" aria-hidden="true" />
            <div className="relative z-10 py-4 px-6">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-1.5 border border-white/20">
                    <img src="logo.png" alt="KLIK Logo" className="h-6 w-auto filter brightness-0 invert" decoding="async" />
                  </div>
                  <div className="text-white text-center">
                    <p className="text-sm font-semibold mb-0.5">{t.footer.madeBy} <span className="font-bold text-white/90">KLIK</span></p>
                    <p className="text-xs opacity-70">© {new Date().getFullYear()} KLIK. {t.footer.rights}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 opacity-50">
                  <div className="h-px bg-white/30 flex-1 max-w-16" />
                  <div className="w-1 h-1 bg-white/50 rounded-full animate-pulse" />
                  <div className="h-px bg-white/30 flex-1 max-w-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative mt-auto pt-6 pb-6 px-4 md:px-6 lg:px-10">
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-purple-600 rounded-[1.5rem] relative overflow-hidden min-h-[80px] shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 via-purple-600 to-violet-700" aria-hidden="true" />
            <div className="relative z-10 py-4 px-6">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-1.5 border border-white/20">
                    <img src="logo.png" alt="KLIK Logo" className="h-6 w-auto filter brightness-0 invert" decoding="async" fetchPriority="high" />
                  </div>
                  <div className="text-white text-center">
                    <p className="text-sm font-semibold mb-0.5">{t.footer.madeBy} <span className="font-bold text-white/90">KLIK</span></p>
                    <p className="text-xs opacity-70">© {new Date().getFullYear()} KLIK. {t.footer.rights}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 opacity-50">
                  <div className="h-px bg-white/30 flex-1 max-w-16" />
                  <div className="w-1 h-1 bg-white/50 rounded-full animate-pulse" />
                  <div className="h-px bg-white/30 flex-1 max-w-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-2 sm:gap-3 z-50 pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]">
        {/* Language Selector - dropdown au clic */}
        <div ref={langMenuRef} className="relative">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLangMenuOpen((v) => !v); }}
            className="flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg text-white font-bold text-xs sm:text-sm hover:bg-white/15 active:scale-95 transition-all"
            aria-label={language === 'fr' ? 'Langue : Français' : language === 'en' ? 'Language: English' : 'Langue'}
            aria-expanded={langMenuOpen}
            aria-haspopup="true"
          >
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="hidden sm:inline">{language.toUpperCase()}</span>
          </button>
          {langMenuOpen && (
            <div className="absolute bottom-full right-0 mb-2 flex flex-col gap-1 p-2 rounded-xl sm:rounded-2xl bg-black/80 backdrop-blur-xl border border-white/20 shadow-xl min-w-[110px] sm:min-w-[120px]">
              {[
                { code: 'fr' as const, label: 'Français' },
                { code: 'en' as const, label: 'English' },
                { code: 'ar' as const, label: 'العربية' },
              ].map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => { setLanguage(code); setLangMenuOpen(false); }}
                  className={`px-4 py-2 rounded-xl font-bold text-sm text-left transition-all ${
                    language === code
                      ? 'bg-violet-500 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  aria-label={label}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/25377141498"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center min-h-[44px] min-w-[44px] p-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          aria-label="Contact WhatsApp"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>

    </>
  );
}

