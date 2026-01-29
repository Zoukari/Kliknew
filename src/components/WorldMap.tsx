import React from 'react';
import { MapPin, Globe } from 'lucide-react';

const locations = [
  { 
    name: 'Djibouti', 
    country: 'Djibouti',
    flag: '🇩🇯',
    description: 'Siège principal & équipe technique',
    hasPremium: false,
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(34, 197, 94, 0.15) 50%, rgba(255, 255, 255, 0.1) 100%)',
    borderColor: 'rgba(59, 130, 246, 0.4)',
    glowColor: 'rgba(59, 130, 246, 0.3)',
    lineGradient: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.6) 50%, transparent 100%)'
  },
  { 
    name: 'Nantes', 
    country: 'France',
    flag: '🇫🇷',
    description: 'Équipe technique et clients',
    gradient: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(255, 255, 255, 0.1) 33%, rgba(220, 38, 38, 0.15) 66%, rgba(37, 99, 235, 0.15) 100%)',
    borderColor: 'rgba(37, 99, 235, 0.4)',
    glowColor: 'rgba(37, 99, 235, 0.3)',
    lineGradient: 'linear-gradient(90deg, rgba(37, 99, 235, 0.4) 0%, rgba(255, 255, 255, 0.3) 33%, rgba(220, 38, 38, 0.4) 66%, rgba(37, 99, 235, 0.4) 100%)'
  },
  { 
    name: 'Antananarivo', 
    country: 'Madagascar',
    flag: '🇲🇬',
    description: 'Équipe technique et Innovation & R&D',
    hasPremium: false,
    gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(220, 38, 38, 0.15) 50%, rgba(22, 163, 74, 0.15) 100%)',
    borderColor: 'rgba(220, 38, 38, 0.4)',
    glowColor: 'rgba(220, 38, 38, 0.3)',
    lineGradient: 'linear-gradient(90deg, transparent 0%, rgba(220, 38, 38, 0.6) 50%, rgba(22, 163, 74, 0.6) 100%)'
  },
  { 
    name: 'Paris', 
    country: 'France',
    flag: '🇫🇷',
    description: 'Clients et partenariats stratégiques',
    hasPremium: false,
    gradient: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(255, 255, 255, 0.1) 33%, rgba(220, 38, 38, 0.15) 66%, rgba(37, 99, 235, 0.15) 100%)',
    borderColor: 'rgba(37, 99, 235, 0.4)',
    glowColor: 'rgba(37, 99, 235, 0.3)',
    lineGradient: 'linear-gradient(90deg, rgba(37, 99, 235, 0.4) 0%, rgba(255, 255, 255, 0.3) 33%, rgba(220, 38, 38, 0.4) 66%, rgba(37, 99, 235, 0.4) 100%)'
  },
  { 
    name: 'Boston', 
    country: 'États-Unis',
    flag: '🇺🇸',
    description: 'Portefeuille clients premium et relations commerciales durables',
    hasPremium: true,
    gradient: 'linear-gradient(135deg, rgba(29, 78, 216, 0.15) 0%, rgba(255, 255, 255, 0.1) 33%, rgba(220, 38, 38, 0.15) 66%, rgba(29, 78, 216, 0.15) 100%)',
    borderColor: 'rgba(29, 78, 216, 0.4)',
    glowColor: 'rgba(29, 78, 216, 0.3)',
    lineGradient: 'linear-gradient(90deg, rgba(29, 78, 216, 0.4) 0%, rgba(255, 255, 255, 0.3) 33%, rgba(220, 38, 38, 0.4) 66%, rgba(29, 78, 216, 0.4) 100%)'
  },
  { 
    name: 'Sacramento', 
    country: 'États-Unis',
    flag: '🇺🇸',
    description: 'Portefeuille clients premium et croissance continue',
    hasPremium: true,
    gradient: 'linear-gradient(135deg, rgba(29, 78, 216, 0.15) 0%, rgba(255, 255, 255, 0.1) 33%, rgba(220, 38, 38, 0.15) 66%, rgba(29, 78, 216, 0.15) 100%)',
    borderColor: 'rgba(29, 78, 216, 0.4)',
    glowColor: 'rgba(29, 78, 216, 0.3)',
    lineGradient: 'linear-gradient(90deg, rgba(29, 78, 216, 0.4) 0%, rgba(255, 255, 255, 0.3) 33%, rgba(220, 38, 38, 0.4) 66%, rgba(29, 78, 216, 0.4) 100%)'
  },
  { 
    name: 'Abidjan', 
    country: 'Côte d\'Ivoire',
    flag: '🇨🇮',
    description: 'Clients et partenariats locaux',
    hasPremium: false,
    gradient: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(22, 163, 74, 0.15) 100%)',
    borderColor: 'rgba(249, 115, 22, 0.4)',
    glowColor: 'rgba(249, 115, 22, 0.3)',
    lineGradient: 'linear-gradient(90deg, rgba(249, 115, 22, 0.4) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(22, 163, 74, 0.4) 100%)'
  },
  { 
    name: 'Doha', 
    country: 'Qatar',
    flag: '🇶🇦',
    description: 'Portefeuille clients premium et expansion marché Moyen-Orient',
    hasPremium: true,
    gradient: 'linear-gradient(135deg, rgba(153, 27, 27, 0.2) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(153, 27, 27, 0.2) 100%)',
    borderColor: 'rgba(153, 27, 27, 0.5)',
    glowColor: 'rgba(153, 27, 27, 0.4)',
    lineGradient: 'linear-gradient(90deg, transparent 0%, rgba(153, 27, 27, 0.7) 50%, transparent 100%)'
  },
];

