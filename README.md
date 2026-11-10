# Barbearia Imperial - Landing Page & Sistema de Agendamento SaaS

Uma Single Page Application (SPA) ultra moderna, luxuosa e de alta conversão desenvolvida para a **Barbearia Imperial**, com foco na experiência do cliente e direcionamento prioritário para o sistema SaaS de agendamento online.

---

## ✨ Tecnologias Utilizadas
- **Framework:** React 18 + Vite + TypeScript
- **Estilização:** Tailwind CSS (tema Dark Luxury por padrão)
- **Design System:** 
  - Fundo principal: `#0D0D10` (Dark Black Slate)
  - Cartões & Containers: `#16161A`
  - Acentos Primários: Gradiente Dourado Vintage (`#D4AF37` a `#AA7C11`)
  - Tipografia: Serifada *Cinzel* nos títulos e *Plus Jakarta Sans* no corpo de texto
- **Ícones:** Lucide React
- **Animações:** Framer Motion (transições de entrada, hover, tabs e tabs de smartphone)

---

## ⚙️ Variáveis Globais & Links Externos
Todas as variáveis e links externos estão centralizados no arquivo [`src/constants.ts`](./src/constants.ts) para facilitar a edição:

```typescript
export const SAAS_BOOKING_URL = "https://seusaas.com/barbearia-imperial/agendar";
export const WHATSAPP_PHONE = "5511999999999";
export const WHATSAPP_MESSAGE = "Olá! Gostaria de tirar uma dúvida sobre os serviços da Barbearia.";
export const INSTAGRAM_URL = "https://instagram.com/barbeariaimperial";
```

O sistema inclui helpers automáticos que anexam parâmetros de query ao link do SaaS (ex: `?servico=degrade-navalhado` ou `?barbeiro=marcos-silva`).

---

## 🚀 Como Executar o Projeto

### 1. Iniciar em Modo de Desenvolvimento
```bash
npm run dev
```
O servidor Vite será iniciado em `http://localhost:3000`.

### 2. Gerar Build de Produção
```bash
npm run build
```
Os arquivos otimizados e minificados serão gerados na pasta `dist/`.

### 3. Visualizar o Build Localmente
```bash
npm run preview
```

---

## 🏛️ Estrutura das Seções da SPA

1. **Header Sticky Glassmorphism:** Logo com navalha/tesoura estilizada, links de navegação, botão CTA dourado com efeito shimmer e menu mobile responsivo.
2. **Hero Section de Alto Impacto:** Tagline de experiência tradicional, headline imponente, CTA duplo (App SaaS + WhatsApp), e selo flutuante de prova social (★ 4.9 / +800 avaliações).
3. **Destaque do Sistema Próprio SaaS:** 3 cards com os benefícios do agendamento digital (escolha de barbeiro, sem fila, lembretes automáticos) e uma maquete de smartphone interativa simulando o fluxo de reserva.
4. **Cardápio de Serviços & Preços:** Categorias filtráveis (*Todos, Cabelo, Barba, Combos, Tratamentos*), preços formatados em BRL, duração estimada, lista de itens inclusos e botão de agendamento direto com parâmetro de URL.
5. **Lookbook / Galeria de Cortes:** Grid com filtros de cortes (*Fade, Social, Barba, Platinado*), efeito hover cinematográfico e link para o Instagram da barbearia.
6. **Equipe de Barbeiros Mestres:** Apresentação da equipe com especialidades, anos de experiência, avaliação, link de Instagram e botão "Agendar com ele".
7. **Localização, Horários & Amenidades:** Grid em 2 colunas com endereço, Google Maps interativo, horários e comodidades inclusas (Chopp cortesia, café espresso barista, Wi-Fi 500MB, estacionamento/valet, lounge com sinuca/PS5 e biossegurança).
8. **Elementos Flutuantes & Mobile UX:**
   - Botão flutuante do WhatsApp no canto inferior direito com animação de pulso.
   - Barra de ação fixa inferior exclusiva para mobile (*"⚡ Agendar Horário Online"*).
9. **Footer Completo:** Links rápidos, horários, dados de contato e assinatura *"Tecnologia de Agendamento por [Nome do seu SaaS]"*.
