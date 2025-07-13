'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const words = ['Chase', 'Curiosity', 'Discover', 'Adventure'];
  const containerRef = useRef(null);
  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          words.forEach((_, i) => {
            setTimeout(() => {
              setVisibleWords(prev => [...prev, i]);
            }, i * 300);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-base text-base-content relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('/samurai.png')] bg-cover bg-center bg-no-repeat opacity-40"
        aria-hidden="true"
      />

      {/* Text content */}
      <div className="relative z-10 text-center">
        {words.map((word, index) => (
          <h1
            key={index}
            className={`
              text-5xl md:text-6xl lg:text-7xl font-extrabold transition-all duration-700
              bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent
              ${visibleWords.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            {word}
          </h1>
        ))}
      </div>
    </section>
  );
}
