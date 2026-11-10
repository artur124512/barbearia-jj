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
    <section id="localizacao" className="py-24 relative overflow-hidden bg-gradient-to-b from-dark-base via-dark-card/30 to-dark-base border-t border-gold/15">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs sm:text-sm font-semibold text-gold">
            <MapPin className="w-4 h-4 text-gold" />
            <span>Localização & Comodidades</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Venha nos Visitar na <br />
            <span className="text-gold-gradient">Vila Paiva</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-muted">
            A Barbearia J&J está de portas abertas para oferecer a você um atendimento individualizado com Joares Meireles.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Address, Opening Hours & Google Maps Embed */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-dark-card border border-gold/30 shadow-card-dark space-y-5">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center flex-shrink-0 text-gold shadow-gold-glow">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">Endereço da Barbearia J&J</h3>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed font-medium">
                    {BARBERSHOP_INFO.address}
                  </p>
                  <p className="text-xs text-gold/90 mt-0.5">
                    CEP: {BARBERSHOP_INFO.zipCode} • Vila Paiva, São Paulo - SP
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pt-4 border-t border-gold/15">
                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center flex-shrink-0 text-gold shadow-gold-glow">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">Telefone & WhatsApp</h3>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gold hover:underline mt-1 block"
                  >
                    {BARBERSHOP_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Atendimento e dúvidas diretamente com Joares
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-gold/15">
                <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center flex-shrink-0 text-gold shadow-gold-glow">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">Horário de Funcionamento</h3>
                  <div className="space-y-1 text-sm text-slate-300 mt-1">
                    <p className="font-medium text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      {BARBERSHOP_INFO.hours.weekdays}
                    </p>
                    <p className="text-xs text-slate-500">
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
                  className="flex-1 py-2.5 px-4 rounded-xl bg-dark-base hover:bg-dark-cardHover border border-gold/40 hover:border-gold text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-gold" />
                  <span>Como Chegar (Maps/Waze)</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto text-slate-500" />
                </a>

                <a
                  href={getWhatsAppUrl("Olá, Joares! Gostaria de agendar um horário na Barbearia J&J.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-gold-gradient text-dark-base text-xs font-bold flex items-center justify-center gap-1.5 shadow-gold-glow hover:bg-gold-gradient-hover"
                >
                  <Phone className="w-4 h-4" />
                  <span>Agendar no Whats</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps para R. Cel. Jordão, 814 - Vila Paiva */}
            <div className="rounded-2xl overflow-hidden border border-gold/30 shadow-2xl h-[280px] bg-dark-card relative">
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
                    className="p-5 sm:p-6 rounded-2xl bg-dark-card border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-gold-glow/20 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-dark-base border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold-gradient group-hover:text-dark-base group-hover:shadow-gold-glow transition-all duration-300 mb-4">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="font-serif text-base font-bold text-white group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-muted mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gold/10 flex items-center gap-1.5 text-[11px] font-semibold text-gold">
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