export default function WorldMap() {
  return (
    <div className="w-full">
      <p className="text-center text-theme-secondary text-sm md:text-base mb-8">
        8 villes connectées, une vision globale
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {locations.map((location, index) => (
          <div
            key={index}
            className="klik-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-200 group cursor-pointer border-2 relative overflow-hidden"
            style={{
              background: location.gradient,
              borderColor: location.borderColor,
            }}
          >
            {/* Drapeau en arrière-plan au hover */}
            <div 
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity duration-200 rounded-2xl pointer-events-none"
              style={{ 
                fontSize: '200px',
                lineHeight: '1',
                transform: 'scale(1.5)',
                filter: 'blur(20px)',
              }}
            >
              {location.flag}
            </div>
            
            {/* Effet glow avec couleurs du drapeau */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl blur-xl"
              style={{ background: location.gradient }}
            ></div>
            
            {/* Overlay sombre pour lisibilité */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300 rounded-2xl"></div>
            
            <div className="relative z-10">
              {/* Header avec drapeau et nom */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl drop-shadow-lg">{location.flag}</div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors drop-shadow-md">
                    {location.name}
                  </h3>
                  <p className="text-sm text-white/80">{location.country}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/90 text-sm leading-relaxed mb-4 drop-shadow-sm">
                {location.description}
              </p>

              {/* Pin icon */}
              <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-medium">KLIK Présence</span>
              </div>
            </div>

            {/* Ligne décorative en bas avec couleurs du drapeau */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-1.5 opacity-60 group-hover:opacity-100 transition-all duration-300"
              style={{ background: location.lineGradient }}
            ></div>
          </div>
        ))}
      </div>

      {/* Stats en bas */}
      <div className="mt-12 flex flex-wrap gap-6 justify-center items-center">
        <div className="flex items-center gap-2 klik-card px-6 py-3 rounded-full">
          <Globe className="w-5 h-5 text-violet-400" />
          <span className="text-theme font-semibold">8 Villes</span>
        </div>
        <div className="flex items-center gap-2 klik-card px-6 py-3 rounded-full">
          <MapPin className="w-5 h-5 text-violet-400" />
          <span className="text-theme font-semibold">4 Continents</span>
        </div>
        <div className="flex items-center gap-2 klik-card px-6 py-3 rounded-full">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-400 to-violet-600"></div>
          <span className="text-theme font-semibold">Réseau Global</span>
        </div>
      </div>
    </div>
  );
}
