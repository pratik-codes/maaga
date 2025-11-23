import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO, NAVBAR } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled || isOpen 
          ? 'bg-white border-gray-100 py-2 shadow-sm' 
          : 'bg-white/90 border-transparent py-3 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Logo className="w-full h-full" />
            </div>
            <div className="flex flex-col justify-center">
                <span className="font-serif font-bold text-xl tracking-wide text-maaga-navy leading-none">
                    {COMPANY_INFO.name}
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.25em] text-maaga-blue font-medium mt-1">
                    {NAVBAR.brandSubtitle}
                </span>
            </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-maaga-charcoal hover:text-maaga-blue transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-maaga-blue after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-7 py-3 bg-maaga-navy text-white font-medium text-sm rounded-sm hover:bg-maaga-blue transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            {NAVBAR.ctaText}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-maaga-navy p-2 hover:bg-gray-50 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-maaga-navy text-lg font-serif font-medium border-b border-gray-50 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="w-full text-center px-5 py-4 bg-maaga-navy text-white font-medium mt-4"
            onClick={() => setIsOpen(false)}
          >
            {NAVBAR.mobileCTA}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
