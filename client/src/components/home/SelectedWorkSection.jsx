import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { selectedWork } from '../../data/mockData';

export default function SelectedWorkSection() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'PORTRAITS', 'WEDDINGS', 'TRAVEL', 'LANDSCAPES', 'LIFESTYLE'];

  const filteredItems = activeCategory === 'ALL'
    ? selectedWork
    : selectedWork.filter(item => item.category === activeCategory);

  return (
    <section className="bg-[#0D0D0C] text-cream-light py-24 sm:py-32 lg:py-40 border-b border-white/10">
      <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header Grid: Info Left on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
              <span>02</span>
              <span className="text-white/20">/</span>
              <span>06</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-cream-light">
                SELECTED<br />WORK
              </h2>
              <div className="w-12 h-[1px] bg-white/20 pt-1" />
            </div>

            <p className="text-muted text-sm sm:text-base leading-relaxed max-w-sm">
              A collection of moments, places and people that continue to inspire.
            </p>

            <div>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cream-light hover:text-lumiere-accent transition-colors editorial-underline group"
              >
                <span>VIEW ALL WORK</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Category Filter Pills (Desktop column with frosted glass) */}
            <div className="hidden lg:flex flex-col gap-2.5 pt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-fit px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 text-left ${
                    activeCategory === cat
                      ? 'bg-cream text-charcoal font-medium shadow-md'
                      : 'glass-pill text-cream-light/75 hover:text-cream'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills (Tablet / Mobile Horizontal Scroll) */}
          <div className="lg:hidden col-span-1 flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-cream text-charcoal font-medium shadow-md'
                    : 'glass-pill text-cream-light/75 hover:text-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Asymmetric Gallery Grid */}
          <div className="lg:col-span-8 grid grid-cols-12 gap-6 sm:gap-8 items-start">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                to={`/work/${item.id}`}
                className={`group block relative overflow-hidden bg-[#141412] border border-white/5 transition-transform duration-500 ${item.gridSpan}`}
              >
                <div className={`w-full overflow-hidden ${item.aspect}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover image-zoom-editorial filter brightness-[0.88] group-hover:brightness-100 transition-all duration-700"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay for caption legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0C]/90 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  
                  {/* Caption & Metadata Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between text-cream-light pointer-events-none">
                    <div>
                      <span className="font-mono text-xs opacity-75 block mb-1">
                        {item.number}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl tracking-wider uppercase font-normal text-cream">
                        {item.category}
                      </h3>
                      <p className="text-[11px] font-mono opacity-60 uppercase tracking-widest mt-0.5">
                        {item.location}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full glass-pill flex items-center justify-center group-hover:bg-cream group-hover:text-charcoal transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
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
