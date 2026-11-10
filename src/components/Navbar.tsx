import React, { useState, useEffect } from 'react';
import { Scissors, Menu, X, Calendar, Sparkles, ExternalLink } from 'lucide-react';
import { SAAS_BOOKING_URL } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços & Preços', href: '#servicos' },
    { name: 'Agendamento Online', href: '#saas-booking' },
    { name: 'Trabalhos', href: '#galeria' },
    { name: 'Joares Meireles', href: '#barbeiros' },
    { name: 'Localização', href: '#localizacao' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header py-3.5 shadow-2xl backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-gold/20 via-dark-card to-dark-base border border-gold/40 shadow-gold-glow group-hover:border-gold transition-all duration-300">
              <Scissors className="w-5 h-5 text-gold transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gold rounded-full animate-ping opacity-75" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white flex items-center gap-1.5">
                BARBEARIA <span className="text-gold-gradient">J&J</span>
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-slate-muted uppercase font-medium">
                Por Joares Meireles
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
                {link.name === 'Agendamento Online' && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-gold/20 text-gold rounded border border-gold/30">
                    24h
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={SAAS_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-dark-base bg-gold-gradient hover:bg-gold-gradient-hover shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden group"
            >
              <span className="absolute inset-0 animate-shimmer" />
              <Calendar className="w-4 h-4 text-dark-base transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10 font-bold tracking-wide">Agendar com Joares</span>
              <Sparkles className="w-3.5 h-3.5 text-dark-base/80" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={SAAS_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-dark-base bg-gold-gradient shadow-gold-glow flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Abrir menu"
              className="p-2 rounded-lg bg-dark-card border border-gold/30 text-gold hover:text-white hover:border-gold transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-header border-b border-gold/20 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-gold hover:bg-gold/10 transition-colors"
              >
                <span>{link.name}</span>
                {link.name === 'Agendamento Online' && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-gold/20 text-gold rounded border border-gold/30">
                    Sistema Online
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-gold/20 flex flex-col gap-2">
            <a
              href={SAAS_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold text-sm text-dark-base bg-gold-gradient shadow-gold-glow"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Horário com Joares Meireles</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
