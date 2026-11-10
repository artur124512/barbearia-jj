import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Check, Sparkles, Phone, ChevronRight, Star, HelpCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceCategory } from '../types';
import { getBookingUrl } from '../constants';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('todos');

  const categories: { key: ServiceCategory; label: string }[] = [
    { key: 'todos', label: 'Todos os Serviços' },
    { key: 'cabelo', label: 'Cabelo' },
    { key: 'barba', label: 'Barba' },
    { key: 'combos', label: 'Combos Especiais' },
    { key: 'tratamentos', label: 'Sobrancelha & Química' },
  ];

  const filteredServices = activeCategory === 'todos' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(service => service.category === activeCategory);

  const formatPrice = (value: number) => {
    if (value === 0) {
      return 'A combinar';
    }
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <section id="servicos" className="py-24 relative overflow-hidden bg-[#2D3142]">
      
      {/* Background Subtle Gradient & Light */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#7A1F2D]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1B2A4A]/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B2A4A]/80 border border-[#7A1F2D]/50 text-xs sm:text-sm font-semibold text-[#F8F9FA] shadow-[0_0_15px_rgba(122,31,45,0.3)]">
            <Sparkles className="w-4 h-4 text-[#E87A88]" />
            <span>Tabela de Serviços & Valores Oficiais</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F9FA] tracking-tight">
            Serviços & Preços <br />
            <span className="text-gold-gradient">Barbearia J&J</span>
          </h2>

          <p className="text-base sm:text-lg text-[#CED4DA]">
            Atendimento individual e cuidadoso feito pelo barbeiro Joares Meireles. 
            Navalhas esterilizadas e descartáveis, toalha quente e produtos de alta qualidade.
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 relative ${
                  isActive
                    ? 'bg-gradient-to-r from-[#7A1F2D] to-[#9B2A3B] text-[#F8F9FA] shadow-[0_0_20px_rgba(122,31,45,0.45)] border border-[#F8F9FA]/20 font-bold'
                    : 'bg-[#1B2A4A]/60 text-[#CED4DA] hover:text-[#F8F9FA] hover:bg-[#1B2A4A] border border-[#1B2A4A]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service) => {
              const bookingLink = getBookingUrl({ serviceId: service.id, serviceName: service.name });
              const isConsultation = service.price === 0;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={service.id}
                  className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group ${
                    service.popular
                      ? 'bg-gradient-to-b from-[#242836] via-[#242836] to-[#1E212D] border border-[#7A1F2D] shadow-[0_0_25px_rgba(122,31,45,0.3)] ring-1 ring-[#7A1F2D]/50'
                      : 'bg-[#242836] border border-[#1B2A4A] hover:border-[#7A1F2D]/70 hover:shadow-xl'
                  }`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#7A1F2D] to-[#9B2A3B] text-[#F8F9FA] text-[11px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1 border border-[#F8F9FA]/20">
                      <Star className="w-3 h-3 fill-[#F8F9FA]" />
                      <span>Mais Pedido</span>
                    </div>
                  )}

                  <div>
                    {/* Top Meta: Duration */}
                    <div className="flex items-center justify-between text-xs text-[#CED4DA] mb-3">
                      <div className="flex items-center gap-1.5 font-medium text-[#E87A88]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Duração: {service.duration}</span>
                      </div>
                      <span className="text-[11px] uppercase tracking-wider text-[#CED4DA]/70 font-mono">
                        {service.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F8F9FA] group-hover:text-[#E87A88] transition-colors mb-2 leading-snug">
                      {service.name}
                    </h3>

                    {/* Price in BRL or 'A combinar' */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className={`font-serif text-3xl font-extrabold ${isConsultation ? 'text-[#E87A88] text-2xl' : 'text-[#F8F9FA]'}`}>
                        {formatPrice(service.price)}
                      </span>
                      {isConsultation && (
                        <span className="text-xs text-[#CED4DA]">
                          (uso de produto & tamanho)
                        </span>
                      )}
                    </div>

                    {/* Detailed Description */}
                    <p className="text-sm text-[#CED4DA] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Included Features List */}
                    <div className="space-y-2 mb-8 pt-4 border-t border-[#1B2A4A]">
                      <div className="text-xs font-semibold text-[#F8F9FA] uppercase tracking-wider">
                        O que está incluso:
                      </div>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#CED4DA]">
                          <Check className="w-3.5 h-3.5 text-[#C44558] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual WhatsApp Booking Button */}
                  <div className="pt-2">
                    <a
                      href={bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 transform group-hover:-translate-y-0.5 ${
                        service.popular
                          ? 'bg-gradient-to-r from-[#7A1F2D] to-[#9B2A3B] hover:from-[#8C2434] hover:to-[#AF3145] text-[#F8F9FA] shadow-[0_0_20px_rgba(122,31,45,0.45)] border border-[#F8F9FA]/20'
                          : 'bg-[#1B2A4A] hover:bg-gradient-to-r hover:from-[#7A1F2D] hover:to-[#9B2A3B] text-[#F8F9FA] border border-[#1B2A4A] hover:border-[#F8F9FA]/20'
                      }`}
                    >
                      <Phone className="w-4 h-4 flex-shrink-0 text-current" />
                      <span>{isConsultation ? 'Consultar no WhatsApp' : 'Agendar no WhatsApp'}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Informative Banner for Chemical Treatments */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#1B2A4A]/70 border border-[#7A1F2D]/40 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#7A1F2D]/25 border border-[#7A1F2D]/50 flex items-center justify-center text-[#E87A88] flex-shrink-0 mt-0.5">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-base font-bold text-[#F8F9FA]">
              Nota sobre Químicas Capilares (Platinado, Luzes e Alisamentos):
            </h4>
            <p className="text-xs sm:text-sm text-[#CED4DA] mt-1 leading-relaxed">
              Para procedimentos de química, o valor final e o tempo necessário são definidos em conversa prévia com o 
              <strong className="text-[#F8F9FA] underline decoration-[#7A1F2D]"> Joares Meireles</strong>, levando em consideração a quantidade de produto utilizado, 
              o comprimento atual e o estado dos fios para garantir saúde capilar e um resultado impecável.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
