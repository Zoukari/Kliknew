import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';

type OutletCtx = {
  language: 'fr' | 'en' | 'ar' | 'is';
};

const SUBJECTS = [
  { value: 'devis', fr: 'Devis / Quote', en: 'Quote' },
  { value: 'projet', fr: 'Projet / Project', en: 'Project' },
  { value: 'partenariat', fr: 'Partenariat', en: 'Partnership' },
  { value: 'autre', fr: 'Autre', en: 'Other' },
];

export default function Contact() {
  const { language } = useOutletContext<OutletCtx>();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const openWhatsApp = (prefill: string) => {
    const url = `https://wa.me/33712345678?text=${encodeURIComponent(prefill)}`;
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
              <Mail size={16} />
              <span>{language === 'en' ? 'Get In Touch' : 'Contactez-nous'}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6">
              {language === 'en' ? 'Start' : 'Démarrer'} <br />
              <span className="text-gradient-anim">un Projet</span>
            </h1>
            <p className="text-lg md:text-2xl text-theme-secondary mt-4 max-w-xl leading-relaxed mx-auto">
              {language === 'en'
                ? 'Let’s discuss your project and build something premium together.'
                : 'Parlez-nous de votre vision — on en fera une réalité digitale premium.'}
            </p>
          </div>
        </div>
      </section>

      {/* Form + Infos */}
      <section className="py-16 md:py-24 relative z-10 text-theme lamp-section">
        <div className="container mx-auto px-4 md:px-6 lg:px-10 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Infos à gauche */}
            <div className="rounded-2xl klik-card p-8 md:p-10 border border-white/10 form-fixed">
              <h2 className="text-2xl md:text-3xl font-bold text-theme mb-4">
                {language === 'en' ? 'Contact' : 'Contact'}
              </h2>
              <p className="text-theme-secondary mb-6 leading-relaxed">
                {language === 'en'
                  ? 'Prefer a quick chat? Reach us directly — we reply fast.'
                  : 'Plutôt discuter ? Joignez-nous directement — on répond vite.'}
              </p>
              <div className="space-y-4">
                <a href="https://wa.me/33712345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-emerald-400">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp +33 7 12 34 56 78</span>
                </a>
                <a href="mailto:contact@klik.dj" className="flex items-center gap-3 text-violet-400">
                  <Mail className="w-5 h-5" />
                  <span>{language === 'en' ? 'Email' : 'Email'}</span>
                </a>
              </div>
            </div>

            {/* Formulaire à droite */}
            <div className="rounded-2xl klik-card p-8 md:p-10 border border-white/10 form-fixed">
            <h2 className="text-2xl md:text-3xl font-bold text-theme mb-2">
              {language === 'en' ? 'Send a message' : 'Envoyer un message'}
            </h2>
            <p className="text-theme-secondary mb-6 text-sm">
              {language === 'en'
                ? 'Fast reply on WhatsApp — we respond quickly.'
                : 'Réponse rapide sur WhatsApp — on vous répond vite.'}
            </p>

            <form
              className="grid grid-cols-1 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const msg =
                  `Bonjour KLIK !\n\n` +
                  `Nom: ${form.name}\n` +
                  `Email: ${form.email}\n` +
                  `Téléphone: ${form.phone}\n` +
                  `Sujet: ${form.subject}\n` +
                  `Message: ${form.message}`;
                openWhatsApp(msg);
              }}
            >
              <div className="space-y-2">
                <label className="block text-theme text-sm font-medium">{language === 'en' ? 'Name' : 'Nom'}</label>
                <input
                  required
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-theme placeholder:text-theme-secondary/50 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-theme text-sm font-medium">Email</label>
                <input
                  required
                  type="email"
                  placeholder="vous@exemple.com"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-theme placeholder:text-theme-secondary/50 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-theme text-sm font-medium">{language === 'en' ? 'Phone' : 'Téléphone'}</label>
                <input
                  required
                  placeholder="+33 ..."
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-theme placeholder:text-theme-secondary/50 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-theme text-sm font-medium">{language === 'en' ? 'Subject' : 'Sujet'}</label>
                <select
                  required
                  value={form.subject}
                  onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-theme focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                >
                  <option value="">{language === 'en' ? 'Choose' : 'Choisir'}</option>
                  {SUBJECTS.map((s) => (
                    <option key={s.value} value={s.value}>{language === 'en' ? s.en : s.fr}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-theme text-sm font-medium">{language === 'en' ? 'Message' : 'Message'}</label>
                <textarea
                  required
                  rows={4}
                  placeholder={language === 'en' ? 'How can we help you?' : 'Comment pouvons-nous vous aider ?'}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-theme placeholder:text-theme-secondary/50 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <button type="submit" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold">
                  <MessageCircle className="w-4 h-4" />
                  {language === 'en' ? 'Send via WhatsApp' : 'Envoyer via WhatsApp'}
                </button>
                <a
                  href={`mailto:contact@klik.dj?subject=${encodeURIComponent(form.subject || 'Contact')}&body=${encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\nTél: ${form.phone}\n\n${form.message}`)}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-theme font-semibold"
                >
                  <Mail className="w-4 h-4" />
                  {language === 'en' ? 'Send via email' : 'Envoyer par email'}
                </a>
              </div>
            </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

