import React from 'react';
import { 
  MapPin, 
  Clock, 
  Wifi, 
  Car, 
  Gamepad2, 
  ShieldCheck, 
  ExternalLink,
  Navigation,
  Phone
} from 'lucide-react';
import { BARBERSHOP_INFO, getWhatsAppUrl } from '../constants';

export const AmenitiesAndLocation: React.FC = () => {
  const amenities = [
    {
      icon: Wifi,
      title: 'Wi-Fi Ultra Rápido',
      description: 'Conexão estável e tomadas disponíveis para você carregar seu celular na bancada.'
    },
    {
      icon: Gamepad2,
      title: 'Ambiente Climatizado & Aconchegante',
      description: 'Espaço pensado para seu conforto, poltrona de barbeiro ergonômica e som agradável.'
    },
    {
      icon: Car,
      title: 'Fácil Estacionamento na Vila Paiva',
      description: 'Localização tranquila na Rua Cel. Jordão com facilidade de parada em frente e arredores.'
    },
    {
      icon: ShieldCheck,
      title: 'Biossegurança & Higiene Total',
      description: 'Lâminas 100% descartáveis abertas na sua frente e toalhas higienizadas a cada cliente.'
    }
  ];

  const mapsQuery = encodeURIComponent(`${BARBERSHOP_INFO.address}, ${BARBERSHOP_INFO.zipCode}`);

  return (
    <section id="localizacao" className="py-24 relative overflow-hidden bg-[#2D3142] border-t border-[#1B2A4A]">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1B2A4A]/25 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B2A4A]/80 border border-[#7A1F2D]/50 text-xs sm:text-sm font-semibold text-[#F8F9FA] shadow-[0_0_15px_rgba(122,31,45,0.3)]">
            <MapPin className="w-4 h-4 text-[#E87A88]" />
            <span>Localização & Comodidades</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F9FA] tracking-tight">
            Venha nos Visitar na <br />
            <span className="text-gold-gradient">Vila Paiva</span>
          </h2>

          <p className="text-base sm:text-lg text-[#CED4DA]">
            A Barbearia J&J está de portas abertas para oferecer a você um atendimento individualizado com Joares Meireles.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Address, Opening Hours & Google Maps Embed */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#242836] border border-[#1B2A4A] shadow-2xl space-y-5">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#1B2A4A] border border-[#7A1F2D]/50 flex items-center justify-center flex-shrink-0 text-[#E87A88] shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#F8F9FA]">Endereço da Barbearia J&J</h3>
                  <p className="text-sm text-[#CED4DA] mt-1 leading-relaxed font-medium">
                    {BARBERSHOP_INFO.address}
                  </p>
                  <p className="text-xs text-[#E87A88] mt-0.5">
                    CEP: {BARBERSHOP_INFO.zipCode} • Vila Paiva, São Paulo - SP
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#1B2A4A]">
                <div className="w-11 h-11 rounded-xl bg-[#1B2A4A] border border-[#7A1F2D]/50 flex items-center justify-center flex-shrink-0 text-[#E87A88] shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#F8F9FA]">Telefone & WhatsApp</h3>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#F8F9FA] hover:text-[#E87A88] hover:underline mt-1 block"
                  >
                    {BARBERSHOP_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#CED4DA] mt-0.5">
                    Atendimento e dúvidas diretamente com Joares
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#1B2A4A]">
                <div className="w-11 h-11 rounded-xl bg-[#1B2A4A] border border-[#7A1F2D]/50 flex items-center justify-center flex-shrink-0 text-[#E87A88] shadow-md">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#F8F9FA]">Horário de Funcionamento</h3>
                  <div className="space-y-1 text-sm text-[#CED4DA] mt-1">
                    <p className="font-medium text-[#F8F9FA] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      {BARBERSHOP_INFO.hours.weekdays}
                    </p>
                    <p className="text-xs text-[#CED4DA]/70">
                      {BARBERSHOP_INFO.hours.sundaysAndMondays}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#1B2A4A] hover:bg-[#1B2A4A]/80 border border-[#1B2A4A] hover:border-[#7A1F2D] text-xs font-semibold text-[#F8F9FA] flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <Navigation className="w-4 h-4 text-[#E87A88]" />
                  <span>Como Chegar (Maps/Waze)</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto text-[#CED4DA]" />
                </a>

                <a
                  href={getWhatsAppUrl("Olá, Joares! Gostaria de agendar um horário na Barbearia J&J.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#7A1F2D] to-[#9B2A3B] text-[#F8F9FA] text-xs font-bold flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(122,31,45,0.45)] hover:from-[#8C2434] hover:to-[#AF3145] border border-[#F8F9FA]/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Agendar no Whats</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps para R. Cel. Jordão, 814 - Vila Paiva */}
            <div className="rounded-2xl overflow-hidden border border-[#1B2A4A] shadow-2xl h-[280px] bg-[#242836] relative">
              <iframe
                title="Localização Barbearia J&J"
                src={`https://maps.google.com/maps?q=${encodeURIComponent('R. Cel. Jordão, 814 - Vila Paiva, São Paulo - SP, 02075-030')}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Column 2: Amenities */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {amenities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-5 sm:p-6 rounded-2xl bg-[#242836] border border-[#1B2A4A] hover:border-[#7A1F2D]/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(122,31,45,0.3)] group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#1B2A4A] border border-[#7A1F2D]/40 flex items-center justify-center text-[#E87A88] group-hover:bg-gradient-to-r group-hover:from-[#7A1F2D] group-hover:to-[#9B2A3B] group-hover:text-[#F8F9FA] group-hover:shadow-[0_0_15px_rgba(122,31,45,0.4)] transition-all duration-300 mb-4">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="font-serif text-base font-bold text-[#F8F9FA] group-hover:text-[#E87A88] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#CED4DA] mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#1B2A4A] flex items-center gap-1.5 text-[11px] font-semibold text-[#E87A88]">
                      <span>Incluso em todos os atendimentos</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
