import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/GenBrightSchoolLogo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Learning', href: '#' },
    { name: 'Campus', href: '#' },
    { name: 'Life at GenBright', href: '#' },
    { name: 'Admissions', href: '#' },
    { name: 'About Us', href: '#' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 bg-white/90 backdrop-blur-xl border-b border-gray-100 ${scrolled ? 'shadow-sm py-1' : 'py-1.5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center cursor-pointer">
            <img 
              src={logo} 
              alt="GenBright World School Logo" 
              className={`${scrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'} w-auto object-contain transition-all duration-500`} 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] lg:text-[15px] font-bold uppercase tracking-widest text-gray-700 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-[14px] font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors shadow-sm">
              Book a Campus Tour
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-[15px] font-bold uppercase tracking-widest text-gray-800 hover:text-black hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full text-left block px-3 py-2 mt-4 rounded-md text-base font-medium bg-gray-900 text-white hover:bg-gray-800">
              Book a Campus Tour
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
