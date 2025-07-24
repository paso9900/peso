import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AlgorithmSection from '@/components/AlgorithmSection';
import PsychologySection from '@/components/PsychologySection';
import IslamicSection from '@/components/IslamicSection';
import InteractiveDemo from '@/components/InteractiveDemo';
import TechnicalSection from '@/components/TechnicalSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <HeroSection />
      <AlgorithmSection />
      <PsychologySection />
      <IslamicSection />
      <InteractiveDemo />
      <TechnicalSection />
      <Footer />
    </div>
  );
};

export default Index;
