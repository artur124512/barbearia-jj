import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Star, Calendar, Award, ChevronRight, CheckCircle2, Phone } from 'lucide-react';
import { BARBERS_DATA } from '../data/mockData';
import { getBookingUrl, getWhatsAppUrl, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants';

export const BarbersSection: React.FC = () => {
  const barber = BARBERS_DATA[0];
  const bookingLink = getBookingUrl({ barberId: barber.id });

  return (
    <section id="barbeiros" className="py-24 relative overflow-hidden bg-dark-base">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs sm:text-sm font-semibold text-gold">
            <Award className="w-4 h-4 text-gold" />
            <span>Mestre da Barbearia J&J</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Conheça o Barbeiro <br />
            <span className="text-gold-gradient">Joares Meireles</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-muted">
            Atendimento individual e exclusivo. Cada cliente recebe o cuidado e a dedicação 
            de quem realmente domina a arte clássica da navalha e as tendências modernas.
          </p>
        </div>

        {/* Featured Barber Profile Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-dark-card via-dark-card to-dark-base border border-gold/30 hover:border-gold shadow-2xl p-6 sm:p-10 relative overflow-hidden group"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Barber Portrait - Left */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gold/40 shadow-gold-glow/20">
                <img
                  src={barber.photo}
                  alt={barber.name}
                  className="w-full h-[400px] sm:h-[450px] object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-transparent to-transparent opacity-80" />

                {/* Rating badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-dark-base/85 backdrop-blur-md border border-gold/40 flex items-center gap-1.5 text-xs font-bold text-gold shadow-lg">
                  <Star className="w-4 h-4 fill-gold" />
                  <span>5.0 de Avaliação</span>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-card border-gold/30 text-center">
                  <span className="text-xs font-semibold text-slate-200">
                    {barber.experience} na profissão
                  </span>
                </div>
              </div>
            </div>

            {/* Barber Bio & Details - Right */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-gold tracking-wider uppercase mb-1">
                  <span>Fundador & Barbeiro Oficial</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  {barber.name}
                </h3>
                <p className="text-sm sm:text-base text-gold/90 font-medium mt-1">
                  {barber.role} na Barbearia J&J
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-muted leading-relaxed">
                Com anos de experiência dedicada e centenas de clientes satisfeitos, Joares Meireles construiu 
                a <strong className="text-white">Barbearia J&J</strong> para ser um refúgio de bom gosto e estilo masculino. 
                Aqui você não é apenas mais um número: cada corte é estudado para valorizar seus traços e estilo de vida.
              </p>

              {/* Differentials Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200 pt-2 border-t border-gold/15">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Especialista em Degradê & Fade</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Barba clássica com toalha quente</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Cortes clássicos na tesoura</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Química, platinado e luzes</span>
                </div>
              </div>

              {/* Buttons: Instagram + SaaS + WhatsApp */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-dark-base font-bold text-sm flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Horário com Joares</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl bg-dark-base hover:bg-dark-card border border-gold/30 hover:border-gold text-xs sm:text-sm font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>{INSTAGRAM_HANDLE}</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp com Joares"
                  className="py-3 px-4 rounded-xl bg-dark-base hover:bg-dark-card border border-gold/30 hover:border-gold text-green-400 flex items-center justify-center transition-colors"
                  title="Falar no WhatsApp"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
