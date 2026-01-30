import React, { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import type { Language } from '../types/klik';

type OutletCtx = { language: Language };

export default function Learn() {
  const { language } = useOutletContext<OutletCtx>();

  const studies = useMemo(() => [0, 1, 2, 3], []);

  const videos = useMemo(() => Array.from({ length: 4 }).map((_, i) => ({ id: i + 1 })), []);

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
              <BookOpen size={16} />
              <span>{language === 'en' ? 'Knowledge Hub' : 'Centre de Connaissances'}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6">
              {language === 'en' ? 'Learn' : 'Learn'} <br />
              <span className="text-gradient-anim">Expertise</span>
            </h1>
            <p className="text-lg md:text-2xl text-theme-secondary mt-4 max-w-xl leading-relaxed mx-auto">
              {language === 'en'
                ? 'Actionable market insights and premium training — level up your strategy.'
                : 'Études de marché actionnables et formations premium — boostez votre stratégie.'}
            </p>
          </div>
        </div>
      </section>

      {/* Market studies */}
      <section className="py-16 md:py-20 glass-effect relative z-10 text-theme lamp-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-theme mb-3 pb-4 border-b-2 border-violet-500/30 inline-block">
              {language === 'en' ? 'Market studies' : 'Études de marché'}
            </h2>
            <p className="text-theme-secondary mt-4 max-w-2xl mx-auto text-lg">
            {language === 'en'
              ? 'Sector-specific packs you can buy now — clear pricing, immediate value.'
              : 'Packs par secteur à acheter tout de suite — prix clairs, valeur immédiate.'}
          </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studies.map((_, idx) => (
              <div
                key={idx}
                className={`klik-card group overflow-hidden rounded-[32px] magnetic-hover shimmer fade-in-up stagger-${(idx % 4) + 1}`}
              >
                <div className="p-6 flex flex-col">
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/25 flex-1 flex items-center justify-center min-h-[200px] aspect-[9/16]">
                    <span className="text-theme-secondary font-bold uppercase tracking-widest text-sm md:text-base">
                      Coming soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vidéos de formation — commenté */}
      {/* <section className="py-16 md:py-20 glass-effect relative z-10 text-theme lamp-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-theme mb-3 pb-4 border-b-2 border-violet-500/30 inline-block">
              {language === 'en' ? 'Training videos' : 'Vidéos de formation'}
            </h2>
            <p className="text-theme-secondary mt-4 max-w-2xl mx-auto text-lg">
              {language === 'en'
                ? 'Exclusive video masterclasses — dropping soon. Stay tuned.'
                : 'Masterclasses vidéo exclusives — bientôt en ligne. Restez branchés.'}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {videos.map((v) => (
              <div
                key={v.id}
                className="group klik-card overflow-hidden rounded-2xl border border-white/10 relative aspect-video"
              >
                <div className="absolute inset-0 bg-black/60">
                  <img src="2.png" alt="" className="w-full h-full object-cover blur-sm opacity-50 grayscale" loading="lazy" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="p-3 rounded-2xl bg-black/60 border border-white/20 mb-3 shadow-lg">
                    <Lock className="w-8 h-8 text-violet-400" />
                  </div>
                  <span className="text-sm font-bold text-white/90 uppercase tracking-wider text-center">
                    {language === 'en' ? 'Next up' : 'Prochainement'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
