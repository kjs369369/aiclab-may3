import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-morphism' : 'bg-navy-900/80 backdrop-blur-md'
    } border-b border-navy-700`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-xl font-bold gradient-text animate-gradient cursor-pointer"
            onClick={() => scrollToSection('#home')}
            data-testid="logo-link"
          >
김진수 Kimjinsoo
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('#home')}
              className="hover:text-blue-400 transition-colors duration-300"
              data-testid="nav-home"
            >
              홈
            </button>
            <button 
              onClick={() => scrollToSection('#about')}
              className="hover:text-blue-400 transition-colors duration-300"
              data-testid="nav-about"
            >
              소개
            </button>
            <button 
              onClick={() => scrollToSection('#projects')}
              className="hover:text-blue-400 transition-colors duration-300"
              data-testid="nav-projects"
            >
              프로젝트
            </button>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="hover:text-blue-400 transition-colors duration-300"
              data-testid="nav-contact"
            >
              연락처
            </button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-slate-300 hover:text-white hover:bg-navy-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <i className="fas fa-bars text-xl"></i>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-navy-700 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('#home')}
                className="text-left hover:text-blue-400 transition-colors duration-300"
                data-testid="mobile-nav-home"
              >
                홈
              </button>
              <button 
                onClick={() => scrollToSection('#about')}
                className="text-left hover:text-blue-400 transition-colors duration-300"
                data-testid="mobile-nav-about"
              >
                소개
              </button>
              <button 
                onClick={() => scrollToSection('#projects')}
                className="text-left hover:text-blue-400 transition-colors duration-300"
                data-testid="mobile-nav-projects"
              >
                프로젝트
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="text-left hover:text-blue-400 transition-colors duration-300"
                data-testid="mobile-nav-contact"
              >
                연락처
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
