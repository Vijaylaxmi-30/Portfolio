import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiFileText, FiMail } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/80 shadow-xs'
          : 'bg-[#0a0a0a]/60 backdrop-blur-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Personal Brand */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 hover:text-emerald-500 transition-colors"
            >
              Vijay Laxmi<span className="text-emerald-500">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-zinc-500 hover:text-emerald-500 font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="./VIJAY_LAXMI_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md border border-white/5 text-zinc-400 hover:border-emerald-500 hover:text-emerald-500 hover:bg-emerald-950/50 transition-all duration-200"
            >
              <FiFileText className="w-3.5 h-3.5 text-emerald-500" />
              Resume
            </a>
            <a
              href="mailto:vijaylaxmi.codes@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-md bg-emerald-500 text-zinc-100 hover:bg-emerald-500 shadow-xs transition-all duration-200"
            >
              <FiMail className="w-3.5 h-3.5" />
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="./VIJAY_LAXMI_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded border border-white/5 text-zinc-400"
            >
              <FiFileText className="w-3 h-3 text-emerald-500" />
              Resume
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-500 hover:text-zinc-100 hover:bg-zinc-900/40 backdrop-blur-md focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-md border-b border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/60 shadow-none hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-500 animate-fadeIn">
          <nav className="px-4 pt-3 pb-5 space-y-1 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-zinc-400 hover:bg-emerald-950 hover:text-emerald-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-2">
              <a
                href="./VIJAY_LAXMI_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-center rounded-md border border-white/5 text-zinc-400 font-semibold text-sm hover:bg-zinc-900/40 backdrop-blur-md flex items-center justify-center gap-2"
              >
                <FiFileText className="w-4 h-4 text-emerald-500" />
                View Resume (PDF)
              </a>
              <a
                href="mailto:vijaylaxmi.codes@gmail.com"
                className="w-full py-2.5 px-4 text-center rounded-md bg-emerald-500 text-zinc-100 font-semibold text-sm hover:bg-emerald-500 flex items-center justify-center gap-2"
              >
                <FiMail className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;









