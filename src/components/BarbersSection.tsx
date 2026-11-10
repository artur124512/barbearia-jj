import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Star, Award, ChevronRight, CheckCircle2, Phone } from 'lucide-react';
import { BARBERS_DATA } from '../data/mockData';
import { getWhatsAppUrl, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants';

export const BarbersSection: React.FC = () => {
  const barber = BARBERS_DATA[0];

  return (
    <section id="barbeiros" className="py-24 relative overflow-hidden bg-[#2D3142]">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#1B2A4A]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#7A1F2D]/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B2A4A]/80 border border-[#7A1F2D]/50 text-xs sm:text-sm font-semibold text-[#F8F9FA] shadow-[0_0_15px_rgba(122,31,45,0.3)]">
            <Award className="w-4 h-4 text-[#E87A88]" />
            <span>Mestre da Barbearia J&J</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F9FA] tracking-tight">
            Conheça o Barbeiro <br />
            <span className="text-gold-gradient">Joares Meireles</span>
          </h2>

          <p className="text-base sm:text-lg text-[#CED4DA]">
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
          className="rounded-3xl bg-gradient-to-br from-[#242836] via-[#242836] to-[#1E212D] border border-[#1B2A4A] hover:border-[#7A1F2D]/70 shadow-2xl p-6 sm:p-10 relative overflow-hidden group"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7A1F2D]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Barber Portrait - Left */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#7A1F2D]/40 shadow-[0_0_20px_rgba(122,31,45,0.3)]">
                <img
                  src={barber.photo}
                  alt={barber.name}
                  className="w-full h-[400px] sm:h-[450px] object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E212D] via-transparent to-transparent opacity-80" />

                {/* Rating badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-[#1B2A4A]/90 backdrop-blur-md border border-[#7A1F2D]/50 flex items-center gap-1.5 text-xs font-bold text-[#F8F9FA] shadow-lg">
                  <Star className="w-4 h-4 fill-[#7A1F2D] text-[#C44558]" />
                  <span>5.0 de Avaliação</span>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-card border-[#1B2A4A] text-center">
                  <span className="text-xs font-semibold text-[#F8F9FA]">
                    {barber.experience} na profissão
                  </span>
                </div>
              </div>
            </div>

            {/* Barber Bio & Details - Right */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#E87A88] tracking-wider uppercase mb-1">
                  <span>Fundador & Barbeiro Oficial</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#F8F9FA]">
                  {barber.name}
                </h3>
                <p className="text-sm sm:text-base text-[#CED4DA] font-medium mt-1">
                  {barber.role} na <span className="text-[#F8F9FA] font-bold">Barbearia J&J</span>
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#CED4DA] leading-relaxed">
                Com anos de experiência dedicada e centenas de clientes satisfeitos, Joares Meireles construiu 
                a <strong className="text-[#F8F9FA]">Barbearia J&J</strong> para ser um refúgio de bom gosto e estilo masculino. 
                Aqui você não é apenas mais um número: cada corte é estudado para valorizar seus traços e estilo de vida.
              </p>

              {/* Differentials Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#F8F9FA] pt-2 border-t border-[#1B2A4A]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C44558] flex-shrink-0" />
                  <span>Especialista em Degradê & Fade</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C44558] flex-shrink-0" />
                  <span>Barba clássica com toalha quente</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C44558] flex-shrink-0" />
                  <span>Cortes clássicos na tesoura</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C44558] flex-shrink-0" />
                  <span>Química, platinado e luzes</span>
                </div>
              </div>

              {/* Buttons: WhatsApp + Instagram */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={getWhatsAppUrl("Olá, Joares! Gostaria de agendar um horário com você na Barbearia J&J.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#7A1F2D] to-[#9B2A3B] hover:from-[#8C2434] hover:to-[#AF3145] text-[#F8F9FA] font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(122,31,45,0.45)] hover:shadow-[0_0_30px_rgba(122,31,45,0.65)] transition-all duration-300 transform hover:-translate-y-0.5 border border-[#F8F9FA]/20"
                >
                  <Phone className="w-4 h-4 text-[#F8F9FA]" />
                  <span>Agendar no WhatsApp com Joares</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl bg-[#1B2A4A] hover:bg-[#1B2A4A]/80 border border-[#1B2A4A] hover:border-[#7A1F2D] text-xs sm:text-sm font-semibold text-[#CED4DA] hover:text-[#F8F9FA] flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>{INSTAGRAM_HANDLE}</span>
                </a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
