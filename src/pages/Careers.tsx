import React, { useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Mail, MessageCircle, Users } from 'lucide-react';

type OutletCtx = {
  language: 'fr' | 'en' | 'ar' | 'is';
};

type FormState = {
  name: string;
  phone: string;
  sector: string;
  subSector: string;
  otherSector: string;
  city: string;
  experiences: string;
  diplomas: string;
};

export default function Careers() {
  const { language } = useOutletContext<OutletCtx>();
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    sector: '',
    subSector: '',
    city: '',
    experiences: '',
    diplomas: '',
  });

  const sectors = useMemo(
    () => [
      { value: 'Marketing', label: language === 'en' ? 'Marketing' : 'Marketing', subs: ['Social', 'Ads', 'Brand'] },
      { value: 'Design', label: language === 'en' ? 'Design' : 'Design', subs: ['UI/UX', 'Brand', 'Motion'] },
      { value: 'Tech', label: language === 'en' ? 'Engineering' : 'Tech', subs: ['Frontend', 'Backend', 'Mobile'] },
      { value: 'Sales', label: language === 'en' ? 'Sales' : 'Commercial', subs: ['B2B', 'Partnerships'] },
      { value: 'Autre', label: language === 'en' ? 'Other' : 'Autre', subs: [] as string[] },
    ],
    [language]
  );

  const selectedSector = sectors.find((s) => s.value === form.sector);
  const shouldShowSub = !!selectedSector?.subs?.length;
  const isOther = form.sector === 'Autre';

  const submitToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `On recrute. Nos collaborateurs aussi. Rejoignez l’aventure KLIK.\n\n` +
      `Nom: ${form.name}\n` +
      `Téléphone: ${form.phone}\n` +
      `Secteur: ${isOther ? (form.otherSector || 'Autre') : form.sector}\n` +
      (shouldShowSub ? `Sous-secteur: ${form.subSector}\n` : '') +
      `Ville: ${form.city}\n` +
      `Expériences: ${form.experiences}\n` +
      `Diplômes: ${form.diplomas}\n\n` +
      `Merci d’envoyer votre CV et photo via WhatsApp après l’envoi du formulaire.`;

    const url = `https://wa.me/33712345678?text=${encodeURIComponent(msg)}`;
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
              <Users size={16} />
              <span>{language === 'en' ? 'Join Us' : 'Nous Rejoindre'}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6">
              {language === 'en' ? 'Careers' : 'Carrières'} <br />
              <span className="text-gradient-anim">@ KLIK</span>
            </h1>
            <p className="text-lg md:text-2xl text-theme-secondary mt-4 max-w-xl leading-relaxed mx-auto">
              {language === 'en' ? 'Build something that matters. We hire — and our team vets for fit.' : "Construisez quelque chose qui compte. On recrute — et l'équipe veille au fit."}
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 md:py-32 relative z-10 text-theme lamp-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-[48px] klik-card p-10 md:p-20 relative overflow-hidden shadow-[0_0_100px_rgba(124,58,237,0.1)] form-fixed">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-violet-600/5 via-transparent to-purple-600/5" />
            <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold mb-10 uppercase tracking-widest">
              Application Portal
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-theme mb-6 tracking-tighter">
              {language === 'en' ? 'Apply Now' : 'Postuler'}
            </h2>
            <p className="text-xl text-theme-secondary mb-12 font-medium max-w-2xl leading-relaxed">
              {language === 'en'
                ? "Fill the form, then send your CV + photo on WhatsApp — we'll get back to you fast."
                : 'Remplis le formulaire, puis envoie ton CV et ta photo sur WhatsApp — on te recontacte vite.'}
            </p>

            <form onSubmit={submitToWhatsApp} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="block text-theme text-sm font-black uppercase tracking-widest mb-2">
                  {language === 'en' ? 'Full name' : 'Nom complet'}
                </label>
                <input
                  required
                  type="text"
                  placeholder="Jean Dupont"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className="w-full px-5 py-3 klik-input text-base font-medium"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-theme text-sm font-black uppercase tracking-widest mb-2">
                  {language === 'en' ? 'Phone' : 'Téléphone'}
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+33 ..."
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  className="w-full px-5 py-3 klik-input text-base font-medium"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-theme text-sm font-black uppercase tracking-widest mb-2">
                  {language === 'en' ? 'City' : 'Ville'}
                </label>
                <input
                  required
                  type="text"
                  placeholder="Nantes"
                  value={form.city}
                  onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
                  className="w-full px-5 py-3 klik-input text-base font-medium"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-theme text-sm font-black uppercase tracking-widest mb-2">
                  {language === 'en' ? 'Sector' : 'Secteur'}
                </label>
                <select
                  required
                  value={form.sector}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, sector: e.target.value, subSector: '' }))
                  }
                  className="w-full px-5 py-3 rounded-xl bg-gray-900/80 border border-white/20 text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                >
                  <option value="">{language === 'en' ? 'Select Sector' : 'Sélectionner'}</option>
                  {sectors.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              {isOther && (
                <div className="md:col-span-2 space-y-3">
                  <label className="block text-theme text-sm font-black uppercase tracking-widest mb-2">
                    {language === 'en' ? 'Other (specify)' : 'Autre (précisez)'}
                  </label>
                  <input
                    type="text"
                    placeholder={language === 'en' ? 'Your sector...' : 'Votre secteur...'}
                    value={form.otherSector}
                    onChange={(e) => setForm((p) => ({ ...p, otherSector: e.target.value }))}
                    className="w-full px-5 py-3 rounded-xl bg-gray-900/80 border border-white/20 text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                  />
                </div>
              )}

              <div className={`space-y-3 ${shouldShowSub ? '' : 'opacity-30 pointer-events-none'}`}>
                <label className="block text-theme text-sm font-black uppercase tracking-widest mb-2">
                  {language === 'en' ? 'Sub-sector' : 'Sous-secteur'}
                </label>
                <select
                  value={form.subSector}
                  onChange={(e) => setForm((p) => ({ ...p, subSector: e.target.value }))}
                  disabled={!shouldShowSub}
                  className="w-full px-5 py-3 rounded-xl bg-gray-900/80 border border-white/20 text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-violet-500/50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">{language === 'en' ? 'Select Sub-sector' : 'Sélectionner'}</option>
                  {selectedSector?.subs?.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 space-y-3">
                <label className="block text-theme text-sm font-black uppercase tracking-widest mb-2">
                  {language === 'en' ? 'Experiences' : 'Expériences'}
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={language === 'en' ? 'Tell us about your background...' : 'Parlez-nous de votre parcours...'}
                  value={form.experiences}
                  onChange={(e) => setForm((p) => ({ ...p, experiences: e.target.value }))}
                  className="w-full px-5 py-3 klik-input text-base font-medium resize-none"
                />
              </div>

              <div className="md:col-span-2 space-y-3">
                <label className="block text-theme text-sm font-black uppercase tracking-widest mb-2">
                  {language === 'en' ? 'Diplomas' : 'Diplômes'}
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder={language === 'en' ? 'Degrees and certifications...' : 'Diplômes et certifications...'}
                  value={form.diplomas}
                  onChange={(e) => setForm((p) => ({ ...p, diplomas: e.target.value }))}
                  className="w-full px-5 py-3 klik-input text-base font-medium resize-none"
                />
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row gap-6 mt-6">
                <button type="submit" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white text-base font-black uppercase tracking-widest border-0">
                  <MessageCircle className="w-6 h-6" />
                  {language === 'en' ? 'Postuler via WhatsApp' : 'Postuler via WhatsApp'}
                </button>
                <a
                  href="mailto:contact@klik.dj?subject=Postuler%20KLIK"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-theme text-base font-black uppercase tracking-widest"
                >
                  <Mail className="w-6 h-6" />
                  {language === 'en' ? 'Postuler par email' : 'Postuler par email'}
                </a>
                <a
                  href="https://wa.me/33712345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-theme text-base font-black uppercase tracking-widest"
                >
                  {language === 'en' ? 'Questions? WhatsApp or email' : 'Questions ? WhatsApp ou email'}
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

