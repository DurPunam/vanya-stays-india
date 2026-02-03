import SearchBar from './SearchBar';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-resort.jpg';

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Indian Resort"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gold/20 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-1/3 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-white/90 text-sm font-medium">India's Premier Resort Platform</span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
          Discover India's Most
          <span className="block mt-2 bg-gradient-to-r from-gold to-saffron bg-clip-text text-transparent">
            Beautiful Escapes
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
          From serene beaches of Goa to majestic palaces of Rajasthan, 
          find your perfect retreat with Vanya Stays
        </p>

        {/* Search Bar */}
        <div className="animate-scale-in" style={{ animationDelay: '400ms' }}>
          <SearchBar />
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
          {['Weekend Getaways', 'Honeymoon Specials', 'Family Packages', 'Adventure Trips'].map((link) => (
            <Button
              key={link}
              variant="ghost"
              className="rounded-full text-white/80 hover:text-white hover:bg-white/10 border border-white/20"
            >
              {link}
            </Button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
