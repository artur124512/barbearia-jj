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
        // Azul Petróleo Escuro / Marinho Profundo: #0F172A
        // Cinza Neutro Claro: #F1F5F9
        // Branco: #FFFFFF
        // Madeira Clara (Carvalho/Bege Claro): #C8A882
        // Azul Aço (Secundário): #3B82F6
        petrol: {
          DEFAULT: '#0F172A', // Base Petróleo / Marinho Profundo
          card: '#1E293B',    // Superfície dos cartões
          cardHover: '#26334D',
          darkest: '#090E1A',
          subtle: '#334155',
        },
        wood: {
          light: '#DFCAAE',
          DEFAULT: '#C8A882', // Madeira Clara / Carvalho
          hover: '#D4B692',
          dark: '#A68358',
          glow: 'rgba(200, 168, 130, 0.35)',
        },
        steel: {
          light: '#60A5FA',
          DEFAULT: '#3B82F6', // Azul Aço (Secundário)
          hover: '#2563EB',
          dark: '#1D4ED8',
          glow: 'rgba(59, 130, 246, 0.4)',
        },
        neutral: {
          light: '#F1F5F9', // Cinza Neutro Claro
          white: '#FFFFFF', // Branco puro
          muted: '#94A3B8',
          border: 'rgba(241, 245, 249, 0.12)',
        },
        // Mapeamentos retrocompatíveis elegantes:
        dark: {
          base: '#0F172A',
          card: '#1E293B',
          cardHover: '#26334D',
          subtle: '#334155',
          border: 'rgba(200, 168, 130, 0.2)',
          borderHover: 'rgba(200, 168, 130, 0.5)'
        },
        gold: {
          light: '#DFCAAE',
          DEFAULT: '#C8A882', // Madeira Clara (Carvalho)
          dark: '#A68358',
          metallic: '#C8A882',
          glow: 'rgba(200, 168, 130, 0.35)',
        },
        slate: {
          muted: '#94A3B8',
          light: '#F1F5F9'
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFCAAE 0%, #C8A882 50%, #A68358 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #E8D8C2 0%, #D4B692 50%, #B89366 100%)',
        'wood-gradient': 'linear-gradient(135deg, #DFCAAE 0%, #C8A882 50%, #A68358 100%)',
        'wood-gradient-hover': 'linear-gradient(135deg, #E8D8C2 0%, #D4B692 50%, #B89366 100%)',
        'steel-gradient': 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
        'steel-gradient-hover': 'linear-gradient(135deg, #60A5FA 0%, #2563EB 100%)',
        'petrol-gradient': 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)',
        'gold-radial': 'radial-gradient(circle at center, rgba(200, 168, 130, 0.2) 0%, transparent 70%)',
        'steel-radial': 'radial-gradient(circle at center, rgba(59, 130, 246, 0.25) 0%, transparent 70%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(200, 168, 130, 0.35)',
        'gold-glow-lg': '0 0 40px rgba(200, 168, 130, 0.55)',
        'steel-glow': '0 0 25px rgba(59, 130, 246, 0.4)',
        'card-dark': '0 10px 30px -10px rgba(9, 14, 26, 0.7)',
      }
    },
  },
  plugins: [],
}
