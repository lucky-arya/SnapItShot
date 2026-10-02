import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import { siteSettings } from '../../data/mockData';

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navItems = [
    { number: '01', label: 'WORK', to: '/work' },
    { number: '02', label: 'COLLECTIONS', to: '/#collections' },
    { number: '03', label: 'ABOUT', to: '/about' },
    { number: '04', label: 'INQUIRE', to: '/inquire' },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#0D0D0C]/95 backdrop-blur-2xl text-cream-light flex flex-col justify-between p-6 sm:p-10 transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      {/* Header with Brand & Close Button */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <Link 
          to="/" 
          onClick={onClose}
          className="font-serif text-2xl tracking-[0.2em] text-cream-light font-normal"
        >
          {siteSettings.brandName.toUpperCase()}
        </Link>
        <button
          onClick={onClose}
          className="p-3 text-cream-light hover:opacity-70 transition-opacity min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full glass-pill"
          aria-label="Close menu"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <nav className="my-auto py-8">
        <ul className="space-y-6">
          {navItems.map((item) => (
            <li key={item.number}>
              <Link
                to={item.to}
                onClick={onClose}
                className="group flex items-baseline gap-4 text-cream-light hover:text-lumiere-accent transition-colors py-2"
              >
                <span className="font-mono text-xs text-muted tracking-widest">
                  {item.number}
                </span>
                <span className="font-serif text-4xl sm:text-5xl tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                  {item.label}
                </span>
                <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300 text-lumiere-accent" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Details */}
      <div className="border-t border-white/10 pt-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs tracking-widest uppercase text-muted space-y-2 sm:space-y-0">
          <div>{siteSettings.location}</div>
          <div className="flex items-center gap-6">
            <a 
              href={`https://instagram.com/${siteSettings.instagram}`} 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-cream transition-colors"
            >
              Instagram
            </a>
            <a 
              href={`mailto:${siteSettings.email}`}
              className="hover:text-cream transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
