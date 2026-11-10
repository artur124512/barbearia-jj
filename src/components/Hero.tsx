import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Star, ShieldCheck, Sparkles, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { getWhatsAppUrl } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Glow Spheres na paleta Petróleo, Carvalho e Azul Aço */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#3B82F6]/15 rounded-full blur-[140px] opacity-70" />
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#C8A882]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#3B82F6]/20 rounded-full blur-[130px]" />

        {/* Vintage Background Texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity filter contrast-125 scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/d/1T8JMYoD0-SlnGVIdDR-k2bYQBMzyKpiz=w1200')`
          }}
        />
        
        {/* Gradient Overlay Azul Petróleo Escuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/85 via-[#0F172A]/95 to-[#0F172A]" />
        
        {/* Grid lines texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#F1F5F9 1px, transparent 1px), linear-gradient(to right, #F1F5F9 1px, transparent 1px)`,
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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B]/90 border border-[#C8A882]/40 shadow-[0_0_15px_rgba(200,168,130,0.25)] backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-[#C8A882] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#F1F5F9]">
                Barbearia J&J • Atendimento Exclusivo com Joares Meireles
              </span>
            </motion.div>

            {/* Headline - Apenas o Nome Oficial */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FFFFFF] leading-tight"
            >
              BARBEARIA <span className="text-gold-gradient">J&J</span>
            </motion.h1>

            {/* Subheadline ajustada */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-[#F1F5F9]/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Corte, barba e acabamento impecáveis com atendimento individual feito pessoalmente pelo barbeiro <strong className="text-[#C8A882] font-semibold underline decoration-[#C8A882]/40 decoration-2">Joares Meireles</strong>. 
              Ambiente climatizado, horário marcado e zero espera na Vila Paiva.
            </motion.p>

            {/* Quick Badges Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-[#F1F5F9] font-medium pt-1"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A882] flex-shrink-0" />
                <span>Atendimento 1 a 1 com Joares</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A882] flex-shrink-0" />
                <span>Cortes a partir de R$ 45</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                <span>Agendamento via WhatsApp</span>
              </div>
            </motion.div>

            {/* CTA Direto para o WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              {/* Botão Primário: WhatsApp com Joares (Madeira Clara / Carvalho) */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-base text-[#0F172A] bg-gradient-to-r from-[#DFCAAE] via-[#C8A882] to-[#A68358] hover:from-[#E8D8C2] hover:to-[#B89366] shadow-[0_0_25px_rgba(200,168,130,0.4)] hover:shadow-[0_0_35px_rgba(200,168,130,0.6)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-[#FFFFFF]/30"
              >
                <span className="absolute inset-0 animate-shimmer" />
                <Phone className="w-5 h-5 text-[#0F172A] group-hover:scale-110 transition-transform" />
                <span className="relative z-10 tracking-wide">Agendar no WhatsApp com Joares</span>
                <ChevronRight className="w-4 h-4 text-[#0F172A] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Botão Secundário: Ver Serviços (Azul Aço + Petróleo) */}
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-sm sm:text-base text-[#FFFFFF] bg-[#1E293B] hover:bg-[#26334D] border border-[#3B82F6]/40 hover:border-[#3B82F6] shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all duration-300 group"
              >
                <span>Ver Serviços & Valores</span>
              </a>
            </motion.div>

            {/* Micro info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-xs text-[#94A3B8] text-center lg:text-left flex items-center justify-center lg:justify-start gap-2 pt-1"
            >
              <Clock className="w-3.5 h-3.5 text-[#C8A882]" />
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
              {/* Backglow Blur */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#3B82F6] via-[#C8A882] to-[#3B82F6] rounded-3xl blur-2xl opacity-30 animate-pulse pointer-events-none" />

              {/* Photo Frame Container */}
              <div className="relative rounded-3xl overflow-hidden border border-[#C8A882]/40 shadow-2xl bg-[#1E293B] aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://lh3.googleusercontent.com/d/1qaSoowTSLUEOLcNbdY5FQYKT0g2_cbFC=w1200"
                  alt="Joares Meireles - Mestre Barbeiro da Barbearia J&J"
                  className="w-full h-full object-cover object-top filter contrast-105"
                  loading="eager"
                />

                {/* Subtle dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-85" />

                {/* Overlaid Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-[#0F172A]/90 backdrop-blur-md border border-[#C8A882]/40 text-xs font-semibold text-[#FFFFFF] flex items-center gap-1.5 shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8A882]" />
                  <span>Joares Meireles • Barbearia J&J</span>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass-card border-[#C8A882]/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#FFFFFF]">Vila Paiva, SP</h4>
                      <p className="text-[11px] text-[#C8A882] font-medium">Rua Cel. Jordão, 814</p>
                    </div>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#0F172A] bg-gradient-to-r from-[#DFCAAE] to-[#C8A882] hover:from-[#E8D8C2] hover:to-[#B89366] flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#FFFFFF]/30 transition-colors shadow-md"
                    >
                      <Phone className="w-3 h-3 text-[#0F172A]" />
                      <span>WhatsApp</span>
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
                className="absolute -bottom-5 -left-3 sm:-left-6 glass-card border border-[#C8A882]/30 rounded-2xl p-3 sm:p-4 shadow-2xl backdrop-blur-xl max-w-[250px] sm:max-w-[270px] z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-[#C8A882]/20 border border-[#C8A882]/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(200,168,130,0.3)]">
                    <Star className="w-5 sm:w-6 h-5 sm:h-6 text-[#C8A882] fill-[#C8A882]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[#FFFFFF]">
                      <span className="font-bold text-sm sm:text-base text-[#FFFFFF]">5.0</span>
                      <span className="text-xs text-[#94A3B8]">/ 5.0 estrelas</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-[#94A3B8] leading-tight font-medium mt-0.5">
                      Avaliação máxima dos clientes da <strong className="text-[#FFFFFF]">Barbearia J&J</strong>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Barber Availability Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -top-3.5 -left-3 bg-[#1E293B] border border-[#3B82F6]/50 px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2 backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B82F6]"></span>
                </span>
                <span className="text-[11px] font-semibold text-[#FFFFFF]">
                  Agende no WhatsApp
                </span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
