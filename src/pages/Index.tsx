import { useState, useEffect } from 'react';
import EntranceSplash from '@/components/EntranceSplash';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SourceSection from '@/components/SourceSection';
import PuritySection from '@/components/PuritySection';
import HeritageSection from '@/components/HeritageSection';
import SustainabilitySection from '@/components/SustainabilitySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleEnter = () => {
    setShowSplash(false);
    setShowContent(true);
  };

  // Auto-enter after a short delay for returning visitors
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setShowSplash(false);
      setShowContent(true);
    }
  }, []);

  useEffect(() => {
    if (showContent) {
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, [showContent]);

  return (
    <div className="min-h-screen bg-background">
      {/* Entrance Splash */}
      {showSplash && <EntranceSplash onEnter={handleEnter} />}

      {/* Main Content */}
      {showContent && (
        <>
          <Navigation />
          <main>
            <HeroSection />
            <SourceSection />
            <PuritySection />
            <HeritageSection />
            <SustainabilitySection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
