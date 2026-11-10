import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SaaSFeature } from './components/SaaSFeature';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { BarbersSection } from './components/BarbersSection';
import { AmenitiesAndLocation } from './components/AmenitiesAndLocation';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D0D10] text-[#E4E4E7] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. SaaS Booking Spotlight Section */}
        <SaaSFeature />

        {/* 4. Services Menu & Prices */}
        <ServicesSection />

        {/* 5. Lookbook Gallery with Cuts */}
        <GallerySection />

        {/* 6. Team of Master Barbers */}
        <BarbersSection />

        {/* 7. Location, Amenities & Hours */}
        <AmenitiesAndLocation />
      </main>

      {/* 8. Floating Actions (WhatsApp Pulse FAB + Mobile Sticky Bottom Bar) */}
      <FloatingActions />

      {/* 9. Comprehensive Footer */}
      <Footer />
    </div>
  );
};

export default App;
