
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-4 md:px-8",
        scrolled ? "bg-tech-navy/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="font-bold text-tech-teal text-xl">
          YT<span className="text-tech-light-slate">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link text-sm"
            >
              <span className="text-tech-teal mr-1">{(index + 1).toString().padStart(2, '0')}.</span>
              {link.name}
            </a>
          ))}
          <a 
            href="/yassinetbessi-resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-primary text-sm"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-tech-teal" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-tech-light-navy/98 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className="nav-link text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-tech-teal mr-2">{(index + 1).toString().padStart(2, '0')}.</span>
              {link.name}
            </a>
          ))}
          <a 
            href="/yassinetbessi-resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-primary mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
