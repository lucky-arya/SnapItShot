import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CornerBrackets from '../common/CornerBrackets';
import { heroSlides } from '../../data/mockData';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-screen min-h-[640px] max-h-[1080px] overflow-hidden bg-charcoal text-cream-light select-none">
      {/* Corner Bracket Borders */}
      <CornerBrackets />

      {/* Background Images with Crossfade */}
      {heroSlides.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center filter brightness-[0.88]"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          {/* Subtle vignette / atmospheric overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/40" />
        </div>
      ))}

      {/* Navigation Arrow Controls — Desktop / Tablet */}
      <div className="absolute left-6 sm:left-10 lg:left-16 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={prevSlide}
          aria-label="Previous photograph"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-cream-light/60 flex items-center justify-center text-cream-light hover:bg-cream-light hover:text-charcoal hover:border-cream-light transition-all duration-300 backdrop-blur-sm group"
        >
          <ArrowLeft className="w-4 h-4 stroke-[1.5] group-hover:-translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="absolute right-6 sm:right-10 lg:right-16 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={nextSlide}
          aria-label="Next photograph"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-cream-light/60 flex items-center justify-center text-cream-light hover:bg-cream-light hover:text-charcoal hover:border-cream-light transition-all duration-300 backdrop-blur-sm group"
        >
          <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Right Slide Counter — Desktop Indicator */}
      <div className="hidden sm:flex absolute right-8 sm:right-12 lg:right-16 bottom-24 z-30 flex-col items-center gap-2 font-mono text-xs tracking-widest text-cream-light/90">
        <span>0{currentSlide + 1}</span>
        <div className="w-[1px] h-10 bg-cream-light/30 relative">
          <div
            className="w-[2px] bg-cream-light absolute top-0 -left-[0.5px] transition-all duration-500"
            style={{
              height: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
            }}
          />
        </div>
        <span className="text-cream-light/50">0{heroSlides.length}</span>
      </div>

      {/* Mobile Slide Indicator */}
      <div className="sm:hidden absolute left-6 bottom-16 z-30 flex items-center gap-2 font-mono text-xs tracking-widest text-cream-light">
        <span>0{currentSlide + 1}</span>
        <span className="text-cream-light/40">—</span>
        <span className="text-cream-light/50">0{heroSlides.length}</span>
      </div>

      {/* Bottom Center Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-cream-light/75">
          SCROLL
        </span>
        <div className="w-[1px] h-6 bg-cream-light/30 relative overflow-hidden">
          <div className="w-full h-1/2 bg-cream-light absolute animate-pulse top-0" />
        </div>
      </div>
    </section>
  );
}
