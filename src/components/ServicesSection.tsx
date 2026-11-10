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
    <section id="servicos" className="py-24 relative overflow-hidden bg-[#0F172A]">
      
      {/* Background Subtle Gradient & Light */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#C8A882]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#3B82F6]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E293B] border border-[#C8A882]/40 text-xs sm:text-sm font-semibold text-[#C8A882] shadow-[0_0_15px_rgba(200,168,130,0.2)]">
            <Sparkles className="w-4 h-4 text-[#C8A882]" />
            <span>Tabela de Serviços & Valores Oficiais</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] tracking-tight">
            Serviços & Preços <br />
            <span className="text-gold-gradient">Barbearia J&J</span>
          </h2>

          <p className="text-base sm:text-lg text-[#F1F5F9]/85">
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
                    ? 'bg-gradient-to-r from-[#DFCAAE] via-[#C8A882] to-[#A68358] text-[#0F172A] shadow-[0_0_20px_rgba(200,168,130,0.4)] border border-[#FFFFFF]/30 font-extrabold'
                    : 'bg-[#1E293B] text-[#F1F5F9]/80 hover:text-[#FFFFFF] hover:bg-[#26334D] border border-[#334155]'
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
                      ? 'bg-gradient-to-b from-[#1E293B] via-[#1E293B] to-[#0F172A] border border-[#C8A882] shadow-[0_0_25px_rgba(200,168,130,0.25)] ring-1 ring-[#C8A882]/40'
                      : 'bg-[#1E293B] border border-[#334155] hover:border-[#C8A882]/60 hover:shadow-xl'
                  }`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#DFCAAE] to-[#C8A882] text-[#0F172A] text-[11px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1 border border-[#FFFFFF]/30">
                      <Star className="w-3 h-3 fill-[#0F172A]" />
                      <span>Mais Pedido</span>
                    </div>
                  )}

                  <div>
                    {/* Top Meta: Duration */}
                    <div className="flex items-center justify-between text-xs text-[#94A3B8] mb-3">
                      <div className="flex items-center gap-1.5 font-medium text-[#C8A882]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Duração: {service.duration}</span>
                      </div>
                      <span className="text-[11px] uppercase tracking-wider text-[#94A3B8]/80 font-mono">
                        {service.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFFFFF] group-hover:text-[#DFCAAE] transition-colors mb-2 leading-snug">
                      {service.name}
                    </h3>

                    {/* Price in BRL or 'A combinar' */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className={`font-serif text-3xl font-extrabold ${isConsultation ? 'text-[#C8A882] text-2xl' : 'text-[#FFFFFF]'}`}>
                        {formatPrice(service.price)}
                      </span>
                      {isConsultation && (
                        <span className="text-xs text-[#94A3B8]">
                          (uso de produto & tamanho)
                        </span>
                      )}
                    </div>

                    {/* Detailed Description */}
                    <p className="text-sm text-[#F1F5F9]/80 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Included Features List */}
                    <div className="space-y-2 mb-8 pt-4 border-t border-[#334155]">
                      <div className="text-xs font-semibold text-[#FFFFFF] uppercase tracking-wider">
                        O que está incluso:
                      </div>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#F1F5F9]/85">
                          <Check className="w-3.5 h-3.5 text-[#C8A882] flex-shrink-0 mt-0.5" />
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
                          ? 'bg-gradient-to-r from-[#DFCAAE] via-[#C8A882] to-[#A68358] hover:from-[#E8D8C2] hover:to-[#B89366] text-[#0F172A] shadow-[0_0_20px_rgba(200,168,130,0.4)] border border-[#FFFFFF]/30'
                          : 'bg-[#0F172A] hover:bg-[#3B82F6] text-[#FFFFFF] border border-[#3B82F6]/50 hover:border-transparent'
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
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#1E293B]/80 border border-[#3B82F6]/30 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/15 border border-[#3B82F6]/40 flex items-center justify-center text-[#3B82F6] flex-shrink-0 mt-0.5">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-base font-bold text-[#FFFFFF]">
              Nota sobre Químicas Capilares (Platinado, Luzes e Alisamentos):
            </h4>
            <p className="text-xs sm:text-sm text-[#F1F5F9]/80 mt-1 leading-relaxed">
              Para procedimentos de química, o valor final e o tempo necessário são definidos em conversa prévia com o 
              <strong className="text-[#C8A882] font-semibold underline decoration-[#C8A882]/40"> Joares Meireles</strong>, levando em consideração a quantidade de produto utilizado, 
              o comprimento atual e o estado dos fios para garantir saúde capilar e um resultado impecável.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
