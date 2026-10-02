import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { collections } from '../../data/mockData';

export default function CollectionsSection() {
  return (
    <section id="collections" className="bg-[#121210] text-cream-light py-24 sm:py-32 lg:py-40 border-b border-white/10">
      <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Two-column layout: Info Left + 5 Horizontal Banner Panels Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title & Philosophy */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
              <span>03</span>
              <span className="text-white/20">/</span>
              <span>06</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-cream-light">
                COLLECTIONS
              </h2>
              <div className="w-12 h-[1px] bg-white/20 pt-1" />
            </div>

            <p className="text-muted text-sm sm:text-base leading-relaxed max-w-sm">
              Different stories. The same language — light, people and places.
            </p>

            <div className="pt-4">
              <Link
                to="/work"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-pill text-xs font-mono uppercase tracking-widest text-cream-light hover:bg-cream hover:text-charcoal transition-all duration-300 group"
              >
                <span>EXPLORE ALL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: 5 Horizontal Chapter Strips */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            {collections.map((col) => (
              <Link
                key={col.id}
                to={`/collections/${col.slug}`}
                className="group relative block overflow-hidden rounded-sm h-[190px] sm:h-[220px] lg:h-[230px] bg-[#161513] border border-white/10 text-cream-light shadow-lg"
              >
                {/* Background Photography with Zoom Effect */}
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover object-center image-zoom-editorial filter brightness-[0.65] group-hover:brightness-[0.82] transition-all duration-700"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0C]/90 via-[#0D0D0C]/50 to-transparent group-hover:from-[#0D0D0C]/95 transition-colors" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex items-center justify-between">
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-cream-light/70 tracking-widest block">
                      {col.number}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-wide font-normal text-cream">
                      {col.title}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-muted/90 tracking-wider">
                      {col.descriptor}
                    </p>
                  </div>

                  {/* Circular Arrow Action with Frosted Glass */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-pill flex items-center justify-center group-hover:bg-cream group-hover:text-charcoal transition-all duration-300 shrink-0">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
