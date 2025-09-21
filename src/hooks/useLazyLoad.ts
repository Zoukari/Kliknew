import { useEffect, useRef, useState } from 'react';

export const useLazyLoad = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible] as const;
};

export const usePerformanceMode = () => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Detect low-end devices
    const checkPerformance = () => {
      const isLowEnd = 
        navigator.hardwareConcurrency <= 2 ||
        navigator.deviceMemory <= 4 ||
        window.innerWidth <= 768;
      
      setIsLowPerformance(isLowEnd);
    };

    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  return isLowPerformance;
};
