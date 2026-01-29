export type Language = 'fr' | 'en' | 'ar' | 'is';
export type Theme = 'dark' | 'light';

export type ClientTranslation = {
  name: string;
  description: string;
  website: string | null;
  visitSite: string | null;
};

export type KlikTranslations = {
  nav: {
    home: string;
    services: string;
    about: string;
    learn: string;
    entertainment: string;
    blog: string;
    careers: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  contact: {
    specialOffer: {
      title: string;
      description: string;
      button: string;
    };
  };
  clients: {
    title: string;
    shakpot: ClientTranslation;
    vagabox: ClientTranslation;
    deeqsan: ClientTranslation;
    voyageVoyage: ClientTranslation;
    byLouli: ClientTranslation;
    marketStudyCena: ClientTranslation;
  };
  footer: {
    madeBy: string;
    rights: string;
  };
};

