import React from 'react';
import { Scissors, Instagram, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { BARBERSHOP_INFO, getWhatsAppUrl, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] border-t border-[#1E293B] pt-16 pb-24 sm:pb-12 text-[#94A3B8] relative overflow-hidden">
      
      {/* Decorative top oak line glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#C8A882] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1E293B]">
          
          {/* Brand & Mission - 4 cols */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1E293B] border border-[#C8A882]/40 text-[#C8A882] shadow-[0_0_15px_rgba(200,168,130,0.25)]">
                <Scissors className="w-5 h-5 -rotate-45" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-[#FFFFFF]">
                  BARBEARIA <span className="text-gold-gradient">J&J</span>
                </span>
                <span className="block text-[10px] tracking-[0.25em] text-[#94A3B8] uppercase font-medium">
                  Por Joares Meireles
                </span>
              </div>
            </div>

            <p className="text-sm text-[#F1F5F9]/80 leading-relaxed">
              Atendimento exclusivo e individualizado pelo barbeiro Joares Meireles. 
              Ambiente climatizado, pontualidade, biossegurança e agendamento direto pelo WhatsApp.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Joares Meireles"
                className="w-10 h-10 rounded-xl bg-[#1E293B] border border-[#334155] hover:border-[#C8A882] flex items-center justify-center text-[#F1F5F9] hover:text-[#FFFFFF] transition-colors shadow-md"
              >
                <Instagram className="w-5 h-5 text-pink-400" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Barbearia J&J"
                className="w-10 h-10 rounded-xl bg-[#1E293B] border border-[#334155] hover:border-[#C8A882] flex items-center justify-center text-[#F1F5F9] hover:text-green-400 transition-colors shadow-md"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#FFFFFF] tracking-wide">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#FFFFFF] transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#FFFFFF] transition-colors">Serviços & Preços</a>
              </li>
              <li>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFFFFF] transition-colors flex items-center gap-1.5 text-[#C8A882] font-semibold">
                  <span>Agendamento WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#FFFFFF] transition-colors">Trabalhos</a>
              </li>
              <li>
                <a href="#barbeiros" className="hover:text-[#FFFFFF] transition-colors">Joares Meireles</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#FFFFFF] transition-colors">Localização</a>
              </li>
            </ul>
          </div>

          {/* Services Quicklist - 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#FFFFFF] tracking-wide">
              Tabela de Serviços
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center justify-between">
                <span>Corte de Cabelo</span>
                <span className="text-xs text-[#C8A882] font-bold">R$ 45,00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Barba</span>
                <span className="text-xs text-[#C8A882] font-bold">R$ 30,00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Acabamento (Pezinho)</span>
                <span className="text-xs text-[#C8A882] font-bold">R$ 25,00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sobrancelha</span>
                <span className="text-xs text-[#C8A882] font-bold">R$ 15,00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Combo Corte + Barba</span>
                <span className="text-xs text-[#C8A882] font-bold">R$ 70,00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Química (Luzes/Platinado)</span>
                <span className="text-xs text-[#3B82F6] font-semibold">A combinar</span>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Info - 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#FFFFFF] tracking-wide">
              Contato & Local
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A882] flex-shrink-0 mt-1" />
                <span>{BARBERSHOP_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A882] flex-shrink-0" />
                <a href={`tel:${BARBERSHOP_INFO.phoneDisplay}`} className="hover:text-[#FFFFFF] transition-colors">
                  {BARBERSHOP_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFFFFF] transition-colors">
                  {INSTAGRAM_HANDLE}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C8A882] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#FFFFFF]">{BARBERSHOP_INFO.hours.weekdays}</p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">{BARBERSHOP_INFO.hours.sundaysAndMondays}</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA in Footer */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-[#0F172A] bg-gradient-to-r from-[#DFCAAE] via-[#C8A882] to-[#A68358] hover:from-[#E8D8C2] hover:to-[#B89366] shadow-[0_0_20px_rgba(200,168,130,0.4)] border border-[#FFFFFF]/30"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Agendar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8] text-center sm:text-left">
          <div>
            <p>
              © {currentYear} {BARBERSHOP_INFO.name}. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-[11px] text-[#94A3B8]/70">
              Barbearia J&J • Barbeiro Oficial: {BARBERSHOP_INFO.barberName}
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-[#1E293B] border border-[#C8A882]/30 flex items-center gap-2 text-[#FFFFFF]">
            <ShieldCheck className="w-4 h-4 text-[#C8A882]" />
            <span>Atendimento com hora marcada via WhatsApp</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
