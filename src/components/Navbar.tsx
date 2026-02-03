import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Heart, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Explore', href: '/resorts' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled || !isHomePage
          ? 'bg-card/95 backdrop-blur-xl shadow-vanya-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🌿</span>
            <span
              className={cn(
                'font-display text-2xl font-bold transition-colors duration-300',
                isScrolled || !isHomePage ? 'text-primary' : 'text-white'
              )}
            >
              Vanya Stays
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'font-medium transition-all duration-300 hover:opacity-80',
                  isScrolled || !isHomePage
                    ? 'text-foreground hover:text-primary'
                    : 'text-white/90 hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                'rounded-full transition-all duration-300',
                isScrolled || !isHomePage
                  ? 'text-foreground hover:bg-secondary'
                  : 'text-white hover:bg-white/10'
              )}
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                'rounded-full transition-all duration-300',
                isScrolled || !isHomePage
                  ? 'text-foreground hover:bg-secondary'
                  : 'text-white hover:bg-white/10'
              )}
            >
              <Heart className="w-5 h-5" />
            </Button>
            <Link to="/auth">
              <Button
                className={cn(
                  'rounded-full px-6 transition-all duration-300',
                  isScrolled || !isHomePage
                    ? 'btn-gradient'
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30'
                )}
              >
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'md:hidden p-2 rounded-full transition-colors',
              isScrolled || !isHomePage
                ? 'text-foreground'
                : 'text-white'
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-xl shadow-vanya-lg transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border flex gap-4">
            <Button variant="outline" className="flex-1 rounded-full">
              <Heart className="w-4 h-4 mr-2" />
              Wishlist
            </Button>
            <Link to="/auth" className="flex-1">
              <Button className="w-full rounded-full btn-gradient">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
