import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-auto">
      {/* Section avec vagues et fond violet arrondi */}
      <div className="relative">
        {/* Fond violet avec coins arrondis en haut */}
        <div className="bg-purple-600 rounded-t-[1.5rem] relative overflow-hidden min-h-[80px]">
          {/* Vagues animées par-dessus le fond violet */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Vague 1 - Violet clair - Couvre toute la hauteur */}
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

            {/* Vague 2 - Blanc translucide - Couvre toute la hauteur */}
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

            {/* Vague 3 - Violet moyen - Couvre toute la hauteur */}
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

            {/* Vague 4 - Blanc plus opaque - Couvre toute la hauteur */}
            <svg
              className="absolute top-0 h-full animate-wave-reverse opacity-30"
              style={{ width: '200%', left: '-50%' }}
              viewBox="0 0 2400 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,20 C600,60 1200,20 1800,40 C2100,50 2300,30 2400,35 L2400,120 L0,120 Z"
                fill="rgba(255, 255, 255, 0.4)"
              />
            </svg>

            {/* Vagues supplémentaires pour remplir complètement */}
            <svg
              className="absolute top-0 h-full animate-wave-slow opacity-30"
              style={{ width: '200%', left: '-50%' }}
              viewBox="0 0 2400 120"
              preserveAspectRatio="none"
              style={{ animationDelay: '1s' }}
            >
              <path
                d="M0,100 C600,60 1200,120 1800,80 C2100,50 2300,90 2400,70 L2400,120 L0,120 Z"
                fill="rgba(147, 51, 234, 0.3)"
              />
            </svg>

            <svg
              className="absolute top-0 h-full animate-wave-medium opacity-25"
              style={{ width: '200%', left: '-50%' }}
              viewBox="0 0 2400 120"
              preserveAspectRatio="none"
              style={{ animationDelay: '2s' }}
            >
              <path
                d="M0,50 C400,90 800,30 1200,70 C1600,110 2000,50 2400,90 L2400,120 L0,120 Z"
                fill="rgba(255, 255, 255, 0.2)"
              />
            </svg>

            <svg
              className="absolute top-0 h-full animate-wave-fast opacity-35"
              style={{ width: '200%', left: '-50%' }}
              viewBox="0 0 2400 120"
              preserveAspectRatio="none"
              style={{ animationDelay: '0.5s' }}
            >
              <path
                d="M0,90 C800,30 1600,110 2400,50 L2400,120 L0,120 Z"
                fill="rgba(124, 58, 237, 0.4)"
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
                    src="/KLIK LOGO.png" 
                    alt="KLIK Logo" 
                    className="h-6 w-auto filter brightness-0 invert"
                  />
                </div>
                <div className="text-white text-center">
                  <p className="text-sm font-semibold mb-0.5">
                    Site fait par <span className="font-bold text-white/90">KLIK</span>
                  </p>
                  <p className="text-xs opacity-70">
                    © {new Date().getFullYear()} KLIK. Tous droits réservés.
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
  );
};

export default Footer;