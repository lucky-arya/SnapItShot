import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/footer/Footer';
import { photographerProfile, siteSettings } from '../../data/mockData';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream dark:bg-[#0D0D0C] text-charcoal dark:text-cream-light flex flex-col font-sans transition-colors duration-400">
      <Navbar forceScrolled={true} />

      <main className="flex-1 pt-32 pb-24 sm:pb-32">
        <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Page Opening Title */}
          <div className="max-w-3xl space-y-6 mb-16 sm:mb-24">
            <span className="font-mono text-xs uppercase tracking-widest text-muted block">
              About Abhishek Arya
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-charcoal dark:text-cream-light">
              THE PERSON BEHIND THE PHOTOGRAPHS.
            </h1>
            <div className="w-16 h-[1px] bg-charcoal/40 dark:bg-white/20 pt-1" />
          </div>

          {/* Asymmetric Presentation: Working Portrait Left + Bio Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-28">
            
            {/* Working Portrait */}
            <div className="lg:col-span-6 relative">
              <div className="overflow-hidden aspect-[3/4] bg-cream-dark dark:bg-[#141412] border border-black/5 dark:border-white/5 shadow-2xl">
                <img
                  src={photographerProfile.portraitImage}
                  alt={`${photographerProfile.name} holding camera in natural landscape`}
                  className="w-full h-full object-cover object-top image-zoom-editorial filter brightness-[0.94] dark:brightness-[0.92]"
                />
              </div>
              <p className="font-mono text-xs text-muted mt-3 uppercase tracking-wider">
                Abhishek Arya · Photographing in Himachal Pradesh, India
              </p>
            </div>

            {/* Narrative & Philosophy */}
            <div className="lg:col-span-6 space-y-8">
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal dark:text-cream leading-snug">
                "I photograph to slow down time — to capture people as they are, in the honest spaces where words are not needed."
              </h2>

              <p className="text-muted text-base leading-relaxed">
                {photographerProfile.bioLong}
              </p>

              <p className="text-muted text-base leading-relaxed">
                Whether documenting an intimate wedding ceremony in Rajasthan or the stillness of high mountain passes, my goal remains unchanged: to produce photographs that age with grace and tenderness, growing more valuable with every passing decade.
              </p>

              {/* Signature Block */}
              <div className="pt-4 border-t border-lumiere-border/40 dark:border-white/10">
                <p className="font-signature text-5xl text-charcoal dark:text-lumiere-accent tracking-wide select-none">
                  {photographerProfile.name}
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted mt-1">
                  Founder & Principal Photographer, {siteSettings.brandName}
                </p>
              </div>
            </div>

          </div>

          {/* How I Work: 3 Principles */}
          <div className="border-t border-lumiere-border/40 dark:border-white/10 pt-20 mb-28">
            <div className="max-w-xl space-y-4 mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-muted block">
                Work Methodology
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-charcoal dark:text-cream-light">
                HOW I WORK
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {siteSettings.aboutPrinciples.map((item) => (
                <div key={item.number} className="space-y-4 border-l border-charcoal/20 dark:border-white/20 pl-6">
                  <span className="font-mono text-sm text-muted tracking-widest">
                    {item.number}
                  </span>
                  <h3 className="font-serif text-2xl tracking-wide text-charcoal dark:text-cream font-normal">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Inquire Invitation with Glassmorphism */}
          <div className="glass-card p-8 sm:p-14 lg:p-20 text-center max-w-4xl mx-auto rounded-sm space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-muted block">
              Inquire for Dates & Assignments
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-charcoal dark:text-cream-light">
              HAVE A STORY IN MIND? LET'S TALK.
            </h2>
            <p className="text-muted text-base max-w-md mx-auto leading-relaxed">
              Based in India, available worldwide. I take a limited number of commissions each year to give every story the unhurried attention it deserves.
            </p>
            <div className="pt-4">
              <Link
                to="/inquire"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-charcoal text-cream dark:bg-cream dark:text-charcoal hover:opacity-90 text-xs font-mono uppercase tracking-widest font-medium transition-all duration-300 shadow-xl group"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
