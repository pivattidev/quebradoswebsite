import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Notícias', path: '/noticias' },
    { name: 'Elenco', path: '/elenco' },
    { name: 'Resultados', path: '/resultados' },
    { name: 'Títulos', path: '/titulos' },
    { name: 'Galeria', path: '/galeria' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://customer-assets.emergentagent.com/job_0ceb3f03-9c7c-49d8-a8aa-e9afdb1325f4/artifacts/gge94svi_logo%20quebrados.png"
              alt="Quebrados FC"
              className="h-14 w-14 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-primary leading-none">QUEBRADOS FC</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">News</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={`font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-primary hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-primary hover:text-primary hover:bg-primary/10"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Submit News CTA */}
            <Link to="/publicar" className="hidden md:block">
              <Button className="bg-primary text-primary-foreground hover:bg-primary-glow font-semibold shadow-gold transition-all duration-300">
                Publicar Notícia
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-border/50">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar notícias..."
                className="pl-10 bg-card border-border focus:border-primary"
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start font-medium ${
                      isActive(item.path)
                        ? 'text-primary bg-primary/10'
                        : 'text-primary hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <Link to="/publicar" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-glow mt-2">
                  Publicar Notícia
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};