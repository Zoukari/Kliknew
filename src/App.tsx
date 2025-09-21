import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowRight, Mail, Phone, Globe, Map , Key, Users, Rocket, Shield, Sun, Moon, MessageCircle, ExternalLink, Utensils, Package, BookOpen, CheckCircle, Target, Heart, Trophy } from 'lucide-react';

// Translations
const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      about: 'Qui Sommes-Nous',
      contact: 'Contact'
    },
    hero: {
      title: 'KLIK',
      subtitle: 'Votre partenaire digital',
      description: 'Nous transformons vos idées en succès digitaux avec créativité et expertise.',
      cta: 'Découvrir nos services'
    },
    services: {
      title: 'Nos Services',
      web: {
        title: 'Création Web',
        items: [
          "🌐 Sites web modernes et responsives",
          "⚡ Optimisation des performances",
          "🔧 Maintenance et support technique",
          "📱 Applications web personnalisées"
        ]
      },
      marketing: {
        title: 'Marketing Digital',
        items: [
          "📈 Stratégies marketing personnalisées",
          "🎯 Campagnes publicitaires ciblées",
          "📊 Analyse et reporting détaillé",
          "💬 Modération & engagement"
        ]
      },
      social: {
        title: 'Réseaux Sociaux',
        items: [
          "📱 Gestion complète des réseaux sociaux",
          "🎨 Création de contenu visuel",
          "📈 Croissance organique et engagement",
          "💬 Modération & engagement"
        ]
      },
      support: {
        title: 'E-réputation & Support',
        items: [
          "⭐ Gestion proactive des avis",
          "🎧 Service client dédié",
          "🛡️ Surveillance & gestion de crise",
          "📞 Support direct 24/7"
        ]
      }
    },
    about: {
      title: "L'Équipe qui révolutionne le digital",
      description: "KLIK n'est pas juste une agence, c'est un collectif de passionnés qui transforment les idées en succès digitaux. Nous avons participé au Hackaton de Nantes 2023 et créé 35+ sites web qui cartonnent. Notre secret ? L'innovation made in Africa.",
      revelation: "Notre Révélation",
      revelationText: "Participation au Hackaton de Nantes 2023 - Nous avons représenté l'Afrique sur la scène internationale et prouvé que l'innovation digitale n'a pas de frontières.",
      team: "Équipe Passionnée",
      teamDesc: "Des créatifs qui vivent le digital",
      innovation: "Innovation Pure",
      innovationDesc: "Toujours à la pointe de la tech",
      expertise: "Expertise Locale",
      expertiseDesc: "Nous connaissons le marché local par cœur",
      engagement: "Engagement Total",
      engagementDesc: "Votre succès = notre mission"
    },
    results: {
      title: 'Nos Résultats & Processus',
      method: 'Notre Méthode',
      analyze: 'Analyse',
      analyzeDesc: 'Nous analysons vos besoins et votre marché cible',
      strategy: 'Stratégie',
      strategyDesc: 'Développement d\'une stratégie personnalisée',
      creation: 'Création',
      creationDesc: 'Mise en œuvre et création de votre solution',
      follow: 'Suivi',
      followDesc: 'Accompagnement et optimisation continue'
    },
    clients: {
      title: 'Nos Clients',
      shakpot: {
        name: 'SHAKPOT',
        description: 'Restaurant de folie',
        website: 'https://shakpot.com',
        visitSite: 'Visiter le site',
        servicesProvided: 'Services fournis',
        resultsObtained: 'Résultats obtenus',
        services: [
          "Création d'un système de POS (Point de vente, Gestion stock, Facturation)",
          "Partie commande clients via téléphone",
          "Création de contenu visuel",
          "Animation des réseaux sociaux",
          "Stratégie de fidélisation client",
          "Marketing digital",
          "Photographie culinaire"
        ],
        results: [
          "Augmentation de 150% de l'engagement sur Instagram",
          "Mise en place d'un programme de fidélité digital",
          "Gestion des bots WhatsApp",
          "Création d'une identité visuelle cohérente",
          "Campagnes publicitaires ciblées"
        ]
      },
      vagabox: {
        name: 'VAGABOX',
        description: 'Service de livraison de colis innovant',
        website: 'https://vagabox.fr',
        visitSite: 'Visiter le site',
        servicesProvided: 'Services fournis',
        resultsObtained: 'Résultats obtenus',
        services: [
          "Création du site web (interface clients et admin)",
          "Analyse de data",
          "Développement de l'image de marque",
          "Gestion des réseaux sociaux",
          "Stratégie marketing digitale",
          "Relations publiques"
        ],
        results: [
          "Refonte complète de l'identité visuelle",
          "Campagne d'influence avec des créateurs locaux",
          "Optimisation du parcours client"
        ]
      },
      deeqsan: {
        name: 'DEEQSAN',
        description: 'Maison d\'édition',
        website: 'https://deeqsan.net',
        visitSite: 'Visiter le site',
        servicesProvided: 'Services fournis',
        resultsObtained: 'Résultats obtenus',
        services: [
          "Création du site e-commerce",
          "Optimisation SEO",
          "Gestion de la marketplace",
          "Support technique"
        ],
        results: [
          "Site e-commerce responsive et performant",
          "Système de paiement sécurisé",
          "Optimisation pour les moteurs de recherche",
          "Interface utilisateur intuitive"
        ]
      }
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Prêt à transformer votre présence digitale ?',
      description: 'Discutons de votre projet et découvrons comment KLIK peut vous aider à atteindre vos objectifs.',
      offer: 'Offre spéciale : 2 semaines gratuites pour découvrir nos services !',
      startNow: 'Démarrer maintenant',
      formTitle: 'Envoyez-nous un message',
      name: 'Nom complet',
      namePlaceholder: 'Votre nom',
      email: 'Email',
      emailPlaceholder: 'votre@email.com',
      phone: 'Téléphone',
      phonePlaceholder: '+253 XX XX XX XX',
      service: 'Service souhaité',
      selectService: 'Sélectionnez un service',
      message: 'Message',
      messagePlaceholder: 'Décrivez votre projet...',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès !',
      successDesc: 'Votre message a été envoyé directement à klik.djib@gmail.com. Nous vous répondrons dans les plus brefs délais !',
      error: 'Erreur lors de l\'envoi. Veuillez réessayer.',
      whatsapp: 'Envoyer par WhatsApp',
      contactInfo: {
        email: 'Email',
        phone: 'Téléphone',
        whatsapp: 'WhatsApp',
        whatsappDesc: 'Chat direct',
        address: 'Adresse',
        addressValue: 'Plateau Serpent'
      },
      specialOffer: {
        title: '🎁 Offre Spéciale',
        description: '2 semaines gratuites pour découvrir nos services !',
        button: 'Démarrer maintenant'
      }
    },
    footer: {
      madeBy: 'Site fait par',
      rights: 'Tous droits réservés.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact'
    },
    hero: {
      title: 'KLIK',
      subtitle: 'Your digital partner',
      description: 'We transform your ideas into digital success with creativity and expertise.',
      cta: 'Discover our services'
    },
    services: {
      title: 'Our Services',
      web: {
        title: 'Web Creation',
        items: [
          "🌐 Modern and responsive websites",
          "⚡ Performance optimization",
          "🔧 Maintenance and technical support",
          "📱 Custom web applications"
        ]
      },
      marketing: {
        title: 'Digital Marketing',
        items: [
          "📈 Personalized marketing strategies",
          "🎯 Targeted advertising campaigns",
          "📊 Detailed analysis and reporting",
          "💬 Moderation & engagement"
        ]
      },
      social: {
        title: 'Social Media',
        items: [
          "📱 Complete social media management",
          "🎨 Visual content creation",
          "📈 Organic growth and engagement",
          "💬 Moderation & engagement"
        ]
      },
      support: {
        title: 'E-reputation & Support',
        items: [
          "⭐ Proactive review management",
          "🎧 Dedicated customer service",
          "🛡️ Crisis monitoring & management",
          "📞 Direct 24/7 support"
        ]
      }
    },
    about: {
      title: "The Team revolutionizing digital",
      description: "KLIK is not just an agency, it's a collective of passionate people who transform ideas into digital success. We participated in the Nantes 2023 Hackathon and created 35+ websites that rock. Our secret? Innovation made in Africa.",
      revelation: "Our Revelation",
      revelationText: "Participation in the Nantes 2023 Hackathon - We represented Africa on the international stage and proved that digital innovation knows no borders.",
      team: "Passionate Team",
      teamDesc: "Creatives who live digital",
      innovation: "Pure Innovation",
      innovationDesc: "Always at the forefront of tech",
      expertise: "Local Expertise",
      expertiseDesc: "We know the local market by heart",
      engagement: "Total Commitment",
      engagementDesc: "Your success = our mission"
    },
    results: {
      title: 'Our Results & Process',
      method: 'Our Method',
      analyze: 'Analysis',
      analyzeDesc: 'We analyze your needs and target market',
      strategy: 'Strategy',
      strategyDesc: 'Development of a personalized strategy',
      creation: 'Creation',
      creationDesc: 'Implementation and creation of your solution',
      follow: 'Follow-up',
      followDesc: 'Support and continuous optimization'
    },
    clients: {
      title: 'Our Clients',
      shakpot: {
        name: 'SHAKPOT',
        description: 'Crazy restaurant',
        website: 'https://shakpot.com',
        visitSite: 'Visit website',
        servicesProvided: 'Services provided',
        resultsObtained: 'Results obtained',
        services: [
          "POS system creation (Point of sale, Stock management, Invoicing)",
          "Customer phone ordering system",
          "Visual content creation",
          "Social media animation",
          "Customer loyalty strategy",
          "Digital marketing",
          "Culinary photography"
        ],
        results: [
          "150% increase in Instagram engagement",
          "Digital loyalty program implementation",
          "WhatsApp bot management",
          "Coherent visual identity creation",
          "Targeted advertising campaigns"
        ]
      },
      vagabox: {
        name: 'VAGABOX',
        description: 'Innovative package delivery service',
        website: 'https://vagabox.fr',
        visitSite: 'Visit website',
        servicesProvided: 'Services provided',
        resultsObtained: 'Results obtained',
        services: [
          "Website creation (client and admin interface)",
          "Data analysis",
          "Brand image development",
          "Social media management",
          "Digital marketing strategy",
          "Public relations"
        ],
        results: [
          "Complete visual identity redesign",
          "Influencer campaign with local creators",
          "Customer journey optimization"
        ]
      },
      deeqsan: {
        name: 'DEEQSAN',
        description: 'Publishing house',
        website: 'https://deeqsan.net',
        visitSite: 'Visit website',
        servicesProvided: 'Services provided',
        resultsObtained: 'Results obtained',
        services: [
          "E-commerce site creation",
          "SEO optimization",
          "Marketplace management",
          "Technical support"
        ],
        results: [
          "Responsive and performant e-commerce site",
          "Secure payment system",
          "Search engine optimization",
          "Intuitive user interface"
        ]
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Ready to transform your digital presence?',
      description: 'Let\'s discuss your project and discover how KLIK can help you achieve your goals.',
      offer: 'Special offer: 2 free weeks to discover our services!',
      startNow: 'Start now',
      formTitle: 'Send us a message',
      name: 'Full name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      phone: 'Phone',
      phonePlaceholder: '+253 XX XX XX XX',
      service: 'Desired service',
      selectService: 'Select a service',
      message: 'Message',
      messagePlaceholder: 'Describe your project...',
      send: 'Send message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      successDesc: 'Your message has been sent directly to klik.djib@gmail.com. We will respond as soon as possible!',
      error: 'Error sending. Please try again.',
      whatsapp: 'Send via WhatsApp',
      contactInfo: {
        email: 'Email',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        whatsappDesc: 'Direct chat',
        address: 'Address',
        addressValue: 'Plateau Serpent'
      },
      specialOffer: {
        title: '🎁 Special Offer',
        description: '2 free weeks to discover our services!',
        button: 'Start now'
      }
    },
    footer: {
      madeBy: 'Site made by',
      rights: 'All rights reserved.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'من نحن',
      contact: 'اتصل بنا'
    },
    hero: {
      title: 'KLIK',
      subtitle: 'شريكك الرقمي',
      description: 'نحول أفكارك إلى نجاح رقمي بالإبداع والخبرة.',
      cta: 'اكتشف خدماتنا'
    },
    services: {
      title: 'خدماتنا',
      web: {
        title: 'إنشاء المواقع',
        items: [
          "🌐 مواقع ويب حديثة ومتجاوبة",
          "⚡ تحسين الأداء",
          "🔧 الصيانة والدعم التقني",
          "📱 تطبيقات ويب مخصصة"
        ]
      },
      marketing: {
        title: 'التسويق الرقمي',
        items: [
          "📈 استراتيجيات تسويقية مخصصة",
          "🎯 حملات إعلانية مستهدفة",
          "📊 تحليل وتقارير مفصلة",
          "💬 الإشراف والمشاركة"
        ]
      },
      social: {
        title: 'وسائل التواصل الاجتماعي',
        items: [
          "📱 إدارة شاملة لوسائل التواصل الاجتماعي",
          "🎨 إنشاء المحتوى المرئي",
          "📈 النمو العضوي والمشاركة",
          "💬 الإشراف والمشاركة"
        ]
      },
      support: {
        title: 'السمعة الإلكترونية والدعم',
        items: [
          "⭐ إدارة استباقية للآراء",
          "🎧 خدمة عملاء مخصصة",
          "🛡️ المراقبة وإدارة الأزمات",
          "📞 دعم مباشر 24/7"
        ]
      }
    },
    about: {
      title: "الفريق الذي يثور على الرقمي",
      description: "KLIK ليست مجرد وكالة، إنها مجموعة من المتحمسين الذين يحولون الأفكار إلى نجاح رقمي. شاركنا في هاكاثون نانت 2023 وأنشأنا أكثر من 35 موقع ويب ناجح. سرنا؟ الابتكار صنع في أفريقيا.",
      revelation: "اكتشافنا",
      revelationText: "المشاركة في هاكاثون نانت 2023 - مثلنا أفريقيا على الساحة الدولية وأثبتنا أن الابتكار الرقمي لا يعرف حدوداً.",
      team: "فريق متحمس",
      teamDesc: "مبدعون يعيشون الرقمي",
      innovation: "ابتكار خالص",
      innovationDesc: "دائماً في طليعة التكنولوجيا",
      expertise: "خبرة محلية",
      expertiseDesc: "نعرف السوق المحلي عن ظهر قلب",
      engagement: "التزام كامل",
      engagementDesc: "نجاحك = مهمتنا"
    },
    results: {
      title: 'نتائجنا وعملية العمل',
      method: 'طريقتنا',
      analyze: 'التحليل',
      analyzeDesc: 'نحلل احتياجاتك والسوق المستهدف',
      strategy: 'الاستراتيجية',
      strategyDesc: 'تطوير استراتيجية مخصصة',
      creation: 'الإنشاء',
      creationDesc: 'التنفيذ وإنشاء حلولك',
      follow: 'المتابعة',
      followDesc: 'الدعم والتحسين المستمر'
    },
    clients: {
      title: 'عملاؤنا',
      shakpot: {
        name: 'SHAKPOT',
        description: 'مطعم مجنون',
        website: 'https://shakpot.com',
        visitSite: 'زيارة الموقع',
        servicesProvided: 'الخدمات المقدمة',
        resultsObtained: 'النتائج المحققة',
        services: [
          "إنشاء نظام نقاط البيع (نقطة البيع، إدارة المخزون، الفواتير)",
          "نظام طلب العملاء عبر الهاتف",
          "إنشاء المحتوى المرئي",
          "تحريك وسائل التواصل الاجتماعي",
          "استراتيجية ولاء العملاء",
          "التسويق الرقمي",
          "التصوير الطهوي"
        ],
        results: [
          "زيادة 150% في المشاركة على إنستغرام",
          "تنفيذ برنامج ولاء رقمي",
          "إدارة بوتات واتساب",
          "إنشاء هوية بصرية متماسكة",
          "حملات إعلانية مستهدفة"
        ]
      },
      vagabox: {
        name: 'VAGABOX',
        description: 'خدمة توصيل الطرود المبتكرة',
        website: 'https://vagabox.fr',
        visitSite: 'زيارة الموقع',
        servicesProvided: 'الخدمات المقدمة',
        resultsObtained: 'النتائج المحققة',
        services: [
          "إنشاء الموقع (واجهة العملاء والإدارة)",
          "تحليل البيانات",
          "تطوير صورة العلامة التجارية",
          "إدارة وسائل التواصل الاجتماعي",
          "استراتيجية التسويق الرقمي",
          "العلاقات العامة"
        ],
        results: [
          "إعادة تصميم كاملة للهوية البصرية",
          "حملة تأثير مع المبدعين المحليين",
          "تحسين رحلة العميل"
        ]
      },
      deeqsan: {
        name: 'DEEQSAN',
        description: 'دار النشر',
        website: 'https://deeqsan.net',
        visitSite: 'زيارة الموقع',
        servicesProvided: 'الخدمات المقدمة',
        resultsObtained: 'النتائج المحققة',
        services: [
          "إنشاء موقع التجارة الإلكترونية",
          "تحسين محركات البحث",
          "إدارة السوق",
          "الدعم التقني"
        ],
        results: [
          "موقع تجارة إلكترونية متجاوب وفعال",
          "نظام دفع آمن",
          "تحسين محركات البحث",
          "واجهة مستخدم بديهية"
        ]
      }
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'مستعد لتحويل حضورك الرقمي؟',
      description: 'دعنا نناقش مشروعك ونكتشف كيف يمكن لـ KLIK مساعدتك في تحقيق أهدافك.',
      offer: 'عرض خاص: أسبوعين مجانيين لاكتشاف خدماتنا!',
      startNow: 'ابدأ الآن',
      formTitle: 'أرسل لنا رسالة',
      name: 'الاسم الكامل',
      namePlaceholder: 'اسمك',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'your@email.com',
      phone: 'الهاتف',
      phonePlaceholder: '+253 XX XX XX XX',
      service: 'الخدمة المطلوبة',
      selectService: 'اختر خدمة',
      message: 'الرسالة',
      messagePlaceholder: 'اوصف مشروعك...',
      send: 'إرسال الرسالة',
      sending: 'جاري الإرسال...',
      success: 'تم إرسال الرسالة بنجاح!',
      successDesc: 'تم إرسال رسالتك مباشرة إلى klik.djib@gmail.com. سنرد عليك في أقرب وقت ممكن!',
      error: 'خطأ في الإرسال. يرجى المحاولة مرة أخرى.',
      whatsapp: 'إرسال عبر واتساب',
      contactInfo: {
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        whatsapp: 'واتساب',
        whatsappDesc: 'محادثة مباشرة',
        address: 'العنوان',
        addressValue: 'هضبة سربنت'
      },
      specialOffer: {
        title: '🎁 عرض خاص',
        description: 'أسبوعين مجانيين لاكتشاف خدماتنا!',
        button: 'ابدأ الآن'
      }
    },
    footer: {
      madeBy: 'الموقع من صنع',
      rights: 'جميع الحقوق محفوظة.'
    }
  }
};

