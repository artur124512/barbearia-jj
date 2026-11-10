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
        dark: {
          base: '#0D0D10',
          card: '#16161A',
          cardHover: '#1F1F24',
          subtle: '#26262E',
          border: 'rgba(212, 175, 55, 0.15)',
          borderHover: 'rgba(212, 175, 55, 0.4)'
        },
        gold: {
          light: '#F3E5AB',
          DEFAULT: '#D4AF37',
          dark: '#AA7C11',
          metallic: '#C5A028',
          glow: 'rgba(212, 175, 55, 0.35)',
        },
        slate: {
          muted: '#A1A1AA',
          light: '#E4E4E7'
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #AA7C11 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #E2C052 0%, #BA8918 100%)',
        'gold-radial': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(22, 22, 26, 0.8) 0%, rgba(13, 13, 16, 0.95) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 40px rgba(212, 175, 55, 0.45)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
