import React from 'react';
import { Zap, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../constants';

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Botão Flutuante do WhatsApp com Pulso Suave */}
      <aside 
        aria-label="Atendimento via WhatsApp"
        className="fixed bottom-20 sm:bottom-8 right-5 z-40 flex items-center group"
      >
        {/* Hover Tooltip / Balloon on desktop */}
        <div className="hidden sm:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#C8A882]/40 text-xs font-semibold text-[#FFFFFF] shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <span>Agende seu horário pelo WhatsApp</span>
          <div className="w-2 h-2 bg-[#1E293B] border-r border-t border-[#C8A882]/40 transform rotate-45 -mr-4" />
        </div>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir conversa no WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300"
        >
          {/* Pulse ring animation */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />
          <span className="absolute -inset-2.5 rounded-full bg-[#25D366]/20 animate-pulse pointer-events-none" />
          
          <MessageCircle className="w-7 h-7 fill-white stroke-[#25D366] relative z-10" />
        </a>
      </aside>

      {/* Mobile Sticky Bottom Bar (Exclusiva para Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0F172A]/95 backdrop-blur-lg border-t border-[#C8A882]/30 p-3 px-4 shadow-[0_-5px_20px_rgba(9,14,26,0.8)]">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 rounded-xl font-extrabold text-sm text-[#0F172A] bg-gradient-to-r from-[#DFCAAE] via-[#C8A882] to-[#A68358] shadow-[0_0_20px_rgba(200,168,130,0.4)] flex items-center justify-center gap-2 active:scale-98 transition-transform border border-[#FFFFFF]/30"
        >
          <Zap className="w-4 h-4 fill-[#0F172A]" />
          <span>⚡ Agendar Horário no WhatsApp</span>
        </a>
      </div>
    </>
  );
};
