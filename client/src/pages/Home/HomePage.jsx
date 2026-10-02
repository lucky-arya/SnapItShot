import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/home/HeroSection';
import IntroSection from '../../components/home/IntroSection';
import SelectedWorkSection from '../../components/home/SelectedWorkSection';
import CollectionsSection from '../../components/home/CollectionsSection';
import FeaturedSection from '../../components/home/FeaturedSection';
import AboutSection from '../../components/home/AboutSection';
import ContactCTASection from '../../components/home/ContactCTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D0D0C] text-cream-light flex flex-col font-sans selection:bg-[#C9A888] selection:text-[#0D0D0C]">
      {/* Global Navigation with dynamic transparent-to-glassmorphism scroll states */}
      <Navbar />

      {/* Main Narrative Homepage Sequence */}
      <main className="flex-1">
        <HeroSection />
        <IntroSection />
        <SelectedWorkSection />
        <CollectionsSection />
        <FeaturedSection />
        <AboutSection />
        <ContactCTASection />
      </main>

      {/* Global Editorial Footer */}
      <Footer />
    </div>
  );
}
