import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { photographerProfile, siteSettings } from '../../data/mockData';

export default function AboutSection() {
  return (
    <section className="bg-cream dark:bg-[#0D0D0C] text-charcoal dark:text-cream-light py-24 sm:py-32 lg:py-40 border-b border-lumiere-border/40 dark:border-white/10 transition-colors duration-400">
      <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Section Metadata & CTA */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
              <span>05</span>
              <span className="text-lumiere-border dark:text-white/20">/</span>
              <span>06</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight leading-none text-charcoal dark:text-cream-light">
                ABOUT
              </h2>
              <div className="w-12 h-[1px] bg-charcoal/40 dark:bg-white/20 pt-1" />
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-muted block">
                The Photographer
              </span>
              <p className="text-muted text-sm leading-relaxed">
                {photographerProfile.bioShort}
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-charcoal dark:text-cream-light hover:text-lumiere-accent transition-colors editorial-underline group"
              >
                <span>MORE ABOUT ME</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Center Column: Dominant Portrait on Mountain Rock with Camera */}
          <div className="lg:col-span-5 relative group">
            <div className="overflow-hidden aspect-[3/4] bg-cream-dark dark:bg-[#141412] border border-black/5 dark:border-white/5 shadow-2xl">
              <img
                src={photographerProfile.portraitImage}
                alt={`${photographerProfile.name} photographing in natural light`}
                className="w-full h-full object-cover object-top image-zoom-editorial filter brightness-[0.94] dark:brightness-[0.92]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Statement, Bio, Signature & Metadata */}
          <div className="lg:col-span-4 space-y-8 lg:pl-2">
            
            {/* Secondary atmospheric image */}
            <div className="hidden lg:block w-36 h-48 overflow-hidden ml-auto mb-6 bg-cream-dark dark:bg-[#161513] border border-black/5 dark:border-white/5 shadow-md">
              <img
                src={photographerProfile.secondaryImage}
                alt="Mountain peaks in dawn light"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Core statement */}
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-4xl tracking-tight leading-tight text-charcoal dark:text-cream">
              I LOOK FOR THE MOMENTS BETWEEN THE MOMENTS.
            </h3>

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              {siteSettings.bio}
            </p>

            {/* Handwritten Signature Block */}
            <div className="pt-2 space-y-1">
              <p className="font-signature text-5xl text-charcoal dark:text-lumiere-accent tracking-wide select-none">
                {photographerProfile.name}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                {photographerProfile.name} — PHOTOGRAPHER
              </p>
            </div>

            {/* Location & Specialties Grid */}
            <div className="pt-6 border-t border-lumiere-border/40 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono uppercase tracking-wider text-muted">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-charcoal dark:text-cream-light">
                  <MapPin className="w-3.5 h-3.5 text-lumiere-accent" />
                  <span>BASED IN INDIA</span>
                </div>
                <p className="text-[10px] text-muted">AVAILABLE WORLDWIDE</p>
              </div>

              <div className="space-y-1">
                <p className="text-charcoal dark:text-cream-light">PORTRAITS · WEDDINGS</p>
                <p className="text-[10px] text-muted">TRAVEL · LANDSCAPES</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
