import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/footer/Footer';
import { selectedWork } from '../../data/mockData';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'PORTRAITS', 'WEDDINGS', 'TRAVEL', 'LANDSCAPES', 'LIFESTYLE'];

  // Combine items and additional archive images for a complete gallery archive
  const archiveItems = [
    ...selectedWork,
    {
      id: "arc-1",
      number: "06",
      title: "Varanasi Ghats at Dawn",
      category: "TRAVEL",
      aspect: "aspect-[3/4]",
      gridSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85",
      location: "Varanasi, India",
      year: "2024"
    },
    {
      id: "arc-2",
      number: "07",
      title: "Portrait of Solitude",
      category: "PORTRAITS",
      aspect: "aspect-[16/10]",
      gridSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85",
      location: "Delhi, India",
      year: "2025"
    },
    {
      id: "arc-3",
      number: "08",
      title: "Alpine Calm",
      category: "LANDSCAPES",
      aspect: "aspect-[4/3]",
      gridSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
      location: "Kashmir, India",
      year: "2024"
    }
  ];

  const filtered = activeFilter === 'ALL'
    ? archiveItems
    : archiveItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0D0D0C] text-cream-light flex flex-col font-sans">
      <Navbar forceScrolled={true} />

      <main className="flex-1 pt-32 pb-24 sm:pb-32">
        <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Page Opening Header */}
          <div className="max-w-3xl space-y-6 mb-16 sm:mb-20">
            <span className="font-mono text-xs uppercase tracking-widest text-muted block">
              Curated Archive
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-cream-light">
              SELECTED WORK
            </h1>
            <div className="w-16 h-[1px] bg-white/20 pt-1" />
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              A comprehensive collection of moments, people, places and stories captured across continents.
            </p>
          </div>

          {/* Category Filter Pills (Glassmorphic) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 border-b border-white/10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 shrink-0 ${
                  activeFilter === cat
                    ? 'bg-cream text-charcoal font-medium shadow-md'
                    : 'glass-pill text-cream-light/75 hover:text-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Asymmetrical Gallery Masonry */}
          <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start mb-24">
            {filtered.map((item) => (
              <Link
                key={item.id}
                to={`/work/${item.id}`}
                className={`group block relative overflow-hidden bg-[#141412] border border-white/5 shadow-xl ${item.gridSpan}`}
              >
                <div className={`w-full overflow-hidden ${item.aspect}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover image-zoom-editorial filter brightness-[0.88] group-hover:brightness-100 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0C]/90 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  
                  {/* Overlay Metadata */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between text-cream-light pointer-events-none">
                    <div>
                      <span className="font-mono text-xs opacity-75 block mb-1">
                        {item.number}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl tracking-wider uppercase font-normal text-cream">
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-mono opacity-60 uppercase tracking-widest mt-0.5">
                        {item.category} · {item.location}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full glass-pill flex items-center justify-center group-hover:bg-cream group-hover:text-charcoal transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Conversation Invitation with Glassmorphism */}
          <div className="glass-card p-10 sm:p-14 text-center max-w-2xl mx-auto rounded-sm space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-muted block">
              Commissioned Assignments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream-light">
              LOOKING FOR SOMETHING A LITTLE MORE PERSONAL?
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Whether you are planning a destination wedding, an intimate portrait session, or an editorial project, let's talk about bringing your vision to life.
            </p>
            <div className="pt-2">
              <Link
                to="/inquire"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-cream text-charcoal hover:bg-white text-xs font-mono uppercase tracking-widest font-medium transition-all duration-300 group shadow-md"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
