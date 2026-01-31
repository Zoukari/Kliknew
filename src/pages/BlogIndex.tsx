import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar } from 'lucide-react';
import { getPosts, urlFor, type SanityPost } from '../lib/sanity';
import type { Language } from '../types/klik';

type OutletCtx = { language: Language };

export default function BlogIndex() {
  const { language } = useOutletContext<OutletCtx>();
  const [posts, setPosts] = useState<SanityPost[]>([]);
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getPosts()
      .then((data) => {
        if (cancelled) return;
        setPosts(data);
        setStatus('success');
      })
      .catch((e) => {
        if (cancelled) return;
        setStatus('error');
        setError(e instanceof Error ? e.message : String(e));
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const subtitle = useMemo(
    () =>
      language === 'en'
        ? 'Strategy, tech, and growth — sharp reads that move the needle.'
        : 'Stratégie, tech et croissance — des articles qui font avancer.',
    [language]
  );

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
              <span>{language === 'en' ? 'Latest Insights' : 'Dernières Actualités'}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6">
              {language === 'en' ? 'Our' : 'Notre'} <br />
              <span className="text-gradient-anim">Blog</span>
            </h1>
            <p className="text-lg md:text-2xl text-theme-secondary mt-4 max-w-xl leading-relaxed mx-auto">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 glass-effect relative z-10 lamp-section">
        <div className="container mx-auto px-4">
          {status === 'loading' && (
            <div className="text-theme-secondary">{language === 'en' ? 'Loading…' : 'Chargement…'}</div>
          )}

          {status === 'error' && (
            <div className="border border-red-500/30 bg-red-500/10 rounded-xl p-5 text-red-200">
              <div className="font-semibold">
                {language === 'en' ? 'Unable to load posts.' : 'Impossible de charger les articles.'}
              </div>
              {error && <div className="text-sm mt-2 opacity-90">{error}</div>}
              <div className="text-sm mt-3 opacity-80">
                {language === 'en'
                  ? 'Check your Sanity project configuration and make sure you have published posts.'
                  : "Vérifie ta config Sanity et assure-toi d'avoir des articles publiés."}
              </div>
            </div>
          )}

          {status === 'success' && posts.length === 0 && (
            <div className="text-center text-theme-secondary py-12">
              <p className="text-lg">
                {language === 'en' ? 'No posts yet. Create your first post in Sanity Studio!' : 'Aucun article pour le moment. Créez votre premier article dans Sanity Studio!'}
              </p>
            </div>
          )}

          {status === 'success' && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p, idx) => {
                const date = new Date(p.publishedAt);
                const dateLabel = isNaN(date.getTime())
                  ? ''
                  : date.toLocaleDateString(language === 'en' ? 'en-US' : 'fr-FR', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                    });

                const imageUrl = p.mainImage ? urlFor(p.mainImage).width(800).height(500).url() : null;

                return (
                  <NavLink
                    key={p._id}
                    to={`/blog/${p.slug}`}
                    className={`group block klik-card overflow-hidden magnetic-hover shimmer rounded-[40px] fade-in-up stagger-${(idx % 3) + 1}`}
                  >
                    <div className="aspect-[16/10] w-full bg-black/20 overflow-hidden relative">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={p.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-theme-secondary text-sm">
                          {language === 'en' ? 'No image' : 'Sans image'}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      <div className="absolute top-6 left-6">
                        <div className="px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-400 text-xs font-bold backdrop-blur-md uppercase tracking-widest">
                          Article
                        </div>
                      </div>
                    </div>

                    <div className="p-8 md:p-10">
                      <div className="flex items-center gap-3 text-xs font-bold text-violet-400 uppercase tracking-[0.2em] mb-6">
                        <Calendar className="w-4 h-4" />
                        <span>{dateLabel}</span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-black text-theme group-hover:text-violet-400 transition-colors leading-tight uppercase tracking-tighter mb-6">
                        {p.title}
                      </h2>

                      <p className="text-theme-secondary text-lg leading-relaxed line-clamp-3 font-medium mb-10">
                        {p.excerpt || ''}
                      </p>

                      <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                        <span className="text-sm font-black text-theme uppercase tracking-widest group-hover:text-violet-400 transition-colors">
                          {language === 'en' ? 'Read Story' : "Lire l'article"}
                        </span>
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-violet-500 group-hover:border-violet-500 transition-all">
                          <ArrowRight className="w-5 h-5 text-theme group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
