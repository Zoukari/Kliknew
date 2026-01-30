import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe,
  Mail,
  MessageCircle,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
} from 'lucide-react';
import type { Language } from '../types/klik';

type OutletCtx = { language: Language };

type ModalState =
  | { type: 'none' }
  | {
      type: 'pillar';
      title: string;
      blocks: { title: string; text: string }[];
    }
  | {
      type: 'lightbox';
      imageUrl: string;
      alt: string;
    }
  | {
      type: 'impression';
      itemName: string;
      images: string[];
      index: number;
    };

const texts = {
  fr: {
    ourExpertise: 'Notre Expertise',
    services: 'Services',
    heroDesc: 'Web, apps, marketing, automatisation — on construit ce qui scale et convertit.',
    fourPillars: '4 piliers',
    fourPillarsDesc: 'Explorez nos offres — chaque pilier révèle plus de détails.',
    details: 'Détails',
    web: 'Web',
    webDesc: 'Sites web modernes & responsives',
    webPoints: ['Performance, UX, SEO et sécurité intégrés', 'Applications web sur-mesure', 'Un site qui rassure. Un site qui convertit.'],
    whatYouGet: 'Ce que vous obtenez',
    webText: 'Nous concevons des sites web premium, rapides et responsives, pensés pour renforcer votre crédibilité et générer des demandes. Performance, UX, SEO et sécurité sont intégrés dès le départ.',
    deliverables: 'Livrables',
    webDeliverables: 'Site web premium, applications web sur-mesure, systèmes de réservation, portails clients, dashboards et solutions d\'automatisation.',
    marketing: 'Marketing',
    marketingDesc: 'Stratégie marketing · Publicités ciblées · Reporting',
    marketingPoints: ['Stratégie personnalisée', 'Campagnes pilotées par la donnée', 'Plus de résultats mesurables.'],
    marketingText: 'Nous construisons une stratégie marketing personnalisée basée sur vos objectifs, puis nous déployons des campagnes publicitaires ciblées.',
    useCases: "Cas d'usage",
    marketingUseCases: 'Publicités réseaux sociaux, Google Ads, marketing de contenu, campagnes email.',
    socialMedia: 'Réseaux Sociaux',
    socialMediaDesc: 'Gestion des réseaux sociaux · Contenu visuel · Croissance',
    socialMediaPoints: ['Planification, création, publication', 'Contenu visuel aligné', 'Une communauté active.'],
    socialMediaText: 'Nous assurons la gestion complète de vos réseaux sociaux : planification, création, publication et animation.',
    process: 'Process',
    socialMediaProcess: 'Calendrier éditorial, création visuelle, community management, analyse de performance.',
    reputation: 'Réputation',
    reputationDesc: 'Avis · Service client · Veille & gestion de crise',
    reputationPoints: ['Gestion proactive des avis', 'Service client dédié', 'Marque protégée.'],
    reputationText: 'Nous protégeons votre réputation avec une approche structurée : gestion proactive des avis, service client dédié.',
    benefits: 'Bénéfices',
    reputationBenefits: 'Réputation en ligne améliorée, confiance client renforcée, image de marque protégée.',
    saasDesc: 'Un système complet pour gérer, vendre et propulser votre business.',
    features: 'Fonctions',
    saasTargets: ['Restaurateurs', 'Commerçants', 'Prêt-à-porter', 'Salons de beauté', 'Cliniques/cabinets', 'Dark kitchens'],
    saasFeatures: ['Commandes & produits', 'Caisse / POS', 'Ventes & stats', 'Gestion équipe', 'Site client inclus'],
    saasBenefits: ['Gain de temps', 'Organisation', 'Plus de ventes', 'Vision claire', 'Clé en main'],
    bulkDesc: 'Atteignez des milliers de clients instantanément. Disponible pour les clients de plus de 1 an.',
    yearPartnership: 'Clients de plus de 1 an',
    deliveryRate: 'Taux de livraison',
    responseTime: 'Temps de réponse',
    availability: 'Disponibilité',
    article: 'Article',
    printDesc: 'Impression premium — demandez un devis.',
    chooseArticle: 'Choisissez un article. Demandez le prix. WhatsApp.',
    printItemsDesc: 'Des articles d'impression premium, réponse rapide.',
    quickView: 'Aperçu',
    quote: 'Devis',
    askPriceWhatsApp: 'Demandez le tarif premium via WhatsApp.',
  },
  en: {
    ourExpertise: 'Our Expertise',
    services: 'Services',
    heroDesc: 'Web, apps, marketing, automation — we build what scales and converts.',
    fourPillars: '4 pillars',
    fourPillarsDesc: 'Explore our offerings — each pillar unlocks deeper insights.',
    details: 'Details',
    web: 'Web',
    webDesc: 'Modern & responsive websites',
    webPoints: ['Performance, UX, SEO & security built-in', 'Custom web applications', 'A site that reassures and converts'],
    whatYouGet: 'What you get',
    webText: 'We design premium, fast and responsive websites, designed to strengthen your credibility and generate leads.',
    deliverables: 'Deliverables',
    webDeliverables: 'Premium website, custom web applications, booking systems, customer portals, dashboards.',
    marketing: 'Marketing',
    marketingDesc: 'Marketing strategy · Targeted ads · Reporting',
    marketingPoints: ['Strategy tailored to your goals', 'Data-driven campaigns', 'More measurable results.'],
    marketingText: 'We build a personalized marketing strategy based on your goals, then we deploy targeted advertising campaigns.',
    useCases: 'Use cases',
    marketingUseCases: 'Social media advertising, Google Ads, content marketing, email campaigns.',
    socialMedia: 'Social Media',
    socialMediaDesc: 'Social media management · Visual content · Growth',
    socialMediaPoints: ['Planning, creation, publication', 'Visual content aligned', 'Active community.'],
    socialMediaText: 'We ensure complete management of your social networks: planning, creation, publication and animation.',
    process: 'Process',
    socialMediaProcess: 'Content calendar, visual creation, community management, performance analysis.',
    reputation: 'Reputation',
    reputationDesc: 'Reviews · Customer service · Crisis management',
    reputationPoints: ['Proactive review management', 'Dedicated customer service', 'Protected brand.'],
    reputationText: 'We protect your reputation with a structured approach: proactive review management, dedicated customer service.',
    benefits: 'Benefits',
    reputationBenefits: 'Improved online reputation, increased customer trust, protected brand image.',
    saasDesc: 'A complete system to manage, sell and grow your business.',
    features: 'Features',
    saasTargets: ['Restaurants', 'Retail', 'Fashion', 'Beauty salons', 'Clinics', 'Dark kitchens'],
    saasFeatures: ['Orders & products', 'POS / cashier', 'Sales & stats', 'Team management', 'Customer site included'],
    saasBenefits: ['Save time', 'Better organization', 'More sales', 'Clear visibility', 'Turnkey'],
    bulkDesc: 'Reach thousands of customers instantly. Available for clients with more than 1 year of partnership.',
    yearPartnership: 'Year Partnership',
    deliveryRate: 'Delivery Rate',
    responseTime: 'Response Time',
    availability: 'Availability',
    article: 'Article',
    printDesc: 'Premium print — request a quote.',
    chooseArticle: 'Choose an article. Ask for the price. WhatsApp.',
    printItemsDesc: 'Premium print items, fast reply.',
    quickView: 'Quick View',
    quote: 'Quote',
    askPriceWhatsApp: 'Ask for premium pricing on WhatsApp.',
  },
  ar: {
    ourExpertise: 'خبرتنا',
    services: 'الخدمات',
    heroDesc: 'الويب، التطبيقات، التسويق، الأتمتة — نبني ما ينمو ويحقق النتائج.',
    fourPillars: '4 ركائز',
    fourPillarsDesc: 'اكتشف عروضنا — كل ركيزة تكشف المزيد من التفاصيل.',
    details: 'التفاصيل',
    web: 'الويب',
    webDesc: 'مواقع حديثة ومتجاوبة',
    webPoints: ['الأداء، تجربة المستخدم، SEO والأمان مدمجة', 'تطبيقات ويب مخصصة', 'موقع يطمئن ويحول'],
    whatYouGet: 'ما تحصل عليه',
    webText: 'نصمم مواقع ويب متميزة وسريعة ومتجاوبة لتعزيز مصداقيتك وتوليد الطلبات.',
    deliverables: 'المخرجات',
    webDeliverables: 'موقع ويب متميز، تطبيقات ويب مخصصة، أنظمة حجز، بوابات عملاء.',
    marketing: 'التسويق',
    marketingDesc: 'استراتيجية تسويق · إعلانات مستهدفة · تقارير',
    marketingPoints: ['استراتيجية مخصصة', 'حملات مدعومة بالبيانات', 'نتائج قابلة للقياس.'],
    marketingText: 'نبني استراتيجية تسويق مخصصة بناءً على أهدافك، ثم ننشر حملات إعلانية مستهدفة.',
    useCases: 'حالات الاستخدام',
    marketingUseCases: 'إعلانات وسائل التواصل، Google Ads، تسويق المحتوى، حملات البريد.',
    socialMedia: 'وسائل التواصل',
    socialMediaDesc: 'إدارة وسائل التواصل · محتوى بصري · نمو',
    socialMediaPoints: ['التخطيط والإنشاء والنشر', 'محتوى بصري متوافق', 'مجتمع نشط.'],
    socialMediaText: 'نضمن الإدارة الكاملة لوسائل التواصل الاجتماعي: التخطيط والإنشاء والنشر.',
    process: 'العملية',
    socialMediaProcess: 'تقويم المحتوى، الإنشاء البصري، إدارة المجتمع، تحليل الأداء.',
    reputation: 'السمعة',
    reputationDesc: 'المراجعات · خدمة العملاء · إدارة الأزمات',
    reputationPoints: ['إدارة استباقية للمراجعات', 'خدمة عملاء مخصصة', 'علامة تجارية محمية.'],
    reputationText: 'نحمي سمعتك بنهج منظم: إدارة استباقية للمراجعات، خدمة عملاء مخصصة.',
    benefits: 'الفوائد',
    reputationBenefits: 'سمعة محسنة، ثقة عملاء معززة، صورة علامة تجارية محمية.',
    saasDesc: 'نظام كامل لإدارة وبيع وتنمية عملك.',
    features: 'الميزات',
    saasTargets: ['المطاعم', 'التجزئة', 'الأزياء', 'صالونات التجميل', 'العيادات', 'المطابخ السحابية'],
    saasFeatures: ['الطلبات والمنتجات', 'نقاط البيع', 'المبيعات والإحصاءات', 'إدارة الفريق', 'موقع العميل مشمول'],
    saasBenefits: ['توفير الوقت', 'تنظيم أفضل', 'مزيد من المبيعات', 'رؤية واضحة', 'جاهز للاستخدام'],
    bulkDesc: 'الوصول لآلاف العملاء فوراً. متاح للعملاء لأكثر من سنة.',
    yearPartnership: 'شراكة سنة+',
    deliveryRate: 'معدل التوصيل',
    responseTime: 'وقت الاستجابة',
    availability: 'التوفر',
    article: 'منتج',
    printDesc: 'طباعة متميزة — اطلب عرض سعر.',
    chooseArticle: 'اختر منتجاً. اسأل عن السعر. واتساب.',
    printItemsDesc: 'منتجات طباعة متميزة، رد سريع.',
    quickView: 'معاينة',
    quote: 'عرض سعر',
    askPriceWhatsApp: 'اطلب السعر المتميز عبر واتساب.',
  },
};

