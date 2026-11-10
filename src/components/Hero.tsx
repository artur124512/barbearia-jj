import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Star, ShieldCheck, Sparkles, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { SAAS_BOOKING_URL, getWhatsAppUrl } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] opacity-60" />
        <div className="absolute top-10 left-10 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-900/15 rounded-full blur-[120px]" />

        {/* Vintage Background Texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity filter contrast-125 scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/d/1T8JMYoD0-SlnGVIdDR-k2bYQBMzyKpiz=w1200')`
          }}
        />
        
        {/* Gradient Overlay for ultra readable dark theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D10]/85 via-[#0D0D10]/95 to-[#0D0D10]" />
        
        {/* Grid lines texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(to right, #D4AF37 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Copy - Left column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6">
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card/90 border border-gold/30 shadow-gold-glow backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-gold animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-gold">
                Barbearia J&J • Atendimento Exclusivo com Joares Meireles
              </span>
            </motion.div>

            {/* Headline - Apenas o Nome Oficial */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight"
            >
              BARBEARIA <span className="text-gold-gradient">J&J</span>
            </motion.h1>

            {/* Subheadline ajustada sem buraco visual */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-slate-muted max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Corte, barba e acabamento impecáveis com atendimento individual feito pessoalmente pelo barbeiro <strong className="text-gold">Joares Meireles</strong>. 
              Ambiente climatizado, horário marcado e zero espera na Vila Paiva.
            </motion.p>

            {/* Quick Badges Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-slate-300 font-medium pt-1"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Atendimento 1 a 1 com Joares</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Cortes a partir de R$ 45</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Agendamento Online 24h</span>
              </div>
            </motion.div>

            {/* CTA Duplo com Destaque Forte para o Agendamento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              {/* Botão Primário: SaaS */}
              <a
                href={SAAS_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-dark-base bg-gold-gradient hover:bg-gold-gradient-hover shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <span className="absolute inset-0 animate-shimmer" />
                <Calendar className="w-5 h-5 text-dark-base group-hover:scale-110 transition-transform" />
                <span className="relative z-10 tracking-wide">Agendar Online com Joares</span>
                <ChevronRight className="w-4 h-4 text-dark-base group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Botão Secundário: WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-sm sm:text-base text-white bg-dark-card hover:bg-dark-cardHover border border-gold/30 hover:border-gold shadow-lg hover:shadow-gold-glow/40 transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                <span>Falar no WhatsApp</span>
              </a>
            </motion.div>

            {/* Micro info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-xs text-slate-500 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2 pt-1"
            >
              <Clock className="w-3.5 h-3.5 text-gold/70" />
              <span>Horário de Funcionamento: Terça a Sábado das 09:00 às 20:00</span>
            </motion.p>
          </div>

          {/* Hero Visual Card - Foto Real do Joares em Ação */}
          <div className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[340px] sm:max-w-md"
            >
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-gold/30 via-gold/10 to-transparent blur-sm" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-dark-card shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/d/1T8JMYoD0-SlnGVIdDR-k2bYQBMzyKpiz=w1200"
                  alt="Joares Meireles na Barbearia J&J"
                  className="w-full h-[380px] sm:h-[450px] object-cover object-top filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Image Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-transparent to-transparent opacity-80" />

                {/* Overlaid Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-dark-base/85 backdrop-blur-md border border-gold/40 text-xs font-semibold text-gold flex items-center gap-1.5 shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Joares Meireles • Barbearia J&J</span>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass-card border-gold/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-white">Vila Paiva, SP</h4>
                      <p className="text-[11px] text-gold font-medium">Rua Cel. Jordão, 814</p>
                    </div>
                    <a
                      href={SAAS_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-gold hover:text-white flex items-center gap-1 bg-gold/15 hover:bg-gold/30 px-2.5 py-1.5 rounded-lg border border-gold/30 transition-colors"
                    >
                      <span>Ver Vagas</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* FLOATING SOCIAL PROOF CARD */}
              <motion.div
                initial={{ opacity: 0, y: 15, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -bottom-5 -left-3 sm:-left-6 glass-card border border-gold/40 rounded-2xl p-3 sm:p-4 shadow-2xl backdrop-blur-xl max-w-[250px] sm:max-w-[270px] z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0 shadow-gold-glow">
                    <Star className="w-5 sm:w-6 h-5 sm:h-6 text-gold fill-gold" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-gold">
                      <span className="font-bold text-sm sm:text-base text-white">5.0</span>
                      <span className="text-xs text-slate-400">/ 5.0 estrelas</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-muted leading-tight font-medium mt-0.5">
                      Avaliação máxima dos clientes da <strong className="text-white">Barbearia J&J</strong>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Barber Availability Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -top-3.5 -left-3 bg-dark-card border border-gold/30 px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2 backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-semibold text-slate-200">
                  Agenda Aberta Online
                </span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
