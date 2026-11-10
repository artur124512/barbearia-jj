// ==========================================
// CONFIGURAÇÕES GLOBAIS & LINKS EXTERNOS
// ==========================================

export const SAAS_BOOKING_URL = "https://agendafacil-saas-beta.vercel.app/barbearia-jj";
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
  saasProviderName: "Agenda Fácil SaaS",
  rating: 5.0,
  totalReviews: 820
};

// Helper para construir link com parâmetros para o SaaS
export const getBookingUrl = (options?: { serviceId?: string; barberId?: string }) => {
  try {
    const url = new URL(SAAS_BOOKING_URL);
    if (options?.serviceId) {
      url.searchParams.set("servico", options.serviceId);
    }
    if (options?.barberId) {
      url.searchParams.set("barbeiro", options.barberId);
    }
    return url.toString();
  } catch {
    return SAAS_BOOKING_URL;
  }
};

// Helper para WhatsApp
export const getWhatsAppUrl = (customMsg?: string) => {
  const message = customMsg || WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};