function App() {
  const progressRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [activeTab, setActiveTab] = useState('web');
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [language, setLanguage] = useState<'fr' | 'en' | 'ar'>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as 'fr' | 'en' | 'ar') || 'fr';
  });
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as 'dark' | 'light') || 'dark';
  });

  const t = translations[language];

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;
      
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / scrollHeight) * 100, 100);
      
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }

      sectionsRef.current.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
        section.classList.toggle('visible', isVisible);
      });
    };

    const updateSections = () => {
    sectionsRef.current = Array.from(document.querySelectorAll('section'));
    };
    
    updateSections();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateSections, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSections);
    };
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

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'fr') return 'en';
      if (prev === 'en') return 'ar';
      return 'fr';
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Envoi direct via Web3Forms (service gratuit et fiable)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f9d96f95-7f9a-4248-9ce9-2fab14da2b7d',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: `Nouveau message de ${formData.name} - ${formData.service}`,
          replyto: formData.email,
          to: 'klik.djib@gmail.com',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
      setIsSubmitting(false);
      
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const handleServiceScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    if (target.scrollLeft > 20) {
      setShowScrollHint(false);
    }
  };


  const clients = [
    {
      id: "shakpot",
      name: t.clients.shakpot.name,
      description: t.clients.shakpot.description,
      website: t.clients.shakpot.website,
      visitSite: t.clients.shakpot.visitSite,
      servicesProvided: t.clients.shakpot.servicesProvided,
      resultsObtained: t.clients.shakpot.resultsObtained,
      image: "2.png",
      color: "from-orange-500 to-red-600",
      icon: Utensils,
      services: t.clients.shakpot.services,
      prestations: t.clients.shakpot.results
    },
    {
      id: "vagabox",
      name: t.clients.vagabox.name,
      description: t.clients.vagabox.description,
      website: t.clients.vagabox.website,
      visitSite: t.clients.vagabox.visitSite,
      servicesProvided: t.clients.vagabox.servicesProvided,
      resultsObtained: t.clients.vagabox.resultsObtained,
      image: "1.png",
      color: "from-blue-500 to-cyan-500",
      icon: Package,
      services: t.clients.vagabox.services,
      prestations: t.clients.vagabox.results
    },
    {
      id: "deeqsan",
      name: t.clients.deeqsan.name,
      description: t.clients.deeqsan.description,
      website: t.clients.deeqsan.website,
      visitSite: t.clients.deeqsan.visitSite,
      servicesProvided: t.clients.deeqsan.servicesProvided,
      resultsObtained: t.clients.deeqsan.resultsObtained,
      image: "Deeqsanlogo.png",
      color: "from-violet-500 to-purple-600",
      icon: BookOpen,
      services: t.clients.deeqsan.services,
      prestations: t.clients.deeqsan.results
    }
  ];

  return (
    <>
      <div ref={progressRef} className="progress-bar" />
      
      <header className="fixed top-0 left-0 w-full h-[70px] glass-effect border-b border-white/10 z-50 theme-header neon-glow">
        <nav className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="text-2xl font-bold text-theme"></a>
                <img 
                  src="logo.png" 
                  alt="KLIK - Meilleure Agence Marketing Digital à Djibouti | Logo" 
                  className={`h-16 w-auto transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'brightness-0 invert' 
                      : 'brightness-100'
                  }`}
                  loading="eager"
                  width="64"
                  height="64"
                />
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
              {[t.nav.home, t.nav.services, t.nav.about, t.nav.contact].map((item, index) => {
                const keys = ['accueil', 'services', 'qui-sommes-nous', 'contact'];
                return (
                <a 
                    key={index} 
                    href={`#${keys[index]}`} 
                  className="my-2 md:my-0 md:ml-8 text-theme hover:text-violet-400 transition-all duration-300 text-lg md:text-base"
                  onClick={handleNavClick}
                >
                  {item}
                </a>
                );
              })}
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

        <section id="accueil" className="min-h-[calc(100vh-70px)] glass-effect text-theme py-12 md:py-20 flex items-center relative z-10">
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
                  {t.hero.title} - <span className="text-violet-500">{t.hero.subtitle}</span>
                </h1>
                <p className="text-base md:text-xl text-theme-secondary max-w-2xl mx-auto mb-8 fade-up px-4">
                  {t.hero.description}
                </p>
                <div className="fade-up">
                  <div className="offer-highlight">
                    <div className="offer-content text-sm md:text-base">
                      {t.contact.specialOffer.title} : {t.contact.specialOffer.description}
                    </div>
                  </div>
                </div>
                <div className="mt-8 fade-up">
                  <a href="#contact" className="inline-flex items-center px-6 md:px-8 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg text-white font-semibold transition-all transform hover:-translate-y-1">
                    {t.contact.specialOffer.button}
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-20 glass-effect relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-theme mb-16 fade-up">
              {t.services.title}
            </h2>
            
            <div className="relative">
              <div 
                className="flex flex-nowrap md:flex-wrap justify-start md:justify-center mb-12 border-b border-theme/10 fade-up overflow-x-auto pb-4 md:pb-0 hide-scrollbar scroll-smooth"
                onScroll={handleServiceScroll}
              >
                {Object.keys(t.services).filter(key => key !== 'title').map((tab) => {
                  const serviceKey = tab as keyof typeof t.services;
                  const service = t.services[serviceKey];
                  if (typeof service === 'string') return null;
                  return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 md:px-6 py-3 text-base md:text-lg font-medium transition-colors relative whitespace-nowrap ${
                      activeTab === tab ? 'text-violet-500' : 'text-theme-secondary hover:text-theme'
                    }`}
                  >
                      {service.title}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500" />
                    )}
                  </button>
                  );
                })}
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
              {(() => {
                const serviceKey = activeTab as keyof typeof t.services;
                const service = t.services[serviceKey];
                if (typeof service === 'string') return null;
                return service.items.map((item: string, index: number) => (
                <div
                  key={index}
                    className="glass-effect border border-theme/10 rounded-lg p-6 text-center fade-up hover:border-violet-500/50 hover-lift transition-all duration-300 gradient-border"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-theme mb-2">{item}</h3>
                </div>
                ));
              })()}
            </div>
          </div>
        </section>

        <section id="qui-sommes-nous" className="py-16 md:py-20 glass-effect relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative fade-up order-2 md:order-1">
                <img 
                  src="4.png" 
                  alt="Équipe KLIK - Agence Marketing Digital à Djibouti | Création Web & Réseaux Sociaux"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4 rounded-lg hidden md:block neon-glow">
                  <p className="font-bold text-2xl">5+</p>
                  <p className="text-sm">Années d'excellence</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-theme mb-6 fade-up">
                  {t.about.title}
                </h2>
                <p className="text-theme-secondary text-base md:text-lg mb-8 fade-up">
                  {t.about.description}
                </p>
                
                <div className="mb-8 fade-up">
                  <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-theme mb-3 flex items-center">
                      <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
                      {t.about.revelation}
                    </h3>
                    <p className="text-theme-secondary">
                      {t.about.revelationText}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {[
                    { icon: Users, title: t.about.team, desc: t.about.teamDesc },
                    { icon: Rocket, title: t.about.innovation, desc: t.about.innovationDesc },
                    { icon: Key, title: t.about.expertise, desc: t.about.expertiseDesc },
                    { icon: Shield, title: t.about.engagement, desc: t.about.engagementDesc }
                  ].map((item, index) => (
                    <div key={index} className="p-4 glass-effect rounded-lg fade-up hover-lift transition-all duration-300 group">
                      <item.icon className="text-violet-500 mb-3 group-hover:scale-110 transition-transform" size={28} />
                      <h3 className="font-bold text-theme text-sm md:text-base mb-1">{item.title}</h3>
                      <p className="text-theme-secondary text-xs md:text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="résultats-&-processus" className="py-16 md:py-20 glass-effect relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-theme mb-16 fade-up">
              {t.results.title}
            </h2>
            

            {/* Processus */}
            <div>
              <h3 className="text-2xl font-bold text-center text-theme mb-12 fade-up">🔄 {t.results.method}</h3>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { 
                    step: "01", 
                    title: t.results.analyze, 
                    description: t.results.analyzeDesc,
                    icon: Target,
                    color: "from-blue-500 to-cyan-600"
                  },
                  { 
                    step: "02", 
                    title: t.results.strategy, 
                    description: t.results.strategyDesc,
                    icon: CheckCircle,
                    color: "from-green-500 to-emerald-600"
                  },
                  { 
                    step: "03", 
                    title: t.results.creation, 
                    description: t.results.creationDesc,
                    icon: Rocket,
                    color: "from-purple-500 to-violet-600"
                  },
                  { 
                    step: "04", 
                    title: t.results.follow, 
                    description: t.results.followDesc,
                    icon: Heart,
                    color: "from-orange-500 to-red-600"
                  }
                ].map((process, index) => (
                  <div key={index} className="text-center fade-up hover-lift transition-all duration-300 process-step">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${process.color} flex items-center justify-center relative`}>
                      <process.icon className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-theme rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-theme-secondary">{process.step}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-theme mb-3">{process.title}</h3>
                    <p className="text-theme-secondary text-sm">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        <section id="clients" className="py-16 md:py-20 glass-effect overflow-hidden relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-theme mb-16 fade-up">
              {t.clients.title}
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    selectedClient === client.id 
                      ? 'w-full md:w-[600px] h-[300px] md:h-[70vh]' 
                      : 'w-full md:w-[135px] h-[200px] md:h-[70vh] hover:w-full md:hover:w-[210px]'
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
                            <span className="mr-2">{client.visitSite}</span>
                            <ExternalLink size={18} />
                          </a>
                        </div>
                        
                        <div className="space-y-6 md:space-y-8">
                          <div>
                            <h4 className={`text-lg md:text-xl font-semibold ${theme === 'dark' ? 'text-violet-700' : 'text-violet-400'} mb-4`}>{client.servicesProvided}</h4>
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
                            <h4 className={`text-lg md:text-xl font-semibold ${theme === 'dark' ? 'text-violet-700' : 'text-violet-400'} mb-4`}>{client.resultsObtained}</h4>
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


        <section id="contact" className="py-16 md:py-20 glass-effect relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-theme text-center mb-16 fade-up">
                {t.contact.title}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Informations de contact */}
                <div className="fade-up">
                  <h3 className="text-2xl font-bold text-theme mb-8">{t.contact.subtitle}</h3>
                  <div className="space-y-6 text-theme-secondary">
                    <a href="mailto:klik.djib@gmail.com" className="flex items-center hover:text-violet-400 text-base md:text-lg group">
                      <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-violet-500/30 transition-colors">
                        <Mail className="w-6 h-6 text-violet-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-theme">{t.contact.contactInfo.email}</div>
                        <div>klik.djib@gmail.com</div>
                      </div>
                    </a>
                    
                    <a href="tel:+25377141498" className="flex items-center hover:text-violet-400 text-base md:text-lg group">
                      <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-violet-500/30 transition-colors">
                        <Phone className="w-6 h-6 text-violet-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-theme">{t.contact.contactInfo.phone}</div>
                        <div>+253 77 14 14 98</div>
                      </div>
                    </a>
                    
                    <a href="https://wa.me/25377141498" className="flex items-center hover:text-violet-400 text-base md:text-lg group">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-500/30 transition-colors">
                        <MessageCircle className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-theme">{t.contact.contactInfo.whatsapp}</div>
                        <div>{t.contact.contactInfo.whatsappDesc}</div>
                      </div>
                    </a>
                    
                    <div className="flex items-center text-base md:text-lg group">
                      <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mr-4">
                        <Map className="w-6 h-6 text-violet-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-theme">{t.contact.contactInfo.address}</div>
                        <div>{t.contact.contactInfo.addressValue}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 glass-effect rounded-xl">
                    <h4 className="text-lg font-bold text-theme mb-4">{t.contact.specialOffer.title}</h4>
                    <p className="text-theme-secondary mb-4">
                      <strong>{t.contact.specialOffer.description}</strong>
                    </p>
                    <a 
                      href="https://wa.me/25377141498?text=Bonjour, je suis intéressé par votre offre de 2 semaines gratuites !"
                      className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-all transform hover:-translate-y-1"
                    >
                      <MessageCircle className="mr-2" size={20} />
                      {t.contact.specialOffer.button}
                    </a>
                  </div>
                </div>

                {/* Formulaire de contact */}
                <div className="fade-up">
                  <div className="glass-effect rounded-xl p-8">
                    <h3 className="text-xl font-bold text-theme mb-6">{t.contact.formTitle}</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-theme font-semibold mb-2">{t.contact.name}</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-theme/10 border border-theme/20 rounded-lg text-theme placeholder-theme-secondary focus:border-violet-500 focus:outline-none transition-colors"
                          placeholder={t.contact.namePlaceholder}
                        />
                  </div>
                      
                      <div>
                        <label className="block text-theme font-semibold mb-2">{t.contact.email}</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-theme/10 border border-theme/20 rounded-lg text-theme placeholder-theme-secondary focus:border-violet-500 focus:outline-none transition-colors"
                          placeholder={t.contact.emailPlaceholder}
                        />
                </div>

                      <div>
                        <label className="block text-theme font-semibold mb-2">{t.contact.phone}</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-theme/10 border border-theme/20 rounded-lg text-theme placeholder-theme-secondary focus:border-violet-500 focus:outline-none transition-colors"
                          placeholder={t.contact.phonePlaceholder}
                        />
              </div>
                      
                      <div>
                        <label className="block text-theme font-semibold mb-2">{t.contact.service}</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-theme/10 border border-theme/20 rounded-lg text-theme focus:border-violet-500 focus:outline-none transition-colors"
                        >
                          <option value="">{t.contact.selectService}</option>
                          <option value={t.services.web.title}>{t.services.web.title}</option>
                          <option value={t.services.marketing.title}>{t.services.marketing.title}</option>
                          <option value={t.services.social.title}>{t.services.social.title}</option>
                          <option value={t.services.support.title}>{t.services.support.title}</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-theme font-semibold mb-2">{t.contact.message}</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 bg-theme/10 border border-theme/20 rounded-lg text-theme placeholder-theme-secondary focus:border-violet-500 focus:outline-none transition-colors resize-none"
                          placeholder={t.contact.messagePlaceholder}
                        ></textarea>
                      </div>
                      
                      {submitStatus === 'success' && (
                        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center">
                          <div className="mb-2">✅ {t.contact.success}</div>
                          <div className="text-sm text-green-300">
                            {t.contact.successDesc}
                          </div>
                        </div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center">
                          ❌ {t.contact.error}
                        </div>
                      )}
                      
                      <div className="space-y-3">
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg text-white font-semibold transition-all transform hover:-translate-y-1 flex items-center justify-center btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Mail className="mr-2" size={20} />
                          {isSubmitting ? t.contact.sending : t.contact.send}
                        </button>
                        
                        <a 
                          href={`https://wa.me/25377141498?text=Bonjour KLIK ! Je suis ${formData.name || '[Votre nom]'}, je suis intéressé par ${formData.service || '[Service]'}. ${formData.message || '[Votre message]'}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-all transform hover:-translate-y-1 flex items-center justify-center"
                        >
                          <MessageCircle className="mr-2" size={20} />
                          {t.contact.whatsapp}
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative mt-auto">
        {/* Section avec vagues et fond violet arrondi */}
        <div className="relative">
          {/* Fond violet avec coins arrondis en haut */}
          <div className="bg-purple-600 rounded-t-[1.5rem] relative overflow-hidden min-h-[80px]">
            {/* Vagues animées par-dessus le fond violet */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Vague 1 - Violet clair */}
              <svg
                className="absolute top-0 h-full animate-wave-slow opacity-60"
                style={{ width: '200%', left: '-50%' }}
                viewBox="0 0 2400 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,60 C300,20 600,100 900,40 C1200,10 1500,70 1800,30 C2100,60 2400,40 2400,60 L2400,120 L0,120 Z"
                  fill="rgba(147, 51, 234, 0.4)"
                />
              </svg>

              {/* Vague 2 - Blanc translucide */}
              <svg
                className="absolute top-0 h-full animate-wave-medium opacity-40"
                style={{ width: '200%', left: '-50%' }}
                viewBox="0 0 2400 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,80 C400,40 800,80 1200,20 C1600,60 2000,20 2400,60 L2400,120 L0,120 Z"
                  fill="rgba(255, 255, 255, 0.3)"
                />
              </svg>

              {/* Vague 3 - Violet moyen */}
              <svg
                className="absolute top-0 h-full animate-wave-fast opacity-50"
                style={{ width: '200%', left: '-50%' }}
                viewBox="0 0 2400 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,40 C600,80 1200,0 1800,40 C2100,80 2400,20 2400,40 L2400,120 L0,120 Z"
                  fill="rgba(124, 58, 237, 0.6)"
                />
              </svg>
            </div>

            {/* Contenu du footer */}
            <div className="relative z-10 py-4 px-6">
              <div className="max-w-6xl mx-auto">
                {/* Contenu principal */}
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-1.5 border border-white/20">
                    <img 
                      src="logo.png" 
                      alt="KLIK Logo" 
                      className="h-6 w-auto filter brightness-0 invert"
                    />
                  </div>
                  <div className="text-white text-center">
                    <p className="text-sm font-semibold mb-0.5">
                      {t.footer.madeBy} <span className="font-bold text-white/90">KLIK</span>
                    </p>
                    <p className="text-xs opacity-70">
                      © {new Date().getFullYear()} KLIK. {t.footer.rights}
                    </p>
                  </div>
                </div>

                {/* Ligne décorative */}
                <div className="flex items-center justify-center space-x-3 opacity-50">
                  <div className="h-px bg-white/30 flex-1 max-w-16"></div>
                  <div className="w-1 h-1 bg-white/50 rounded-full animate-pulse"></div>
                  <div className="h-px bg-white/30 flex-1 max-w-16"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <div className="relative group">
          <button 
            className={`p-3 rounded-full text-white shadow-lg transition-all hover:scale-110 flex items-center gap-2 ${
              language === 'fr' ? 'bg-blue-600 hover:bg-blue-700' :
              language === 'en' ? 'bg-green-600 hover:bg-green-700' :
              'bg-orange-600 hover:bg-orange-700'
            }`}
            title="Choisir la langue"
          >
            {language === 'fr' ? (
              <>
                <span className="text-lg">🇫🇷</span>
                <span className="text-sm font-medium">FR</span>
              </>
            ) : language === 'en' ? (
              <>
                <span className="text-lg">🇬🇧</span>
                <span className="text-sm font-medium">EN</span>
              </>
            ) : (
              <>
                <span className="text-lg">🇸🇦</span>
                <span className="text-sm font-medium">AR</span>
              </>
            )}
          </button>
          
          <div className="absolute bottom-full right-0 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 min-w-[120px]">
            <div className="py-2">
              <button
                onClick={() => setLanguage('fr')}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 ${
                  language === 'fr' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-lg">🇫🇷</span>
                <span className="text-sm font-medium">Français</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 ${
                  language === 'en' ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-lg">🇬🇧</span>
                <span className="text-sm font-medium">English</span>
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 ${
                  language === 'ar' ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-lg">🇸🇦</span>
                <span className="text-sm font-medium">العربية</span>
              </button>
            </div>
          </div>
        </div>
        
        <button 
          onClick={toggleTheme}
          className={`p-3 rounded-full text-white shadow-lg transition-all hover:scale-110 ${
            theme === 'dark' ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-gray-600 hover:bg-gray-700'
          }`}
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
