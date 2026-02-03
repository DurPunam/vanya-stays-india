import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DestinationsGrid from '@/components/DestinationsGrid';
import TrendingStays from '@/components/TrendingStays';
import WhyVanyaStays from '@/components/WhyVanyaStays';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DestinationsGrid />
      <TrendingStays />
      <WhyVanyaStays />
      <Footer />
    </div>
  );
};

export default Index;