export default function Services() {
  const { language } = useOutletContext<OutletCtx>();
  const t = texts[language];
  const [modal, setModal] = useState<ModalState>({ type: 'none' });
  const modalRef = useRef<HTMLDivElement>(null);

  // Scroll to modal when it opens and manage body scroll
  useEffect(() => {
    if (modal.type !== 'none') {
      // Prevent body scroll when modal is open
      document.body.classList.add('no-scroll');
      if (modalRef.current) {
        setTimeout(() => {
          modalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } else {
      // Re-enable body scroll when modal is closed
      document.body.classList.remove('no-scroll');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [modal.type]);

  const pillars = useMemo(
    () => [
      {
        title: t.web,
        icon: Globe,
        description: t.webDesc,
        keyPoints: t.webPoints,
        blocks: [
          { title: t.whatYouGet, text: t.webText },
          { title: t.deliverables, text: t.webDeliverables },
        ],
      },
      {
        title: t.marketing,
        icon: Sparkles,
        description: t.marketingDesc,
        keyPoints: t.marketingPoints,
        blocks: [
          { title: t.whatYouGet, text: t.marketingText },
          { title: t.useCases, text: t.marketingUseCases },
        ],
      },
      {
        title: t.socialMedia,
        icon: Users,
        description: t.socialMediaDesc,
        keyPoints: t.socialMediaPoints,
        blocks: [
          { title: t.whatYouGet, text: t.socialMediaText },
          { title: t.process, text: t.socialMediaProcess },
        ],
      },
      {
        title: t.reputation,
        icon: Shield,
        description: t.reputationDesc,
        keyPoints: t.reputationPoints,
        blocks: [
          { title: t.whatYouGet, text: t.reputationText },
          { title: t.benefits, text: t.reputationBenefits },
        ],
      },
    ],
    [t]
  );

  const saasTargets = t.saasTargets;
  const saasFeatures = t.saasFeatures;
  const saasBenefits = t.saasBenefits;

  const saasImages = useMemo(() => ['shakpotapp2.png', 'shakpotapp3.png', 'shakpotapp5.png'], []);
  const [saasIndex, setSaasIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSaasIndex((i) => (i + 1) % saasImages.length), 4500);
    return () => clearInterval(t);
  }, [saasImages.length]);

  const impressions = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        name: `${t.article} ${i + 1}`,
        description: t.printDesc,
        images: ['1.png', '2.png', '4.png'],
      })),
    [t]
  );

  const openWhatsAppPrice = (itemName: string) => {
    const message = `J’aimerais connaître le prix de : ${itemName}`;
    const url = `https://wa.me/25377141498?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center relative z-10 overflow-hidden py-16 md:py-24 px-4 md:px-6 lg:px-10 lamp-section">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full" />
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-10 relative max-w-6xl">
          <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/[0.11] p-8 md:p-12 text-center fade-in-up stagger-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-bold mb-6 mx-auto">
              <Globe size={16} />
              <span>{t.ourExpertise}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6">
              {t.services} <br />
              <span className="text-gradient-anim">Premium</span>
            </h1>
            <p className="text-lg md:text-2xl text-theme-secondary mt-4 max-w-xl leading-relaxed mx-auto">
              {t.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* 4 pillars */}
      <section className="py-16 md:py-20 relative z-10 text-theme lamp-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-theme mb-3 pb-4 border-b-2 border-violet-500/30 inline-block">
              {t.fourPillars}
            </h2>
            <p className="text-theme-secondary mt-4 max-w-2xl mx-auto text-lg">
              {t.fourPillarsDesc}
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p, idx) => (
              <button
                key={p.title}
                type="button"
                onClick={() => setModal({ type: 'pillar', title: p.title, blocks: p.blocks })}
                className={`text-left klik-card p-8 magnetic-hover shimmer rounded-[32px] focus:outline-none focus:ring-2 focus:ring-violet-500/30 fade-in-up stagger-${idx + 1}`}
              >
                <div className="w-14 h-14 bg-violet-500/10 border border-violet-500/20 rounded-2xl flex items-center justify-center mb-8">
                  <p.icon className="w-8 h-8 text-violet-400" />
                </div>
                <div className="text-2xl font-black text-theme mb-3 uppercase tracking-tight">{p.title}</div>
                <div className="text-violet-400/80 text-sm font-semibold mb-4">
                  {p.description}
                </div>
                {/* Points clés */}
                {p.keyPoints && p.keyPoints.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {p.keyPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-theme-secondary">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="inline-flex items-center gap-2 text-violet-400 font-bold uppercase text-sm tracking-widest">
                  <span>{t.details}</span>
                  <ArrowRight size={16} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS (Modernisée) */}
      <section className="py-24 md:py-32 relative z-10 text-theme lamp-section">
        <div className="container mx-auto px-4">
          <div className="rounded-[48px] klik-card p-8 md:p-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-violet-600/10" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 uppercase tracking-widest">
                  Software As A Service
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 pb-4 border-b-2 border-violet-500/30 inline-block tracking-tighter">SaaS <span className="text-gradient-anim">Custom</span></h2>
                <p className="text-xl text-theme-secondary mb-10 leading-relaxed font-medium">
                  {t.saasDesc}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {saasTargets.map((x) => (
                    <span
                      key={x}
                      className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-violet-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                    >
                      {x}
                    </span>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-10">
                  <div>
                    <div className="text-theme font-black uppercase text-sm tracking-[0.2em] mb-6 flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      {t.features}
                    </div>
                    <ul className="space-y-4">
                      {saasFeatures && saasFeatures.map((x) => (
                        <li key={x} className="flex items-center gap-3 text-theme-secondary font-medium">
                          <Sparkles className="w-4 h-4 text-blue-400" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-theme font-black uppercase text-sm tracking-[0.2em] mb-6 flex items-center gap-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full" />
                      {t.benefits}
                    </div>
                    <ul className="space-y-4">
                      {saasBenefits && saasBenefits.map((x) => (
                        <li key={x} className="flex items-center gap-3 text-theme-secondary font-medium">
                          <Shield className="w-4 h-4 text-violet-400" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[32px] klik-card overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.2)] magnetic-hover">
                  <div className="relative aspect-[16/10]">
                    {saasImages.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() =>
                          setModal({
                            type: 'lightbox',
                            imageUrl: src,
                            alt: 'SaaS screenshot',
                          })
                        }
                        className="absolute inset-0 w-full h-full focus:outline-none"
                        style={{
                          opacity: i === saasIndex ? 1 : 0,
                          transition: 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)',
                          pointerEvents: i === saasIndex ? 'auto' : 'none',
                          transform: i === saasIndex ? 'scale(1)' : 'scale(1.05)',
                        }}
                      >
                        <img src={src} alt="SaaS" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-md border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setSaasIndex((i) => (i - 1 + saasImages.length) % saasImages.length)}
                      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm tracking-widest">
                      {saasIndex + 1} / {saasImages.length}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSaasIndex((i) => (i + 1) % saasImages.length)}
                      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white"
                      aria-label="Next"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                
                {/* Visual peps */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/30 blur-3xl rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-violet-500/30 blur-3xl rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Messages (Modernisée) */}
      <section className="py-24 md:py-32 relative z-10 text-theme lamp-section">
        <div className="container mx-auto px-4">
          <div className="rounded-[48px] klik-card p-8 md:p-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-violet-600/10" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="order-2 lg:order-1 relative">
                <div className="rounded-[32px] klik-card p-8 bg-black/40 shadow-[0_0_80px_rgba(147,51,234,0.2)] magnetic-hover relative overflow-hidden">
                  <div className="absolute inset-0 shimmer opacity-10" />
                  <div className="text-theme font-black uppercase text-xs tracking-[0.3em] mb-8 opacity-60">
                    Infrastructure Preview
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'WhatsApp', icon: MessageCircle, color: 'from-green-500/20 to-green-600/10' },
                      { name: 'Email', icon: Mail, color: 'from-blue-500/20 to-blue-600/10' },
                      { name: 'Instagram', icon: MessageCircle, color: 'from-pink-500/20 to-purple-600/10' },
                      { name: 'Messenger', icon: MessageCircle, color: 'from-blue-400/20 to-blue-500/10' },
                    ].map((platform) => (
                      <div key={platform.name} className={`rounded-2xl bg-gradient-to-br ${platform.color} border border-white/10 p-6 flex flex-col items-center justify-center gap-3`}>
                        <div className="p-3 bg-white/5 rounded-xl">
                          <platform.icon className="w-8 h-8 text-white/80" />
                        </div>
                        <div className="text-xs font-bold text-white/70 uppercase tracking-wider">{platform.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold mb-8 uppercase tracking-widest">
                  Communication Scalable
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 pb-4 border-b-2 border-violet-500/30 inline-block tracking-tighter">Bulk <span className="text-gradient-anim">Messages</span></h2>
                <p className="text-xl text-theme-secondary mb-6 leading-relaxed font-medium">
                  {t.bulkDesc}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  {[
                    { number: '1+', label: t.yearPartnership },
                    { number: '99.9%', label: t.deliveryRate },
                    { number: '<1s', label: t.responseTime },
                    { number: '24/7', label: t.availability },
                  ].map((stat) => (
                    <div key={stat.label} className="klik-card p-6 rounded-2xl group hover:border-violet-500/40 transition-colors text-center">
                      <div className="text-4xl md:text-5xl font-black text-violet-400 mb-2">{stat.number}</div>
                      <div className="text-theme-secondary text-sm font-medium leading-relaxed">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impressions — commenté */}
      {false && (
      <section className="py-16 md:py-20 relative z-10 text-theme lamp-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-6xl rounded-3xl overflow-hidden border border-emerald-500/20 bg-gradient-to-br from-emerald-950/40 via-emerald-900/20 to-transparent p-8 md:p-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-emerald-300 mb-3 pb-4 border-b-2 border-emerald-500/30 inline-block">
              {language === 'en' ? 'Impressions' : 'Impressions'}
            </h2>
            <p className="text-xl md:text-2xl font-bold text-theme mt-4 mb-2">
            {language === 'en'
              ? 'Choose an article. Ask for the price. WhatsApp.'
              : 'Choisissez un article. Demandez le prix. WhatsApp.'}
          </p>
          <p className="text-theme-secondary mt-2 max-w-2xl mx-auto text-center">
            {language === 'en'
              ? 'Premium print items, fast reply. Simple: choose, write to us, we answer.'
              : 'Des articles d’impression premium, réponse rapide. Simple : choisissez, écrivez-nous, on vous répond.'}
          </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impressions.map((it, idx) => (
              <button
                key={it.name}
                type="button"
                onClick={() =>
                  setModal({ type: 'impression', itemName: it.name, images: it.images, index: 0 })
                }
                className="text-left klik-card group p-0 magnetic-hover rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-500/40 border border-white/10"
              >
                <div className="aspect-square relative overflow-hidden bg-black/20">
                  <img src={it.images[0]} alt={it.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="klik-btn klik-btn-primary w-full py-3 text-sm flex items-center justify-center gap-2">
                      <Sparkles size={16} />
                      {language === 'en' ? 'Quick View' : 'Aperçu'}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xl font-black text-theme uppercase tracking-tight mb-2">{it.name}</div>
                  <div className="text-theme-secondary text-sm line-clamp-2 leading-relaxed">{it.description}</div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-emerald-400 font-bold text-sm tracking-widest uppercase">
                      {language === 'en' ? 'Quote' : 'Devis'}
                    </div>
                    <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Modal overlay */}
      {modal.type !== 'none' && (
        <div ref={modalRef} className="fixed inset-0 z-40 flex items-center justify-center pt-[70px] pb-8">
          <button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setModal({ type: 'none' })}
            aria-label="Close overlay"
          />

          <div className="relative w-[min(700px,90vw)] h-[70vh] flex flex-col rounded-[32px] klik-card bg-black/95 backdrop-blur-xl text-white shadow-2xl border border-white/10 overflow-hidden">
            {/* Header avec bouton close sticky */}
            <div className="flex-shrink-0 p-6 pb-4 flex items-start justify-between border-b border-white/10">
              <div className="flex-1" />
              <button
                type="button"
                onClick={() => setModal({ type: 'none' })}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Contenu scrollable */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden px-6 pb-6">

              {modal.type === 'pillar' && (
                <div className="pt-4">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                    {modal.title}
                  </h3>
                  <div className="space-y-6">
                    {modal.blocks.map((b, blockIdx) => {
                      // Extract key points from text - split by sentences and take meaningful ones
                      const sentences = b.text.split(/[.!?]\s+/).filter(s => s.trim().length > 20);
                      const keyPoints = sentences.slice(0, 5);
                      
                      const colors = [
                        { bg: 'from-violet-500/20 to-violet-600/20', border: 'border-violet-500/40', icon: 'text-violet-400', glow: 'shadow-[0_0_20px_rgba(124,58,237,0.3)]' },
                        { bg: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-500/40', icon: 'text-blue-400', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]' },
                        { bg: 'from-purple-500/20 to-purple-600/20', border: 'border-purple-500/40', icon: 'text-purple-400', glow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)]' },
                        { bg: 'from-pink-500/20 to-pink-600/20', border: 'border-pink-500/40', icon: 'text-pink-400', glow: 'shadow-[0_0_20px_rgba(236,72,153,0.3)]' },
                        { bg: 'from-cyan-500/20 to-cyan-600/20', border: 'border-cyan-500/40', icon: 'text-cyan-400', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.3)]' },
                      ];
                      const icons = [Sparkles, Target, Rocket, CheckCircle2, Zap];
                      
                      return (
                        <div key={b.title} className="space-y-3">
                          <div className="font-black uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 animate-pulse" />
                            <span className="text-violet-400">{b.title}</span>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {keyPoints.map((point, pointIdx) => {
                              const colorScheme = colors[pointIdx % colors.length];
                              const Icon = icons[pointIdx % icons.length];
                              return (
                                <div
                                  key={pointIdx}
                                  className={`group relative p-4 rounded-xl bg-gradient-to-br ${colorScheme.bg} border ${colorScheme.border} ${colorScheme.glow} hover:scale-[1.02] transition-all duration-300 fade-in-up`}
                                  style={{ animationDelay: `${pointIdx * 100}ms` }}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${colorScheme.bg} border ${colorScheme.border} flex items-center justify-center ${colorScheme.icon} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                      <Icon className="w-5 h-5" />
                                    </div>
                                    <p className="text-white/90 text-sm leading-relaxed flex-1">{point.trim()}</p>
                                  </div>
                                  {/* Hover glow effect */}
                                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colorScheme.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10`} />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {modal.type === 'lightbox' && (
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img src="logo.png" alt="KLIK" className="w-24 md:w-32 opacity-90" />
                  </div>
                  <img src={modal.imageUrl} alt={modal.alt} className="w-full h-auto object-contain" />
                </div>
              )}

              {modal.type === 'impression' && (
                <div className="pt-4">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
                  <div>
                    <div className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">{modal.itemName}</div>
                    <div className="text-white/60 text-lg">
                      {t.askPriceWhatsApp}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openWhatsAppPrice(modal.itemName)}
                    className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-black uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                  >
                    <MessageCircle className="w-6 h-6" />
                    WhatsApp
                  </button>
                </div>

                <div className="rounded-[32px] klik-card overflow-hidden bg-black/40">
                  <div className="relative aspect-[16/10]">
                    {modal.images.map((src, i) => (
                      <div
                        key={`${modal.itemName}-${src}`}
                        className="absolute inset-0"
                        style={{
                          opacity: i === modal.index ? 1 : 0,
                          transition: 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        <img src={src} alt={modal.itemName} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <button
                      type="button"
                      onClick={() =>
                        setModal((s) =>
                          s.type === 'impression'
                            ? {
                                ...s,
                                index: (s.index - 1 + s.images.length) % s.images.length,
                              }
                            : s
                        )
                      }
                      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-widest">
                      {modal.index + 1} / {modal.images.length}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setModal((s) =>
                          s.type === 'impression'
                            ? { ...s, index: (s.index + 1) % s.images.length }
                            : s
                        )
                      }
                      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white"
                      aria-label="Next"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

