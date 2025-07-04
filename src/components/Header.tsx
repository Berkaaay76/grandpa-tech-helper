
import { useState } from "react";
import { Menu, X, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">TechApp</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors text-lg">
              Funktionen
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors text-lg">
              Bewertungen
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors text-lg">
              Kontakt
            </a>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-6 py-3">
              App herunterladen
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü umschalten"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Funktionen
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 transition-colors text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Bewertungen
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </a>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg mt-4">
                App herunterladen
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
