import React, { useEffect, useState } from 'react';
import { MapPin, DollarSign, Timer, Zap } from 'lucide-react';

interface CashItem {
  id: string;
  type: 'cash' | 'bonus' | 'multiplier';
  x: number;
  y: number;
  animationDuration: number;
  delay: number;
  value: string;
}

const FallingMoney: React.FC = () => {
  const [items, setItems] = useState<CashItem[]>([]);

  const cashTypes = [
    { type: 'cash' as const, icon: DollarSign, color: 'text-green-400', value: '$', weight: 0.6 },
    { type: 'bonus' as const, icon: Zap, color: 'text-yellow-400', value: '⚡', weight: 0.3 },
    { type: 'multiplier' as const, icon: Timer, color: 'text-cyan-400', value: 'x2', weight: 0.1 }
  ];

  const getRandomType = () => {
    const random = Math.random();
    let cumulative = 0;
    
    for (const type of cashTypes) {
      cumulative += type.weight;
      if (random <= cumulative) {
        return type;
      }
    }
    return cashTypes[0];
  };

  useEffect(() => {
    const generateItem = (): CashItem => {
      const typeInfo = getRandomType();
      
      return {
        id: Math.random().toString(36).substr(2, 9),
        type: typeInfo.type,
        x: Math.random() * 100,
        y: -100,
        animationDuration: Math.random() * 3 + 4,
        delay: Math.random() * 2,
        value: typeInfo.value
      };
    };

    // Initial items
    const initialItems: CashItem[] = [];
    for (let i = 0; i < 20; i++) {
      initialItems.push(generateItem());
    }
    setItems(initialItems);

    // Add new items periodically
    const interval = setInterval(() => {
      setItems(prevItems => {
        const newItems = [...prevItems];
        if (newItems.length < 30) {
          newItems.push(generateItem());
        }
        return newItems;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {items.map((item) => {
        const typeInfo = cashTypes.find(t => t.type === item.type)!;
        const IconComponent = typeInfo.icon;
        
        return (
          <div
            key={item.id}
            className="absolute animate-cash-fall"
            style={{
              left: `${item.x}%`,
              animationDuration: `${item.animationDuration}s`,
              animationDelay: `${item.delay}s`,
              top: '-100px'
            }}
          >
            <div className={`${typeInfo.color} text-2xl font-bold animate-pulse-glow`}>
              {item.value}
            </div>
          </div>
        );
      })}
      
      {/* Digital rain effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 bg-green-400 animate-digital-rain opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 200 + 100}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FallingMoney;