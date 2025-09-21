import React, { useState, useEffect } from 'react';
import { MapPin, Timer, Zap, Users, Trophy, Target } from 'lucide-react';

const MainContent: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 58, seconds: 10 });
  const [playerCount, setPlayerCount] = useState(1247);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    const playerTimer = setInterval(() => {
      setPlayerCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(playerTimer);
    };
  }, []);

  return (
    <div className="relative z-10 flex-1 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-3">
          <MapPin className="w-8 h-8 text-green-400" />
          <h1 className="text-2xl font-bold text-green-400 tracking-wider">CASH ATTACK</h1>
        </div>
        
        <div className="flex space-x-4">
          <button className="px-6 py-2 border-2 border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold">
            CONNECTE-TOI
          </button>
          <button className="px-6 py-2 border-2 border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold">
            INSCRIS-TOI
          </button>
          <button className="px-6 py-2 bg-green-400 text-black rounded-full hover:bg-green-300 transition-all duration-300 font-semibold">
            BENVENUTO
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl lg:text-7xl font-black text-green-400 leading-tight mb-4">
                TROUVE LE CASH.
                <br />
                <span className="text-white">BATS LE CHRONO.</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Participe à la chasse au trésor la plus rapide du pays.
              </p>
              
              <button className="bg-green-400 text-black px-12 py-4 rounded-full text-xl font-bold hover:bg-green-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-400/25">
                REJOINDRE LA CHASSE
              </button>
            </div>

            {/* How it works */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">COMMENT ÇA MARCHE ?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">REJOINS</h4>
                    <p className="text-gray-400">Crée un compte ou connecte-toi</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">JOUE</h4>
                    <p className="text-gray-400">Accède à ta page d'indices</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">GAGNE</h4>
                    <p className="text-gray-400">Trouve le cash avant les autres</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-8">
            {/* Timer Card */}
            <div className="bg-gray-900/50 border border-green-400/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <MapPin className="w-12 h-12 text-green-400" />
                <div className="text-right">
                  <h3 className="text-2xl font-bold text-green-400">TA PAGE</h3>
                  <h4 className="text-xl font-bold text-green-400">D'INDICES</h4>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8">
                Tes indices personnalisés s'affichent ici. Prêt à courir pour ton cash?
              </p>
              
              <div className="text-center">
                <div className="text-6xl font-mono font-bold text-white mb-2">
                  {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}:10
                </div>
                <div className="flex justify-center space-x-8 text-sm text-gray-400">
                  <span>1</span>
                  <span>2</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 border border-green-400/30 rounded-xl p-6 backdrop-blur-sm text-center">
                <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{playerCount.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Joueurs actifs</div>
              </div>
              
              <div className="bg-gray-900/50 border border-green-400/30 rounded-xl p-6 backdrop-blur-sm text-center">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">€2,500</div>
                <div className="text-sm text-gray-400">Prix actuel</div>
              </div>
            </div>

            {/* Connect Button */}
            <div className="bg-gray-900/50 border border-green-400/30 rounded-2xl p-8 backdrop-blur-sm text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-4">CONNECTE-TOI POUR</h3>
              <h4 className="text-xl font-bold text-green-400 mb-6">ACCÉDER</h4>
              
              <button className="w-full bg-green-400 text-black py-4 rounded-full text-lg font-bold hover:bg-green-300 transition-all duration-300 transform hover:scale-105">
                SE CONNECTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;