import React, { useState, useEffect } from 'react';
import { Scissors, Menu, X, Phone, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../constants';

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
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#C8A882]/30 via-[#1E293B] to-[#0F172A] border border-[#C8A882]/40 shadow-[0_0_15px_rgba(200,168,130,0.3)] group-hover:border-[#DFCAAE] transition-all duration-300">
              <Scissors className="w-5 h-5 text-[#C8A882] transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#3B82F6] rounded-full animate-ping opacity-75" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#FFFFFF] flex items-center gap-1.5">
                BARBEARIA <span className="text-gold-gradient">J&J</span>
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-[#94A3B8] uppercase font-medium">
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
                className="text-sm font-medium text-[#F1F5F9]/85 hover:text-[#FFFFFF] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C8A882] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm text-[#0F172A] bg-gradient-to-r from-[#DFCAAE] via-[#C8A882] to-[#A68358] hover:from-[#E8D8C2] hover:to-[#B89366] shadow-[0_0_20px_rgba(200,168,130,0.4)] hover:shadow-[0_0_30px_rgba(200,168,130,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden group border border-[#FFFFFF]/30"
            >
              <span className="absolute inset-0 animate-shimmer" />
              <Phone className="w-4 h-4 text-[#0F172A] transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10 tracking-wide">Agendar no WhatsApp</span>
              <Sparkles className="w-3.5 h-3.5 text-[#0F172A]/80" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-[#0F172A] bg-gradient-to-r from-[#DFCAAE] to-[#C8A882] shadow-[0_0_15px_rgba(200,168,130,0.4)] flex items-center gap-1 border border-[#FFFFFF]/30"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Abrir menu"
              className="p-2 rounded-lg bg-[#1E293B] border border-[#334155] text-[#FFFFFF] hover:text-[#C8A882] hover:border-[#C8A882] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-header border-b border-[#C8A882]/25 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-[#F1F5F9] hover:text-[#FFFFFF] hover:bg-[#1E293B]/60 transition-colors"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#C8A882]/25 flex flex-col gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold text-sm text-[#0F172A] bg-gradient-to-r from-[#DFCAAE] via-[#C8A882] to-[#A68358] shadow-[0_0_20px_rgba(200,168,130,0.4)] border border-[#FFFFFF]/30"
            >
              <Phone className="w-4 h-4" />
              <span>Agendar no WhatsApp com Joares</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
