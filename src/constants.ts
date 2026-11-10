// ==========================================
// CONFIGURAÇÕES GLOBAIS & LINKS EXTERNOS
// ==========================================

export const WHATSAPP_PHONE = "5511979610293";
export const WHATSAPP_MESSAGE = "Olá, Joares! Gostaria de agendar um horário na Barbearia J&J.";
export const INSTAGRAM_URL = "https://www.instagram.com/joaresmeireles/";
export const INSTAGRAM_HANDLE = "@joaresmeireles";

// Informações Oficiais da Barbearia J&J
export const BARBERSHOP_INFO = {
  name: "Barbearia J&J",
  barberName: "Joares Meireles",
  tagline: "Atendimento Exclusivo com Joares Meireles",
  phoneDisplay: "(11) 97961-0293",
  address: "R. Cel. Jordão, 814 - Vila Paiva, São Paulo - SP",
  zipCode: "02075-030",
  hours: {
    weekdays: "Terça a Sábado: 09:00 às 20:00",
    sundaysAndMondays: "Domingo e Segunda: Fechado"
  },
  rating: 5.0,
  totalReviews: 820
};

// Helper para WhatsApp
export const getWhatsAppUrl = (customMsg?: string) => {
  const message = customMsg || WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

// Helper de agendamento (direcionado 100% para o WhatsApp oficial)
export const getBookingUrl = (options?: { serviceId?: string; serviceName?: string; barberId?: string }) => {
  if (options?.serviceName) {
    return getWhatsAppUrl(`Olá, Joares! Gostaria de agendar o serviço de ${options.serviceName} na Barbearia J&J.`);
  }
  return getWhatsAppUrl();
};
