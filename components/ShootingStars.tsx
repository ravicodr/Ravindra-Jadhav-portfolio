'use client';

import { useEffect, useState } from 'react';

export default function ShootingStars() {
  const [stars, setStars] = useState<{ id: number; top: string; right: string; delay: string }[]>([]);

  useEffect(() => {
    const createStar = () => {
      const newStar = {
        id: Date.now() + Math.random(),
        top: `${Math.random() * 50}%`,
        right: `${Math.random() * 50}%`,
        delay: `${Math.random() * 5}s`,
      };

      setStars(prev => [...prev, newStar]);

      setTimeout(() => {
        setStars(prev => prev.filter(star => star.id !== newStar.id));
      }, 3000);
    };

    const interval = setInterval(createStar, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[2] pointer-events-none">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_10px_2px_white] animate-shoot"
          style={{
            top: star.top,
            right: star.right,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
