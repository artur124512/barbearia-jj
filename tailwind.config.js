/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta Oficial Solicitada:
        // Azul Marinho Real: #1B2A4A
        // Vinho / Bordô Escuro: #7A1F2D
        // Branco Off-White: #F8F9FA
        // Cinza Chumbo (Base): #2D3142
        navy: {
          light: '#283C66',
          DEFAULT: '#1B2A4A', // Azul Marinho Real
          dark: '#121C31',
          glow: 'rgba(27, 42, 74, 0.45)',
        },
        wine: {
          light: '#9B2A3B',
          DEFAULT: '#7A1F2D', // Vinho / Bordô Escuro
          hover: '#8C2434',
          dark: '#54151E',
          glow: 'rgba(122, 31, 45, 0.45)',
        },
        offwhite: {
          DEFAULT: '#F8F9FA', // Branco Off-White
          muted: '#E9ECEF',
          subtle: '#CED4DA',
        },
        lead: {
          DEFAULT: '#2D3142', // Cinza Chumbo (Base)
          light: '#373C50',
          card: '#242836',
          cardHover: '#2A2F40',
          dark: '#1E212D',
          darkest: '#161922',
        },
        // Mapeamentos para harmonia perfeita:
        dark: {
          base: '#2D3142', // Cinza Chumbo Base
          card: '#242836', // Superfície de card chumbo escurecido
          cardHover: '#2C3246',
          subtle: '#373C50',
          border: 'rgba(248, 249, 250, 0.12)',
          borderHover: 'rgba(122, 31, 45, 0.5)'
        },
        // 'gold' mapeado para os novos acentos Vinho / Bordô Real
        gold: {
          light: '#F8F9FA',
          DEFAULT: '#C44558', // Tom bordô iluminado para textos
          dark: '#7A1F2D', // Vinho / Bordô Escuro base
          metallic: '#9B2A3B',
          glow: 'rgba(122, 31, 45, 0.45)',
        },
        slate: {
          muted: '#CED4DA',
          light: '#F8F9FA'
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #7A1F2D 0%, #9B2A3B 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #8C2434 0%, #AF3145 100%)',
        'navy-gradient': 'linear-gradient(135deg, #1B2A4A 0%, #283C66 100%)',
        'navy-gradient-hover': 'linear-gradient(135deg, #233761 0%, #30487A 100%)',
        'royal-gradient': 'linear-gradient(135deg, #1B2A4A 0%, #7A1F2D 100%)',
        'gold-radial': 'radial-gradient(circle at center, rgba(122, 31, 45, 0.25) 0%, transparent 70%)',
        'navy-radial': 'radial-gradient(circle at center, rgba(27, 42, 74, 0.35) 0%, transparent 70%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(36, 40, 54, 0.95) 0%, rgba(45, 49, 66, 0.98) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(122, 31, 45, 0.45)',
        'gold-glow-lg': '0 0 40px rgba(122, 31, 45, 0.65)',
        'navy-glow': '0 0 25px rgba(27, 42, 74, 0.5)',
        'card-dark': '0 10px 30px -10px rgba(18, 20, 27, 0.7)',
      }
    },
  },
  plugins: [],
}
