import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { BarbersSection } from './components/BarbersSection';
import { AmenitiesAndLocation } from './components/AmenitiesAndLocation';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F1F5F9] flex flex-col font-sans selection:bg-[#C8A882]/30 selection:text-[#FFFFFF]">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Services Menu & Prices */}
        <ServicesSection />

        {/* 4. Lookbook Gallery with Cuts */}
        <GallerySection />

        {/* 5. Team of Master Barbers */}
        <BarbersSection />

        {/* 6. Location, Amenities & Hours */}
        <AmenitiesAndLocation />
      </main>

      {/* 7. Floating Actions (WhatsApp Pulse FAB + Mobile Sticky Bottom Bar) */}
      <FloatingActions />

      {/* 8. Comprehensive Footer */}
      <Footer />
    </div>
  );
};

export default App;
