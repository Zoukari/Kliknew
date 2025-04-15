import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowRight, Mail, Phone, Globe, Map , Key, Users, Rocket, Shield, Sun, Moon, MessageCircle, ExternalLink, Utensils, Package, BookOpen } from 'lucide-react';

function App() {
  const progressRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [activeTab, setActiveTab] = useState('web');
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;
      
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }

      sectionsRef.current.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        section.classList.toggle('visible', isVisible);
      });
    };

    sectionsRef.current = Array.from(document.querySelectorAll('section'));
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('no-scroll');
    menuRef.current?.classList.toggle('nav-active');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
    menuRef.current?.classList.remove('nav-active');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    closeMenu();
    
    setTimeout(() => {
      if (href) {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleServiceScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    if (target.scrollLeft > 20) {
      setShowScrollHint(false);
    }
  };

  const services = {
    web: {
      title: "🌐 Création Web",
      items: [
        "💻 Sites web & applications mobiles",
        "🎨 Conception UX/UI moderne",
        "🔍 Maintenance & optimisation SEO",
        "🛍️ Boutiques en ligne & landing pages"
      ]
    },
    marketing: {
      title: "📈 Marketing Digital",
      items: [
        "💰 Publicité Google, Facebook, TikTok",
        "📧 Email marketing & automatisation",
        "🎯 SEO & acquisition ciblée",
        "📊 Analyse de données"
      ]
    },
    social: {
      title: "🤝 Réseaux Sociaux",
      items: [
        "📱 Animation des réseaux",
        "🎥 Contenus attractifs",
        "📈 Analyse concurrentielle",
        "💬 Modération & engagement"
      ]
    },
    support: {
      title: "🌟 E-réputation & Support",
      items: [
        "⭐ Gestion proactive des avis",
        "🎧 Service client dédié",
        "🛡️ Surveillance & gestion de crise",
        "📞 Support direct 24/7"
      ]
    }
  };

  const clients = [
    {
      id: "shakpot",
      name: "SHAKPOT",
      description: "Restaurant de spécialités africaines modernes",
      website: "https://shakpot.com",
      image: "2.png",
      color: "from-orange-500 to-red-600",
      icon: Utensils,
      services: [
        "Création de contenu visuel",
        "Animation des réseaux sociaux",
        "Stratégie de fidélisation client",
        "Marketing digital",
        "Photographie culinaire"
      ],
      prestations: [
        "Augmentation de 150% de l'engagement sur Instagram",
        "Mise en place d'un programme de fidélité digital",
        "Création d'une identité visuelle cohérente",
        "Campagnes publicitaires ciblées"
      ]
    },
    {
      id: "vagabox",
      name: "VAGABOX",
      description: "Service de livraison de colis innovant",
      website: "https://vagabox.com",
      image: "1.png",
      color: "from-blue-500 to-cyan-500",
      icon: Package,
      services: [
        "Développement de l'image de marque",
        "Gestion des réseaux sociaux",
        "Stratégie marketing digitale",
        "Création de contenu",
        "Relations publiques"
      ],
      prestations: [
        "Refonte complète de l'identité visuelle",
        "Lancement réussi sur TikTok",
        "Campagne d'influence avec des créateurs locaux",
        "Optimisation du parcours client"
      ]
    },
    {
      id: "deeqsan",
      name: "DEEQSAN",
      description: "Marketplace de produits artisanaux africains",
      website: "https://deeqsan.com",
      image: "Deeqsanlogo.png",
      color: "from-violet-500 to-purple-600",
      icon: BookOpen,
      services: [
        "Création du site e-commerce",
        "Optimisation SEO",
        "Formation des artisans",
        "Gestion de la marketplace",
        "Support technique"
      ],
      prestations: [
        "Site e-commerce responsive et performant",
        "Intégration de 50+ artisans",
        "Formation au digital pour les vendeurs",
        "Système de paiement sécurisé"
      ]
    }
  ];

  return (
    <>
      <div ref={progressRef} className="progress-bar" />
      
      <header className="fixed top-0 left-0 w-full h-[70px] bg-black/80 backdrop-blur-lg border-b border-white/10 z-50 theme-header">
        <nav className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="text-2xl font-bold text-theme"></a>
            <img src="/logo.png" alt="KLIK Logo" className="h-12 w-auto" />
          </div>
          
          <div className="flex items-center gap-4">
            <div 
              ref={menuRef} 
              className={`nav-links fixed md:relative right-0 md:right-0 top-0 h-screen md:h-auto w-full md:w-auto md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-end transition-all duration-300 ease-in-out z-50`}
            >
              <button 
                onClick={closeMenu} 
                className="absolute top-6 right-6 md:hidden text-theme hover:text-violet-500 transition-colors transform hover:rotate-90 duration-300"
              >
                <X size={32} />
              </button>
              {['Accueil', 'Services', 'Qui Sommes-Nous', 'Clients', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="my-2 md:my-0 md:ml-8 text-theme hover:text-violet-400 transition-all duration-300 text-lg md:text-base"
                  onClick={handleNavClick}
                >
                  {item}
                </a>
              ))}
            </div>
            
            <button 
              onClick={toggleMenu} 
              className="md:hidden z-50 text-theme hover:text-violet-500 transition-colors p-2 hover:bg-violet-500/10 rounded-lg"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-[70px]">
        <div className="fixed inset-0 particles-container z-0">
          <div className="particles" />
        </div>

        <section id="accueil" className="min-h-[calc(100vh-70px)] bg-theme/50 backdrop-blur-sm text-theme py-12 md:py-20 flex items-center relative z-10">
          <div className="container mx-auto px-4 text-center relative">
            <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
              <div className="rotating-element w-[200px] h-[200px] md:w-[250px] md:h-[250px] relative z-10">
                <div className="rotating-element-inner">
                  <div className="rotating-face face-front">
                    <Globe className="w-16 h-16 text-violet-500" />
                  </div>
                  <div className="rotating-face face-back">
                    <Shield className="w-16 h-16 text-violet-500" />
                  </div>
                  <div className="rotating-face face-right">
                    <Key className="w-16 h-16 text-violet-500" />
                  </div>
                  <div className="rotating-face face-left">
                    <Users className="w-16 h-16 text-violet-500" />
                  </div>
                  <div className="rotating-face face-top">
                    <Rocket className="w-16 h-16 text-violet-500" />
                  </div>
                  <div className="rotating-face face-bottom">
                    <Mail className="w-16 h-16 text-violet-500" />
                  </div>
                </div>
              </div>
              
              <div className="hero-content relative z-10">
                <h1 className="text-3xl md:text-6xl font-bold mb-6 fade-up">
                  Activez votre <span className="text-violet-500">potentiel</span> et<br className="hidden md:block" />
                  propulsez-vous 🚀
                </h1>
                <p className="text-base md:text-xl text-theme-secondary max-w-2xl mx-auto mb-8 fade-up px-4">
                  Chez KLIK, nous combinons expertise et créativité pour propulser votre présence en ligne.
                </p>
                <div className="fade-up">
                  <div className="offer-highlight">
                    <div className="offer-content text-sm md:text-base">
                      🎁 OFFRE DÉCOUVERTE : 2 SEMAINES GRATUITES !
                    </div>
                  </div>
                </div>
                <div className="mt-8 fade-up">
                  <a href="#contact" className="inline-flex items-center px-6 md:px-8 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg text-white font-semibold transition-all transform hover:-translate-y-1">
                    Commencer maintenant
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-20 bg-theme/50 backdrop-blur-sm relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-theme mb-16 fade-up">
              Nos <span className="text-violet-500">Services</span>
            </h2>
            
            <div className="relative">
              <div 
                className="flex flex-nowrap md:flex-wrap justify-start md:justify-center mb-12 border-b border-theme/10 fade-up overflow-x-auto pb-4 md:pb-0 hide-scrollbar scroll-smooth"
                onScroll={handleServiceScroll}
              >
                {Object.keys(services).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 md:px-6 py-3 text-base md:text-lg font-medium transition-colors relative whitespace-nowrap ${
                      activeTab === tab ? 'text-violet-500' : 'text-theme-secondary hover:text-theme'
                    }`}
                  >
                    {services[tab as keyof typeof services].title}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500" />
                    )}
                  </button>
                ))}
              </div>
              
              {showScrollHint && (
                <>
                  <div className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-theme via-theme/80 to-transparent pr-8 pl-2 py-2 pointer-events-none">
                    <div className="scroll-arrow scroll-arrow-left" />
                  </div>
                  <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-theme via-theme/80 to-transparent pl-8 pr-2 py-2 pointer-events-none">
                    <div className="scroll-arrow scroll-arrow-right" />
                  </div>
                </>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {services[activeTab as keyof typeof services].items.map((item, index) => (
                <div
                  key={index}
                  className="bg-theme/30 backdrop-blur-sm border border-theme/10 rounded-lg p-6 text-center fade-up hover:border-violet-500/50 transition-all duration-300"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-theme mb-2">{item}</h3>
                  <p className="text-theme-secondary text-sm md:text-base">Solutions professionnelles adaptées à vos besoins.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="qui-sommes-nous" className="py-16 md:py-20 bg-theme-secondary/50 backdrop-blur-sm relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative fade-up order-2 md:order-1">
                <img 
                  src="4.png" 
                  alt="Team working"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-violet-600 text-white p-4 rounded-lg hidden md:block">
                  <p className="font-bold text-2xl">5+</p>
                  <p className="text-sm">Années d'expérience</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-theme mb-6 fade-up">
                  Qui sommes-<span className="text-violet-500">nous</span> ?
                </h2>
                <p className="text-theme-secondary text-base md:text-lg mb-6 fade-up">
                  Chez KLIK, nous combinons expertise et créativité pour propulser votre présence en ligne. 
                  Que ce soit pour gérer vos réseaux sociaux, concevoir votre site web ou optimiser votre 
                  e-réputation, nous sommes là pour vous.
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {[
                    { icon: Users, title: "Équipe Dédiée" },
                    { icon: Rocket, title: "Innovation" },
                    { icon: Key, title: "Expertise" },
                    { icon: Shield, title: "Fiabilité" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-theme/30 backdrop-blur-sm rounded-lg fade-up hover:bg-theme/40 transition-all duration-300">
                      <item.icon className="text-violet-500 mb-2" size={24} />
                      <h3 className="font-semibold text-theme text-sm md:text-base">{item.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="py-16 md:py-20 bg-theme/50 backdrop-blur-sm overflow-hidden relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-theme mb-16 fade-up">
              Nos <span className="text-violet-500">Clients</span>
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    selectedClient === client.id 
                      ? 'w-full md:w-[600px] h-[300px] md:h-[70vh]' 
                      : 'w-full md:w-[100px] h-[200px] md:h-[70vh] hover:w-full md:hover:w-[150px]'
                  }`}
                  onClick={() => setSelectedClient(selectedClient === client.id ? null : client.id)}
                >
                  <div className="h-full relative overflow-hidden rounded-2xl">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div 
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                        selectedClient === client.id ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-b ${client.color} opacity-80`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <client.icon className="w-8 h-8 text-white mb-4" />
                        <h3 className="text-xl md:text-2xl font-bold text-white md:vertical-text">{client.name}</h3>
                      </div>
                    </div>
                    
                    {selectedClient === client.id && (
                      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-white/95' : 'bg-black/95'} backdrop-blur-md p-4 md:p-8 overflow-y-auto hide-scrollbar`}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedClient(null);
                          }}
                          className={`absolute top-4 right-4 ${theme === 'dark' ? 'text-black hover:text-violet-700' : 'text-white hover:text-violet-400'} transition-colors`}
                        >
                          <X size={24} />
                        </button>
                        
                        <div className="mb-8">
                          <div className="flex items-center gap-3 mb-4">
                            <client.icon className={`w-8 h-8 bg-gradient-to-r ${client.color} rounded-lg p-1.5 text-white`} />
                            <h3 className={`text-2xl md:text-3xl font-bold ${theme === 'dark' ? 'text-black' : 'text-white'}`}>{client.name}</h3>
                          </div>
                          <p className={`${theme === 'dark' ? 'text-gray-700' : 'text-gray-300'} text-base md:text-lg mb-4`}>{client.description}</p>
                          <a
                            href={client.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center bg-gradient-to-r ${client.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity`}
                          >
                            <span className="mr-2">Visiter le site</span>
                            <ExternalLink size={18} />
                          </a>
                        </div>
                        
                        <div className="space-y-6 md:space-y-8">
                          <div>
                            <h4 className={`text-lg md:text-xl font-semibold ${theme === 'dark' ? 'text-violet-700' : 'text-violet-400'} mb-4`}>Services fournis</h4>
                            <ul className="space-y-2">
                              {client.services.map((service, index) => (
                                <li 
                                  key={index} 
                                  className={`flex items-center ${
                                    theme === 'dark' 
                                      ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' 
                                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                                  } p-3 rounded-lg transition-colors text-sm md:text-base`}
                                >
                                  <ArrowRight size={16} className={`mr-2 ${theme === 'dark' ? 'text-violet-700' : 'text-violet-400'} flex-shrink-0`} />
                                  {service}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className={`text-lg md:text-xl font-semibold ${theme === 'dark' ? 'text-violet-700' : 'text-violet-400'} mb-4`}>Résultats obtenus</h4>
                            <ul className="space-y-2">
                              {client.prestations.map((prestation, index) => (
                                <li 
                                  key={index} 
                                  className={`flex items-center ${
                                    theme === 'dark' 
                                      ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' 
                                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                                  } p-3 rounded-lg transition-colors text-sm md:text-base`}
                                >
                                  <ArrowRight size={16} className={`mr-2 ${theme === 'dark' ? 'text-violet-700' : 'text-violet-400'} flex-shrink-0`} />
                                  {prestation}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-20 bg-theme-secondary/50 backdrop-blur-sm relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-theme/30 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-theme/10">
              <h2 className="text-3xl font-bold text-theme text-center mb-8 fade-up">
                Contactez-<span className="text-violet-500">nous</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="fade-up">
                  <div className="space-y-4 text-theme-secondary">
                    <a href="mailto:hey@klikdj.com" className="flex items-center hover:text-violet-400 text-base md:text-lg">
                      <Mail className="mr-3" /> hey@klikdj.com
                    </a>
                    <a href="tel:+25377141498" className="flex items-center hover:text-violet-400 text-base md:text-lg">
                      <Phone className="mr-3" /> +25377141498
                    </a>
                    <a href="https://klikdj.com" className="flex items-center hover:text-violet-400 text-base md:text-lg">
                      <Globe className="mr-3" /> klikdj.com
                    </a>
                    <a href="#" className="flex items-center hover:text-violet-400 text-base md:text-lg">
                      <Map className="mr-3" /> Djibouti, Djibouti ville , Plateau Serpent
                    </a>
                    
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-theme/50 backdrop-blur-sm border-t border-theme/10 relative z-10">
        <div className="container mx-auto px-4 text-center text-theme-secondary">
          <p>© {new Date().getFullYear()} KLIK. Tous droits réservés.</p>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <button 
          onClick={toggleTheme}
          className="p-3 rounded-full bg-violet-600 hover:bg-violet-700 text-white shadow-lg transition-all hover:scale-110"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-6 h-6" />
          ) : (
            <Moon className="w-6 h-6" />
          )}
        </button>
        
        <a 
          href="https://wa.me/25377141498"
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

export default App;