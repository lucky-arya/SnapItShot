import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { siteSettings } from '../../data/mockData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cream-light dark:bg-[#0A0A09] border-t border-lumiere-border/50 dark:border-white/10 pt-20 pb-12 text-charcoal dark:text-cream-light transition-colors duration-400">
      <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* Brand & Editorial Manifesto Statement */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] font-normal block text-charcoal dark:text-cream-light">
              {siteSettings.brandName.toUpperCase()}
            </Link>
            <p className="text-muted text-sm max-w-sm leading-relaxed">
              Photographs, stories, and the moments between them. Creating visual narratives that feel lived rather than staged.
            </p>
            <p className="text-xs uppercase tracking-widest text-muted/70 pt-2 font-mono">
              {siteSettings.location}
            </p>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-mono text-muted/80">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/work" className="editorial-underline text-charcoal/80 dark:text-cream-light/80 hover:text-charcoal dark:hover:text-cream transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <a href="/#collections" className="editorial-underline text-charcoal/80 dark:text-cream-light/80 hover:text-charcoal dark:hover:text-cream transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <Link to="/about" className="editorial-underline text-charcoal/80 dark:text-cream-light/80 hover:text-charcoal dark:hover:text-cream transition-colors">
                  About Abhishek
                </Link>
              </li>
              <li>
                <Link to="/inquire" className="editorial-underline text-charcoal/80 dark:text-cream-light/80 hover:text-charcoal dark:hover:text-cream transition-colors">
                  Inquire & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-mono text-muted/80">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href={`https://instagram.com/${siteSettings.instagram}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="editorial-underline text-charcoal/80 dark:text-cream-light/80 hover:text-charcoal dark:hover:text-cream transition-colors"
                >
                  Instagram — @{siteSettings.instagram}
                </a>
              </li>
              <li>
                <a 
                  href={`https://pinterest.com/${siteSettings.pinterest}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="editorial-underline text-charcoal/80 dark:text-cream-light/80 hover:text-charcoal dark:hover:text-cream transition-colors"
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${siteSettings.email}`}
                  className="editorial-underline text-charcoal/80 dark:text-cream-light/80 hover:text-charcoal dark:hover:text-cream transition-colors"
                >
                  {siteSettings.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 border-t border-lumiere-border/30 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted tracking-wider">
          <p>© {new Date().getFullYear()} {siteSettings.brandName.toUpperCase()} PHOTOGRAPHY. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8">
            <span className="hover:text-charcoal dark:hover:text-cream cursor-pointer transition-colors">PRIVACY</span>
            <span className="hover:text-charcoal dark:hover:text-cream cursor-pointer transition-colors">TERMS</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 hover:text-charcoal dark:hover:text-cream transition-colors uppercase tracking-widest text-xs ml-4 group glass-pill px-4 py-2 rounded-full"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
