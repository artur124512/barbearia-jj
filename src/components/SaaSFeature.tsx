import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserCheck, 
  CalendarCheck, 
  BellRing, 
  Smartphone, 
  ExternalLink, 
  CheckCircle2, 
  ChevronRight, 
  Scissors
} from 'lucide-react';
import { SAAS_BOOKING_URL } from '../constants';

export const SaaSFeature: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const benefits = [
    {
      number: '01',
      icon: UserCheck,
      title: 'Atendimento Direto com Joares Meireles',
      description: 'Tenha a certeza de ser atendido pelo próprio Joares em cada visita, garantindo o mesmo padrão de qualidade e precisão.',
      badge: 'Atendimento Exclusivo'
    },
    {
      number: '02',
      icon: CalendarCheck,
      title: 'Selecione o Dia e Horário sem Espera',
      description: 'Veja os horários livres na agenda do Joares em tempo real. Chegue na Barbearia J&J e sente direto na cadeira.',
      badge: 'Zero Fila'
    },
    {
      number: '03',
      icon: BellRing,
      title: 'Lembretes Automáticos via WhatsApp',
      description: 'Receba confirmação imediata e notificações antes do seu horário, com facilidade para reagendar se precisar.',
      badge: 'Lembrete Inteligente'
    }
  ];

  return (
    <section id="saas-booking" className="py-24 relative overflow-hidden bg-gradient-to-b from-dark-base via-dark-card/60 to-dark-base border-y border-gold/15">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs sm:text-sm font-semibold text-gold">
            <Smartphone className="w-4 h-4" />
            <span>Sistema Oficial da Barbearia J&J</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Agende em Segundos pelo Nosso <br className="hidden sm:inline" />
            <span className="text-gold-gradient">Sistema Online</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            Sem demora para responder mensagens no WhatsApp. Escolha o serviço, veja os horários disponíveis 
            do Joares Meireles e reserve seu lugar instantaneamente.
          </p>
        </div>

        {/* 2-Column Content: Benefits on Left, Simulated Phone on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3 Benefit Cards + Main CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const isSelected = activeStep === index + 1;
                return (
                  <motion.div
                    key={benefit.number}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setActiveStep(index + 1)}
                    className={`cursor-pointer p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                      isSelected
                        ? 'bg-dark-card border-gold shadow-gold-glow/50 ring-1 ring-gold/40'
                        : 'bg-dark-card/60 hover:bg-dark-card border-gold/20 hover:border-gold/40'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon with Gold container */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected 
                          ? 'bg-gold-gradient text-dark-base shadow-gold-glow' 
                          : 'bg-dark-base border border-gold/30 text-gold group-hover:border-gold'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-mono font-bold text-gold/80">
                            PASSO {benefit.number}
                          </span>
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">
                            {benefit.badge}
                          </span>
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-slate-muted mt-1 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>

                    {/* Progress indicator bar on active */}
                    {isSelected && (
                      <motion.div 
                        layoutId="activeGlowLine"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient" 
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Direct SaaS Action Button */}
            <div className="pt-2">
              <a
                href={SAAS_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-dark-base bg-gold-gradient hover:bg-gold-gradient-hover shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <span>Acessar Agenda de Joares Meireles</span>
                <ExternalLink className="w-5 h-5 text-dark-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="block mt-2 text-xs text-slate-500">
                Acesse direto pelo navegador em qualquer celular, sem precisar baixar aplicativo.
              </span>
            </div>
          </div>

          {/* Right Column: Simulated Smartphone Demo */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              
              {/* Decorative phone ambient halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 via-amber-600/10 to-transparent rounded-[50px] blur-2xl" />

              {/* Smartphone Frame Outer Bezel */}
              <div className="relative rounded-[45px] p-3.5 bg-gradient-to-b from-[#2B2B33] via-[#1E1E24] to-[#121216] border border-gold/40 shadow-2xl">
                
                {/* Speaker ear piece & dynamic island */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#18181D] mr-2" />
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-900/40" />
                </div>

                {/* Smartphone Screen Inner */}
                <div className="relative rounded-[36px] overflow-hidden bg-[#0F0F13] border border-slate-800 text-white min-h-[580px] flex flex-col justify-between pt-9 pb-5 px-4">
                  
                  {/* Top Status Bar inside app */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 px-2 mb-3">
                    <span className="font-semibold text-white">14:20</span>
                    <div className="flex items-center gap-1.5">
                      <span>5G</span>
                      <div className="w-4 h-2 border border-slate-400 rounded-sm p-0.5">
                        <div className="w-full h-full bg-emerald-400 rounded-xs" />
                      </div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="flex items-center justify-between border-b border-gold/15 pb-2.5 mb-3 px-1">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
                        <Scissors className="w-4 h-4 -rotate-45" />
                      </div>
                      <div>
                        <div className="text-xs font-bold font-serif text-white leading-tight">Barbearia J&J</div>
                        <div className="text-[9px] text-gold">Joares Meireles</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      ● Horários Livres
                    </span>
                  </div>

                  {/* Step Selector Tabs inside simulation */}
                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-dark-card rounded-xl border border-gold/15 mb-4 text-[10px] text-center font-semibold">
                    <button
                      onClick={() => setActiveStep(1)}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeStep === 1 
                          ? 'bg-gold text-dark-base font-bold shadow-sm' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      1. Barbeiro
                    </button>
                    <button
                      onClick={() => setActiveStep(2)}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeStep === 2 
                          ? 'bg-gold text-dark-base font-bold shadow-sm' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      2. Serviço
                    </button>
                    <button
                      onClick={() => setActiveStep(3)}
                      className={`py-1.5 rounded-lg transition-all ${
                        activeStep === 3 
                          ? 'bg-gold text-dark-base font-bold shadow-sm' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      3. Confirmar
                    </button>
                  </div>

                  {/* Simulated App Screens based on activeStep */}
                  <div className="flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                      {activeStep === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-3"
                        >
                          <div className="text-[11px] font-bold text-slate-300">Profissional Selecionado:</div>

                          {/* Barbeiro Único: Joares Meireles */}
                          <div className="p-3 rounded-xl bg-gold/15 border border-gold shadow-gold-glow/40 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <img
                                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=140&q=80"
                                alt="Joares Meireles"
                                className="w-12 h-12 rounded-full object-cover border-2 border-gold"
                              />
                              <div>
                                <div className="text-xs font-bold text-white flex items-center gap-1">
                                  <span>Joares Meireles</span>
                                  <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                                </div>
                                <div className="text-[10px] text-slate-300">Mestre Barbeiro • Barbearia J&J</div>
                                <div className="text-[9px] text-gold font-semibold">★ 5.0 (Atendimento Individual)</div>
                              </div>
                            </div>
                          </div>

                          <div className="p-2.5 rounded-xl bg-dark-card border border-gold/20 text-[11px] text-slate-300 space-y-1">
                            <div className="text-white font-semibold">Por que agendar com Joares?</div>
                            <div className="text-[10px] text-slate-400">
                              Sem rotatividade. Você tem a atenção de um profissional experiente dedicado 100% ao seu visual.
                            </div>
                          </div>

                          <button
                            onClick={() => setActiveStep(2)}
                            className="w-full mt-3 py-2.5 bg-gold text-dark-base rounded-lg text-xs font-bold flex items-center justify-center gap-1 shadow-md hover:bg-gold-light transition-colors"
                          >
                            <span>Avançar para Escolher Serviço</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </motion.div>
                      )}

                      {activeStep === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-2.5"
                        >
                          <div className="text-[11px] font-bold text-slate-300">Selecione o Serviço Desejado:</div>
                          
                          {/* Serviço 1: Corte */}
                          <div 
                            onClick={() => setActiveStep(3)}
                            className="p-2.5 rounded-xl bg-gold/10 border border-gold/40 flex items-center justify-between cursor-pointer hover:border-gold"
                          >
                            <div>
                              <div className="text-xs font-bold text-white">Corte de Cabelo (Fade/Social)</div>
                              <div className="text-[10px] text-slate-400">Duração: 40 min</div>
                            </div>
                            <span className="text-xs font-bold text-gold">R$ 45,00</span>
                          </div>

                          {/* Serviço 2: Barba */}
                          <div 
                            onClick={() => setActiveStep(3)}
                            className="p-2.5 rounded-xl bg-dark-card border border-slate-800 hover:border-gold/30 flex items-center justify-between cursor-pointer"
                          >
                            <div>
                              <div className="text-xs font-semibold text-slate-200">Barba com Toalha Quente</div>
                              <div className="text-[10px] text-slate-400">Duração: 30 min</div>
                            </div>
                            <span className="text-xs font-semibold text-slate-300">R$ 30,00</span>
                          </div>

                          {/* Serviço 3: Combo */}
                          <div 
                            onClick={() => setActiveStep(3)}
                            className="p-2.5 rounded-xl bg-dark-card border border-gold/30 hover:border-gold flex items-center justify-between cursor-pointer"
                          >
                            <div>
                              <div className="text-xs font-bold text-gold">Combo: Corte + Barba</div>
                              <div className="text-[10px] text-slate-400">Duração: 1h</div>
                            </div>
                            <span className="text-xs font-bold text-gold">R$ 70,00</span>
                          </div>

                          <div className="flex items-center justify-between text-[11px] px-1 text-slate-400">
                            <span>Acabamento: R$ 25</span>
                            <span>Sobrancelha: R$ 15</span>
                          </div>

                          <button
                            onClick={() => setActiveStep(3)}
                            className="w-full py-2 bg-gold text-dark-base rounded-lg text-xs font-bold flex items-center justify-center gap-1 shadow-md"
                          >
                            <span>Continuar para Horários</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </motion.div>
                      )}

                      {activeStep === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="text-center py-2 space-y-3"
                        >
                          <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                            <CheckCircle2 className="w-7 h-7" />
                          </div>

                          <div>
                            <div className="text-xs font-bold text-emerald-400">Horário Confirmado com Joares!</div>
                            <div className="text-[11px] text-slate-300 mt-0.5">Hoje às 16:00 na Barbearia J&J</div>
                          </div>

                          {/* WhatsApp Reminder Simulation Banner */}
                          <div className="p-2.5 rounded-xl bg-dark-card border border-emerald-500/30 text-left space-y-1">
                            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold">
                              <BellRing className="w-3.5 h-3.5" />
                              <span>Lembrete no seu WhatsApp</span>
                            </div>
                            <p className="text-[10px] text-slate-300 leading-tight">
                              "Olá! Seu corte com Joares Meireles na Barbearia J&J está marcado para hoje às 16h. Te esperamos!"
                            </p>
                          </div>

                          <a
                            href={SAAS_BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2.5 bg-gold-gradient text-dark-base rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 shadow-gold-glow"
                          >
                            <span>Abrir Sistema de Agendamento</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>

                          <button
                            onClick={() => setActiveStep(1)}
                            className="text-[10px] text-slate-400 hover:text-gold"
                          >
                            Voltar para o passo 1
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* App Bottom Bar */}
                  <div className="pt-2 border-t border-slate-800 text-[9px] text-center text-slate-500">
                    Barbearia J&J • Atendimento Joares Meireles
                  </div>

                </div>

                {/* Home Indicator line */}
                <div className="w-28 h-1 bg-slate-600 rounded-full mx-auto mt-2" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
