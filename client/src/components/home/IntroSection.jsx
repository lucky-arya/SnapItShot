import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function IntroSection() {
  return (
    <section className="bg-[#0D0D0C] text-cream-light py-24 sm:py-32 lg:py-40 border-b border-white/10 relative">
      <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted mb-12 lg:mb-16">
          <span>01</span>
          <span className="text-white/20">/</span>
          <span>INTRO</span>
        </div>

        {/* Editorial Layout: Image Offset Left + Typography Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Offset Photography */}
          <div className="lg:col-span-5 relative group">
            <div className="overflow-hidden aspect-[4/5] sm:aspect-[3/4] bg-[#141412] border border-white/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
                alt="Photographic philosophy - morning mist and light"
                className="w-full h-full object-cover image-zoom-editorial filter brightness-[0.88] group-hover:brightness-100 transition-all duration-700"
                loading="lazy"
              />
            </div>
            {/* Subtle decorative framing */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-white/10 -z-10" />
          </div>

          {/* Right Column: Statement & Copy */}
          <div className="lg:col-span-7 lg:pl-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-muted block">
                A Photographic Philosophy
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-cream-light">
                A VISUAL LANGUAGE BUILT THROUGH LIGHT.
              </h2>
              <div className="w-16 h-[1px] bg-white/20 my-6" />
            </div>

            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Photography is not simply about capturing a moment. It is about preserving how that moment felt — the quiet tension in the air, the unscripted glance, and the honest light that made it unforgettable.
            </p>

            {/* Circular CTA Button with Frosted Glass */}
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full glass-pill text-xs font-mono uppercase tracking-widest text-cream-light hover:bg-cream hover:text-charcoal transition-all duration-300 group"
              >
                <span>DISCOVER MORE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
