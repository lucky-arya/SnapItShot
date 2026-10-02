import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { siteSettings } from '../../data/mockData';

export default function ContactCTASection() {
  return (
    <section className="relative w-full py-20 sm:py-32 lg:py-44 bg-[#0A0A09] text-cream-light overflow-hidden">
      {/* Background Photography with Cinematic Blur/Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=85"
          alt="Cinematic mountain backdrop"
          className="w-full h-full object-cover object-center filter brightness-[0.3]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-[#0A0A09]/40 to-[#0A0A09]/80" />
      </div>

      <div className="relative z-10 max-w-site mx-auto px-6 sm:px-10 lg:px-16 text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
        
        {/* Left Column: Heading & Copy */}
        <div className="max-w-2xl space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center sm:justify-start gap-3 font-mono text-xs uppercase tracking-widest text-cream-light/75">
            <span>06</span>
            <span className="text-white/20">/</span>
            <span>06</span>
            <span className="text-white/20">·</span>
            <span>CONNECT</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-cream-light">
            LET'S CREATE<br className="hidden sm:block" /> SOMETHING TIMELESS.
          </h2>

          <p className="text-cream-light/80 text-sm sm:text-base leading-relaxed max-w-lg mx-auto sm:mx-0">
            Have a project, story, or moment you'd like to photograph? Let's begin an unhurried conversation.
          </p>
        </div>

        {/* Right Column: CTA Button & Direct Email */}
        <div className="flex flex-col items-center sm:items-end space-y-4 shrink-0 w-full sm:w-auto">
          <Link
            to="/inquire"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-cream text-charcoal hover:bg-white text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300 shadow-2xl group hover:scale-[1.02]"
          >
            <span>START A CONVERSATION</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>

          <a
            href={`mailto:${siteSettings.email}`}
            className="inline-flex items-center gap-2 font-mono text-xs text-cream-light/70 hover:text-cream transition-colors tracking-widest"
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{siteSettings.email}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
