import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { featuredPhotographData } from '../../data/mockData';

export default function FeaturedSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const slides = featuredPhotographData.slides;

  const prev = () => {
    setCurrentIdx((i) => (i === 0 ? slides.length - 1 : i - 1));
  };

  const next = () => {
    setCurrentIdx((i) => (i === slides.length - 1 ? 0 : i + 1));
  };

  const activeSlide = slides[currentIdx];

  return (
    <section className="relative w-full min-h-[85vh] lg:h-[90vh] bg-[#0D0D0C] text-cream-light overflow-hidden select-none flex flex-col justify-between py-16 sm:py-20 lg:py-24 border-b border-white/10">
      {/* Background Active Image */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.caption}
            className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.72] transition-opacity duration-1000 ${
              index === currentIdx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        ))}
        {/* Editorial localized gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0C] via-[#0D0D0C]/35 to-[#0D0D0C]/70" />
      </div>

      {/* Top Content: Title & Manifesto */}
      <div className="relative z-10 max-w-site mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="max-w-xl space-y-6">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-cream-light/75">
            <span>04</span>
            <span className="text-white/20">/</span>
            <span>06</span>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-cream-light">
              THE QUIET<br />MOMENT
            </h2>
            <div className="w-12 h-[1px] bg-white/20" />
          </div>

          <p className="text-cream-light/85 text-sm sm:text-base leading-relaxed max-w-md">
            {featuredPhotographData.subtitle}
          </p>

          <div className="pt-2">
            <Link
              to={`/work/${activeSlide.storySlug || 'a-day-in-old-delhi'}`}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-pill text-xs font-mono uppercase tracking-widest text-cream-light hover:bg-cream hover:text-charcoal transition-all duration-300 group"
            >
              <span>VIEW STORY</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Slider Controls & Thumbnail Rail */}
      <div className="relative z-10 max-w-site mx-auto px-6 sm:px-10 lg:px-16 w-full pt-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          
          {/* Arrow Controls & Progress */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={prev}
              aria-label="Previous image"
              className="w-10 h-10 rounded-full glass-pill flex items-center justify-center hover:bg-cream hover:text-charcoal transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
            </button>

            {/* Slide counter & progress line */}
            <div className="flex items-center gap-3 font-mono text-xs text-cream-light/80 tracking-widest">
              <span>0{currentIdx + 1}</span>
              <div className="w-16 sm:w-24 h-[1px] bg-white/20 relative">
                <div
                  className="h-[2px] bg-cream-light absolute top-[-0.5px] transition-all duration-500"
                  style={{
                    width: `${((currentIdx + 1) / slides.length) * 100}%`,
                  }}
                />
              </div>
              <span className="text-white/40">0{slides.length}</span>
            </div>

            <button
              onClick={next}
              aria-label="Next image"
              className="w-10 h-10 rounded-full glass-pill flex items-center justify-center hover:bg-cream hover:text-charcoal transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>

          {/* Thumbnail Rail */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {slides.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Select frame ${idx + 1}`}
                className={`relative shrink-0 w-16 sm:w-20 h-11 sm:h-12 overflow-hidden rounded-sm transition-all duration-300 border ${
                  idx === currentIdx
                    ? 'border-cream ring-2 ring-cream-light/40 scale-105 opacity-100'
                    : 'border-white/10 opacity-45 hover:opacity-90'
                }`}
              >
                <img
                  src={item.thumb}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
