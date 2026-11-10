import React from 'react';
import { Scissors, Instagram, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { BARBERSHOP_INFO, getWhatsAppUrl, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E212D] border-t border-[#1B2A4A] pt-16 pb-24 sm:pb-12 text-[#CED4DA] relative overflow-hidden">
      
      {/* Decorative top wine line glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#7A1F2D] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1B2A4A]">
          
          {/* Brand & Mission - 4 cols */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1B2A4A] border border-[#7A1F2D]/50 text-[#F8F9FA] shadow-[0_0_15px_rgba(122,31,45,0.35)]">
                <Scissors className="w-5 h-5 -rotate-45" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-[#F8F9FA]">
                  BARBEARIA <span className="text-gold-gradient">J&J</span>
                </span>
                <span className="block text-[10px] tracking-[0.25em] text-[#CED4DA] uppercase font-medium">
                  Por Joares Meireles
                </span>
              </div>
            </div>

            <p className="text-sm text-[#CED4DA] leading-relaxed">
              Atendimento exclusivo e individualizado pelo barbeiro Joares Meireles. 
              Ambiente climatizado, pontualidade, biossegurança e agendamento direto pelo WhatsApp.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Joares Meireles"
                className="w-10 h-10 rounded-xl bg-[#1B2A4A] border border-[#1B2A4A] hover:border-[#7A1F2D] flex items-center justify-center text-[#CED4DA] hover:text-[#F8F9FA] transition-colors shadow-md"
              >
                <Instagram className="w-5 h-5 text-pink-400" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Barbearia J&J"
                className="w-10 h-10 rounded-xl bg-[#1B2A4A] border border-[#1B2A4A] hover:border-[#7A1F2D] flex items-center justify-center text-[#CED4DA] hover:text-green-400 transition-colors shadow-md"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#F8F9FA] tracking-wide">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#F8F9FA] transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#F8F9FA] transition-colors">Serviços & Preços</a>
              </li>
              <li>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-[#F8F9FA] transition-colors flex items-center gap-1.5 text-[#E87A88] font-medium">
                  <span>Agendamento WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#F8F9FA] transition-colors">Trabalhos</a>
              </li>
              <li>
                <a href="#barbeiros" className="hover:text-[#F8F9FA] transition-colors">Joares Meireles</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#F8F9FA] transition-colors">Localização</a>
              </li>
            </ul>
          </div>

          {/* Services Quicklist - 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#F8F9FA] tracking-wide">
              Tabela de Serviços
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center justify-between">
                <span>Corte de Cabelo</span>
                <span className="text-xs text-[#E87A88] font-semibold">R$ 45,00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Barba</span>
                <span className="text-xs text-[#E87A88] font-semibold">R$ 30,00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Acabamento (Pezinho)</span>
                <span className="text-xs text-[#E87A88] font-semibold">R$ 25,00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sobrancelha</span>
                <span className="text-xs text-[#E87A88] font-semibold">R$ 15,00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Combo Corte + Barba</span>
                <span className="text-xs text-[#E87A88] font-semibold">R$ 70,00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Química (Luzes/Platinado)</span>
                <span className="text-xs text-[#E87A88] font-semibold">A combinar</span>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Info - 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#F8F9FA] tracking-wide">
              Contato & Local
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E87A88] flex-shrink-0 mt-1" />
                <span>{BARBERSHOP_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E87A88] flex-shrink-0" />
                <a href={`tel:${BARBERSHOP_INFO.phoneDisplay}`} className="hover:text-[#F8F9FA] transition-colors">
                  {BARBERSHOP_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#F8F9FA] transition-colors">
                  {INSTAGRAM_HANDLE}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E87A88] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#F8F9FA]">{BARBERSHOP_INFO.hours.weekdays}</p>
                  <p className="text-xs text-[#CED4DA]/70 mt-0.5">{BARBERSHOP_INFO.hours.sundaysAndMondays}</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA in Footer */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-[#F8F9FA] bg-gradient-to-r from-[#7A1F2D] to-[#9B2A3B] hover:from-[#8C2434] hover:to-[#AF3145] shadow-[0_0_20px_rgba(122,31,45,0.45)] border border-[#F8F9FA]/20"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Agendar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CED4DA] text-center sm:text-left">
          <div>
            <p>
              © {currentYear} {BARBERSHOP_INFO.name}. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-[11px] text-[#CED4DA]/70">
              Barbearia J&J • Barbeiro Oficial: {BARBERSHOP_INFO.barberName}
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-[#1B2A4A] border border-[#7A1F2D]/30 flex items-center gap-2 text-[#F8F9FA]">
            <ShieldCheck className="w-4 h-4 text-[#E87A88]" />
            <span>Atendimento com hora marcada via WhatsApp</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
