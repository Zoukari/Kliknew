import React, { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, MessageCircle, X } from 'lucide-react';
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
    },
    footer: {
      madeBy: 'Site fait par',
      rights: 'Tous droits réservés.',
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
    },
    footer: {
      madeBy: 'Site made by',
      rights: 'All rights reserved.',
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
      shakpot: { name: 'SHAKPOT', description: '...', website: 'https://shakpot.com', visitSite: 'زيارة الموقع' },
      vagabox: { name: 'VAGABOX', description: '...', website: 'https://vagabox.fr', visitSite: 'زيارة الموقع' },
      deeqsan: { name: 'DEEQSAN', description: '...', website: 'https://deeqsan.com', visitSite: 'زيارة الموقع' },
      voyageVoyage: { name: 'VOYAGE VOYAGE', description: '...', website: 'https://voyagevoyagedj.com', visitSite: 'زيارة الموقع' },
      byLouli: { name: 'BY LOULI', description: '...', website: null, visitSite: null },
      marketStudyCena: { name: 'MARKET STUDY CENA', description: '...', website: 'https://www.marketstudycena.com/', visitSite: 'زيارة الموقع' },
    },
    footer: {
      madeBy: 'الموقع من صنع',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
  is: {
    nav: {
      home: 'Heim',
      services: 'Þjónusta',
      about: 'Um okkur',
      learn: 'Læra',
      entertainment: 'Unterhaltung & Viðburðir',
      blog: 'Blogg',
      careers: 'Ferill',
      contact: 'Hafðu samband',
    },
    hero: {
      title: 'KLIK',
      subtitle: 'Stafræn samstarfsaðili þinn',
      description: 'Við umbreytum hugmyndum þínum í stafrænan árangur með sköpun og sérfræðiþekkingu.',
      cta: 'Kynntu þér þjónustu okkar',
    },
    contact: {
      specialOffer: {
        title: 'Hafðu samband',
        description: 'Við skulum ræða verkefnið þitt og byggja eitthvað stórt saman.',
        button: 'Hafðu samband',
      },
    },
    clients: {
      title: 'Viðskiptavinir okkar',
      shakpot: { name: 'SHAKPOT', description: '...', website: 'https://shakpot.com', visitSite: 'Heimsækja vefsíðu' },
      vagabox: { name: 'VAGABOX', description: '...', website: 'https://vagabox.fr', visitSite: 'Heimsækja vefsíðu' },
      deeqsan: { name: 'DEEQSAN', description: '...', website: 'https://deeqsan.com', visitSite: 'Heimsækja vefsíðu' },
      voyageVoyage: { name: 'VOYAGE VOYAGE', description: '...', website: 'https://voyagevoyagedj.com', visitSite: 'Heimsækja vefsíðu' },
      byLouli: { name: 'BY LOULI', description: '...', website: null, visitSite: null },
      marketStudyCena: { name: 'MARKET STUDY CENA', description: '...', website: 'https://www.marketstudycena.com/', visitSite: 'Heimsækja vefsíðu' },
    },
    footer: {
      madeBy: 'Vefsíða búin til af',
      rights: 'Öll réttindi áskilin.',
    },
  },
};

export default function App() {
  const location = useLocation();
  const progressRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

      <header className="fixed top-0 left-0 w-full z-50 px-4 py-3">
        <nav className="navbar-glass container mx-auto rounded-2xl px-4 py-2 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 group">
            <img
              src="logo.png"
              alt="KLIK - Logo"
              className="h-10 md:h-12 w-auto transition-all duration-300 group-hover:scale-105"
              loading="eager"
              width="64"
              height="64"
            />
          </NavLink>

          <div className="flex items-center gap-3">
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
              className="nav-links nav-links-glass fixed lg:hidden right-0 top-0 h-screen w-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out z-50"
            >
              <button
                onClick={closeMenu}
                className="absolute top-6 right-6 text-white hover:text-violet-400 transition-colors transform hover:rotate-90 duration-300"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>

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
                  className="my-2 px-6 py-3 rounded-xl w-[80%] max-w-xs text-center text-lg font-semibold transition-all"
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Language toggle supprimé - sera en floating button */}

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden z-50 text-white hover:text-violet-400 transition-colors p-2 hover:bg-white/10 rounded-xl"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-[90px]">
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

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* Language Selector */}
        <div className="flex flex-col gap-2 p-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
          <button
            onClick={() => setLanguage('fr')}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
              language === 'fr'
                ? 'bg-violet-500 text-white shadow-lg'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            aria-label="Français"
          >
            FR
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
              language === 'en'
                ? 'bg-violet-500 text-white shadow-lg'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            aria-label="English"
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('ar')}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
              language === 'ar'
                ? 'bg-violet-500 text-white shadow-lg'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            aria-label="العربية"
          >
            AR
          </button>
          <button
            onClick={() => setLanguage('is')}
            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
              language === 'is'
                ? 'bg-violet-500 text-white shadow-lg'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            aria-label="Íslenska"
          >
            IS
          </button>
        </div>
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/33712345678"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all hover:scale-110"
          aria-label="Contact WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

    </>
  );
}

