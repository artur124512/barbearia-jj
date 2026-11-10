import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Check, Sparkles, Calendar, ChevronRight, Star, HelpCircle } from 'lucide-react';
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
    <section id="servicos" className="py-24 relative overflow-hidden bg-dark-base">
      
      {/* Background Subtle Gradient & Light */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs sm:text-sm font-semibold text-gold">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Tabela de Serviços & Valores Oficiais</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Serviços & Preços <br />
            <span className="text-gold-gradient">Barbearia J&J</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-muted">
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
                    ? 'bg-gold-gradient text-dark-base shadow-gold-glow font-bold'
                    : 'bg-dark-card text-slate-300 hover:text-white hover:bg-dark-cardHover border border-gold/20 hover:border-gold/50'
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
              const bookingLink = getBookingUrl({ serviceId: service.id });
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
                      ? 'bg-gradient-to-b from-dark-card via-dark-card to-dark-base border border-gold shadow-gold-glow/40 ring-1 ring-gold/40'
                      : 'bg-dark-card border border-gold/20 hover:border-gold/50 hover:shadow-card-dark'
                  }`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gold-gradient text-dark-base text-[11px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-dark-base" />
                      <span>Mais Pedido</span>
                    </div>
                  )}

                  <div>
                    {/* Top Meta: Duration */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <div className="flex items-center gap-1.5 font-medium text-gold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Duração: {service.duration}</span>
                      </div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 font-mono">
                        {service.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-gold transition-colors mb-2 leading-snug">
                      {service.name}
                    </h3>

                    {/* Price in BRL or 'A combinar' */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className={`font-serif text-3xl font-extrabold ${isConsultation ? 'text-amber-400 text-2xl' : 'text-gold-gradient'}`}>
                        {formatPrice(service.price)}
                      </span>
                      {isConsultation && (
                        <span className="text-xs text-slate-400">
                          (uso de produto & tamanho)
                        </span>
                      )}
                    </div>

                    {/* Detailed Description */}
                    <p className="text-sm text-slate-muted leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Included Features List */}
                    <div className="space-y-2 mb-8 pt-4 border-t border-gold/15">
                      <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        O que está incluso:
                      </div>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual SaaS Booking Button */}
                  <div className="pt-2">
                    <a
                      href={bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 transform group-hover:-translate-y-0.5 ${
                        service.popular
                          ? 'bg-gold-gradient hover:bg-gold-gradient-hover text-dark-base shadow-gold-glow'
                          : 'bg-dark-base hover:bg-gold-gradient hover:text-dark-base text-slate-200 border border-gold/40 hover:border-transparent'
                      }`}
                    >
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{isConsultation ? 'Consultar / Agendar com Joares' : 'Agendar este serviço'}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Informative Banner for Chemical Treatments */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-dark-card border border-gold/30 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-base font-bold text-white">
              Nota sobre Químicas Capilares (Platinado, Luzes e Alisamentos):
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              Para procedimentos de química, o valor final e o tempo necessário são definidos em conversa prévia com o 
              <strong className="text-gold"> Joares Meireles</strong>, levando em consideração a quantidade de produto utilizado, 
              o comprimento atual e o estado dos fios para garantir saúde capilar e um resultado impecável.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
