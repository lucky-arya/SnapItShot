import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { siteSettings } from '../../data/mockData';

export default function Navbar({ forceScrolled = false }) {
  const [isScrolled, setIsScrolled] = useState(forceScrolled);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (forceScrolled || !isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceScrolled, isHomePage]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3 sm:py-4'
            : 'bg-transparent py-4 sm:py-7'
        }`}
      >
        <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between relative">
          
          {/* Left: Work Pill (Top) or Logo (Scrolled) */}
          <div className="flex items-center z-10 shrink-0">
            {isScrolled ? (
              <Link 
                to="/" 
                className="font-serif text-xl sm:text-2xl tracking-[0.18em] text-cream-light font-normal hover:opacity-80 transition-opacity"
              >
                {siteSettings.brandName.toUpperCase()}
              </Link>
            ) : (
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="md:hidden p-2 text-cream-light hover:opacity-80 transition-opacity min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full glass-pill"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5 stroke-[1.5]" />
                </button>
                <Link
                  to="/work"
                  className="hidden md:inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-pill text-xs uppercase tracking-widest text-cream-light hover:text-cream transition-all duration-300 group"
                >
                  <span>WORK</span>
                  <Menu className="w-3.5 h-3.5 stroke-[1.5] group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            )}
          </div>

          {/* Center: Brand Logo on Transparent State / Navigation Links on Scrolled */}
          {!isScrolled ? (
            <div className="text-center absolute left-1/2 -translate-x-1/2 max-w-[50%] sm:max-w-[60%] pointer-events-auto z-0">
              <Link
                to="/"
                className="font-serif text-lg sm:text-2xl md:text-3xl tracking-[0.2em] sm:tracking-[0.25em] text-cream-light font-normal hover:opacity-90 transition-opacity drop-shadow-md truncate block"
              >
                {siteSettings.brandName.toUpperCase()}
              </Link>
            </div>
          ) : (
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-xs uppercase tracking-widest text-muted">
              <Link to="/work" className="editorial-underline hover:text-cream transition-colors">
                WORK
              </Link>
              <a href="/#collections" className="editorial-underline hover:text-cream transition-colors">
                COLLECTIONS
              </a>
              <Link to="/about" className="editorial-underline hover:text-cream transition-colors">
                ABOUT
              </Link>
            </nav>
          )}

          {/* Right: Contact / Inquire Action — Fully Responsive */}
          <div className="flex items-center z-10 shrink-0">
            {isScrolled ? (
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="md:hidden p-2 text-cream-light hover:opacity-80 transition-opacity min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full glass-pill"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5 stroke-[1.5]" />
                </button>
                <Link
                  to="/inquire"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 rounded-full glass-pill text-xs uppercase tracking-widest text-cream-light hover:bg-cream hover:text-charcoal transition-all duration-300 group"
                  aria-label="Inquire"
                >
                  <span className="hidden sm:inline">INQUIRE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ) : (
              <Link
                to="/inquire"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 rounded-full glass-pill text-xs uppercase tracking-widest text-cream-light hover:bg-cream hover:text-charcoal transition-all duration-300 group"
                aria-label="Contact"
              >
                <span className="hidden sm:inline">CONTACT</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}
          </div>

        </div>
      </header>

      {/* Mobile Glassmorphic Overlay Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
