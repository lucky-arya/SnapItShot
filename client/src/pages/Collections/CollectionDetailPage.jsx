import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/footer/Footer';
import { collections } from '../../data/mockData';

export default function CollectionDetailPage() {
  const { slug } = useParams();

  const collectionIndex = collections.findIndex(c => c.slug.toLowerCase() === slug?.toLowerCase());
  
  if (collectionIndex === -1) {
    return <Navigate to="/work" replace />;
  }

  const collection = collections[collectionIndex];
  const nextCollection = collections[(collectionIndex + 1) % collections.length];

  const collectionImages = [
    {
      src: collection.image,
      aspect: "aspect-[16/10] col-span-12",
      caption: `${collection.title} — Main Feature`,
      location: "India"
    },
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
      aspect: "aspect-[3/4] col-span-12 sm:col-span-6",
      caption: "Observation in Natural Light",
      location: "Jaipur, India"
    },
    {
      src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
      aspect: "aspect-[3/4] col-span-12 sm:col-span-6",
      caption: "Architecture & Solitude",
      location: "Rajasthan, India"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2200&q=85",
      aspect: "aspect-[21/9] col-span-12",
      caption: "The Horizon at Twilight",
      location: "Himachal Pradesh, India"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0C] text-cream-light flex flex-col font-sans">
      <Navbar forceScrolled={true} />

      <main className="flex-1 pt-32 pb-24 sm:pb-32">
        <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Back Link */}
          <div className="mb-8">
            <Link
              to="/#collections"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-cream transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>ALL COLLECTIONS</span>
            </Link>
          </div>

          {/* Header Metadata */}
          <div className="max-w-3xl space-y-6 mb-16 sm:mb-20">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
              <span>{collection.number}</span>
              <span className="text-white/20">/</span>
              <span>05</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-cream-light">
              {collection.title}
            </h1>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              {collection.descriptor}
            </p>
            <div className="w-16 h-[1px] bg-white/20" />
            
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              {collection.description}
            </p>
          </div>

          {/* Curated Photographic Sequence */}
          <div className="grid grid-cols-12 gap-8 sm:gap-12 mb-28">
            {collectionImages.map((img, idx) => (
              <div key={idx} className={`relative overflow-hidden bg-[#141412] border border-white/5 ${img.aspect} group`}>
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover image-zoom-editorial filter brightness-[0.88] group-hover:brightness-100 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-[#0D0D0C]/90 to-transparent flex items-end justify-between text-cream-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-mono tracking-wider">{img.caption}</span>
                  <span className="text-[10px] font-mono opacity-70 tracking-widest uppercase">{img.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Next Collection Banner with Dark Frosted Styling */}
          <div className="border-t border-white/10 pt-16">
            <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-4">
              Next Chapter
            </span>
            <Link
              to={`/collections/${nextCollection.slug}`}
              className="group block relative overflow-hidden rounded-sm h-[200px] sm:h-[260px] bg-[#161513] border border-white/10 text-cream-light shadow-xl"
            >
              <img
                src={nextCollection.image}
                alt={nextCollection.title}
                className="w-full h-full object-cover image-zoom-editorial filter brightness-[0.6] group-hover:brightness-[0.75] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0C]/90 via-[#0D0D0C]/40 to-transparent" />
              <div className="absolute inset-0 p-8 sm:p-12 flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs text-cream-light/70 tracking-widest block mb-2">
                    {nextCollection.number} — COLLECTION
                  </span>
                  <h3 className="font-serif text-3xl sm:text-5xl tracking-wide font-normal text-cream">
                    {nextCollection.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-muted tracking-wider mt-1">
                    {nextCollection.descriptor}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full glass-pill flex items-center justify-center group-hover:bg-cream group-hover:text-charcoal transition-all duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
