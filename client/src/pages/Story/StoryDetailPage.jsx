import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, MapPin } from 'lucide-react';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/footer/Footer';
import { stories, selectedWork } from '../../data/mockData';

export default function StoryDetailPage() {
  const { slug } = useParams();

  // Find story or construct fallback from selectedWork
  const story = stories.find(s => s.slug === slug) || {
    title: selectedWork.find(w => w.id === slug)?.title || "Old Courtyard Reverie",
    collection: selectedWork.find(w => w.id === slug)?.category || "Travel",
    location: selectedWork.find(w => w.id === slug)?.location || "Jaipur, Rajasthan",
    date: "Autumn 2025",
    excerpt: "A digital photography essay exploring how light shapes forgotten architecture and honest human moments.",
    heroImage: selectedWork.find(w => w.id === slug)?.image || "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2400&q=85",
    images: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85"
    ]
  };

  return (
    <div className="min-h-screen bg-[#0D0D0C] text-cream-light flex flex-col font-sans">
      <Navbar forceScrolled={true} />

      <main className="flex-1 pt-32 pb-24 sm:pb-32">
        <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Back link */}
          <div className="mb-8">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-cream transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>BACK TO WORK</span>
            </Link>
          </div>

          {/* Story Title & Narrative Introduction */}
          <div className="max-w-3xl space-y-6 mb-16">
            <div className="flex items-center gap-4 text-xs font-mono text-muted uppercase tracking-widest">
              <span className="flex items-center gap-1.5 text-lumiere-accent">
                <MapPin className="w-3.5 h-3.5" />
                {story.location}
              </span>
              <span className="text-white/20">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {story.date}
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-cream-light">
              {story.title}
            </h1>
            <div className="w-16 h-[1px] bg-white/20" />

            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              {story.excerpt}
            </p>
          </div>

          {/* Full-bleed Hero Visual */}
          <div className="mb-16 sm:mb-24 overflow-hidden rounded-sm bg-[#141412] border border-white/5 aspect-[16/9] sm:aspect-[21/9] shadow-2xl">
            <img
              src={story.heroImage}
              alt={story.title}
              className="w-full h-full object-cover object-center filter brightness-[0.88]"
            />
          </div>

          {/* Story Narrative Pacing: 2-column image pairing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mb-20">
            {story.images.slice(0, 2).map((img, idx) => (
              <div key={idx} className="overflow-hidden aspect-[4/5] bg-[#141412] border border-white/5">
                <img
                  src={img}
                  alt={`Story frame ${idx + 1}`}
                  className="w-full h-full object-cover image-zoom-editorial filter brightness-[0.9]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Editorial Quote Climax */}
          <div className="my-24 py-16 border-y border-white/10 text-center max-w-2xl mx-auto space-y-4">
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cream italic leading-relaxed">
              "We photograph people to remind them who they were when they weren't pretending."
            </p>
            <span className="font-mono text-xs uppercase tracking-widest text-muted block">
              — Abhishek Arya
            </span>
          </div>

          {/* Bottom Next Story CTA */}
          <div className="pt-12 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full glass-pill text-xs font-mono uppercase tracking-widest text-cream-light hover:bg-cream hover:text-charcoal transition-all duration-300 group"
            >
              <span>EXPLORE ALL STORIES</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
